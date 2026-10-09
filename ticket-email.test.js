const assert = require("assert");
const { parseTicketEmail, emailNeedsPhoneChoice, emailTicketsForPhone } = require("./ticket-email.js");

function link(id) {
  return `https://example.jr-central/qr/${id}`;
}

function block(date, train, route, car, seat, id) {
  return `${date} · ${train} · ${route} · Car ${car}, Seat ${seat}\n${link(id)}`;
}

const brian = [
  "Brian's 4 Shinkansen QR tickets. Scan at the gate and take the Seat Information slip.",
  block("Sat Oct 24", "Nozomi 261", "Tokyo 14:00 → Shin-Osaka 16:30", "6", "9-D", "oct24"),
  block("Mon Nov 2", "Hikari 733", "Kyoto 08:01 → Himeji 08:49", "6", "17-D", "hikari"),
  block("Mon Nov 2", "Nozomi 69", "Himeji 14:46 → Hiroshima 15:42", "14", "6-D", "nozomi69"),
  block("Thu Nov 5", "Nozomi 90", "Hiroshima 10:03 → Tokyo 13:57", "6", "5-D", "nozomi90")
].join("\n");

const parsed = parseTicketEmail(brian);
assert.strictEqual(parsed.length, 4);
assert.deepStrictEqual(parsed.map((ticket) => ticket.label), [
  "Oct 24 Nozomi 261 Seat 9-D",
  "Nov 2 Hikari 733 Seat 17-D",
  "Nov 2 Nozomi 69 Seat 6-D",
  "Nov 5 Nozomi 90 Seat 5-D"
]);
assert.deepStrictEqual(parsed.map((ticket) => ticket.bookingId), [
  "shinkansen-oct24",
  "shinkansen-nov2",
  "shinkansen-himeji",
  "shinkansen-nov5"
]);
assert.deepStrictEqual(parsed.map((ticket) => ticket.code), ["2005", "2000", "2004", "2007"]);
assert.strictEqual(parsed[0].person, "Brian");
assert.strictEqual(parsed[0].route.includes("Shin-Osaka"), true);
assert.strictEqual(emailNeedsPhoneChoice(parsed), false);

const wrapped = [
  "Sat Oct 24 · Nozomi 261 · Tokyo 14:00 → Shin-Osaka",
  "16:30 · Car 6, Seat 9-E",
  link("wrapped-start"),
  "token"
].join("\n");
const wrappedTicket = parseTicketEmail(wrapped)[0];
assert.strictEqual(wrappedTicket.seat, "9-E");
assert.strictEqual(wrappedTicket.person, "Mai");
assert.strictEqual(wrappedTicket.url, `${link("wrapped-start")}token`);

const joined = `Mon Nov 2 · Hikari 733 · Kyoto 08:01 → Himeji 08:49 · Car 6, Seat 17-E ${link("joined")}`;
assert.strictEqual(parseTicketEmail(joined)[0].person, "Mai");
assert.strictEqual(parseTicketEmail(joined)[0].bookingId, "shinkansen-nov2");

const parents = [
  "Mom",
  block("Sat Oct 24", "Nozomi 261", "Tokyo 14:00 → Shin-Osaka 16:30", "6", "10-D", "mom24"),
  "Dad",
  block("Sat Oct 24", "Nozomi 261", "Tokyo 14:00 → Shin-Osaka 16:30", "6", "10-E", "dad24"),
  "Mom",
  block("Mon Nov 2", "Hikari 733", "Kyoto 08:01 → Himeji 08:49", "6", "18-D", "mom-hikari"),
  "Dad",
  block("Mon Nov 2", "Hikari 733", "Kyoto 08:01 → Himeji 08:49", "6", "18-E", "dad-hikari"),
  "Mom",
  block("Mon Nov 2", "Nozomi 69", "Himeji 14:46 → Hiroshima 15:42", "14", "7-D", "mom69"),
  "Dad",
  block("Mon Nov 2", "Nozomi 69", "Himeji 14:46 → Hiroshima 15:42", "14", "7-E", "dad69"),
  "Mom",
  block("Thu Nov 5", "Nozomi 90", "Hiroshima 10:03 → Tokyo 13:57", "6", "6-D", "mom90"),
  "Dad",
  block("Thu Nov 5", "Nozomi 90", "Hiroshima 10:03 → Tokyo 13:57", "6", "6-E", "dad90")
].join("\n");
const parentTickets = parseTicketEmail(parents);
assert.strictEqual(parentTickets.length, 8);
assert.strictEqual(emailNeedsPhoneChoice(parentTickets), true);
assert.strictEqual(emailTicketsForPhone(parentTickets, "Mom").length, 4);
assert.deepStrictEqual(emailTicketsForPhone(parentTickets, "Dad").map((ticket) => ticket.seat), ["10-E", "18-E", "7-E", "6-E"]);
assert.strictEqual(emailTicketsForPhone(parentTickets, "Both").length, 8);

const duplicate = `${block("Sat Oct 24", "Nozomi 261", "Tokyo 14:00 → Shin-Osaka 16:30", "6", "9-D", "same")}\n${block("Sat Oct 24", "Nozomi 261", "Tokyo 14:00 → Shin-Osaka 16:30", "6", "9-D", "same")}`;
assert.strictEqual(parseTicketEmail(duplicate).length, 1);

const unknown = `Sat Oct 31 · Nozomi 1 · Tokyo 10:00 → Kyoto 12:00 · Car 1, Seat 1-A\n${link("unknown")}`;
assert.strictEqual(parseTicketEmail(unknown)[0].bookingId, "");

console.log("ticket email parser: ok");
