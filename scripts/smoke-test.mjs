import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { readFile, stat } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const html = await readFile(path.join(DIST, "preview.html"), "utf8");
const homepage = await readFile(path.join(DIST, "index.html"), "utf8");
const homepageCss = await readFile(path.join(DIST, "countdown.css"), "utf8");
const manifest = JSON.parse(await readFile(path.join(DIST, "build-manifest.json"), "utf8"));

assert.match(homepage, /Some moments/);
assert.match(homepage, /countdown-panel/);
assert.equal([...homepage.matchAll(/class="time-unit"/g)].length, 4, "Homepage should render four countdown units.");
assert.match(homepage, /class="gift-tag"/);
assert.match(homepage, /href="\/preview"/);
assert.match(homepageCss, /prefers-reduced-motion/);
assert.match(homepageCss, /@keyframes rise-in \{ from \{ opacity: 1;/,
  "Intro motion must never hide the headline or gift if animation rendering is delayed.");
assert.match(homepageCss, /@keyframes orbit-one/);
assert.match(homepageCss, /@keyframes halo-breathe/);
assert.equal(manifest.homepage, "/");
assert.equal(manifest.homeNavigation, "/");
assert.match(html, /A surprise awaits you/);
assert.match(html, /Tap the gift to open/);
assert.equal(manifest.jsChunks, 12);
assert.equal(manifest.stylesheets, 2);
assert.equal(manifest.woff2Dependencies, 22);
assert.equal(manifest.routeMediaAssets, 11);
assert.equal(manifest.packagedFirstPartyResources, 50);

const chunkNames = new Set(
  [...html.matchAll(/\/_next\/static\/chunks\/([^"'?#]+?\.(?:js|css))/g)].map((match) => match[1])
);
for (const name of chunkNames) await stat(path.join(DIST, "_next/static/chunks", name));
assert.equal([...chunkNames].filter((name) => name.endsWith(".js")).length, 12);
assert.equal([...chunkNames].filter((name) => name.endsWith(".css")).length, 2);

const fonts = new Set();
for (const match of html.matchAll(/\/_next\/static\/media\/([^"'?#]+\.woff2)/g)) fonts.add(match[1]);
for (const name of chunkNames) {
  if (!name.endsWith(".css")) continue;
  const css = await readFile(path.join(DIST, "_next/static/chunks", name), "utf8");
  for (const match of css.matchAll(/url\(([^)]+)\)/g)) {
    const url = match[1].trim().replace(/^['"]|['"]$/g, "");
    if (url.startsWith("../media/")) fonts.add(path.basename(url.split("?")[0]));
  }
}
assert.equal(fonts.size, 22);
for (const font of fonts) await stat(path.join(DIST, "_next/static/media", font));

const mediaNames = [
  "giftweblogoo.png", "favicon.ico", "manifest.webmanifest",
  "memory1.png", "memory2.png", "memory3.png", "memory4.png", "puzzle.png",
  "rakhi-memory1.svg", "rakhi-memory2.svg", "rakhi-memory3.svg", "rakhi-memory4.svg",
  "raksha_bandhan.mp3", "song.mp3"
];
for (const name of mediaNames) await stat(path.join(DIST, name));

const routeChunkPath = path.join(DIST, "_next/static/chunks/44irkf401yrm6.js");
const routeChunk = await readFile(routeChunkPath, "utf8");
assert.ok(routeChunk.includes('href:"/"'),
  "Home button should lead to this project's countdown homepage.");
assert.ok(!routeChunk.includes("https://www.creategiftwebsite.com/?showHome=1"),
  "Home button must not send visitors to the separate live website.");

async function getAvailablePort() {
  const probe = net.createServer();
  await new Promise((resolve, reject) => {
    probe.once("error", reject);
    probe.listen(0, "127.0.0.1", resolve);
  });
  const port = probe.address().port;
  await new Promise((resolve, reject) => probe.close((error) => error ? reject(error) : resolve()));
  return port;
}

const port = await getAvailablePort();
const origin = "http://127.0.0.1:" + port;
const server = spawn(process.execPath, [path.join(ROOT, "scripts/serve.mjs")], {
  cwd: ROOT,
  env: { ...process.env, HOST: "127.0.0.1", PORT: String(port) },
  stdio: "ignore"
});

try {
  let ready = false;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(origin + "/preview");
      if (response.status === 200) {
        const responseHtml = await response.text();
        assert.match(responseHtml, /A surprise awaits you/);
        ready = true;
        break;
      }
    } catch {
      // The child server may still be starting.
    }
    await delay(100);
  }
  assert.ok(ready, "Local server did not become ready.");

  const rootResponse = await fetch(origin + "/", { redirect: "manual" });
  assert.equal(rootResponse.status, 200);
  assert.match(rootResponse.headers.get("content-type") || "", /text\/html/);
  assert.match(await rootResponse.text(), /Some moments/);

  const homeQueryResponse = await fetch(origin + "/?showHome=1", { redirect: "manual" });
  assert.equal(homeQueryResponse.status, 200);
  assert.match(await homeQueryResponse.text(), /Some moments/);

  const homeCssResponse = await fetch(origin + "/countdown.css");
  assert.equal(homeCssResponse.status, 200);
  assert.match(homeCssResponse.headers.get("content-type") || "", /text\/css/);

  const previewResponse = await fetch(origin + "/preview");
  assert.equal(previewResponse.status, 200);
  assert.match(previewResponse.headers.get("content-type") || "", /text\/html/);

  const resources = [
    ["/_next/static/chunks/44irkf401yrm6.js", /javascript/],
    ["/_next/static/chunks/3klunzeywsa48.css", /text\/css/],
    ["/_next/static/media/03bda585a99c6450-s.p.32sris142tqlb.woff2", /font\/woff2/],
    ["/memory1.png", /image\/png/],
    ["/song.mp3", /audio\/mpeg/]
  ];
  for (const [resourcePath, typePattern] of resources) {
    const response = await fetch(origin + resourcePath);
    assert.equal(response.status, 200, resourcePath + " should return HTTP 200.");
    assert.match(response.headers.get("content-type") || "", typePattern);
  }

  const suffixRange = await fetch(origin + "/song.mp3", { headers: { Range: "bytes=-16" } });
  assert.equal(suffixRange.status, 206);
  assert.equal((await suffixRange.arrayBuffer()).byteLength, 16);
  assert.match(suffixRange.headers.get("content-range") || "", /^bytes \d+-\d+\/\d+$/);

  const prefixRange = await fetch(origin + "/song.mp3", { headers: { Range: "bytes=0-15" } });
  assert.equal(prefixRange.status, 206);
  assert.equal((await prefixRange.arrayBuffer()).byteLength, 16);

  const traversal = await fetch(origin + "/%2e%2e%2fREADME.md");
  assert.equal(traversal.status, 403);
} finally {
  server.kill("SIGTERM");
  await Promise.race([once(server, "exit"), delay(1500)]);
  if (server.exitCode === null) server.kill("SIGKILL");
}

console.log("PASS: countdown homepage packaging and internal Home navigation.");
console.log("PASS: recovered birthday HTML, all 50 inventoried dependencies, and preview route.");
console.log("PASS: local homepage/query routing, static MIME types, path containment, and audio range requests.");
console.log("PASS: 12 JS chunks, 2 CSS files, 22 fonts, and all 11 journey-media assets.");
