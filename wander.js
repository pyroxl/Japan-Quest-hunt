function mapsQuery(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsWalk(origin, destination, waypoints) {
  const url = new URL("https://www.google.com/maps/dir/");
  url.searchParams.set("api", "1");
  url.searchParams.set("origin", origin);
  url.searchParams.set("destination", destination);
  if (waypoints) url.searchParams.set("waypoints", waypoints);
  url.searchParams.set("travelmode", "walking");
  return url.toString();
}

const WANDER_DAY = {
  day02: { city: "osaka", areas: ["hommachi"], energy: "low", window: "evening", count: 1 },
  day03: { city: "osaka", areas: ["shinsekai"], energy: "medium", window: "afternoon", count: 0 },
  day04: { city: "osaka", areas: ["tenma", "shinsaibashi"], energy: "medium", window: "afternoon", count: 1 },
  day05: { city: "osaka", areas: ["hommachi"], energy: "low", window: "evening", count: 1 },
  day06: { city: "kyoto", areas: ["kiyamachi", "karasuma"], energy: "low", window: "evening", count: 1 },
  day07: { city: "kyoto", areas: ["gion"], energy: "low", window: "evening", count: 2 },
  day08: { city: "kyoto", areas: ["arashiyama"], energy: "medium", window: "afternoon", count: 0 },
  day09: { city: "kyoto", areas: ["central"], energy: "low", window: "evening", count: 0 },
  day10: { city: "kyoto", areas: ["kiyamachi", "karasuma"], energy: "low", window: "evening", count: 1 },
  day11: { city: "hiroshima", areas: ["station"], energy: "low", window: "evening", count: 1 },
  day12: { city: "hiroshima", areas: ["peace"], energy: "low", window: "afternoon", count: 0 },
  day13: { city: "hiroshima", areas: ["station"], energy: "low", window: "evening", count: 0 },
  day14: { city: "tokyo", areas: ["nishi-shinjuku"], energy: "low", window: "evening", count: 1 },
  day15: { city: "tokyo", areas: ["kichijoji"], energy: "medium", window: "day", count: 2 },
  day16: { city: "tokyo", areas: ["nishi-shinjuku"], energy: "low", window: "evening", count: 2 },
  day17: { city: "hakone", areas: ["gora"], energy: "low", window: "afternoon", count: 1 },
  day18: { city: "hakone", areas: ["gora"], energy: "high", window: "day", count: 0 },
  day19: { city: "hakone", areas: ["gora"], energy: "high", window: "day", count: 0 },
  day20: { city: "tokyo", areas: ["nishi-shinjuku"], energy: "low", window: "evening", count: 1 },
  day21: { city: "tokyo", areas: ["ginza"], energy: "medium", window: "afternoon", count: 0 }
};

const WANDER_IDEAS = {
  osaka: [
    { id: "shinsaibashi-suji", name: "Shinsaibashi-suji", why: "A covered shopping street for a short look, then back.", travel: "About 10 minutes on foot from Hotel Cordia.", maps: mapsQuery("Shinsaibashi-suji Shopping Street Osaka"), areas: ["hommachi", "shinsaibashi"], energy: "low", when: ["evening", "afternoon"], rank: 0 },
    { id: "namba-yasaka", name: "Namba Yasaka Shrine", why: "A small shrine stop. The lion stage is the whole visit.", travel: "About 15 minutes on foot from Hommachi.", maps: mapsQuery("Namba Yasaka Shrine Osaka"), areas: ["namba", "hommachi"], energy: "low", when: ["evening"], rank: 1 },
    { id: "tenma-arcade", name: "Tenjinbashi-suji at Tenma", why: "A long covered arcade beside the dinner streets.", travel: "About 20 minutes from Hommachi by subway to Minami-morimachi.", maps: mapsQuery("Tenjinbashi-suji Shopping Street Osaka"), areas: ["tenma"], energy: "medium", when: ["afternoon", "evening"], rank: 0 }
  ],
  kyoto: [
    { id: "shirakawa", name: "Shirakawa lane", why: "The willow canal in Gion. Walk one block and turn around.", travel: "You are already in Gion after lunch.", maps: mapsQuery("Shirakawa River Gion Kyoto"), areas: ["gion"], energy: "low", when: ["evening"], rank: 0 },
    { id: "yasaka-lanterns", name: "Yasaka Shrine lanterns", why: "The shrine is open, and the lanterns are the evening view.", travel: "A few minutes from Shirakawa or Gion-Shijo.", maps: mapsQuery("Yasaka Shrine Kyoto"), areas: ["gion"], energy: "low", when: ["evening"], rank: 1 },
    { id: "kiyamachi", name: "Kiyamachi canal", why: "A flat walk east of the hotel along the canal.", travel: "About 10 minutes on foot from Hotel Monterey Kyoto.", maps: mapsQuery("Kiyamachi Sanjo Kyoto"), areas: ["kiyamachi", "karasuma"], energy: "low", when: ["evening"], rank: 0 }
  ],
  hiroshima: [
    { id: "hondori", name: "Hondori arcade", why: "A covered street if you want ten minutes out of the hotel.", travel: "About 10 minutes on foot from Hotel Granvia Hiroshima.", maps: mapsQuery("Hondori Shopping Street Hiroshima"), areas: ["station"], energy: "low", when: ["evening"], rank: 0 }
  ],
  tokyo: [
    { id: "hotel-block", name: "Hotel-block loop", why: "Stay on the streets around the hotel. Stop at the first place to sit.", travel: "Starts at Nishi-shinjuku-gochome Station, next to the hotel.", maps: mapsQuery("Nishi-shinjuku-gochome Station"), areas: ["nishi-shinjuku"], energy: "low", when: ["evening"], rank: 0 },
    { id: "tocho", name: "Metropolitan Government observatories", why: "Free lookouts with seats inside. Cafes are downstairs.", travel: "Toei Oedo line from Nishi-shinjuku-gochome to Tochomae, about 10 minutes.", maps: mapsQuery("Tokyo Metropolitan Government Building"), areas: ["nishi-shinjuku"], energy: "low", when: ["evening", "afternoon"], rank: 1 },
    { id: "hachimangu", name: "Musashino Hachimangu", why: "A small shrine at the edge of Inokashira Park.", travel: "About 8 minutes on foot from Kichijoji Station.", maps: mapsQuery("Musashino Hachimangu Kichijoji"), areas: ["kichijoji"], energy: "low", when: ["day", "afternoon"], rank: 0 },
    { id: "nakamichi", name: "Nakamichi-dori", why: "A covered shopping street for one snack or a bakery check.", travel: "About 3 minutes on foot from Kichijoji Station.", maps: mapsQuery("Nakamichi-dori Kichijoji"), areas: ["kichijoji"], energy: "medium", when: ["day", "afternoon", "evening"], rank: 1 }
  ],
  hakone: [
    { id: "gora-park", name: "Gora Park", why: "A short garden walk if the museum ends early.", travel: "About 10 minutes on foot from Tokinoyu Setsugetsuka.", maps: mapsQuery("Gora Park Hakone"), areas: ["gora"], energy: "low", when: ["afternoon"], rank: 0 }
  ]
};

const WALKING_LOOPS = [
  { name: "Kichijoji–Inokashira Park", areas: ["kichijoji"], minutes: "About 50 minutes", exit: "Turn back along the pond path to Kichijoji Station whenever you want.", url: mapsWalk("Kichijoji Station", "Kichijoji Station", "Inokashira Park") },
  { name: "Gion–Shirakawa–Kamo River", areas: ["gion"], minutes: "About 40 minutes", exit: "Leave at Shijo Bridge or Gion-Shijo Station.", url: mapsWalk("Gion-Shijo Station", "Gion-Shijo Station", "Shirakawa River Gion|Shijo Ohashi Bridge") },
  { name: "Hommachi–Shinsaibashi", areas: ["hommachi"], minutes: "About 30 minutes", exit: "Turn around at Shinsaibashi and walk back to the hotel.", url: mapsWalk("Hotel Cordia Osaka Hommachi", "Hotel Cordia Osaka Hommachi", "Shinsaibashi-suji Shopping Street") },
  { name: "Kiyamachi–Kamo River", areas: ["kiyamachi", "karasuma"], minutes: "About 35 minutes", exit: "Cross back at Sanjo or Oike and walk to the hotel.", url: mapsWalk("Hotel Monterey Kyoto", "Hotel Monterey Kyoto", "Kiyamachi Sanjo|Sanjo Ohashi") },
  { name: "Hondori and back", areas: ["station"], minutes: "About 25 minutes", exit: "The arcade is straight. Walk back to Hiroshima Station.", url: mapsWalk("Hotel Granvia Hiroshima", "Hotel Granvia Hiroshima", "Hondori Shopping Street Hiroshima") },
  { name: "Nishi-Shinjuku south loop", areas: ["nishi-shinjuku"], minutes: "About 30 minutes", exit: "The hotel is on the loop. Stop when you want to sit down.", url: mapsWalk("Nishi-shinjuku-gochome Station", "Nishi-shinjuku-gochome Station", "Shinjuku Central Park") },
  { name: "Gora station loop", areas: ["gora"], minutes: "About 25 minutes", exit: "Walk back to Gora Station. The hotel is about one minute from there.", url: mapsWalk("Gora Station", "Gora Station", "Gora Park Hakone") }
];

const EVENING_OPTIONS = {
  day02: { mode: "later", note: "One short walk after check-in, then dinner. Stop when you are tired." },
  day06: { mode: "later", note: "Only after you are checked in at Hotel Monterey." },
  day07: { mode: "after", anchor: "Tempura Endo", note: "The sightseeing day is already done. Stay around Gion if you want to keep walking." },
  day10: { mode: "later", note: "Only after you are back from Mt Hiei." },
  day14: { mode: "after", anchor: "check-in", note: "One short walk near the hotel, then dinner." },
  day16: { mode: "after", anchor: "Shibuya", note: "Use these if the evening with Akko does not happen." },
  day20: { mode: "later", note: "Only if the Romancecar gets you back with time to spare." }
};

const DINNER_NOTE = "A walk-in does not guarantee a table.";

const WALK_IN_DINNERS = {
  osaka: {
    title: "Walk-in dinner near Hommachi",
    places: [
      { name: "Kyo Chabana Shinsaibashi", why: "Okonomiyaki, including a tomato one. Non-smoking on Tabelog. Open daily from 17:00. About 10 minutes on foot from Hommachi.", maps: mapsQuery("お好み焼き 京ちゃばな 心斎橋南船場店") },
      { name: "Okonomiyaki Dan", why: "Okonomiyaki. Non-smoking on Tabelog. Opens at 17:00. Closed Sunday. About 15 minutes on foot from Hommachi.", maps: mapsQuery("お好み焼だん 心斎橋筋") }
    ]
  },
  kyoto: {
    title: "Walk-in dinner near Karasuma",
    places: [
      { name: "Motoi Gyoza", why: "Gyoza. Non-smoking on Tabelog. No reservations. Closed Wednesday. About 5 minutes on foot from Karasuma Station.", maps: mapsQuery("モトイギョーザ 京都 柳馬場") },
      { name: "DONGURI Shijo Karasuma", why: "Okonomiyaki. Non-smoking on Tabelog. Opens at 17:00. Closed days vary. About 2 minutes on foot from Shijo Station.", maps: mapsQuery("どんぐり 四条烏丸店") },
      { name: "Kiten Ya", why: "Tempura. Non-smoking on Tabelog. Closed Sunday. About 5 minutes on foot from Karasuma Station.", maps: mapsQuery("奇天屋 京都 高倉") }
    ]
  },
  hiroshima: {
    title: "Walk-in dinner at Hiroshima Station",
    places: [
      { name: "Denkosekka ekie", why: "Hiroshima okonomiyaki. Non-smoking on Tabelog. No reservations. Inside ekie at the station.", maps: mapsQuery("電光石火 ekie広島店") },
      { name: "Micchan Sohonten ekie", why: "Hiroshima okonomiyaki. Non-smoking on Tabelog. No reservations. On the ekie 1st floor.", maps: mapsQuery("お好み焼みっちゃん総本店 ekie") },
      { name: "Hiroshima Gyoza Ryu ekie", why: "Gyoza. Non-smoking on Tabelog. No reservations. On the ekie 2nd floor.", maps: mapsQuery("ひろしまギョウザ 餃子家 龍 ekie") }
    ]
  },
  tokyo: {
    title: "Walk-in dinner near Nishi-Shinjuku",
    places: [
      { name: "Ebisu Gyoza Daifuki", why: "Gyoza. Non-smoking on Tabelog. Beside Nishi-shinjuku-gochome Station.", maps: mapsQuery("恵比寿餃子 大豊記 西新宿") },
      { name: "Shibuya Gyoza Shinjuku West", why: "Gyoza, and mapo tofu. Non-smoking on Tabelog. About 15 minutes on foot, or one train stop to Shinjuku.", maps: mapsQuery("渋谷餃子 新宿西口店") },
      { name: "Tofu Kichiza, Keio Department Store", why: "Tofu and tempura on the restaurant floor. Non-smoking on Tabelog. About 15 minutes on foot to Shinjuku, then the 8th floor.", maps: mapsQuery("とうふ料理 吉座 京王百貨店新宿店") }
    ]
  }
};

const DINNER_DAYS = {
  day02: "osaka",
  day06: "kyoto",
  day07: "kyoto",
  day10: "kyoto",
  day11: "hiroshima",
  day13: "hiroshima",
  day14: "tokyo",
  day15: "tokyo",
  day16: "tokyo",
  day20: "tokyo"
};

const DINNER_LEAD = {
  day11: "Reichan is still the plan. These are other non-smoking walk-ins at the station.",
  day13: "For a station dinner on the way back from Miyajima."
};

const PARENT_DAYS = new Set(["day17", "day18", "day19"]);

const PARENT_IDEAS = [
  { name: "Shinjuku Gyoen", why: "Benches and a greenhouse. Go in the morning. The garden closes in the late afternoon.", travel: "Toei Oedo line from Nishi-shinjuku-gochome to Shinjuku, then walk about 12 minutes.", maps: mapsQuery("Shinjuku Gyoen") },
  { name: "Metropolitan Government observatories", why: "Free lookouts with seats inside. Cafes are downstairs.", travel: "Toei Oedo line from Nishi-shinjuku-gochome to Tochomae, about 10 minutes.", maps: mapsQuery("Tokyo Metropolitan Government Building") },
  { name: "Shinjuku Central Park", why: "A flat park with benches, beside the government towers.", travel: "Same Tochomae ride, about 10 minutes. Or walk north from the hotel.", maps: mapsQuery("Shinjuku Central Park") }
];

function wanderProfile(dayId) {
  return WANDER_DAY[dayId] || null;
}

function ideaScore(idea, profile) {
  const areaHit = idea.areas.some((area) => profile.areas.includes(area));
  if (!areaHit) return -1;
  let score = 6;
  if (idea.energy === profile.energy) score += 2;
  else if (profile.energy === "medium" && idea.energy === "low") score += 1;
  else if (profile.energy === "low" && idea.energy === "high") score -= 4;
  if (idea.when.includes(profile.window) || idea.when.includes("any")) score += 2;
  else score -= 2;
  return score;
}

function bestWanderPicks(dayId) {
  const profile = wanderProfile(dayId);
  if (!profile || !profile.count) return [];
  return (WANDER_IDEAS[profile.city] || [])
    .map((idea) => ({ idea, score: ideaScore(idea, profile) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.idea.rank - b.idea.rank)
    .slice(0, profile.count)
    .map((row) => row.idea);
}

function wanderLoop(dayId) {
  const profile = wanderProfile(dayId);
  if (!profile) return null;
  return WALKING_LOOPS.find((loop) => loop.areas.some((area) => profile.areas.includes(area))) || null;
}

function wanderCard(item) {
  return `<article class="wander-card">
    <h3>${escapeHtml(item.name)}</h3>
    <p>${escapeHtml(item.why)}</p>
    ${item.travel ? `<p>${escapeHtml(item.travel)}</p>` : ""}
    <p><a href="${escapeHtml(item.maps || item.url)}" target="_blank" rel="noopener noreferrer">Open in Maps</a></p>
  </article>`;
}

function wanderInnerHtml(day) {
  const profile = wanderProfile(day.id);
  if (!profile) return "";
  const parts = [];
  const evening = EVENING_OPTIONS[day.id];
  if (evening) {
    const heading = evening.mode === "after" ? `After ${evening.anchor}: options` : "Later, if you feel like it";
    parts.push(`<h3 class="wander-kicker">${escapeHtml(heading)}</h3>`);
    if (evening.note) parts.push(`<p class="wander-note">${escapeHtml(evening.note)}</p>`);
  }
  const picks = bestWanderPicks(day.id);
  if (picks.length) {
    parts.push(`<h3 class="wander-kicker">Best fit today</h3>`);
    parts.push(picks.map(wanderCard).join(""));
  }
  const loop = wanderLoop(day.id);
  if (loop) {
    parts.push(`<h3 class="wander-kicker">A short loop</h3>`);
    parts.push(wanderCard({ name: loop.name, why: loop.exit, travel: loop.minutes, url: loop.url }));
  }
  const dinnerKey = DINNER_DAYS[day.id];
  const dinner = dinnerKey ? WALK_IN_DINNERS[dinnerKey] : null;
  if (dinner) {
    const lead = DINNER_LEAD[day.id] ? `${DINNER_LEAD[day.id]} ` : "";
    parts.push(`<h3 class="wander-kicker">${escapeHtml(dinner.title)}</h3>`);
    parts.push(`<p class="wander-note">${escapeHtml(`${lead}${DINNER_NOTE}`)}</p>`);
    parts.push(dinner.places.map(wanderCard).join(""));
  }
  if (PARENT_DAYS.has(day.id)) {
    parts.push(`<h3 class="wander-kicker">Parents in Tokyo · Nov 8–10</h3>`);
    parts.push(`<p class="wander-note">Easy ideas near Nishi-Shinjuku, each with a place to sit. Parents are at APA Nishi-Shinjuku Gochome through Nov 10.</p>`);
    parts.push(PARENT_IDEAS.map(wanderCard).join(""));
    parts.push(`<h3 class="wander-kicker">${escapeHtml(WALK_IN_DINNERS.tokyo.title)}</h3>`);
    parts.push(`<p class="wander-note">${escapeHtml(DINNER_NOTE)}</p>`);
    parts.push(WALK_IN_DINNERS.tokyo.places.map(wanderCard).join(""));
    parts.push(`<h3 class="wander-kicker">Nov 10 · Haneda</h3>`);
    parts.push(`<p class="wander-note">UA804 leaves Haneda at 16:50. Leave the hotel by about 13:30. Take the Toei Oedo line to Daimon, then the Asakusa line to Haneda. Allow about 50 minutes.</p>`);
    parts.push(`<p><a href="${escapeHtml(mapsQuery("Haneda Airport Terminal 3"))}" target="_blank" rel="noopener noreferrer">Open Haneda in Maps</a></p>`);
  }
  return parts.join("");
}
