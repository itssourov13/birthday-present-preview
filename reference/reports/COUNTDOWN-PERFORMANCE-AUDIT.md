# Countdown Homepage — Mobile Performance Audit

**Date:** 2026-10-13  
**Scope:** `site/index.html`, `site/countdown.css`, generated root route, and smoke-test guardrails.

## Root-cause assessment

Historical baseline (before the birthday countdown was implemented): the countdown values were static placeholders and there was no client-side timer loop. The primary code-level cost candidates at that time were decorative CSS effects rather than application JavaScript. The current recurring countdown implementation is documented in `README.md` and `HANDOFF.md`; this report remains an audit of the earlier mobile-performance pass.

- `.atmosphere__grain` uses an inline SVG `feTurbulence` filter at three octaves, then applies `mix-blend-mode` across a fixed full-viewport layer. This texture is decorative and can increase rasterization/compositing work on mobile GPUs.
- `.plate` combines `backdrop-filter: blur(14px)` with a `rise` transform animation. Backdrop sampling while the card is moving can be disproportionately expensive on lower-power mobile devices.
- `.stage__light` uses `filter: blur(16px)` while running an infinite opacity animation.
- `.stage__gift` runs an infinite transform animation while applying a CSS `drop-shadow()` filter to a complex SVG.
- The full-viewport star layer continuously changes opacity through `twinkle`.

The stylesheet already had a `prefers-reduced-motion` mode. However, ordinary phones without that accessibility preference still received the continuous effects above. This assessment identifies likely recurring render/composite costs from the source; it is not a hardware profiler trace and does not assert measured FPS or battery savings on every device.

## Targeted changes

A CSS-only mobile/touch-first rendering profile now keeps the same illustration, text, colors, content layout, and desktop art direction while lowering recurring effects on narrow or coarse-pointer devices:

- Hide the fixed SVG-turbulence grain texture.
- Keep the stars visible but stop the infinite twinkle animation.
- Remove the countdown plate's backdrop blur and use a static translucent gradient instead.
- Keep the light cone but remove its blur filter and infinite breathing animation.
- Keep the gift SVG visible but stop its infinite floating animation and remove the CSS drop-shadow filter on mobile.
- Preserve the short intro/reveal effects and existing `prefers-reduced-motion` overrides.

The changes do not add JavaScript, libraries, timers, or external network requests. Desktop visual effects remain unchanged; touch-first devices get the cheaper profile even when their viewport is wider than a phone.

## Regression coverage

`scripts/smoke-test.mjs` now asserts that the mobile/touch-first profile exists and guards the grain, card blur, light, and gift overrides. `npm test` rebuilds the production package before checking:

- homepage markup, the four static countdown units, and same-domain Continue route;
- mobile/reduced-motion CSS safeguards and bundled UI assets;
- all inventoried recovered route resources, JS/CSS/font counts, and journey media;
- local root/query/preview routing, MIME types, audio byte ranges, and path-traversal containment.

## Verification and limitations

- Baseline `npm test` passed before the optimization.
- After the CSS and smoke-test guard changes, `npm test` passed: the production build completed and every existing smoke assertion passed.
- Chromium computed-style/responsive checks passed at 320×568, 390×844, 430×932, 768×1024, 844×390, and 1366×768. All six viewports had no horizontal overflow and both local fonts loaded; the Continue link remained `/preview`.
- All tested phone/tablet/short-landscape cases resolved to zero running infinite animations, no SVG grain layer, no plate backdrop blur, no gift CSS filter, and no light/twinkle animation. Desktop retained the grain, plate blur, gift float, light breathing, and star twinkle. `prefers-reduced-motion: reduce` removed the gift animation and rendered the heading reveal fully visible.
- `SOURCE-MANIFEST.sha256` was regenerated after source/docs changes; `sha256sum -c SOURCE-MANIFEST.sha256` passed for every listed file.
- Device-specific CPU/GPU utilization, battery drain, and sustained frame rate still require profiling on a physical low/mid-range phone. Browser CSS verification confirms the intended cheaper rendering path, not measured physical-device FPS or power savings.

## Follow-up boundaries

At the time of this performance pass, the displayed time was not yet a live countdown and the `/preview` journey remained reachable via Continue for testing. The recurring birthday countdown was implemented later; the current behavior and configuration are documented in `README.md` and `HANDOFF.md`.
