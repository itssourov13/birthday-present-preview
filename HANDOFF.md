# Project Handoff

This file is the practical handover for the `birthday-present-preview` repository. Use the linked forensic reports for detailed evidence rather than duplicating their full contents here.

## Current scope

The repository packages the public `https://www.creategiftwebsite.com/preview` experience for independent static hosting. The implementation uses recovered compiled HTML, JavaScript, CSS, fonts, and journey media. It is not a reconstruction of the original authoring repository or private builder/backend.

## Quick start and verification

**Requirement:** Node.js 20 or newer. No third-party npm packages are required.

```bash
npm run build    # Create both homepage and preview in dist/
npm run start    # Serve locally at http://127.0.0.1:4179/
npm test         # Rebuild and run routing/resource smoke tests
sha256sum -c SOURCE-MANIFEST.sha256  # Verify source/evidence hashes
```

The root URL (`/`) serves the countdown homepage; `/preview` serves the recovered birthday experience after the configured release time. The live clock and the generated preview guard share the single ISO timestamp in `site/assets/countdown-config.js`. Current assumption: `2026-10-14T00:00:00+06:00` (midnight at the start of October 14 in Bangladesh). The Continue button remains disabled before that time and is enabled after the clock reaches zero. The guard runs in the browser and is not server-side security; the captured HTML in `reference/` remains unchanged.

To use another local port, set `PORT` when starting the server, for example `PORT=4180 npm run start`. `npm test` builds `dist/` before checking the generated output. The `dist/` directory is generated and ignored by Git.

### Countdown mobile performance

The mobile/touch-first CSS profile suppresses the decorative SVG turbulence grain, disables continuous star/gift/light animation, removes CSS blur/drop-shadow filters from the animated gift/light, and disables the countdown plate's backdrop blur. Introductory opacity/transform reveals remain for visual polish; the page still supports `prefers-reduced-motion`. These are code-level rendering-cost mitigations, not a claim of measured FPS or power consumption across physical phones. See [`reference/reports/COUNTDOWN-PERFORMANCE-AUDIT.md`](reference/reports/COUNTDOWN-PERFORMANCE-AUDIT.md). The smoke suite guards these mobile overrides against accidental removal.

## How the package is assembled

- `site/index.html`, `site/countdown.css`, and `site/assets/countdown.js` define the responsive homepage, live clock, lockable Continue button, and motion preferences. `site/assets/countdown-config.js` is the one target-time/timezone source and is also injected at the beginning of generated `dist/preview.html` to redirect pre-release browser visits. Two below-the-fold visual sections use responsive WebP pairs; the original PNGs and optional video are not bundled. The static deployment guard is a visitor-flow gate, not a security boundary.
- `scripts/build.mjs` reads `reference/live-audit-20261012/preview.live.html`, recovered bundles, captured public assets, recovered journey media, additional fonts, and the homepage files; it writes the deployable files and build manifest to `dist/`.
- `scripts/serve.mjs` is the dependency-free local HTTP server. It serves `/` as the homepage and `/preview` as the recovered experience, with static MIME types, path containment, and audio byte-range responses.
- `scripts/smoke-test.mjs` checks required first-party resources, generated route behavior, MIME handling, path containment, and MP3 range requests.
- `vercel.json` configures `npm run build`, `dist`, the `/preview` rewrite, and response headers for Vercel. The static root `index.html` is served directly at `/`.
- `source/raw-bundles/` preserves the recovered JavaScript chunks; readable/split module folders are analysis aids, not the deployed entry point.

## Documentation and evidence

- [`README.md`](README.md) — concise project overview and quick start.
- [`reference/reports/LOCAL-ASSET-GAPS.md`](reference/reports/LOCAL-ASSET-GAPS.md) — recovered assets, font dependencies, resource inventory, and known test gaps.
- [`reference/reports/PREVIEW-SOURCE-MAP.md`](reference/reports/PREVIEW-SOURCE-MAP.md) — recovered chunks, modules, and dependency paths.
- [`reference/reports/PRODUCTION-COMPARISON.md`](reference/reports/PRODUCTION-COMPARISON.md) — live comparison, packaging decisions, and delivery-time verification record.
- [`reference/live-audit-20261012/PREVIEW-RUNTIME-FLOW-AUDIT.md`](reference/live-audit-20261012/PREVIEW-RUNTIME-FLOW-AUDIT.md) — observed flow-by-flow runtime coverage and limitations.
- [`reference/live-audit-20261012/BROWSER-RUNTIME-OBSERVATIONS.md`](reference/live-audit-20261012/BROWSER-RUNTIME-OBSERVATIONS.md) — supplementary browser observations.
- `reference/preview-capture/` and `reference/live-assets-20261012/` — captured page resources and recovered journey assets.

## Verification baseline and limits

The 2026-10-12 audit recorded 50/50 inventoried first-party paths with byte-identical local copies, 12 JavaScript chunks, 2 stylesheets, 22 WOFF2 dependencies, and 11 journey-media assets. The default birthday path was exercised through the final letter; the Rakhi variant received smoke coverage but its complete drag/tie and sweets-completion interactions were not exhaustively tested. The microphone candle-blowing interaction was not tested.

The captured birthday HTML is intentionally kept close to the live page. Its compiled Home control is rewritten in generated output to return to `/` on this deployment. The original recovered source bundle remains unchanged. No original source maps, private backend code, arbitrary custom-builder uploads, or every possible user-specific journey were recovered. Audit results are historical verification evidence; rerun `npm test` and the manifest check after making changes.

Before publishing to a different domain, review analytics and SEO/social metadata retained in the captured HTML and confirm permission to republish the code and assets.

## Source manifest maintenance

`SOURCE-MANIFEST.sha256` inventories every repository file except itself, Git metadata, and generated output such as `dist/`. After adding, moving, or editing source, evidence, or documentation files, regenerate it from the repository root:

```bash
find . -type f \
  -not -path './.git/*' \
  -not -path './dist/*' \
  -not -path './node_modules/*' \
  -not -name 'SOURCE-MANIFEST.sha256' \
  -printf '%P\0' | LC_ALL=C sort -z | xargs -0 sha256sum > SOURCE-MANIFEST.sha256
sha256sum -c SOURCE-MANIFEST.sha256
```

Review the resulting Git diff to confirm that only intended documentation and manifest paths changed.
