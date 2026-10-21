(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  Object.assign(root, api);
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const CLOTHES = [
    "5 short-sleeve shirts",
    "3 long-sleeve shirts",
    "Grey quilted jacket",
    "1 pair of pants",
    "1 pair of jeans",
    "4 gym shorts",
    "Beanie",
    "Socks + underwear (max that fit)"
  ];

  const TRANSIT_ROWS = [
    ["Kroser", 0],
    ["Passport pouch", 1],
    ["Passport", 2],
    ["Chase Freedom card", 2],
    ["USB pocket", 1],
    ["Main power bank", 2],
    ["Front organizer", 1],
    ["Clip-on power bank", 2],
    ["2 cables", 2],
    ["US 2-pin adapter", 2],
    ["Backup earphone case", 2],
    ["Top shell", 1],
    ["Main glasses", 2],
    ["Laptop sleeve", 1],
    ["Kindle", 2],
    ["Main compartment", 1],
    ["AYN Portal", 2],
    ["Toothbrush (charged, no charger)", 2],
    ["Razor (charged, no charger)", 2],
    ["Meds pouch (original boxes)", 2],
    ["Lower front", 1],
    ["Mai's coin pouch", 2],
    ["Trash bag", 2],
    ["Handkerchief", 2],
    ["Side pocket", 1],
    ["Water bottle", 2],
    ["Umbrella pouch", 1],
    ["Compact umbrella (optional buy)", 2],
    ["Rain gear pocket", 1],
    ["2 ponchos (buy at Narita)", 2],
    ["Brian's suitcase", 0],
    ["Main compartment", 1],
    ["Lemuvet (packed flat)", 2],
    ...CLOTHES.map((name) => [name, 2]),
    ["Mai's suitcase", 0],
    ["Mai's pink backpack", 0],
    ["Travel Flame money belt", 0],
    ["Pouch", 1],
    ["Phone + Suica", 2],
    ["Pocket tissues (buy)", 2]
  ];

  const DAY_ROWS = [
    ["Lemuvet (on your back)", 0],
    ["Front pocket", 1],
    ["Mai's coin pouch", 2],
    ["Main compartment", 1],
    ["Main power bank", 2],
    ["Clip-on power bank", 2],
    ["Main glasses ? (wearing or here)", 2],
    ["2 ponchos (buy at Narita)", 2],
    ["Handkerchief ?", 2],
    ["Trash bag ?", 2],
    ["Mesh side pockets", 1],
    ["Water bottle", 2],
    ["Compact umbrella (optional buy)", 2],
    ["Travel Flame money belt (worn)", 0],
    ["Pouch", 1],
    ["Passport", 2],
    ["Chase Freedom card", 2],
    ["Phone + Suica", 2],
    ["Pocket tissues (buy)", 2],
    ["Mai's pink backpack", 0],
    ["Stays at hotel", 0],
    ["Kroser", 1],
    ["Kindle", 2],
    ["2 cables", 2],
    ["US 2-pin adapter", 2],
    ["Backup earphone case", 2],
    ["AYN Portal ?", 2],
    ["Toothbrush", 2],
    ["Razor", 2],
    ["Meds pouch", 2],
    ["Brian's suitcase", 1],
    ...CLOTHES.map((name) => [name, 2]),
    ["Mai's suitcase", 1]
  ];

  const SWEEP_ROWS = [
    "Outlets",
    "Nightstands/drawers",
    "Bed and under bed",
    "Safe",
    "Closet/hangers",
    "Bathroom",
    "Desk",
    "Fridge",
    "Floor",
    "Last look from the door"
  ].map((name) => [name, 0]);

  const TRANSIT_DATES = [
    "2026-10-24",
    "2026-10-28",
    "2026-11-02",
    "2026-11-05",
    "2026-11-12",
    "2026-11-13"
  ];
  const DAY_DATES = [
    "2026-10-25",
    "2026-10-26",
    "2026-10-27",
    "2026-10-29",
    "2026-10-30",
    "2026-10-31",
    "2026-11-01",
    "2026-11-03",
    "2026-11-04",
    "2026-11-06",
    "2026-11-07"
  ];
  const ARRIVE_NIGHTS = ["2026-10-24", "2026-10-28", "2026-11-02", "2026-11-05"];
  const PACK_BACK_NIGHTS = ["2026-10-27", "2026-11-01", "2026-11-04", "2026-11-11"];
  const PULSE_TRANSIT = [
    "2026-10-24",
    "2026-10-28",
    "2026-11-02",
    "2026-11-05",
    "2026-11-08",
    "2026-11-11",
    "2026-11-12",
    "2026-11-13"
  ];
  const PULSE_EVENING = ["2026-10-27", "2026-11-01", "2026-11-04", "2026-11-07"];
  const CARRY_ON = new Set(["Kroser", "Travel Flame money belt", "Mai's pink backpack"]);
  const LIST_LABELS = { transit: "Transit", day: "Day-to-day", hakone: "Hakone" };

  function slug(name) {
    return String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item";
  }

  function rollParse(rows) {
    const roots = [];
    const stack = [];
    rows.forEach((row, index) => {
      const next = rows[index + 1];
      const level = row[1];
      const leaf = !next || next[1] <= level;
      const name = row[0];
      const node = {
        name,
        level,
        leaf,
        buy: /buy/i.test(name),
        undecided: name.includes("?"),
        children: []
      };
      while (stack.length && stack[stack.length - 1].level >= level) stack.pop();
      if (stack.length) stack[stack.length - 1].node.children.push(node);
      else roots.push(node);
      if (!leaf) stack.push({ node, level });
    });
    assignIds(roots);
    return roots;
  }

  function assignIds(nodes, prefix) {
    const used = new Set();
    nodes.forEach((node) => {
      let base = slug(node.name);
      let id = prefix ? `${prefix}/${base}` : base;
      let n = 2;
      while (used.has(id)) {
        id = `${prefix ? `${prefix}/` : ""}${base}-${n}`;
        n += 1;
      }
      used.add(id);
      node.id = id;
      assignIds(node.children, id);
    });
  }

  function hakoneRows() {
    const kroserEnd = TRANSIT_ROWS.findIndex((row) => row[0] === "Brian's suitcase" && row[1] === 0);
    const beltAt = TRANSIT_ROWS.findIndex((row) => row[0] === "Travel Flame money belt" && row[1] === 0);
    return [
      ...TRANSIT_ROWS.slice(0, kroserEnd),
      ...TRANSIT_ROWS.slice(beltAt),
      ["Main compartment", 0],
      ["Hakone cube", 1],
      ["? contents to decide", 2],
      ["Toothbrush", 2],
      ["Razor", 2],
      ["Meds pouch", 2]
    ];
  }

  function rollTree(listId, iso) {
    if (listId === "day") return rollParse(DAY_ROWS);
    if (listId === "hakone") return rollParse(hakoneRows());
    const tree = rollParse(TRANSIT_ROWS);
    if (iso === "2026-11-13") return tree.filter((node) => CARRY_ON.has(node.name));
    return tree;
  }

  function rollSweepTree() {
    return rollParse(SWEEP_ROWS);
  }

  function rollAutoList(iso) {
    if (TRANSIT_DATES.includes(iso)) return "transit";
    if (iso >= "2026-11-08" && iso <= "2026-11-11") return "hakone";
    if (DAY_DATES.includes(iso)) return "day";
    return "transit";
  }

  function rollSweepOn(iso, listId) {
    return listId === "transit" && TRANSIT_DATES.includes(iso) && iso !== "2026-10-24" && iso !== "2026-11-13";
  }

  function rollCarryOn(iso, listId) {
    return listId === "transit" && iso === "2026-11-13";
  }

  function rollSwapLine(iso) {
    if (ARRIVE_NIGHTS.includes(iso)) return "Move Kroser day items to Lemuvet";
    if (PACK_BACK_NIGHTS.includes(iso)) return "Move them back to Kroser";
    if (iso === "2026-11-07") return "Pack Hakone cube + hand suitcases to Akko";
    return "";
  }

  function rollPulseAt(iso, minutes) {
    if (PULSE_TRANSIT.includes(iso)) return true;
    if (PULSE_EVENING.includes(iso)) return minutes >= 18 * 60;
    return false;
  }

  function rollListLabel(listId) {
    return LIST_LABELS[listId] || LIST_LABELS.transit;
  }

  function rollIndex(nodes, parent, map) {
    nodes.forEach((node) => {
      map.set(node.id, { node, parent });
      rollIndex(node.children, node, map);
    });
    return map;
  }

  function rollDescendants(node) {
    const ids = [];
    node.children.forEach((child) => {
      ids.push(child.id);
      ids.push(...rollDescendants(child));
    });
    return ids;
  }

  function rollReady(node, checked) {
    if (!node.children.length) return true;
    return rollDescendants(node).every((id) => checked.has(id));
  }

  function rollToggle(nodes, id, checked) {
    const next = new Set(checked);
    const map = rollIndex(nodes, null, new Map());
    const entry = map.get(id);
    if (!entry) return next;
    if (next.has(id)) {
      let current = entry.node;
      while (current) {
        next.delete(current.id);
        current = map.get(current.id)?.parent || null;
      }
      return next;
    }
    if (!rollReady(entry.node, next)) return next;
    next.add(id);
    return next;
  }

  function rollNormalize(nodes, checked) {
    const next = new Set(checked);
    function walk(node) {
      node.children.forEach(walk);
      if (next.has(node.id) && !rollReady(node, next)) next.delete(node.id);
    }
    nodes.forEach(walk);
    return next;
  }

  function rollStats(nodes, checked) {
    let total = 0;
    let done = 0;
    function walk(node) {
      total += 1;
      if (checked.has(node.id)) done += 1;
      node.children.forEach(walk);
    }
    nodes.forEach(walk);
    return { total, done };
  }

  function rollFlatten(nodes, out) {
    const rows = out || [];
    nodes.forEach((node) => {
      rows.push(node);
      rollFlatten(node.children, rows);
    });
    return rows;
  }

  function findRoll(nodes, name) {
    return rollFlatten(nodes).find((node) => node.name === name) || null;
  }

  return {
    rollParse,
    rollTree,
    rollSweepTree,
    rollAutoList,
    rollSweepOn,
    rollCarryOn,
    rollSwapLine,
    rollPulseAt,
    rollListLabel,
    rollReady,
    rollToggle,
    rollNormalize,
    rollStats,
    rollFlatten,
    findRoll,
    ROLL_CLOTHES: CLOTHES,
    ROLL_LIST_IDS: ["transit", "day", "hakone"]
  };
});
