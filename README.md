# Birthday Present Preview

Self-hostable static packaging of the recovered /preview experience from the live CreateGiftWebsite page. It uses the actual recovered HTML, JavaScript, CSS, fonts, and journey media so that it stays as close to the live implementation as possible.

Live comparison target: https://www.creategiftwebsite.com/preview

## Run locally

Requirements: Node.js 20+ (no npm dependencies are required).

1. Run npm run build to generate dist/.
2. Run npm run start to launch the local server.
3. Open http://127.0.0.1:4179/preview. The root URL redirects to /preview.
4. Run npm test to rebuild the package and check that all expected first-party resources exist.

To choose another port, run PORT=4180 npm run start.

## Deploy to Vercel

Import this repository into Vercel and use the included vercel.json configuration. The build command is npm run build and the output directory is dist. The root URL redirects to /preview; /preview serves the generated HTML without changing the browser URL.

## Repository map

- reference/ — live captures, recovered assets, hash comparisons, browser observations, and audit reports.
- source/raw-bundles/ — byte-preserving copies of the live-linked JavaScript chunks.
- source/key-modules/ and source/route-modules/ — readable recovered modules for analysis, not the deployment entry point.
- scripts/build.mjs — assembles the static production output using the recovered resources.
- scripts/serve.mjs — local HTTP server with MIME and range-response support.
- scripts/smoke-test.mjs — package integrity and resource-presence assertions.
- PRODUCTION-COMPARISON.md — fidelity approach, implementation decisions, and remaining limitations.

## Live fidelity and route coverage

The build packages the recovered live implementation rather than recreating its UI by hand: 12 JavaScript chunks, 2 stylesheets, 22 WOFF2 dependencies, and 11 journey media files, plus the logo, icon, and manifest. Assets are emitted at the same URL paths expected by the captured HTML and compiled app code.

The deployment scope is the /preview experience. The Home button points to the live site's separate Home route because that route was not part of the recovery repository. The original analytics and SEO/social metadata remain in the captured HTML for fidelity; review them before moving to a different domain.

## Source-recovery limitations

This is compiled production source recovery, not the original uncompiled source tree. No source maps were recovered. Custom builder data, private backend systems, user-uploaded media, microphone blowing, and every custom journey or gesture state are not claimed as recovered or exhaustively tested. Review LOCAL-ASSET-GAPS.md, PREVIEW-SOURCE-MAP.md, and reference/live-audit-20261012/PREVIEW-RUNTIME-FLOW-AUDIT.md for the full audit.

## Integrity

SOURCE-MANIFEST.sha256 covers repository source, evidence, scripts, configuration, and documentation, excluding itself, Git metadata, and generated dist/. Check it with:

sha256sum -c SOURCE-MANIFEST.sha256
