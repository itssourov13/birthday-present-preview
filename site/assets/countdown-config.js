/*
 * Single source of truth for the countdown and the preview's release time.
 * The intended release date is October 15, 2026, so the current target is
 * midnight at the beginning of that date in Bangladesh: UTC+06:00.
 * Confirm/change this ISO timestamp here if a different release time is intended.
 */
(() => {
  "use strict";

  const config = Object.freeze({
    targetISO: "2026-10-15T00:00:00+06:00",
    timeZone: "Asia/Dhaka",
    timeZoneLabel: "Bangladesh time",
    homePath: "/",
    previewPath: "/preview"
  });

  window.BIRTHDAY_COUNTDOWN_CONFIG = config;

  // Gate direct browser navigation too, while keeping the recovered capture untouched.
  // This is a client-side presentation gate, not server-side security enforcement.
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isPreviewPath = currentPath === config.previewPath || currentPath === `${config.previewPath}.html`;
  if (isPreviewPath) {
    const targetAt = Date.parse(config.targetISO);
    if (!Number.isFinite(targetAt) || Date.now() < targetAt) {
      window.location.replace(config.homePath);
    }
  }
})();
