(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  Object.assign(root, api);
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const TRAIN_BOOKINGS = [
    { id: "shinkansen-oct24", date: "2026-10-24", train: "Nozomi 261", code: "2005" },
    { id: "shinkansen-nov2", date: "2026-11-02", train: "Hikari 733", code: "2000" },
    { id: "shinkansen-himeji", date: "2026-11-02", train: "Nozomi 69", code: "2004" },
    { id: "shinkansen-nov5", date: "2026-11-05", train: "Nozomi 90", code: "2007" }
  ];

  const SEAT_PERSON = {
    "shinkansen-oct24": { "9-D": "Brian", "9-E": "Mai", "10-D": "Mom", "10-E": "Dad" },
    "shinkansen-nov2": { "17-D": "Brian", "17-E": "Mai", "18-D": "Mom", "18-E": "Dad" },
    "shinkansen-himeji": { "6-D": "Brian", "6-E": "Mai", "7-D": "Mom", "7-E": "Dad" },
    "shinkansen-nov5": { "5-D": "Brian", "5-E": "Mai", "6-D": "Mom", "6-E": "Dad" }
  };

  const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
  const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const URL_PATTERN = /https:\/\/(?:shinkansen[a-z0-9-]*\.jr-central\.co\.jp|example\.jr-central)[^\s<>"')\]]*/gi;

  function ticketEmailDate(text) {
    const named = String(text || "").match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+(\d{1,2})\b/i);
    if (!named) return "";
    const month = MONTHS[named[1].slice(0, 3).toLowerCase()];
    const day = Number(named[2]);
    if (!month || day < 1 || day > 31) return "";
    return `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function ticketEmailTrain(text) {
    const match = String(text || "").match(/\b(Nozomi|Hikari|Kodama)\s+(\d+)\b/i);
    if (!match) return "";
    const name = match[1].slice(0, 1).toUpperCase() + match[1].slice(1).toLowerCase();
    return `${name} ${match[2]}`;
  }

  function ticketEmailSeat(text) {
    const match = String(text || "").match(/\bSeat\s+([0-9]{1,2}\s*[- ]?\s*[A-Ea-e])\b/);
    if (!match) return "";
    const parts = match[1].toUpperCase().match(/(\d{1,2})\s*[- ]?\s*([A-E])/);
    return parts ? `${Number(parts[1])}-${parts[2]}` : "";
  }

  function ticketEmailCar(text) {
    const match = String(text || "").match(/\bCar\s+(\d+)\b/i);
    return match ? match[1] : "";
  }

  function ticketEmailRoute(text, train) {
    const after = train ? String(text || "").split(new RegExp(train.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"))[1] || "" : "";
    const beforeCar = after.split(/\bCar\b/i)[0] || "";
    return beforeCar.replace(/[·|]/g, " ").replace(/\s+/g, " ").replace(/^[\s\-–—]+|[\s\-–—]+$/g, "").trim();
  }

  function ticketEmailPerson(text) {
    const matches = [...String(text || "").matchAll(/\b(Mom|Dad|Mai|Brian)\b/gi)];
    if (!matches.length) return "";
    const word = matches[matches.length - 1][1];
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

  function unwrapTicketEmail(text) {
    const lines = String(text || "").replace(/\u00a0/g, " ").replace(/\r\n/g, "\n").split("\n");
    const output = [];
    for (let index = 0; index < lines.length; index += 1) {
      let line = lines[index];
      if (/^https:\/\/(?:shinkansen[a-z0-9-]*\.jr-central\.co\.jp|example\.jr-central)\S*$/i.test(line.trim())) {
        while (index + 1 < lines.length) {
          const next = lines[index + 1].trim();
          if (!next || /\s/.test(next) || /^https?:/i.test(next) || /\b(Seat|Nozomi|Hikari|Kodama|Oct|Nov|Mom|Dad|Mai|Brian)\b/i.test(next)) break;
          line += next;
          index += 1;
        }
      }
      output.push(line);
    }
    return output.join("\n");
  }

  function shortTicketDate(iso) {
    const match = String(iso || "").match(/^2026-(\d{2})-(\d{2})$/);
    if (!match) return "";
    return `${MONTH_NAMES[Number(match[1]) - 1]} ${Number(match[2])}`;
  }

  function parseTicketEmail(text) {
    const source = unwrapTicketEmail(text);
    const found = [];
    URL_PATTERN.lastIndex = 0;
    let match = URL_PATTERN.exec(source);
    while (match) {
      found.push({ url: match[0].replace(/[),.;]+$/, ""), index: match.index });
      match = URL_PATTERN.exec(source);
    }
    const seen = new Set();
    return found.flatMap((item, index) => {
      if (seen.has(item.url)) return [];
      seen.add(item.url);
      const start = index === 0 ? 0 : found[index - 1].index + found[index - 1].url.length;
      const chunk = source.slice(start, item.index);
      const date = ticketEmailDate(chunk);
      const train = ticketEmailTrain(chunk);
      const seat = ticketEmailSeat(chunk);
      const booking = TRAIN_BOOKINGS.find((row) => row.date === date && row.train.toLowerCase() === train.toLowerCase());
      const mapped = booking && seat ? SEAT_PERSON[booking.id][seat] || "" : "";
      const person = ticketEmailPerson(chunk) || mapped;
      return [{
        url: item.url,
        date,
        train,
        route: ticketEmailRoute(chunk, train),
        car: ticketEmailCar(chunk),
        seat,
        bookingId: booking ? booking.id : "",
        code: booking ? booking.code : "",
        person,
        label: booking && seat ? `${shortTicketDate(date)} ${train} Seat ${seat}` : ""
      }];
    });
  }

  function emailNeedsPhoneChoice(tickets) {
    const people = new Set((tickets || []).filter((ticket) => ticket.bookingId).map((ticket) => ticket.person));
    return people.has("Mom") && people.has("Dad");
  }

  function emailTicketsForPhone(tickets, phone) {
    const matched = (tickets || []).filter((ticket) => ticket.bookingId && ticket.seat && ticket.url);
    if (phone === "Mom" || phone === "Dad" || phone === "Mai" || phone === "Brian") {
      return matched.filter((ticket) => ticket.person === phone);
    }
    if (phone === "Both") return matched.filter((ticket) => ticket.person === "Mom" || ticket.person === "Dad");
    return matched;
  }

  return { parseTicketEmail, emailNeedsPhoneChoice, emailTicketsForPhone, shortTicketDate };
});
