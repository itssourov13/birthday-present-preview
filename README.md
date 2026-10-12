# Birthday Present Preview — Recovered Route Source

Forensic recovery package for the public /preview route at https://www.creategiftwebsite.com/preview.

**Current scope:** recovered compiled frontend chunks, extracted/readable modules, direct stylesheets, public font dependencies, route media, capture evidence, and runtime-flow audit. This is a source/reference package for a later implementation phase; it is **not yet a standalone runnable landing page**.

## Repository layout

- source/raw-bundles/ — byte-preserving copies of the 12 JavaScript chunks linked by the live /preview HTML.
- source/split-modules/ — extracted modules from the route-linked chunks.
- source/readable-modules/ — formatted versions of the extracted module files.
- source/route-modules/ — recovered /preview page module, in readable and split form.
- source/key-modules/ — recovered viewer implementation and occasion/default configuration module.
- reference/preview-capture/ — captured HTML, headers, structure, original public asset inventory, CSS, fonts, icon/logo and manifest.
- reference/live-assets-20261012/ — additional public images, SVGs, MP3s, and 15 fonts recovered during live comparison.
- reference/adjacent-home-prefetch-20261012/ — two optional chunks observed when Next.js prefetched the separate Home route; these are not part of the /preview core.
- reference/live-audit-20261012/ — hash comparisons, resource inventories, browser-stage evidence, source-map probes, audit notes and final verification.
- PREVIEW-SOURCE-MAP.md — route resource mapping.
- LOCAL-ASSET-GAPS.md — missing items recovered and remaining limitations.
- SOURCE-MANIFEST.sha256 — per-file integrity manifest (does not hash itself).

## Live verification results (2026-10-12)

- Live HTML was fetched again and was byte-identical to the earlier capture.
- All 24/24 unique first-party resources directly referenced by live HTML were hash-matched to local copies.
- Combined inventory across HTML, CSS and recovered viewer/config media references covers 50 unique first-party paths: 50 hash-verified, 0 unresolved.
- The stylesheet scan found 22 WOFF2 URLs; all 22 were checked against live bytes. Fifteen fonts missing from the original capture were added.
- All 11 identified public journey media files were recovered: four memory images, puzzle image, four Rakhi SVGs and two MP3 files.
- Chromium runtime verification exercised the default birthday path from gift opening through opening the final letter. Rakhi-specific thali, tieRakhi, sweets, memories and letter screens were smoke-rendered; the first diya interaction and Rakhi media loading were also checked.
- The /preview Home link caused Next.js to prefetch two chunks for the separate /?showHome=1 route. These were kept separately and hash-verified.

See reference/live-audit-20261012/PREVIEW-RUNTIME-FLOW-AUDIT.md and FINAL-VERIFICATION.json for details and limitations.

## Important limitations

This is **compiled production source recovery**, not the author's original uncompiled TypeScript/React repository. No sourceMappingURL directive was found in the selected chunks or stylesheets, and four likely .map endpoints returned HTTP 403 plain text. Private backend code, builder-supplied media uploads, every possible custom journey configuration, and every gesture/occasion flow are not claimed as recovered. This package has not been converted into a self-contained, independently runnable app.

The five live paths ending in .png (memory1.png through memory4.png and puzzle.png) contain JPEG-signature bytes despite their server names and image/png content type. Exact server bytes and names are preserved; no transcoding or renaming was performed.

## Integrity check

From this directory, verify the package with:

    sha256sum -c SOURCE-MANIFEST.sha256

The manifest was regenerated after documentation/evidence updates. The final check passed all manifest entries.

## Next phase boundary

The next phase may use this recovered material to implement a separate landing page that behaves and looks like the live /preview route. That implementation has **not** been started in this commit.
