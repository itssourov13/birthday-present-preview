import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const HTML_SOURCE = path.join(ROOT, "reference/live-audit-20261012/preview.live.html");
const BUNDLE_SOURCE = path.join(ROOT, "source/raw-bundles");
const PUBLIC_SOURCE = path.join(ROOT, "reference/preview-capture/public-assets");
const LIVE_MEDIA_SOURCE = path.join(ROOT, "reference/live-assets-20261012");
const EXTRA_FONT_SOURCE = path.join(LIVE_MEDIA_SOURCE, "next-static-media");

function fail(message) {
  throw new Error(message);
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const output = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...(await listFiles(fullPath)));
    else if (entry.isFile()) output.push(fullPath);
  }
  return output;
}

async function findAsset(roots, requestedName) {
  const matches = [];
  for (const root of roots) {
    let files;
    try {
      files = await listFiles(root);
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }
    for (const file of files) {
      const name = path.basename(file);
      if (name === requestedName || name.endsWith("_" + requestedName)) matches.push(file);
    }
  }
  if (matches.length === 0) fail("Missing recovered production asset: " + requestedName);
  if (matches.length > 1) {
    const exact = matches.filter((file) => path.basename(file) === requestedName);
    if (exact.length === 1) return exact[0];
    fail("Ambiguous source for " + requestedName + ": " + matches.join(", "));
  }
  return matches[0];
}

async function copyAsset(roots, requestedName, destination) {
  const source = await findAsset(roots, requestedName);
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(source, destination);
  return { source: path.relative(ROOT, source), destination: path.relative(DIST, destination) };
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

const html = await readFile(HTML_SOURCE, "utf8");
if (!html.includes("A surprise awaits you")) fail("Recovered HTML does not contain the expected opening screen.");
if (!html.includes("preview")) fail("Recovered HTML does not appear to be the /preview route.");
await writeFile(path.join(DIST, "preview.html"), html);

const chunkNames = new Set();
for (const match of html.matchAll(/\/_next\/static\/chunks\/([^"'?#]+?\.(?:js|css))/g)) {
  chunkNames.add(match[1]);
}
const jsNames = [...chunkNames].filter((name) => name.endsWith(".js"));
const cssNames = [...chunkNames].filter((name) => name.endsWith(".css"));
if (jsNames.length !== 12) fail("Expected 12 live-linked JS chunks; found " + jsNames.length + ".");
if (cssNames.length !== 2) fail("Expected 2 live-linked stylesheets; found " + cssNames.length + ".");

const copied = [];
const chunkDestination = path.join(DIST, "_next/static/chunks");
for (const name of [...jsNames, ...cssNames]) {
  const roots = name.endsWith(".js") ? [BUNDLE_SOURCE] : [PUBLIC_SOURCE];
  const dest = path.join(chunkDestination, name);
  const record = await copyAsset(roots, name, dest);

  // Keep the separate Home route functional without routing back into this preview-only deployment.
  if (name === "44irkf401yrm6.js") {
    let code = await readFile(dest, "utf8");
    const homeNeedle = '"/?showHome=1"';
    const occurrences = code.split(homeNeedle).length - 1;
    if (occurrences !== 1) fail("Expected one recovered Home-route reference; found " + occurrences + ".");
    code = code.replace(homeNeedle, '"https://www.creategiftwebsite.com/?showHome=1"');
    await writeFile(dest, code);
    record.homeNavigation = "points to the live site's separate Home route";
  }
  copied.push(record);
}

const fontNames = new Set();
for (const match of html.matchAll(/\/_next\/static\/media\/([^"'?#]+\.woff2)/g)) {
  fontNames.add(match[1]);
}
for (const name of cssNames) {
  const cssPath = path.join(chunkDestination, name);
  const css = await readFile(cssPath, "utf8");
  for (const match of css.matchAll(/url\(([^)]+)\)/g)) {
    const url = match[1].trim().replace(/^['"]|['"]$/g, "");
    if (url.startsWith("../media/")) {
      const fontName = path.basename(url.split("?")[0]);
      if (fontName.endsWith(".woff2")) fontNames.add(fontName);
    }
  }
}
if (fontNames.size !== 22) fail("Expected 22 unique WOFF2 dependencies; found " + fontNames.size + ".");
for (const name of [...fontNames].sort()) {
  copied.push(await copyAsset(
    [PUBLIC_SOURCE, EXTRA_FONT_SOURCE],
    name,
    path.join(DIST, "_next/static/media", name)
  ));
}

const rootAssetNames = [
  "giftweblogoo.png",
  "favicon.ico",
  "manifest.webmanifest",
  "memory1.png",
  "memory2.png",
  "memory3.png",
  "memory4.png",
  "puzzle.png",
  "rakhi-memory1.svg",
  "rakhi-memory2.svg",
  "rakhi-memory3.svg",
  "rakhi-memory4.svg",
  "raksha_bandhan.mp3",
  "song.mp3"
];
for (const name of rootAssetNames) {
  const sourceRoots = name === "giftweblogoo.png" || name === "favicon.ico" || name === "manifest.webmanifest"
    ? [PUBLIC_SOURCE]
    : [LIVE_MEDIA_SOURCE];
  copied.push(await copyAsset(sourceRoots, name, path.join(DIST, name)));
}

const manifest = {
  source: "reference/live-audit-20261012/preview.live.html",
  route: "/preview",
  output: "preview.html",
  jsChunks: jsNames.length,
  stylesheets: cssNames.length,
  woff2Dependencies: fontNames.size,
  rootAssets: rootAssetNames.length,
  routeMediaAssets: 11,
  packagedFirstPartyResources: jsNames.length + cssNames.length + fontNames.size + 3 + 11,
  homeNavigation: "https://www.creategiftwebsite.com/?showHome=1",
  assets: copied
};
await writeFile(path.join(DIST, "build-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");

console.log("Production static package created in dist/");
console.log("  Live JS chunks: " + jsNames.length);
console.log("  Live CSS files: " + cssNames.length);
console.log("  WOFF2 dependencies: " + fontNames.size);
console.log("  Root logos/icons/manifest and journey media: " + rootAssetNames.length);
console.log("  Total inventoried first-party paths: " + manifest.packagedFirstPartyResources);
console.log("  Landing route: /preview (root redirects to /preview)");
