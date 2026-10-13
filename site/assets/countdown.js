/*
 * Countdown timing and timezone live in site/assets/countdown-config.js.
 * Change that one explicit ISO timestamp when the intended unlock time is confirmed.
 */
(() => {
  "use strict";

  const plate = document.querySelector("[data-countdown]");
  if (!plate) return;

  const config = window.BIRTHDAY_COUNTDOWN_CONFIG;
  const targetAt = Date.parse(config?.targetISO || "");
  const timezone = config?.timeZone || "Asia/Dhaka";
  const valueNodes = {
    days: document.querySelector('[data-countdown-value="days"]'),
    hours: document.querySelector('[data-countdown-value="hours"]'),
    minutes: document.querySelector('[data-countdown-value="minutes"]'),
    seconds: document.querySelector('[data-countdown-value="seconds"]')
  };
  const targetTitle = document.querySelector("[data-countdown-title-text]");
  const targetStatus = document.querySelector("[data-countdown-status]");
  const unlockButton = document.querySelector("[data-unlock-button]");
  const unlockLabel = document.querySelector("[data-unlock-label]");
  const unlockStatus = document.querySelector("[data-unlock-status]");
  const dateChip = document.querySelector(".date-chip time");
  const sealMonth = document.querySelector(".seal__month");
  const sealDay = document.querySelector(".seal__day");
  const sealRing = document.querySelector(".seal__ring textPath");

  let intervalId = null;
  let unlocked = null;

  const pad = (value) => String(value).padStart(2, "0");

  function setDateLabels() {
    if (!Number.isFinite(targetAt)) return;

    const targetDate = new Date(targetAt);
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      month: "short",
      day: "numeric",
      year: "numeric"
    }).formatToParts(targetDate);
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    const monthNumber = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      month: "2-digit"
    }).format(targetDate);

    if (dateChip) {
      dateChip.dateTime = `${values.year}-${monthNumber}-${pad(values.day)}`;
      dateChip.textContent = `${values.month} ${values.day}, ${values.year}`;
    }
    if (sealMonth) sealMonth.textContent = values.month.toUpperCase();
    if (sealDay) sealDay.textContent = values.day;
    if (sealRing) {
      sealRing.textContent = `${values.month.toUpperCase()} ${values.day} · ${values.year} · A LITTLE SURPRISE ·`;
    }
  }

  function render() {
    if (!Number.isFinite(targetAt)) {
      plate.dataset.countdownState = "unconfigured";
      for (const node of Object.values(valueNodes)) if (node) node.textContent = "--";
      if (targetStatus) targetStatus.textContent = "The surprise time hasn't been set yet.";
      return false;
    }

    const millisecondsLeft = Math.max(0, targetAt - Date.now());
    const totalSeconds = Math.ceil(millisecondsLeft / 1000);
    const isUnlocked = millisecondsLeft <= 0;
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60
    };

    for (const [unit, node] of Object.entries(valueNodes)) {
      if (node) node.textContent = pad(values[unit]);
    }

    if (isUnlocked !== unlocked) {
      unlocked = isUnlocked;
      plate.dataset.countdownState = unlocked ? "unlocked" : "locked";
      if (targetTitle) targetTitle.textContent = unlocked ? "Your moment has arrived" : "Counting down to your moment";
      if (targetStatus) targetStatus.textContent = unlocked
        ? "The wait is over. Your surprise is ready."
        : "Good things are worth waiting for.";
      if (unlockButton) unlockButton.disabled = !unlocked;
      if (unlockLabel) unlockLabel.textContent = unlocked ? "Open your surprise" : "Continue";
      if (unlockStatus) {
        const prefix = unlockStatus.querySelector("span[aria-hidden='true']");
        unlockStatus.textContent = unlocked ? "Your little moment is here" : "Your little moment is almost here";
        if (prefix) {
          prefix.textContent = "✦";
          unlockStatus.prepend(prefix);
        }
      }
    }

    return !isUnlocked;
  }

  function stopTicker() {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  }

  function startTicker() {
    stopTicker();
    const remainsLocked = render();
    if (!document.hidden && remainsLocked) intervalId = window.setInterval(render, 1000);
  }

  if (unlockButton) {
    unlockButton.addEventListener("click", () => {
      if (unlockButton.disabled) return;
      const destination = unlockButton.dataset.previewHref;
      if (destination && destination.startsWith("/") && !destination.startsWith("//")) {
        window.location.assign(destination);
      }
    });
  }

  setDateLabels();
  if (!Number.isFinite(targetAt)) {
    render();
    return;
  }
  startTicker();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopTicker();
    else startTicker();
  });
})();
