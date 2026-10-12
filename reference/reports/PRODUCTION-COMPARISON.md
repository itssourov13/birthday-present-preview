# Production Landing Page — Live Comparison & Delivery Notes

> File paths in this report are relative to the repository root.

## Target and comparison baseline

- Live route: https://www.creategiftwebsite.com/preview
- Live response rechecked on 2026-10-12: HTTP 200, 26,009 bytes.
- The latest live HTML matched the earlier forensic capture byte-for-byte in the recovery audit.
- Reference HTML: reference/live-audit-20261012/preview.live.html.
- Reference browser screenshot of the opening state was captured at 1440 × 1000.

## Visual and runtime contract

This public route is a full-screen interactive birthday gift journey, not a conventional marketing home page. The opening state has a near-black background with glowing star particles, centered gold heading and supporting line, a pink 3D gift box with metallic-gold ribbon, a tap prompt, and a small Home control at the upper-left. The production package uses the recovered HTML, JavaScript, CSS, fonts, and media instead of approximating the page with a new design.

Recovered runtime evidence establishes the default birthday path through gift opening, demo PIN, intro, cake/wish, memories, balloon wishes, puzzle, scratch card, envelope, and opened letter. A Rakhi variant was smoke-rendered in the source audit. See reference/live-audit-20261012/PREVIEW-RUNTIME-FLOW-AUDIT.md for exact test coverage and limits.

## Packaging changes for independent hosting

1. Added a dependency-free Node build that maps the recovered live paths into a static dist output tree.
2. Bundled the 12 JavaScript chunks, 2 CSS files, all 22 WOFF2 files, the app icon/manifest, and the 11 journey-media assets at their expected same-origin URL paths.
3. Serves the captured server-rendered HTML at /preview so the embedded Next.js Flight payload still identifies the intended route during hydration.
4. Added a permanent / → /preview redirect and a local HTTP server with correct MIME types, path containment, audio byte-range support, and cache headers.
5. Changed only the emitted compiled route chunk's Home button URL. It points to the separate live Home route rather than routing back into the preview-only deployment. The forensic source chunk is unchanged.
6. Added Vercel configuration, reproducible packaging checks, and a build manifest.

## What must still be reviewed before publishing

- No original uncompiled TypeScript/React tree was recovered; the deployment artifact packages the live compiled implementation.
- The separate Home route is not part of this repository; navigation continues to the live site's Home route.
- Microphone-based candle blowing and every possible custom user-created journey were not exhaustively tested in the live recovery pass. The entire Rakhi drag/tie and sweets-completion behavior were also not fully exercised.
- The original HTML retains the live site's SEO/social metadata and analytics integrations for visual/runtime fidelity. If deploying on a new domain, review and deliberately update or remove those references.
- Confirm that you have the necessary permission to republish the recovered site code and assets on the target domain.

## Local verification results (2026-10-12)

- Build and smoke tests passed: 12 JS chunks, 2 CSS files, 22 fonts, and the complete media set were found in dist; the source integrity assertions passed.
- The local root returned HTTP 308 with Location: /preview; /preview returned HTTP 200 and the same 26,009-byte captured HTML payload.
- Representative JS, CSS, WOFF2, image and MP3 URLs returned HTTP 200. An MP3 byte-range request returned HTTP 206 with the correct Content-Range.
- A live-versus-local browser check was done at desktop (1440 × 1000) and mobile (390 × 844). The two opening screens have the same layout, typography, gift box, colors, and prompt. Animated star particles naturally occupy different positions at capture time.
- Mobile checks reported document width 390 CSS pixels at a 390-pixel viewport on both pages, with no horizontal overflow.
- The local birthday path was then exercised through PIN unlock, intro, cake/candle, all four loaded memory images, all six balloon controls, puzzle completion, scratch reveal, and opening the final letter. No failed first-party resource requests were seen during this run.

Run npm test to regenerate dist and validate the required resources. Run npm start to serve the build at http://127.0.0.1:4179/preview. The current implementation is static and requires no npm install or third-party package dependencies.
