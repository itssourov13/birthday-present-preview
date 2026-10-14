const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const DATE_PARTS_FORMAT = {
  calendar: "gregory",
  numberingSystem: "latn",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};

function toDateParts(value) {
  const match = DATE_PATTERN.exec(value);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1000 || month < 1 || month > 12 || day < 1 || day > 31) return null;

  const check = new Date(Date.UTC(year, month - 1, day));
  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() + 1 !== month ||
    check.getUTCDate() !== day
  ) return null;

  return { year, month, day };
}

/**
 * Parse a strict YYYY-MM-DD Gregorian date without relying on browser-local time.
 * Years below 1000 are intentionally rejected to avoid Date.UTC's legacy
 * interpretation of years 0 through 99 and to keep birthday input practical.
 */
export function parseBirthDate(value) {
  return typeof value === "string" ? toDateParts(value) : null;
}

export function isValidTimeZone(timeZone) {
  if (typeof timeZone !== "string" || !timeZone.trim()) return false;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone }).format(0);
    return true;
  } catch {
    return false;
  }
}

function formatParts(instant, timeZone, includeTime = false) {
  const options = { ...DATE_PARTS_FORMAT, timeZone };
  if (includeTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
    options.hourCycle = "h23";
  }

  const values = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", options)
      .formatToParts(new Date(instant))
      .map((part) => [part.type, part.value])
  );
  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    ...(includeTime ? {
      hour: Number(values.hour),
      minute: Number(values.minute),
      second: Number(values.second)
    } : {})
  };
}

export function getCalendarDate(instant, timeZone) {
  const timestamp = instant instanceof Date ? instant.getTime() : Number(instant);
  if (!Number.isFinite(timestamp) || !isValidTimeZone(timeZone)) return null;
  try {
    return formatParts(timestamp, timeZone);
  } catch {
    return null;
  }
}

function compareDates(left, right) {
  if (left.year !== right.year) return left.year - right.year;
  if (left.month !== right.month) return left.month - right.month;
  return left.day - right.day;
}

function dateOrdinal(parts) {
  return parts.year * 10000 + parts.month * 100 + parts.day;
}

function annualBirthdayDate(birthDate, year) {
  // Preserve the recovered journey's JavaScript date-rollover behavior:
  // February 29 birthdays use March 1 in non-leap years.
  const normalized = new Date(Date.UTC(year, birthDate.month - 1, birthDate.day));
  return {
    year: normalized.getUTCFullYear(),
    month: normalized.getUTCMonth() + 1,
    day: normalized.getUTCDate()
  };
}

/**
 * Convert a Gregorian calendar date's local start into an absolute timestamp.
 * Offset correction normally converges in one or two passes. The fallback
 * binary search handles time zones where a daylight-saving transition skips
 * local midnight by selecting the first instant belonging to the target date.
 */
function zonedDateStart(parts, timeZone) {
  const desiredUtc = Date.UTC(parts.year, parts.month - 1, parts.day);
  let guess = desiredUtc;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const local = formatParts(guess, timeZone, true);
    const representedUtc = Date.UTC(
      local.year, local.month - 1, local.day,
      local.hour, local.minute, local.second
    );
    const adjustment = desiredUtc - representedUtc;
    if (adjustment === 0) return guess;
    guess += adjustment;
  }

  const targetOrdinal = dateOrdinal(parts);
  let low = desiredUtc - 36 * 60 * 60 * 1000;
  let high = desiredUtc + 36 * 60 * 60 * 1000;
  const lowParts = formatParts(low, timeZone);
  const highParts = formatParts(high, timeZone);
  if (dateOrdinal(lowParts) >= targetOrdinal || dateOrdinal(highParts) < targetOrdinal) {
    return null;
  }

  while (high - low > 1) {
    const middle = Math.floor((low + high) / 2);
    if (dateOrdinal(formatParts(middle, timeZone)) >= targetOrdinal) high = middle;
    else low = middle;
  }

  const firstInstant = formatParts(high, timeZone);
  return dateOrdinal(firstInstant) === targetOrdinal ? high : null;
}

/**
 * Resolve the next birthday in the selected time zone.
 *
 * On the birthday itself, isBirthdayToday stays true for the full calendar
 * day and targetAt represents that day's local start. On the next local date,
 * a fresh calculation rolls the target forward to the following year.
 */
export function getNextBirthdayTarget(birthDateValue, now = Date.now(), timeZone = "Asia/Dhaka") {
  const birthDate = parseBirthDate(birthDateValue);
  const timestamp = now instanceof Date ? now.getTime() : Number(now);
  if (!birthDate || !Number.isFinite(timestamp) || !isValidTimeZone(timeZone)) return null;

  const today = getCalendarDate(timestamp, timeZone);
  if (!today) return null;

  let targetDate = annualBirthdayDate(birthDate, today.year);
  const comparison = compareDates(targetDate, today);
  if (comparison < 0) targetDate = annualBirthdayDate(birthDate, today.year + 1);

  const isBirthdayToday = compareDates(targetDate, today) === 0;
  const targetAt = zonedDateStart(targetDate, timeZone);
  if (!Number.isFinite(targetAt)) return null;

  return { ...targetDate, targetAt, isBirthdayToday };
}

export function formatISODate(parts) {
  if (!parts || !Number.isInteger(parts.year) ||
      !Number.isInteger(parts.month) || !Number.isInteger(parts.day)) return "";
  return String(parts.year).padStart(4, "0") + "-" +
    String(parts.month).padStart(2, "0") + "-" +
    String(parts.day).padStart(2, "0");
}
