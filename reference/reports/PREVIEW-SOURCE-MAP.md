# `/preview` Source Map

> File paths in this report are relative to the repository root.

Target page: `https://www.creategiftwebsite.com/preview`
Capture source: `reference/preview-capture/preview.html`

The captured HTML directly references the following 12 JavaScript chunks and two stylesheets. Raw JavaScript chunk copies are under `source/raw-bundles/`; CSS copies and other public assets are under `reference/preview-capture/public-assets/`.

| Type | Live resource basename | Local captured/raw file |
|---|---|---|
| JS | `0634h1z7ibyg5.js` | `source/raw-bundles/1320795458_0634h1z7ibyg5.js` |
| JS | `0cz1d0mv5g_q7.js` | `source/raw-bundles/27cad0ed14_0cz1d0mv5g_q7.js` |
| JS | `140h4g67x6tpa.js` | `source/raw-bundles/e942156c56_140h4g67x6tpa.js` |
| JS | `143jnbtnnaigb.js` | `source/raw-bundles/9978744876_143jnbtnnaigb.js` |
| JS | `1h_f92j606zzt.js` | `source/raw-bundles/985604af69_1h_f92j606zzt.js` |
| CSS | `2r8rlytqf6jwk.css` | `reference/preview-capture/public-assets/ae56dd113c_2r8rlytqf6jwk.css` |
| JS | `391k3ex376o3l.js` | `source/raw-bundles/9661354b52_391k3ex376o3l.js` |
| JS | `3iuqk-cfg7mdp.js` | `source/raw-bundles/7c8d6cff9c_3iuqk-cfg7mdp.js` |
| CSS | `3klunzeywsa48.css` | `reference/preview-capture/public-assets/89ce5fc05f_3klunzeywsa48.css` |
| JS | `3m0nqrslwleed.js` | `source/raw-bundles/e7e2e0e53b_3m0nqrslwleed.js` |
| JS | `3z5ozuetb4fvu.js` | `source/raw-bundles/7640d6d361_3z5ozuetb4fvu.js` |
| JS | `421wzrxb7ll--.js` | `source/raw-bundles/7c74654c36_421wzrxb7ll--.js` |
| JS | `44irkf401yrm6.js` | `source/raw-bundles/f57da82495_44irkf401yrm6.js` |
| JS | `turbopack-39hb7wt80nhvd.js` | `source/raw-bundles/d1fd414a72_turbopack-39hb7wt80nhvd.js` |

## Route page module
The route chunk `44irkf401yrm6.js` was split into `mod_201.js`. The readable module initializes a default preview config, restores `journey-preview` from local storage, listens for the `journey-config` postMessage from a parent builder, and renders the viewer component. The corresponding readable source is copied to `source/route-modules/preview-page_mod_201.js`.

The viewer/default configuration logic is present in the recovered module material copied under `source/key-modules/` and in the directly linked route chunks' extracted module directories. `source/raw-bundles/` is the byte-preserving reference if extracted modules need to be reinterpreted.

## Asset capture
The captured HTML's first-party resource inventory reports 24 resources: 12 JavaScript files, 2 CSS files, 7 WOFF2 fonts, 1 web manifest, 1 PNG logo/icon, and 1 favicon. All are included under `reference/preview-capture/public-assets/` with the original inventory metadata.

## Live-source recheck additions (2026-10-12)

The earlier captured route HTML remains unchanged. A fresh live copy is stored at reference/live-audit-20261012/preview.live.html, with response headers next to it. Its SHA-256 is fddf726f0dd86a4981ba024c2fcddea30b540ae4c22855c64759e5dec5f8eb2f, matching reference/preview-capture/preview.html.

The 24 unique same-origin resources referenced by the live HTML were re-requested and compared byte-for-byte with local copies; 24/24 have an identical local copy. Details are in reference/live-audit-20261012/LIVE-LINKED-RESOURCE-VALIDATION.json.

### Additional route/runtime assets

The following root-relative public assets were not included in the original HTML resource inventory but are referenced by recovered viewer/config code; all were fetched from the live origin and copied byte-for-byte:

| Live path | Local copy |
|---|---|
| /memory1.png–/memory4.png | reference/live-assets-20261012/memory1.png–memory4.png |
| /puzzle.png | reference/live-assets-20261012/puzzle.png |
| /rakhi-memory1.svg–/rakhi-memory4.svg | reference/live-assets-20261012/rakhi-memory1.svg–rakhi-memory4.svg |
| /raksha_bandhan.mp3 | reference/live-assets-20261012/raksha_bandhan.mp3 |
| /song.mp3 | reference/live-assets-20261012/song.mp3 |

/song.mp3 was seen requested by the live Chromium runtime. The five .png URLs currently return JPEG-signature bytes despite the .png names and image/png response type; this mismatch is preserved and documented. See reference/live-audit-20261012/LIVE-MEDIA-DOWNLOADS.json and reference/live-audit-20261012/BROWSER-RUNTIME-OBSERVATIONS.md.


## CSS dependency audit

The stylesheet 3klunzeywsa48.css includes 22 unique WOFF2 URL dependencies. Seven already existed among the seven fonts captured via HTML preloads; the other 15 are saved under reference/live-assets-20261012/next-static-media/ using their original server basenames. The original stylesheet bytes were not modified. Each dependency URL and SHA-256 result is recorded in reference/live-audit-20261012/CSS-FONT-DEPENDENCIES.json.


The combined first-party inventory in reference/live-audit-20261012/LIVE-RESOURCE-MANIFEST.json currently covers 50 unique paths found through HTML, CSS, and recovered viewer/config references; all 50 have a byte-identical local copy. No sourceMappingURL or sourceURL directives were found in the selected raw JavaScript chunks or the two linked stylesheets, so the package does not contain original uncompiled TypeScript sources or maps.


## Optional adjacent route navigation assets

Browser runtime showed two extra JavaScript chunks being prefetched by the Home link to /?showHome=1. Copies are retained separately under reference/adjacent-home-prefetch-20261012/ and SHA-256 metadata is in reference/live-audit-20261012/ADJACENT-HOME-PREFETCH.json. They belong to the adjacent Home route, not to the route core 50-path source/dependency manifest.


## Runtime-flow verification and current limits

The default birthday flow was exercised through the final opened letter; Rakhi-specific screens were smoke-rendered and their SVG/audio dependencies loaded. See reference/live-audit-20261012/PREVIEW-RUNTIME-FLOW-AUDIT.md for stage details and limits. The combined source/dependency inventory covers 50 first-party paths with 50 byte-identical local copies. Fifteen additional fonts and eleven journey media files recovered from the live origin are documented in reference/reports/LOCAL-ASSET-GAPS.md.

No source-map payload was recovered: no sourceMappingURL directive was found in selected JS/CSS, and four likely .map endpoints returned 403. This remains a compiled source recovery package rather than the original uncompiled source tree or a standalone runnable application.
