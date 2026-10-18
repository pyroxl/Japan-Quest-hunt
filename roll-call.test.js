const assert = require("assert");
const {
  rollTree,
  rollSweepTree,
  rollAutoList,
  rollSweepOn,
  rollCarryOn,
  rollSwapLine,
  rollPulseAt,
  rollReady,
  rollToggle,
  rollNormalize,
  rollFlatten,
  findRoll,
  ROLL_CLOTHES
} = require("./roll-call.js");

function names(nodes) {
  return nodes.map((node) => node.name);
}

function byName(nodes, name) {
  const found = findRoll(nodes, name);
  assert.ok(found, name);
  return found;
}

const transit = rollTree("transit", "2026-10-28");
assert.deepStrictEqual(names(transit), [
  "Kroser",
  "Brian's suitcase",
  "Mai's suitcase",
  "Mai's pink backpack",
  "Travel Flame money belt"
]);

const kroser = byName(transit, "Kroser");
assert.strictEqual(kroser.leaf, false);
assert.deepStrictEqual(names(kroser.children), [
  "Passport pouch",
  "USB pocket",
  "Front organizer",
  "Top shell",
  "Laptop sleeve",
  "Main compartment",
  "Lower front",
  "Side pocket",
  "Umbrella pouch",
  "Rain gear pocket"
]);
assert.deepStrictEqual(names(byName(transit, "Passport pouch").children), ["Passport", "Chase Freedom card"]);
assert.strictEqual(byName(transit, "Passport").leaf, true);
assert.strictEqual(byName(transit, "Mai's suitcase").leaf, true);
assert.strictEqual(byName(transit, "Mai's suitcase").children.length, 0);
assert.strictEqual(byName(transit, "Mai's pink backpack").leaf, true);

const suitcaseClothes = byName(transit, "Brian's suitcase").children[0];
assert.strictEqual(suitcaseClothes.name, "Main compartment");
assert.deepStrictEqual(names(suitcaseClothes.children).slice(1), ROLL_CLOTHES);
assert.strictEqual(suitcaseClothes.children[0].name, "Lemuvet (packed flat)");

assert.strictEqual(byName(transit, "Compact umbrella (optional buy)").buy, true);
assert.strictEqual(byName(transit, "2 ponchos (buy at Narita)").buy, true);
assert.strictEqual(byName(transit, "Pocket tissues (buy)").buy, true);
assert.strictEqual(byName(transit, "Passport").buy, false);

const day = rollTree("day", "2026-10-25");
assert.deepStrictEqual(names(day), [
  "Lemuvet (on your back)",
  "Travel Flame money belt (worn)",
  "Mai's pink backpack",
  "Stays at hotel"
]);
const hotel = byName(day, "Stays at hotel");
assert.deepStrictEqual(names(hotel.children), ["Kroser", "Brian's suitcase", "Mai's suitcase"]);
assert.deepStrictEqual(names(byName(day, "Brian's suitcase").children), ROLL_CLOTHES);
assert.strictEqual(byName(day, "Mai's suitcase").leaf, true);
assert.strictEqual(byName(day, "Mai's pink backpack").leaf, true);
assert.strictEqual(byName(day, "Main glasses ? (wearing or here)").undecided, true);
assert.strictEqual(byName(day, "Handkerchief ?").undecided, true);
assert.strictEqual(byName(day, "Trash bag ?").undecided, true);
assert.strictEqual(byName(day, "AYN Portal ?").undecided, true);
assert.strictEqual(byName(day, "Water bottle").undecided, false);

const hakone = rollTree("hakone", "2026-11-09");
assert.deepStrictEqual(names(hakone), ["Kroser", "Travel Flame money belt", "Main compartment"]);
assert.strictEqual(findRoll(hakone, "Brian's suitcase"), null);
assert.strictEqual(findRoll(hakone, "Mai's suitcase"), null);
assert.strictEqual(findRoll(hakone, "Mai's pink backpack"), null);
const cube = byName(hakone, "Hakone cube");
assert.strictEqual(cube.leaf, false);
assert.deepStrictEqual(names(cube.children), ["? contents to decide"]);
assert.strictEqual(cube.children[0].undecided, true);
assert.deepStrictEqual(names(byName(hakone, "Kroser").children), names(kroser.children));

const carry = rollTree("transit", "2026-11-13");
assert.deepStrictEqual(names(carry), ["Kroser", "Mai's pink backpack", "Travel Flame money belt"]);
assert.strictEqual(rollCarryOn("2026-11-13", "transit"), true);
assert.strictEqual(rollCarryOn("2026-11-12", "transit"), false);

const sweep = rollSweepTree();
assert.deepStrictEqual(names(sweep), [
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
]);
assert.ok(sweep.every((node) => node.leaf && rollReady(node, new Set())));

function shift(iso, days) {
  const [year, month, dayOfMonth] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, dayOfMonth + days));
  return date.toISOString().slice(0, 10);
}

const expected = {
  "2026-10-24": "transit",
  "2026-10-25": "day",
  "2026-10-26": "day",
  "2026-10-27": "day",
  "2026-10-28": "transit",
  "2026-10-29": "day",
  "2026-10-30": "day",
  "2026-10-31": "day",
  "2026-11-01": "day",
  "2026-11-02": "transit",
  "2026-11-03": "day",
  "2026-11-04": "day",
  "2026-11-05": "transit",
  "2026-11-06": "day",
  "2026-11-07": "day",
  "2026-11-08": "hakone",
  "2026-11-09": "hakone",
  "2026-11-10": "hakone",
  "2026-11-11": "hakone",
  "2026-11-12": "transit",
  "2026-11-13": "transit"
};

for (let iso = "2026-10-24"; iso <= "2026-11-13"; iso = shift(iso, 1)) {
  assert.strictEqual(rollAutoList(iso), expected[iso], iso);
}
assert.strictEqual(rollAutoList("2026-10-16"), "transit");
assert.strictEqual(rollAutoList("2026-11-14"), "transit");
assert.strictEqual(rollAutoList("2026-10-23"), "transit");

["2026-10-28", "2026-11-02", "2026-11-05", "2026-11-12"].forEach((iso) => {
  assert.strictEqual(rollSweepOn(iso, "transit"), true, iso);
  assert.strictEqual(rollSweepOn(iso, "day"), false, iso);
});
["2026-10-24", "2026-11-13", "2026-11-08", "2026-11-11", "2026-10-16"].forEach((iso) => {
  assert.strictEqual(rollSweepOn(iso, "transit"), false, iso);
});

assert.strictEqual(rollSwapLine("2026-10-24"), "Move Kroser day items to Lemuvet");
assert.strictEqual(rollSwapLine("2026-10-28"), "Move Kroser day items to Lemuvet");
assert.strictEqual(rollSwapLine("2026-11-02"), "Move Kroser day items to Lemuvet");
assert.strictEqual(rollSwapLine("2026-11-05"), "Move Kroser day items to Lemuvet");
assert.strictEqual(rollSwapLine("2026-10-27"), "Move them back to Kroser");
assert.strictEqual(rollSwapLine("2026-11-01"), "Move them back to Kroser");
assert.strictEqual(rollSwapLine("2026-11-04"), "Move them back to Kroser");
assert.strictEqual(rollSwapLine("2026-11-11"), "Move them back to Kroser");
assert.strictEqual(rollSwapLine("2026-11-07"), "Pack Hakone cube + hand suitcases to Akko");
assert.strictEqual(rollSwapLine("2026-10-25"), "");

["2026-10-24", "2026-10-28", "2026-11-02", "2026-11-05", "2026-11-08", "2026-11-11", "2026-11-12", "2026-11-13"].forEach((iso) => {
  assert.strictEqual(rollPulseAt(iso, 8 * 60), true, iso);
  assert.strictEqual(rollPulseAt(iso, 18 * 60), true, iso);
});
["2026-10-27", "2026-11-01", "2026-11-04", "2026-11-07"].forEach((iso) => {
  assert.strictEqual(rollPulseAt(iso, 17 * 60 + 59), false, iso);
  assert.strictEqual(rollPulseAt(iso, 18 * 60), true, iso);
});
["2026-10-16", "2026-10-25", "2026-10-26", "2026-11-06", "2026-11-09", "2026-11-10"].forEach((iso) => {
  assert.strictEqual(rollPulseAt(iso, 12 * 60), false, iso);
  assert.strictEqual(rollPulseAt(iso, 20 * 60), false, iso);
});

const pouch = byName(transit, "Passport pouch");
const passport = byName(transit, "Passport");
const card = byName(transit, "Chase Freedom card");
let checked = new Set();
assert.strictEqual(rollReady(pouch, checked), false);
assert.strictEqual(rollReady(byName(transit, "Mai's suitcase"), checked), true);
checked = rollToggle(transit, byName(transit, "Mai's suitcase").id, checked);
assert.ok(checked.has(byName(transit, "Mai's suitcase").id));

checked = rollToggle(transit, passport.id, checked);
assert.ok(checked.has(passport.id));
checked = rollToggle(transit, pouch.id, checked);
assert.strictEqual(checked.has(pouch.id), false);

checked = rollToggle(transit, card.id, checked);
assert.strictEqual(rollReady(pouch, checked), true);
assert.strictEqual(checked.has(pouch.id), false);
checked = rollToggle(transit, pouch.id, checked);
assert.ok(checked.has(pouch.id));
assert.strictEqual(rollReady(kroser, checked), false);
checked = rollToggle(transit, kroser.id, checked);
assert.strictEqual(checked.has(kroser.id), false);

checked = rollToggle(transit, passport.id, checked);
assert.strictEqual(checked.has(passport.id), false);
assert.strictEqual(checked.has(pouch.id), false);
assert.ok(checked.has(card.id));

function checkAll(nodes) {
  let state = new Set();
  function walk(node) {
    node.children.forEach(walk);
    state = rollToggle(nodes, node.id, state);
  }
  nodes.forEach(walk);
  return state;
}

checked = checkAll(transit);
assert.strictEqual(rollFlatten(transit).every((node) => checked.has(node.id)), true);
const leaf = byName(transit, "Kindle");
checked = rollToggle(transit, leaf.id, checked);
assert.strictEqual(checked.has(leaf.id), false);
assert.strictEqual(checked.has(byName(transit, "Laptop sleeve").id), false);
assert.strictEqual(checked.has(kroser.id), false);
assert.ok(checked.has(byName(transit, "Main glasses").id));

const illegal = rollNormalize(transit, new Set([kroser.id, pouch.id]));
assert.strictEqual(illegal.has(kroser.id), false);
assert.strictEqual(illegal.has(pouch.id), false);

const leaves = rollFlatten(transit).filter((node) => node.leaf);
assert.ok(leaves.length > 1);
assert.ok(new Set(leaves.map((node) => node.level)).size > 1);

console.log("roll-call tests passed");
