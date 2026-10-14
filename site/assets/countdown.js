import { BIRTHDAY_COUNTDOWN_CONFIG } from "./countdown-config.js";
import {
  formatISODate,
  getCalendarDate,
  getNextBirthdayTarget,
  parseBirthDate
} from "./birthday-date-utils.js";

(() => {
  "use strict";

  const plate = document.querySelector("[data-countdown]");
  if (!plate) return;

  const config = BIRTHDAY_COUNTDOWN_CONFIG;
  const birthDate = config.birthDate;
  const timeZone = config.timeZone;
  const timeZoneLabel = config.timeZoneLabel || timeZone;
  const valueNodes = {
    days: document.querySelector('[data-countdown-value="days"]'),
    hours: document.querySelector('[data-countdown-value="hours"]'),
    minutes: document.querySelector('[data-countdown-value="minutes"]'),
    seconds: document.querySelector('[data-countdown-value="seconds"]')
  };
  const targetTitle = document.querySelector("[data-countdown-title-text]");
  const targetStatus = document.querySelector("[data-countdown-status]");
  const openStatus = document.querySelector("[data-unlock-status]");
  const dateChip = document.querySelector(".date-chip time");
  const sealMonth = document.querySelector(".seal__month");
  const sealDay = document.querySelector(".seal__day");
  const sealRing = document.querySelector(".seal__ring textPath");

  let intervalId = null;
  let lastCalendarDate = "";
  let activeTarget = null;

  const pad = (value) => String(value).padStart(2, "0");

  function formatTargetDate(target) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(new Date(target.targetAt));
  }

  function setDateLabels(target) {
    const date = { year: target.year, month: target.month, day: target.day };
    const labelDate = new Date(target.targetAt);
    const values = Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        month: "short",
        day: "numeric",
        year: "numeric"
      }).formatToParts(labelDate).map((part) => [part.type, part.value])
    );

    if (dateChip) {
      dateChip.dateTime = formatISODate(date);
      dateChip.textContent = formatTargetDate(target);
    }
    if (sealMonth) sealMonth.textContent = values.month.toUpperCase();
    if (sealDay) sealDay.textContent = values.day;
    if (sealRing) {
      sealRing.textContent =
        values.month.toUpperCase() + " " + values.day + " · " +
        values.year + " · A LITTLE SURPRISE ·";
    }
  }

  function setOpenStatus(message) {
    if (!openStatus) return;
    const prefix = openStatus.querySelector("span[aria-hidden='true']");
    openStatus.textContent = message;
    if (prefix) {
      prefix.textContent = "✦";
      openStatus.prepend(prefix);
    }
  }

  function renderUnavailable() {
    plate.dataset.countdownState = "unconfigured";
    for (const node of Object.values(valueNodes)) {
      if (node) node.textContent = "--";
    }
    if (targetTitle) targetTitle.textContent = "Set your birthday";
    if (targetStatus) targetStatus.textContent = "Check the birthDate and timeZone in countdown-config.js.";
    setOpenStatus("Your surprise can still be opened below.");
  }

  function updateTargetForToday(now) {
    const today = getCalendarDate(now, timeZone);
    if (!today) {
      activeTarget = null;
      renderUnavailable();
      return false;
    }

    const dateKey = formatISODate(today);
    if (dateKey === lastCalendarDate) return Boolean(activeTarget);

    lastCalendarDate = dateKey;
    activeTarget = getNextBirthdayTarget(birthDate, now, timeZone);
    if (!activeTarget) {
      renderUnavailable();
      return false;
    }

    setDateLabels(activeTarget);
    plate.dataset.countdownState = activeTarget.isBirthdayToday ? "birthday" : "counting";
    if (targetTitle) {
      targetTitle.textContent = activeTarget.isBirthdayToday
        ? "Your birthday is here"
        : "Counting down to your birthday";
    }
    if (targetStatus) {
      targetStatus.textContent = activeTarget.isBirthdayToday
        ? "Today is your day. Make it wonderful! 🎂"
        : "Good things are worth waiting for.";
    }
    setOpenStatus(activeTarget.isBirthdayToday
      ? "Happy Birthday! Your surprise is ready."
      : "Next birthday: " + formatTargetDate(activeTarget) + " · " + timeZoneLabel);

    return true;
  }

  function render() {
    const now = Date.now();
    if (!updateTargetForToday(now) || !activeTarget) return;

    const millisecondsLeft = activeTarget.isBirthdayToday
      ? 0
      : Math.max(0, activeTarget.targetAt - now);
    const totalSeconds = Math.ceil(millisecondsLeft / 1000);
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60
    };

    for (const [unit, node] of Object.entries(valueNodes)) {
      if (node) node.textContent = pad(values[unit]);
    }

  }

  function stopTicker() {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  }

  function startTicker() {
    stopTicker();
    render();
    if (!document.hidden) intervalId = window.setInterval(render, 1000);
  }

  // Validate configuration early while leaving the preview CTA available.
  if (!parseBirthDate(birthDate)) renderUnavailable();
  startTicker();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopTicker();
    else startTicker();
  });
})();
