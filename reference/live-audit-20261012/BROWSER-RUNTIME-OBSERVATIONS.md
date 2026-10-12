# Browser Runtime Observations — Live /preview

Audit date: 2026-10-12
Target: https://www.creategiftwebsite.com/preview

## Default birthday journey

The page rendered in headless Chromium with no observed first-party content/media failure in the inspected steps. The page itself visibly displayed Demo PIN: 1234; that displayed demo value was entered through the keypad.

Observed flow:
- Gift-opening screen → PIN screen → Welcome/Opening → Open.
- Open → intro copy → Continue.
- Birthday cake → cake tap changes the candle/wish state and exposes See Our Memories. Microphone-based blowing was not tested.
- Memories → four live images load successfully at 1024×1024.
- Balloon wishes → six balloon controls activated, wish text appears, and Continue advances.
- Birthday puzzle → puzzle.png loads at 1024×1024; Solve it for me reaches puzzle completion.
- Scratch card → memory4.png loads; keyboard activation reveals You uncovered it!.
- Letter envelope → opened letter renders, including the default letter text and replay control.

The browser trace observed /song.mp3 as a media request returning HTTP 206 Partial Content with audio/mpeg; the complete asset is stored in reference/live-assets-20261012/song.mp3.

## Rakhi variant smoke test

The route-supported journey-config preview message was used to render the Rakhi thali, tieRakhi, sweets, memories, and letter screens. The thali light-the-diya action was tested; it advanced to the aarti action. The full drag-to-wrist/tie sequence and sweets completion sequence were not exhaustively exercised.

All four rakhi-memory*.svg images loaded at 400×400 with HTTP 200 and image/svg+xml. /raksha_bandhan.mp3 was requested and returned HTTP 206 Partial Content with audio/mpeg. The complete MP3 is stored in reference/live-assets-20261012/raksha_bandhan.mp3.

## Additional dependency discoveries

- The linked stylesheet has 22 unique WOFF2 URL dependencies, all hash-verified; 15 were missing from the earlier collection and were added.
- A combined inventory of HTML, CSS and recovered viewer/config media references lists 50 unique first-party paths; all 50 have byte-identical local copies.
- The Home link causes Next.js to prefetch two JavaScript chunks for the separate /?showHome=1 route. These are captured under reference/adjacent-home-prefetch-20261012/ and intentionally excluded from the /preview core inventory.
- No sourceMappingURL directive was found in the selected route-linked JavaScript/CSS. Four likely source-map endpoints returned HTTP 403 plain text, not source-map payloads.

## Limits

This verifies a meaningful sample of the default birthday flow and smoke-renders common Rakhi screens. It is not an exhaustive test of every occasion, every user-customized journey, every gesture, or arbitrary builder-uploaded media. It does not recover private backend behavior or the original uncompiled developer source.
