# Birthday Present Preview

A self-hostable version of the recovered [CreateGiftWebsite birthday preview](https://www.creategiftwebsite.com/preview). This package serves the captured production HTML and its recovered JavaScript, styles, fonts, and journey media rather than approximating the experience with a new UI.

## What is included

- Interactive birthday gift journey with its recovered visual assets and media.
- Dependency-free Node.js build and local HTTP server.
- Vercel-ready static output, route handling, and resource smoke tests.
- Preserved source captures and audit evidence for future investigation.

## Run locally

**Requirements:** Node.js 20 or newer. There are no third-party npm dependencies, so `npm install` is not required.

```bash
npm run build
npm run start
```

Open [http://127.0.0.1:4179/](http://127.0.0.1:4179/) for the new countdown homepage or [http://127.0.0.1:4179/preview](http://127.0.0.1:4179/preview) for the recovered birthday experience. To use another port, start the server with `PORT=4180 npm run start`. The countdown numbers are currently visual placeholders; clock and unlock behavior are a separate follow-up phase.

Run the build and smoke tests together with:

```bash
npm test
```

### Mobile rendering and performance

The countdown homepage uses a reduced-cost visual profile on narrow or touch-first devices: the animated SVG-grain layer is hidden, the star field and gift are static, the gift/light CSS filters are removed, and the countdown plate avoids backdrop blur. This keeps the same artwork, palette, and layout while reducing continuous compositing and filtered-layer work on phones. See [`reference/reports/COUNTDOWN-PERFORMANCE-AUDIT.md`](reference/reports/COUNTDOWN-PERFORMANCE-AUDIT.md) for the cause analysis and verification notes. The page also respects `prefers-reduced-motion`.

## Deploy to Vercel

Import the repository into Vercel and keep the included `vercel.json` settings: `npm run build` is the build command and `dist` is the output directory. The root route serves the countdown homepage; `/preview` serves the recovered birthday experience.

## Repository guide

| Path | Purpose |
| --- | --- |
| `site/` | Countdown homepage HTML and its responsive stylesheet |
| `scripts/` | Static build, local server, and smoke tests |
| `source/raw-bundles/` | Byte-preserving copies of recovered JavaScript chunks |
| `source/` | Readable and split modules for analysis; not the build entry point |
| `reference/` | Captures, media, live-audit evidence, and detailed reports |
| [`HANDOFF.md`](HANDOFF.md) | Operational notes, architecture, verification, and limitations |
| [`reference/reports/`](reference/reports/) | Asset-gap, source-map, and production-comparison reports |

## Important notes

This is a **compiled production recovery**, not the original uncompiled React/TypeScript source. No source maps or private backend were recovered; arbitrary builder-created journeys and uploaded media are outside this package. The recovered experience's Home control now returns to this project's countdown homepage. The countdown display is UI-only at this stage; no target-time calculation or date-based gate has been implemented yet. Before deploying on another domain, review the captured HTML's analytics and SEO/social metadata, confirm permission to republish the recovered code and assets, and check the limitations in the [handoff](HANDOFF.md).

## Integrity check

The source and evidence inventory is recorded in `SOURCE-MANIFEST.sha256` (generated `dist/` and the manifest itself are excluded). Verify the recorded hashes with:

```bash
sha256sum -c SOURCE-MANIFEST.sha256
```
