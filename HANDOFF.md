# Project Handoff

This file is the practical handover for the `birthday-present-preview` repository. Use the linked forensic reports for detailed evidence rather than duplicating their full contents here.

## Current scope

The repository packages the public `https://www.creategiftwebsite.com/preview` experience for independent static hosting. The implementation uses recovered compiled HTML, JavaScript, CSS, fonts, and journey media. It is not a reconstruction of the original authoring repository or private builder/backend.

## Quick start and verification

**Requirement:** Node.js 20 or newer. No third-party npm packages are required.

```bash
npm run build    # Create the static site in dist/
npm run start    # Serve locally at http://127.0.0.1:4179/preview
npm test         # Rebuild and run HTTP/resource smoke tests
sha256sum -c SOURCE-MANIFEST.sha256  # Verify source/evidence hashes
```

To use another local port, set `PORT` when starting the server, for example `PORT=4180 npm run start`. `npm test` builds `dist/` before checking the generated output. The `dist/` directory is generated and ignored by Git.

## How the package is assembled

- `scripts/build.mjs` reads `reference/live-audit-20261012/preview.live.html`, recovered bundles, captured public assets, recovered journey media, and additional fonts; it writes the deployable files and build manifest to `dist/`.
- `scripts/serve.mjs` is the dependency-free local HTTP server. It handles the `/` redirect, `/preview`, static MIME types, path containment, and audio byte-range responses.
- `scripts/smoke-test.mjs` checks required first-party resources, generated route behavior, MIME handling, path containment, and MP3 range requests.
- `vercel.json` configures `npm run build`, `dist`, the root redirect, and the `/preview` rewrite for Vercel.
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

The captured HTML is intentionally kept close to the live page. Its Home control navigates to the original site's separate Home route, not a route included in this package. No original source maps, private backend code, arbitrary custom-builder uploads, or every possible user-specific journey were recovered. Audit results are historical verification evidence; rerun `npm test` and the manifest check after making changes.

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
