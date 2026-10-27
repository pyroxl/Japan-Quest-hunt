const assert = require("assert");
const {
  BULK_DAY_DATES,
  assignPhotoDay,
  bulkDayIdForDate,
  isHeicFile,
  isPhotoFile,
  readTakenFromBytes
} = require("./bulk-photos.js");

function buildExifJpeg({ little = true, original, offsetText, prefixApp0 = false }) {
  const date = Buffer.from(`${original}\0`, "latin1");
  const off = offsetText ? Buffer.from(`${offsetText}\0`, "latin1") : null;
  const ifd0Start = 8;
  const exifStart = ifd0Start + 2 + 12 + 4;
  const exifCount = off ? 2 : 1;
  const dateAt = exifStart + 2 + exifCount * 12 + 4;
  const offAt = dateAt + date.length;
  const tiff = Buffer.alloc(off ? offAt + off.length : dateAt + date.length);
  const write16 = (value, pos) => (little ? tiff.writeUInt16LE(value, pos) : tiff.writeUInt16BE(value, pos));
  const write32 = (value, pos) => (little ? tiff.writeUInt32LE(value, pos) : tiff.writeUInt32BE(value, pos));
  write16(little ? 0x4949 : 0x4d4d, 0);
  write16(42, 2);
  write32(8, 4);
  write16(1, ifd0Start);
  write16(0x8769, ifd0Start + 2);
  write16(4, ifd0Start + 4);
  write32(1, ifd0Start + 6);
  write32(exifStart, ifd0Start + 10);
  write32(0, ifd0Start + 14);
  write16(exifCount, exifStart);
  write16(0x9003, exifStart + 2);
  write16(2, exifStart + 4);
  write32(date.length, exifStart + 6);
  write32(dateAt, exifStart + 10);
  if (off) {
    write16(0x9011, exifStart + 14);
    write16(2, exifStart + 16);
    write32(off.length, exifStart + 18);
    write32(offAt, exifStart + 22);
  }
  write32(0, exifStart + 2 + exifCount * 12);
  date.copy(tiff, dateAt);
  if (off) off.copy(tiff, offAt);
  const header = Buffer.from("Exif\0\0", "latin1");
  const length = 2 + header.length + tiff.length;
  const app1 = Buffer.concat([
    Buffer.from([0xff, 0xe1, (length >> 8) & 0xff, length & 0xff]),
    header,
    tiff
  ]);
  const app0 = prefixApp0
    ? Buffer.concat([
      Buffer.from([0xff, 0xe0, 0x00, 0x10]),
      Buffer.from([0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00])
    ])
    : Buffer.alloc(0);
  return Buffer.concat([Buffer.from([0xff, 0xd8]), app0, app1, Buffer.from([0xff, 0xd9])]);
}

function taken(bytes, lastModified) {
  const parsed = readTakenFromBytes(bytes) || {};
  return assignPhotoDay({ stamp: parsed.stamp || "", offset: parsed.offset || "", lastModified });
}

const day4 = buildExifJpeg({ original: "2026:10:26 19:05:00", prefixApp0: true });
assert.strictEqual(taken(day4, Date.parse("2020-01-01T00:00:00Z")).dayId, "day04");
assert.strictEqual(taken(day4, 0).date, "2026-10-26");

const lateNight = buildExifJpeg({ original: "2026:11:12 23:40:00" });
assert.strictEqual(taken(lateNight).dayId, "day21");
assert.strictEqual(taken(lateNight).date, "2026-11-12");

const shifted = buildExifJpeg({ little: false, original: "2026:10:26 20:30:00", offsetText: "-05:00" });
const shiftedDay = taken(shifted, Date.parse("2026-10-26T00:00:00Z"));
assert.strictEqual(shiftedDay.date, "2026-10-27");
assert.strictEqual(shiftedDay.dayId, "day05");

const tokyoOffset = buildExifJpeg({ little: false, original: "2026:10:26 08:15:00", offsetText: "+09:00" });
assert.strictEqual(taken(tokyoOffset).date, "2026-10-26");
assert.strictEqual(taken(tokyoOffset).dayId, "day04");

const arrival = buildExifJpeg({ original: "2026:10:23 16:00:00" });
assert.strictEqual(taken(arrival).dayId, "oct23");

const before = buildExifJpeg({ original: "2026:10:22 15:00:00" });
assert.strictEqual(taken(before).dayId, "");
assert.strictEqual(taken(before).date, "2026-10-22");

const partial = readTakenFromBytes(day4.subarray(0, 24));
assert.ok(partial.needMore > 24);
assert.strictEqual(taken(day4.subarray(0, partial.needMore)).dayId, "day04");

const heic = Buffer.concat([
  Buffer.from("heic-meta", "latin1"),
  Buffer.from("Exif\0\0", "latin1"),
  buildExifJpeg({ original: "2026:11:04 08:00:00" }).subarray(buildExifJpeg({ original: "2026:11:04 08:00:00" }).indexOf(Buffer.from("Exif\0\0")))
]);
assert.strictEqual(taken(heic).dayId, "day13");

const loose = Buffer.from("meta 2026:11:08 09:30:00 end", "latin1");
assert.strictEqual(taken(loose).dayId, "day17");

assert.strictEqual(assignPhotoDay({ lastModified: Date.parse("2026-11-04T18:00:00Z") }).dayId, "day14");
assert.strictEqual(assignPhotoDay({ lastModified: Date.parse("2026-11-13T02:00:00Z") }).dayId, "");
assert.strictEqual(assignPhotoDay({ lastModified: Date.parse("2026-11-13T02:00:00Z") }).date, "2026-11-13");
assert.strictEqual(assignPhotoDay({ lastModified: 0 }).dayId, "");
assert.strictEqual(bulkDayIdForDate("2026-10-22"), "");
assert.strictEqual(bulkDayIdForDate("2026-11-13"), "");

let previous = "";
BULK_DAY_DATES.forEach(([id, date], index) => {
  assert.strictEqual(bulkDayIdForDate(date), id);
  if (index) {
    const [year, month, day] = previous.split("-").map(Number);
    const next = new Date(Date.UTC(year, month - 1, day + 1)).toISOString().slice(0, 10);
    assert.strictEqual(date, next);
  }
  previous = date;
});
assert.strictEqual(BULK_DAY_DATES[0][1], "2026-10-23");
assert.strictEqual(BULK_DAY_DATES.at(-1)[1], "2026-11-12");

assert.strictEqual(isPhotoFile({ type: "image/jpeg", name: "a.jpg" }), true);
assert.strictEqual(isPhotoFile({ type: "", name: "IMG_2044.HEIC" }), true);
assert.strictEqual(isHeicFile({ type: "", name: "IMG_2044.HEIC" }), true);
assert.strictEqual(isHeicFile({ type: "image/jpeg", name: "IMG_2044.JPG" }), false);
assert.strictEqual(isPhotoFile({ type: "text/plain", name: "notes.txt" }), false);

console.log("bulk-photos.test.js ok");
