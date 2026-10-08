var ROOT_FOLDER_NAME = "Japan Trip Journal 2026";
var SHEET_NAME = "Japan Trip Journal notes";
var HEADERS = ["timestamp", "dayId", "date", "author", "note", "photo file ids"];
var DAYS = {
  day02: { date: "2026-10-24", folder: "2026-10-24 Day 2 Osaka" },
  day03: { date: "2026-10-25", folder: "2026-10-25 Day 3 Osaka" },
  day04: { date: "2026-10-26", folder: "2026-10-26 Day 4 Osaka" },
  day05: { date: "2026-10-27", folder: "2026-10-27 Day 5 Osaka" },
  day06: { date: "2026-10-28", folder: "2026-10-28 Day 6 Kyoto" },
  day07: { date: "2026-10-29", folder: "2026-10-29 Day 7 Kyoto" },
  day08: { date: "2026-10-30", folder: "2026-10-30 Day 8 Kyoto" },
  day09: { date: "2026-10-31", folder: "2026-10-31 Day 9 Kyoto" },
  day10: { date: "2026-11-01", folder: "2026-11-01 Day 10 Kyoto" },
  day11: { date: "2026-11-02", folder: "2026-11-02 Day 11 Hiroshima" },
  day12: { date: "2026-11-03", folder: "2026-11-03 Day 12 Hiroshima" },
  day13: { date: "2026-11-04", folder: "2026-11-04 Day 13 Hiroshima" },
  day14: { date: "2026-11-05", folder: "2026-11-05 Day 14 Tokyo" },
  day15: { date: "2026-11-06", folder: "2026-11-06 Day 15 Tokyo" },
  day16: { date: "2026-11-07", folder: "2026-11-07 Day 16 Tokyo" },
  day17: { date: "2026-11-08", folder: "2026-11-08 Day 17 Hakone" },
  day18: { date: "2026-11-09", folder: "2026-11-09 Day 18 Hakone" },
  day19: { date: "2026-11-10", folder: "2026-11-10 Day 19 Hakone" },
  day20: { date: "2026-11-11", folder: "2026-11-11 Day 20 Tokyo" },
  day21: { date: "2026-11-12", folder: "2026-11-12 Day 21 Tokyo" }
};

function doPost(e) {
  var body = {};
  try {
    body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  } catch (err) {
    return respond({ ok: false, error: "Bad request." });
  }
  if (!passcodeOk(body.passcode)) return respond({ ok: false, error: "Wrong passcode." });
  try {
    if (body.action === "uploadPhoto") return respond(uploadPhoto(body));
    if (body.action === "saveNote") return respond(saveNote(body));
    if (body.action === "list") return respond(listJournal(body));
    if (body.action === "thumb") return respond({ ok: true, thumb: thumbBase64(body.fileId) });
    return respond({ ok: false, error: "Unknown action." });
  } catch (err) {
    return respond({ ok: false, error: String(err && err.message || err) });
  }
}

function doGet(e) {
  var params = (e && e.parameter) || {};
  if (!passcodeOk(params.passcode)) {
    return ContentService.createTextOutput("Wrong passcode.").setMimeType(ContentService.MimeType.TEXT);
  }
  if (params.action === "thumb") {
    return ContentService.createTextOutput(thumbBase64(params.id)).setMimeType(ContentService.MimeType.TEXT);
  }
  return ContentService.createTextOutput("Japan Trip Journal.").setMimeType(ContentService.MimeType.TEXT);
}

function respond(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function passcodeOk(value) {
  var expected = PropertiesService.getScriptProperties().getProperty("JOURNAL_PASSCODE") || "";
  var given = String(value || "");
  if (!expected || expected.length !== given.length) return false;
  var mismatch = 0;
  for (var i = 0; i < expected.length; i++) mismatch |= expected.charCodeAt(i) ^ given.charCodeAt(i);
  return mismatch === 0;
}

function folderByName(parent, name) {
  var matches = parent.getFoldersByName(name);
  if (matches.hasNext()) return matches.next();
  return parent.createFolder(name);
}

function ensureJournal() {
  var props = PropertiesService.getScriptProperties();
  var root;
  var rootId = props.getProperty("JOURNAL_ROOT_ID");
  if (rootId) {
    try { root = DriveApp.getFolderById(rootId); } catch (err) { root = null; }
  }
  if (!root) {
    var roots = DriveApp.getFoldersByName(ROOT_FOLDER_NAME);
    root = roots.hasNext() ? roots.next() : DriveApp.createFolder(ROOT_FOLDER_NAME);
    props.setProperty("JOURNAL_ROOT_ID", root.getId());
  }
  var sheetId = props.getProperty("JOURNAL_SHEET_ID");
  var book = null;
  if (sheetId) {
    try { book = SpreadsheetApp.openById(sheetId); } catch (err) { book = null; }
  }
  if (!book) {
    var files = DriveApp.getFilesByName(SHEET_NAME);
    if (files.hasNext()) book = SpreadsheetApp.open(files.next());
    else book = SpreadsheetApp.create(SHEET_NAME);
    props.setProperty("JOURNAL_SHEET_ID", book.getId());
    var file = DriveApp.getFileById(book.getId());
    root.addFile(file);
  }
  var sheet = book.getSheets()[0];
  if (sheet.getLastRow() < 1) sheet.appendRow(HEADERS);
  else if (String(sheet.getRange(1, 1).getValue()) !== HEADERS[0]) sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  Object.keys(DAYS).forEach(function (dayId) {
    folderByName(root, DAYS[dayId].folder);
  });
  return { root: root, sheet: sheet };
}

function dayInfo(body) {
  var known = DAYS[body.dayId] || null;
  return {
    date: (known && known.date) || body.date || "",
    folder: (known && known.folder) || ((body.date || "undated") + " " + (body.dayId || "day"))
  };
}

function nowStamp() {
  return Utilities.formatDate(new Date(), "Asia/Tokyo", "yyyy-MM-dd'T'HH:mm:ssXXX");
}

function parsePhotos(cell) {
  if (!cell) return [];
  try {
    var data = JSON.parse(cell);
    return Object.prototype.toString.call(data) === "[object Array]" ? data : [];
  } catch (err) {
    return [];
  }
}

function findAuthorRow(sheet, dayId, author) {
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][1]) === String(dayId) && String(values[i][3]) === String(author)) return i + 1;
  }
  return 0;
}

function findClientPhoto(sheet, clientId) {
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    var photos = parsePhotos(values[i][5]);
    for (var p = 0; p < photos.length; p++) {
      if (photos[p].clientId === clientId) return photos[p];
    }
  }
  return null;
}

function cleanBase64(value) {
  var text = String(value || "");
  var comma = text.indexOf(",");
  return comma >= 0 ? text.slice(comma + 1) : text;
}

function uploadPhoto(body) {
  if (!body.dayId || !body.author || !body.clientId || !body.image) {
    return { ok: false, error: "Photo data is incomplete." };
  }
  var journal = ensureJournal();
  var existing = findClientPhoto(journal.sheet, body.clientId);
  if (existing) return { ok: true, fileId: existing.fileId, thumbFileId: existing.thumbFileId || "", duplicate: true };
  var info = dayInfo(body);
  var folder = folderByName(journal.root, info.folder);
  var image = Utilities.newBlob(Utilities.base64Decode(cleanBase64(body.image)), "image/jpeg", body.clientId + ".jpg");
  var file = folder.createFile(image);
  var thumbFileId = "";
  if (body.thumb) {
    var thumbBlob = Utilities.newBlob(Utilities.base64Decode(cleanBase64(body.thumb)), "image/jpeg", body.clientId + "-thumb.jpg");
    thumbFileId = folder.createFile(thumbBlob).getId();
  }
  var photo = {
    clientId: body.clientId,
    fileId: file.getId(),
    thumbFileId: thumbFileId,
    caption: body.caption || "",
    createdAt: body.createdAt || nowStamp()
  };
  var row = findAuthorRow(journal.sheet, body.dayId, body.author);
  if (!row) {
    journal.sheet.appendRow([nowStamp(), body.dayId, info.date, body.author, "", JSON.stringify([photo])]);
  } else {
    var photos = parsePhotos(journal.sheet.getRange(row, 6).getValue());
    photos.push(photo);
    journal.sheet.getRange(row, 1).setValue(nowStamp());
    journal.sheet.getRange(row, 3).setValue(info.date);
    journal.sheet.getRange(row, 6).setValue(JSON.stringify(photos));
  }
  return { ok: true, fileId: file.getId(), thumbFileId: thumbFileId };
}

function saveNote(body) {
  if (!body.dayId || !body.author) return { ok: false, error: "Note data is incomplete." };
  var journal = ensureJournal();
  var info = dayInfo(body);
  var row = findAuthorRow(journal.sheet, body.dayId, body.author);
  if (!row) {
    journal.sheet.appendRow([nowStamp(), body.dayId, info.date, body.author, body.text || "", "[]"]);
  } else {
    journal.sheet.getRange(row, 1).setValue(nowStamp());
    journal.sheet.getRange(row, 3).setValue(info.date);
    journal.sheet.getRange(row, 5).setValue(body.text || "");
  }
  return { ok: true };
}

function thumbBase64(fileId) {
  if (!fileId) return "";
  var blob = DriveApp.getFileById(fileId).getBlob();
  if (blob.getBytes().length > 250000) return "";
  return Utilities.base64Encode(blob.getBytes());
}

function listJournal(body) {
  var journal = ensureJournal();
  var values = journal.sheet.getDataRange().getValues();
  var notes = [];
  var photos = [];
  for (var i = 1; i < values.length; i++) {
    if (body.dayId && String(values[i][1]) !== String(body.dayId)) continue;
    notes.push({
      timestamp: String(values[i][0] || ""),
      dayId: String(values[i][1] || ""),
      date: String(values[i][2] || ""),
      author: String(values[i][3] || ""),
      note: String(values[i][4] || "")
    });
    parsePhotos(values[i][5]).forEach(function (photo) {
      var thumbId = photo.thumbFileId || photo.fileId;
      photos.push({
        dayId: String(values[i][1] || ""),
        author: String(values[i][3] || ""),
        fileId: photo.fileId || "",
        thumbFileId: photo.thumbFileId || "",
        caption: photo.caption || "",
        createdAt: photo.createdAt || "",
        thumb: body.dayId ? thumbBase64(thumbId) : ""
      });
    });
  }
  return { ok: true, notes: notes, photos: photos };
}
