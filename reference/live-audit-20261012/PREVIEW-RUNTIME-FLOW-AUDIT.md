# Live /preview Runtime Flow Audit

Audit time (Asia/Dhaka): 2026-10-12T14:39:38+06:00

## Result

The captured live HTML remains byte-identical to the initial capture. The reconciled core first-party inventory contains 50 unique paths across HTML, CSS and recovered viewer/config file references; 50 have byte-identical local copies and 0 remain unresolved. The two linked stylesheets reference 22 unique font URLs; all are HTTP 200 and SHA-256 verified. Eleven journey media paths and fifteen missing CSS font files have been added from the live public origin.

## Default birthday preview flow observed in Chromium

1. Gift-opening screen → clicked gift → demo PIN screen.
2. Used the page's own displayed demo PIN (1234) → Welcome/Opening → Open.
3. Open → introductory message → Continue.
4. Birthday centerpiece/cake → tapped cake → candle/wish state → See Our Memories.
5. Memories → four images loaded successfully (memory1.png through memory4.png, each 1024×1024).
6. Balloon wishes → all six balloon controls were activated → wish text appeared → Continue.
7. Birthday puzzle → puzzle.png loaded (1024×1024) → clicked Solve it for me → Puzzle complete / One Last Surprise.
8. Scratch card → memory4.png loaded → focused the accessible canvas and pressed Enter → You uncovered it! appeared.
9. Letter envelope → Tap to open → clicked → full letter text rendered with replay control.

Detailed stage DOM snapshots and network traces are stored in runtime-evidence/. The microphone blow interaction was not tested; the cake tap reached the next state.

## Rakhi variant smoke test

The route-supported journey-config preview message was used to render the Rakhi-specific thali, tieRakhi, sweets, memories and letter stages. The thali's first interaction (light diya) was also tested, advancing it to its Aarti action. Full drag/tie and sweets-completion interactions were not exhaustively performed.

All four Rakhi SVGs loaded with HTTP 200 (image/svg+xml, intrinsic dimensions 400×400); raksha_bandhan.mp3 was requested and returned HTTP 206 (audio/mpeg). The default journey also requested song.mp3, returning HTTP 206 (audio/mpeg). Both MP3s were saved in full; 206 is the expected partial-content response used by media clients.

## Adjacent navigation assets

While the preview was open, Next.js prefetched two chunks used by the separate /?showHome=1 route. They are preserved in reference/adjacent-home-prefetch-20261012/ and hash-verified, but intentionally separate from the /preview core inventory.

## Source-map check and limitations

No sourceMappingURL directive was found in the selected raw chunks or linked stylesheets. Four likely .map endpoints returned HTTP 403 plain text rather than source-map data; no original authoring source or source maps could be recovered that way.

The core route's discovered static paths have no unresolved local copy. That does not establish recovery of private backend code, user-uploaded builder assets, every custom config, or all untested gesture details. The package remains forensic recovered source/asset material, not a ready-to-run standalone application.
