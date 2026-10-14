import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BIRTHDAY_COUNTDOWN_CONFIG } from "../site/assets/countdown-config.js";
import { isValidTimeZone, parseBirthDate } from "../site/assets/birthday-date-utils.js";

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

const configuredBirthDate = parseBirthDate(BIRTHDAY_COUNTDOWN_CONFIG.birthDate);
if (!configuredBirthDate) fail("Invalid birthDate in site/assets/countdown-config.js; expected a valid YYYY-MM-DD date.");
if (!isValidTimeZone(BIRTHDAY_COUNTDOWN_CONFIG.timeZone)) {
  fail("Invalid timeZone in site/assets/countdown-config.js; expected an IANA time-zone identifier.");
}
if (typeof BIRTHDAY_COUNTDOWN_CONFIG.timeZoneLabel !== "string" || !BIRTHDAY_COUNTDOWN_CONFIG.timeZoneLabel.trim()) {
  fail("timeZoneLabel in site/assets/countdown-config.js must be a non-empty string.");
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

let html = await readFile(HTML_SOURCE, "utf8");
if (!html.includes("A surprise awaits you")) fail("Recovered HTML does not contain the expected opening screen.");
if (!html.includes("preview")) fail("Recovered HTML does not appear to be the /preview route.");

// The release-date redirect was intentionally removed: the preview is always accessible.
// The recovered source capture under reference/ remains byte-for-byte untouched.
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
let configuredBirthDateReplacements = 0;
for (const name of [...jsNames, ...cssNames]) {
  const roots = name.endsWith(".js") ? [BUNDLE_SOURCE] : [PUBLIC_SOURCE];
  const dest = path.join(chunkDestination, name);
  const record = await copyAsset(roots, name, dest);

  if (name.endsWith(".js")) {
    let code = await readFile(dest, "utf8");
    let changed = false;

    // Configure only the generated bundle copy; forensic/source captures remain untouched.
    const birthdayDatePattern = /\bbirthDate\s*:\s*"\d{4}-\d{2}-\d{2}"/g;
    const birthdayDateMatches = [...code.matchAll(birthdayDatePattern)];
    if (birthdayDateMatches.length > 0) {
      if (birthdayDateMatches.length !== 1 || configuredBirthDateReplacements !== 0) {
        fail("Expected exactly one compiled default birthDate field; found an ambiguous match.");
      }
      code = code.replace(birthdayDatePattern, 'birthDate: "' + BIRTHDAY_COUNTDOWN_CONFIG.birthDate + '"');
      configuredBirthDateReplacements += 1;
      record.configuredBirthDate = BIRTHDAY_COUNTDOWN_CONFIG.birthDate;
      changed = true;
    }

    // Route the recovered Home control to this project's new countdown homepage.
    if (name === "44irkf401yrm6.js") {
      const homeNeedle = '"/?showHome=1"';
      const occurrences = code.split(homeNeedle).length - 1;
      if (occurrences !== 1) fail("Expected one recovered Home-route reference; found " + occurrences + ".");
      code = code.replace(homeNeedle, '"/"');
      record.homeNavigation = "/";
      changed = true;
    }

    if (changed) await writeFile(dest, code);
  }
  copied.push(record);
}
if (configuredBirthDateReplacements !== 1) {
  fail("Expected exactly one compiled default birthDate field; found " + configuredBirthDateReplacements + ".");
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

// Copy the new countdown landing page as the static root while keeping /preview separate.
for (const [sourceName, outputName] of [["index.html", "index.html"], ["countdown.css", "countdown.css"]]) {
  await cp(path.join(ROOT, "site", sourceName), path.join(DIST, outputName));
}

// Keep Claude's self-contained countdown UI artwork and local fonts in the production package.
const countdownUiAssetSource = path.join(ROOT, "site", "assets");
const countdownUiFiles = await listFiles(countdownUiAssetSource);
await cp(countdownUiAssetSource, path.join(DIST, "assets"), { recursive: true });

const manifest = {
  source: "reference/live-audit-20261012/preview.live.html",
  homepage: "/",
  homepageStylesheet: "/countdown.css",
  homepageScript: "/assets/countdown.js",
  countdownConfig: "/assets/countdown-config.js",
  birthdayDateUtils: "/assets/birthday-date-utils.js",
  route: "/preview",
  output: "preview.html",
  jsChunks: jsNames.length,
  stylesheets: cssNames.length,
  woff2Dependencies: fontNames.size,
  rootAssets: rootAssetNames.length,
  routeMediaAssets: 11,
  countdownUiAssets: countdownUiFiles.length,
  packagedFirstPartyResources: jsNames.length + cssNames.length + fontNames.size + 3 + 11,
  homeNavigation: "/",
  assets: copied
};
await writeFile(path.join(DIST, "build-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");

console.log("Production static package created in dist/");
console.log("  Live JS chunks: " + jsNames.length);
console.log("  Live CSS files: " + cssNames.length);
console.log("  WOFF2 dependencies: " + fontNames.size);
console.log("  Root logos/icons/manifest and journey media: " + rootAssetNames.length);
console.log("  Total inventoried first-party paths: " + manifest.packagedFirstPartyResources);
console.log("  Countdown UI assets (SVG, fonts and licences): " + countdownUiFiles.length);
console.log("  Homepage: / (recurring birthday countdown; preview always accessible)");
console.log("  Birthday experience: /preview");
