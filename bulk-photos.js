(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  Object.assign(root, api);
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const BULK_TRIP_START = "2026-10-23";
  const BULK_TRIP_END = "2026-11-13";
  const BULK_DAY_DATES = [
    ["oct23", "2026-10-23"],
    ["day02", "2026-10-24"],
    ["day03", "2026-10-25"],
    ["day04", "2026-10-26"],
    ["day05", "2026-10-27"],
    ["day06", "2026-10-28"],
    ["day07", "2026-10-29"],
    ["day08", "2026-10-30"],
    ["day09", "2026-10-31"],
    ["day10", "2026-11-01"],
    ["day11", "2026-11-02"],
    ["day12", "2026-11-03"],
    ["day13", "2026-11-04"],
    ["day14", "2026-11-05"],
    ["day15", "2026-11-06"],
    ["day16", "2026-11-07"],
    ["day17", "2026-11-08"],
    ["day18", "2026-11-09"],
    ["day19", "2026-11-10"],
    ["day20", "2026-11-11"],
    ["day21", "2026-11-12"]
  ];
  const EXIF_SIG = [0x45, 0x78, 0x69, 0x66, 0x00, 0x00];

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function parseStamp(stamp) {
    const match = /^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/.exec(String(stamp || "").trim());
    if (!match) return null;
    const parts = match.slice(1).map(Number);
    const [year, month, day, hour, minute, second] = parts;
    if (year < 1990 || year > 2100) return null;
    if (month < 1 || month > 12 || day < 1 || day > 31) return null;
    if (hour > 23 || minute > 59 || second > 59) return null;
    return { year, month, day, hour, minute, second };
  }

  function formatYmd(parts) {
    return `${parts.year}-${pad2(parts.month)}-${pad2(parts.day)}`;
  }

  function normalizeOffset(offset) {
    const match = /^([+-])(\d{2}):?(\d{2})/.exec(String(offset || "").trim());
    if (!match) return "";
    const hours = Number(match[2]);
    const mins = Number(match[3]);
    if (hours > 14 || mins > 59) return "";
    return `${match[1]}${match[2]}:${match[3]}`;
  }

  function utcFromWall(parts, offset) {
    const zone = normalizeOffset(offset) || "+09:00";
    const sign = zone[0] === "-" ? -1 : 1;
    const hours = Number(zone.slice(1, 3));
    const mins = Number(zone.slice(4, 6));
    return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second) - sign * (hours * 60 + mins) * 60000;
  }

  function tokyoDateFromMs(ms) {
    if (!Number.isFinite(ms)) return "";
    const date = new Date(ms);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(date);
  }

  function tokyoDateFromExif(stamp, offset) {
    const parts = parseStamp(stamp);
    if (!parts) return "";
    if (!normalizeOffset(offset)) return formatYmd(parts);
    return tokyoDateFromMs(utcFromWall(parts, offset));
  }

  function exifInstantIso(stamp, offset) {
    const parts = parseStamp(stamp);
    if (!parts) return "";
    return new Date(utcFromWall(parts, offset)).toISOString();
  }

  function bulkDayIdForDate(iso) {
    if (!iso || iso < BULK_TRIP_START || iso > BULK_TRIP_END) return "";
    const found = BULK_DAY_DATES.find((row) => row[1] === iso);
    return found ? found[0] : "";
  }

  function assignPhotoDay({ stamp, offset, lastModified } = {}) {
    if (parseStamp(stamp)) {
      const date = tokyoDateFromExif(stamp, offset);
      if (date) {
        return { date, dayId: bulkDayIdForDate(date), createdAt: exifInstantIso(stamp, offset) };
      }
    }
    if (Number.isFinite(lastModified) && lastModified > 0) {
      const date = tokyoDateFromMs(lastModified);
      return { date, dayId: bulkDayIdForDate(date), createdAt: new Date(lastModified).toISOString() };
    }
    return { date: "", dayId: "", createdAt: "" };
  }

  function isHeicFile(file) {
    const type = String(file?.type || "").toLowerCase();
    if (type === "image/heic" || type === "image/heif" || type === "image/heic-sequence" || type === "image/heif-sequence") return true;
    return /\.hei[cf]$/i.test(String(file?.name || ""));
  }

  function isPhotoFile(file) {
    const type = String(file?.type || "").toLowerCase();
    if (type.startsWith("image/")) return true;
    return /\.(jpe?g|png|gif|webp|heic|heif|avif)$/i.test(String(file?.name || ""));
  }

  function readAscii(bytes, start, count) {
    if (start < 0 || start >= bytes.length || count <= 0) return "";
    const end = Math.min(bytes.length, start + count);
    let text = "";
    for (let i = start; i < end; i += 1) {
      if (bytes[i] === 0) break;
      text += String.fromCharCode(bytes[i]);
    }
    return text;
  }

  function tiffReaders(bytes, tiffStart) {
    if (tiffStart < 0 || tiffStart + 8 > bytes.length) return null;
    const little = bytes[tiffStart] === 0x49 && bytes[tiffStart + 1] === 0x49;
    const big = bytes[tiffStart] === 0x4d && bytes[tiffStart + 1] === 0x4d;
    if (!little && !big) return null;
    const u16 = (pos) => {
      if (pos < 0 || pos + 1 >= bytes.length) return 0;
      return little ? bytes[pos] | (bytes[pos + 1] << 8) : (bytes[pos] << 8) | bytes[pos + 1];
    };
    const u32 = (pos) => {
      if (pos < 0 || pos + 3 >= bytes.length) return 0;
      if (little) return (bytes[pos] | (bytes[pos + 1] << 8) | (bytes[pos + 2] << 16) | (bytes[pos + 3] << 24)) >>> 0;
      return ((bytes[pos] << 24) | (bytes[pos + 1] << 16) | (bytes[pos + 2] << 8) | bytes[pos + 3]) >>> 0;
    };
    if (u16(tiffStart + 2) !== 42) return null;
    return { u16, u32 };
  }

  function readIfd(bytes, ifdPos, tiffStart, u16, u32) {
    const tags = new Map();
    if (ifdPos < 0 || ifdPos + 2 > bytes.length) return tags;
    const count = u16(ifdPos);
    if (!count || count > 80) return tags;
    for (let i = 0; i < count; i += 1) {
      const entry = ifdPos + 2 + i * 12;
      if (entry + 12 > bytes.length) break;
      const tag = u16(entry);
      const type = u16(entry + 2);
      const n = u32(entry + 4);
      const size = type === 3 ? 2 : type === 4 ? 4 : type === 5 ? 8 : 1;
      const bytesNeeded = n * size;
      let valuePos = entry + 8;
      if (bytesNeeded > 4) valuePos = tiffStart + u32(entry + 8);
      if (type === 2 || type === 7) tags.set(tag, { text: readAscii(bytes, valuePos, Math.min(n || 0, 64)) });
      else if (type === 3 && n === 1) tags.set(tag, { num: u16(valuePos) });
      else if (type === 4 && n === 1) tags.set(tag, { num: u32(valuePos) });
    }
    return tags;
  }

  function tagText(tags, tag) {
    return tags.get(tag)?.text || "";
  }

  function parseTiffDate(bytes, tiffStart) {
    const readers = tiffReaders(bytes, tiffStart);
    if (!readers) return null;
    const { u16, u32 } = readers;
    const ifd0 = readIfd(bytes, tiffStart + u32(tiffStart + 4), tiffStart, u16, u32);
    const exifPtr = ifd0.get(0x8769)?.num;
    const exif = Number.isFinite(exifPtr) ? readIfd(bytes, tiffStart + exifPtr, tiffStart, u16, u32) : new Map();
    const original = tagText(exif, 0x9003);
    const digitized = tagText(exif, 0x9004);
    const rootDate = tagText(ifd0, 0x0132);
    let stamp = "";
    let offset = "";
    if (parseStamp(original)) {
      stamp = original;
      offset = tagText(exif, 0x9011) || tagText(exif, 0x9010) || tagText(ifd0, 0x9010);
    } else if (parseStamp(digitized)) {
      stamp = digitized;
      offset = tagText(exif, 0x9012) || tagText(exif, 0x9010) || tagText(ifd0, 0x9010);
    } else if (parseStamp(rootDate)) {
      stamp = rootDate;
      offset = tagText(exif, 0x9010) || tagText(ifd0, 0x9010);
    } else return null;
    return { stamp, offset: normalizeOffset(offset) };
  }

  function readJpegTaken(bytes) {
    if (!bytes || bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
    let offset = 2;
    while (offset + 1 < bytes.length) {
      if (bytes[offset] !== 0xff) return null;
      while (offset < bytes.length && bytes[offset] === 0xff) offset += 1;
      if (offset >= bytes.length) return { needMore: bytes.length + 16 };
      const marker = bytes[offset];
      offset += 1;
      if (marker === 0xd9 || marker === 0xda) return null;
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (offset + 2 > bytes.length) return { needMore: offset + 2 };
      const segmentLength = (bytes[offset] << 8) | bytes[offset + 1];
      if (segmentLength < 2) return null;
      const next = offset + segmentLength;
      if (next > bytes.length) return { needMore: next };
      if (marker === 0xe1 && next >= offset + 8) {
        const start = offset + 2;
        if (bytes[start] === 0x45 && bytes[start + 1] === 0x78 && bytes[start + 2] === 0x69 && bytes[start + 3] === 0x66 && bytes[start + 4] === 0x00 && bytes[start + 5] === 0x00) {
          const parsed = parseTiffDate(bytes, start + 6);
          if (parsed?.stamp) return parsed;
        }
      }
      offset = next;
    }
    return null;
  }

  function indexOfBytes(bytes, needle, from) {
    for (let i = from; i + needle.length <= bytes.length; i += 1) {
      let found = true;
      for (let j = 0; j < needle.length; j += 1) {
        if (bytes[i + j] !== needle[j]) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
    return -1;
  }

  function readExifSignature(bytes) {
    let from = 0;
    while (from + 14 < bytes.length) {
      const at = indexOfBytes(bytes, EXIF_SIG, from);
      if (at < 0) return null;
      const parsed = parseTiffDate(bytes, at + 6);
      if (parsed?.stamp) return parsed;
      from = at + 6;
    }
    return null;
  }

  function readLooseStamp(bytes) {
    const match = new TextDecoder("latin1").decode(bytes).match(/(?:19|20)\d{2}:\d{2}:\d{2} \d{2}:\d{2}:\d{2}/);
    if (!match || !parseStamp(match[0])) return null;
    return { stamp: match[0], offset: "" };
  }

  function readTakenFromBytes(bytes) {
    if (!bytes || bytes.length < 8) return null;
    if (bytes[0] === 0xff && bytes[1] === 0xd8) return readJpegTaken(bytes);
    return readExifSignature(bytes) || readLooseStamp(bytes);
  }

  return {
    BULK_TRIP_START,
    BULK_TRIP_END,
    BULK_DAY_DATES,
    assignPhotoDay,
    bulkDayIdForDate,
    exifInstantIso,
    isHeicFile,
    isPhotoFile,
    readTakenFromBytes,
    tokyoDateFromExif,
    tokyoDateFromMs
  };
});
