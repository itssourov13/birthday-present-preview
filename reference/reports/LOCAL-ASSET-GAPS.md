# Live /preview Asset Gap and Recovery Report

> File paths in this report are relative to the repository root.

Audit target: https://www.creategiftwebsite.com/preview
Audit date: 2026-10-12

## Resolved omissions

These public media files were referenced by recovered viewer/default-configuration code but were not present as separate local files in the earlier main-workspace recovery. Each path returned HTTP 200 from the live origin and was saved byte-for-byte under reference/live-assets-20261012/:

- memory1.png, memory2.png, memory3.png, memory4.png
- puzzle.png
- rakhi-memory1.svg, rakhi-memory2.svg, rakhi-memory3.svg, rakhi-memory4.svg
- raksha_bandhan.mp3
- song.mp3

The default birthday runtime loaded all four memory images, the puzzle image, and the scratch image successfully. The Rakhi smoke test loaded all four SVGs and requested the Raksha Bandhan audio. Both MP3 files were captured in full even though Chromium requests them with HTTP 206 Partial Content (audio/mpeg).

### File-signature discrepancy

The five paths ending in .png returned Content-Type: image/png, but their file bytes start with the JPEG signature (FF D8 FF). Their original live URL paths, names, and exact bytes are preserved without conversion. Per-file response metadata and SHA-256 values are in reference/live-audit-20261012/LIVE-MEDIA-DOWNLOADS.json.

## Resolved CSS font omissions

The stylesheet 3klunzeywsa48.css references 22 unique WOFF2 URLs. Seven were already present in the original HTML capture; another 15 were not separately collected by the earlier pass. All 15 were downloaded from the live origin to reference/live-assets-20261012/next-static-media/. All 22 dependency URLs now have hash-verified local copies. See reference/live-audit-20261012/CSS-FONT-DEPENDENCIES.json.

## Direct route resources and combined inventory

- Live HTML references 24 unique first-party resources; all 24 have byte-identical local copies.
- Combined HTML/CSS/recovered viewer/config inventory: 50 unique first-party paths; 50 verified; 0 unresolved.
- The live HTML is byte-identical to the captured HTML.
- Two additional JavaScript chunks prefetched by the Home link for the separate /?showHome=1 route are saved separately in reference/adjacent-home-prefetch-20261012/. They are optional adjacent-route evidence, not required to render /preview itself.

Details: `reference/live-audit-20261012/LIVE-RESOURCE-MANIFEST.json`, `reference/live-audit-20261012/LIVE-LINKED-RESOURCE-VALIDATION.json`, and `reference/live-audit-20261012/ADJACENT-HOME-PREFETCH.json`.

## Runtime test coverage

The default birthday route was exercised through these visible stages:

1. Gift opening and demo PIN entry.
2. Intro screen.
3. Birthday cake/candle state (cake tap tested; microphone blowing not tested).
4. Memories screen; all four images loaded at 1024×1024.
5. Balloon wishes; all six controls activated and Continue advanced.
6. Puzzle screen; puzzle.png loaded at 1024×1024 and the Solve it for me path reached completion.
7. Scratch card; memory4.png loaded and keyboard activation revealed the card.
8. Letter envelope and opened letter.

Rakhi smoke coverage rendered thali, tieRakhi, sweets, memories, and letter. The diya-light action was tested; four Rakhi SVGs loaded at 400×400 and raksha_bandhan.mp3 was requested successfully. The complete drag/tie interaction and all sweets-completion states were not exhaustively tested.

Detailed record: reference/live-audit-20261012/PREVIEW-RUNTIME-FLOW-AUDIT.md, its JSON report, and reference/live-audit-20261012/runtime-evidence/.

## Remaining limitations (not local static-file gaps)

No original authoring source maps could be retrieved. The selected JavaScript/CSS contain no sourceMappingURL directive; four probable .map endpoints returned HTTP 403 plain text. Therefore this is compiled source recovery, not the original uncompiled TypeScript/React repository.

Custom journeys may receive arbitrary builder state and user-uploaded media through localStorage or the journey-config postMessage interface. Those user-specific uploads and every possible custom configuration cannot be recovered from the public default route alone. Private backend data, third-party analytics behavior, and the entire separate Home route are outside the /preview core package. The production packaging work on branch feat/preview-production-landing-page now provides a standalone static build for the recovered default /preview journey; it does not reconstruct the original private builder/backend or recover arbitrary custom-user journeys.

## Final integrity status

`SOURCE-MANIFEST.sha256` covers recovered source, references, audit reports, packaging scripts, configuration, and documentation, excluding itself, Git metadata, and generated `dist/` output. Regenerate and verify it after any further source or documentation changes.
