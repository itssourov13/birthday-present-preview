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

assert.ok(homepage.includes("Some moments"));
assert.ok(homepage.includes("<title>A Little Surprise</title>"));
assert.ok(homepage.includes('href="/countdown.css"'));
assert.ok(homepage.includes('data-preview-href="/preview"'), "The unlock button should keep the same-domain preview destination.");
assert.ok(homepage.includes('src="/assets/countdown-config.js"'));
assert.ok(homepage.includes('src="/assets/countdown.js"'));
assert.ok(homepage.includes('data-countdown'));
assert.ok(homepage.includes('data-countdown-value="days"'));
assert.ok(homepage.includes('role="timer"') && homepage.includes('aria-live="off"'));
assert.ok(homepage.includes('disabled data-unlock-button'), "Preview navigation must remain disabled before the unlock time.");
assert.ok(homepage.includes('class="stage__arch stage__arch--outer"'));
assert.ok(homepage.includes('class="stage__gift" src="assets/gift.svg"'));
assert.ok(homepage.includes('class="stage__seal"'));
assert.ok(homepage.includes('class="interlude"'), "The homepage should include the visual interlude.");
assert.ok(homepage.includes('src="/assets/images/moonlit-garden.webp"'));
assert.ok(homepage.includes('srcset="/assets/images/moonlit-garden-768.webp 768w, /assets/images/moonlit-garden.webp 1152w"'));
assert.ok(homepage.includes('class="interlude__chapter"'), "The second visual should have its own editorial heading.");
assert.ok(homepage.includes('src="/assets/images/skylight-garden.webp"'));
assert.ok(homepage.includes('srcset="/assets/images/skylight-garden-768.webp 768w, /assets/images/skylight-garden.webp 1152w"'));
assert.equal([...homepage.matchAll(/loading="lazy"/g)].length, 2, "Both below-the-fold images should lazy-load.");
assert.ok(homepage.includes('loading="lazy"'), "The below-the-fold image should not compete with the hero's initial load.");
assert.ok(homepage.includes('decoding="async"'));
assert.ok(homepage.includes('width="1152"') && homepage.includes('height="864"'), "The image's intrinsic dimensions should be declared.");
assert.ok(!homepage.includes("<video"), "The homepage polish must not add video playback.");
assert.ok(homepageCss.includes(".interlude__scene"));
assert.ok(homepageCss.includes("@media (max-width: 599px)"));
assert.ok(homepageCss.includes("prefers-reduced-motion"));
assert.equal([...homepage.matchAll(/class="unit"/g)].length, 4, "Claude's countdown plate should have four time units.");
assert.ok(homepageCss.includes("@media (max-width: 599px)"));
assert.ok(homepageCss.includes("--w: clamp(120px, 20svh, 220px)"));
assert.ok(homepageCss.includes("(orientation: landscape)"), "Short landscape phones should use a compact two-column layout.");
assert.ok(homepageCss.includes("@media (hover: hover) and (pointer: fine)"));
assert.ok(homepageCss.includes("@keyframes float"));
assert.ok(homepageCss.includes("@keyframes twinkle"));
assert.ok(homepageCss.includes("@media (prefers-reduced-motion: reduce)"));
assert.ok(homepageCss.includes("Low-power/mobile profile"), "Mobile rendering safeguards should be documented in CSS.");
assert.match(homepageCss, /@media \(max-width: 899px\), \(hover: none\) and \(pointer: coarse\)/);
assert.match(homepageCss, /\.atmosphere__grain \{ display: none; \}/);
assert.match(homepageCss, /\.plate \{[\s\S]*?backdrop-filter: none;/, "Mobile countdown plate must not use backdrop blur.");
assert.match(homepageCss, /\.stage__light \{ filter: none; animation: none;/);
assert.match(homepageCss, /\.stage__gift \{ animation: none; filter: none;/);
assert.match(homepageCss, /\.cta:disabled \{[\s\S]*?cursor: not-allowed;/);
assert.ok(homepageCss.includes('.cta:not(:disabled):hover'), "Disabled Continue must not run active hover effects.");
assert.ok(homepageCss.includes('font-family: "Lora"'));
assert.equal(manifest.homepage, "/");
assert.equal(manifest.homeNavigation, "/");
assert.equal(manifest.countdownUiAssets, 13);
assert.equal(manifest.homepageScript, "/assets/countdown.js");
assert.equal(manifest.countdownConfig, "/assets/countdown-config.js");
assert.equal(manifest.previewGuard, "/assets/countdown-config.js");
assert.ok(html.includes('<script src="/assets/countdown-config.js"></script>'), "Generated /preview output must receive the client-side date gate.");
assert.ok(html.indexOf('<script src="/assets/countdown-config.js"></script>') < html.indexOf('/_next/static/chunks/'), "The release guard must precede recovered app scripts.");
assert.match(html, /A surprise awaits you/);
assert.match(html, /Tap the gift to open/);
assert.equal(manifest.jsChunks, 12);
assert.equal(manifest.stylesheets, 2);
assert.equal(manifest.woff2Dependencies, 22);
assert.equal(manifest.routeMediaAssets, 11);
assert.equal(manifest.packagedFirstPartyResources, 50);

const countdownUiFiles = [
  "gift.svg",
  "favicon.svg",
  "fonts/Lora-Variable.woff",
  "fonts/Lora-Italic-Variable.woff",
  "fonts/Poppins-Regular.woff",
  "fonts/Poppins-Medium.woff",
  "fonts/LICENSES.txt",
  "countdown-config.js",
  "countdown.js",
  "images/moonlit-garden-768.webp",
  "images/moonlit-garden.webp",
  "images/skylight-garden-768.webp",
  "images/skylight-garden.webp"
];
for (const name of countdownUiFiles) await stat(path.join(DIST, "assets", name));
const countdownConfig = await readFile(path.join(DIST, "assets/countdown-config.js"), "utf8");
const countdownScript = await readFile(path.join(DIST, "assets/countdown.js"), "utf8");
assert.ok(countdownConfig.includes('targetISO: "2026-10-14T00:00:00+06:00"'));
assert.ok(countdownConfig.includes('timeZone: "Asia/Dhaka"'));
assert.ok(countdownConfig.includes('window.location.replace(config.homePath)'));
assert.ok(countdownScript.includes('Date.now()'), "The timer should calculate from the absolute target instead of decrementing stored digits.");
assert.ok(countdownScript.includes('visibilitychange'), "The timer should resync when the document becomes visible again.");
assert.ok(countdownScript.includes('unlockButton.disabled = !unlocked'));
const mobileInterludeImage = await stat(path.join(DIST, "assets/images/moonlit-garden-768.webp"));
const desktopInterludeImage = await stat(path.join(DIST, "assets/images/moonlit-garden.webp"));
assert.ok(mobileInterludeImage.size < 60_000, "The mobile image variant should stay below 60 KB.");
assert.ok(desktopInterludeImage.size < 100_000, "The desktop image variant should stay below 100 KB.");
const mobileSkylightImage = await stat(path.join(DIST, "assets/images/skylight-garden-768.webp"));
const desktopSkylightImage = await stat(path.join(DIST, "assets/images/skylight-garden.webp"));
assert.ok(mobileSkylightImage.size < 90_000, "The second mobile image variant should stay below 90 KB.");
assert.ok(desktopSkylightImage.size < 125_000, "The second desktop image variant should stay below 125 KB.");

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
    ["/song.mp3", /audio\/mpeg/],
    ["/assets/gift.svg", /image\/svg\+xml/],
    ["/assets/countdown-config.js", /javascript/],
    ["/assets/countdown.js", /javascript/],
    ["/assets/images/moonlit-garden-768.webp", /image\/webp/],
    ["/assets/images/moonlit-garden.webp", /image\/webp/],
    ["/assets/images/skylight-garden-768.webp", /image\/webp/],
    ["/assets/images/skylight-garden.webp", /image\/webp/],
    ["/assets/favicon.svg", /image\/svg\+xml/],
    ["/assets/fonts/Lora-Variable.woff", /font\/woff/],
    ["/assets/fonts/Poppins-Regular.woff", /font\/woff/]
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

console.log("PASS: live countdown, timestamp-based UI unlock, and generated preview route guard.");
console.log("PASS: countdown UI, responsive/reduced-motion styles, and lazy responsive homepage images.");
console.log("PASS: bundled SVG/fonts/licence/WebP assets and same-domain Continue navigation.");
console.log("PASS: recovered birthday HTML, all 50 inventoried dependencies, and preview route.");
console.log("PASS: local homepage/query routing, UI asset MIME types, path containment, and audio range requests.");
console.log("PASS: 12 JS chunks, 2 CSS files, 22 route fonts, and all 11 journey-media assets.");
