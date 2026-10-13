/*
 * Single source of truth for the countdown and the preview's release time.
 * The date-only design shows October 14, 2026, so the current assumption is
 * midnight at the beginning of that date in Bangladesh: UTC+06:00.
 * Confirm/change this ISO timestamp here if a different release time is intended.
 */
(() => {
  "use strict";

  const config = Object.freeze({
    targetISO: "2026-10-14T00:00:00+06:00",
    timeZone: "Asia/Dhaka",
    homePath: "/",
    previewPath: "/preview"
  });

  window.BIRTHDAY_COUNTDOWN_CONFIG = config;

  // Gate direct browser navigation too, while keeping the recovered capture untouched.
  // This is a client-side presentation gate, not server-side security enforcement.
  if (window.location.pathname === config.previewPath) {
    const targetAt = Date.parse(config.targetISO);
    if (!Number.isFinite(targetAt) || Date.now() < targetAt) {
      window.location.replace(config.homePath);
    }
  }
})();
