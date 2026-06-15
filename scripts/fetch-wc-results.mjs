#!/usr/bin/env node
// Fetch finished 2026 World Cup results from ESPN's public scoreboard API
// (no API key) and write scores into src/_data/worldcup.js.
//
//   node scripts/fetch-wc-results.mjs
//
// Only matches whose BOTH teams are in our data and that ESPN marks finished
// ("post") are updated. Standings recompute on the next `npm run build`.

import fs from "fs";

const DATA_FILE = "src/_data/worldcup.js";
const ESPN = (d) =>
  `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${d}`;
const START = "2026-06-11";
const END = "2026-07-20";
const HEADERS = { "User-Agent": "mansurov.me-worldcup/1.0 (personal site)" };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// GET JSON with polite backoff on 429/5xx. Returns null on give-up.
async function fetchJson(url, retries = 3) {
  let delay = 1000;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (res.ok) return res.json();
      if (![429, 500, 502, 503, 504].includes(res.status) || attempt === retries) return null;
      const wait = Number(res.headers.get("retry-after")) * 1000 || delay;
      await sleep(wait);
      delay *= 2;
    } catch {
      if (attempt === retries) return null;
      await sleep(delay);
      delay *= 2;
    }
  }
  return null;
}

// ESPN display name -> our canonical name (only where they differ)
const ALIASES = {
  "Bosnia-Herzegovina": "Bosnia and Herzegovina",
  "Bosnia & Herzegovina": "Bosnia and Herzegovina",
  USA: "United States",
  "Korea Republic": "South Korea",
  "Czech Republic": "Czechia",
  Turkey: "Türkiye",
  Turkiye: "Türkiye",
  Curacao: "Curaçao",
  "Cabo Verde": "Cape Verde",
  "Congo DR": "DR Congo",
  "Côte d'Ivoire": "Ivory Coast",
  "Cote d'Ivoire": "Ivory Coast",
};

const strip = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

// --- load data (JSON literal contains no ';', so split on the first one) ----
const raw = fs.readFileSync(DATA_FILE, "utf8");
const marker = "const data = ";
const start = raw.indexOf(marker);
if (start === -1) throw new Error(`Could not find "${marker}" in ${DATA_FILE}`);
const after = start + marker.length;
const semi = raw.indexOf(";", after);
const data = JSON.parse(raw.slice(after, semi));

// canonical names + index every match by unordered team pair
const canonical = new Set();
data.groups.forEach((g) => g.teams.forEach((t) => canonical.add(t.name)));
const stripIndex = new Map([...canonical].map((n) => [strip(n), n]));

const canon = (espnName) => {
  if (ALIASES[espnName]) return ALIASES[espnName];
  if (canonical.has(espnName)) return espnName;
  return stripIndex.get(strip(espnName)) || null;
};

const matchIndex = new Map(); // "a|b" sorted -> match object
const allMatches = [
  ...data.groups.flatMap((g) => g.matches),
  ...data.knockout.round32,
  ...data.knockout.round16,
  ...data.knockout.quarterfinals,
  ...data.knockout.semifinals,
  data.knockout.thirdPlace,
  data.knockout.final,
];
for (const m of allMatches) {
  matchIndex.set([m.home, m.away].sort().join("|"), m);
}

// --- iterate dates, fetch finished matches ---------------------------------
function* dates(startStr, endStr) {
  const d = new Date(startStr + "T00:00:00Z");
  const end = new Date(endStr + "T00:00:00Z");
  while (d <= end) {
    yield d.toISOString().slice(0, 10).replace(/-/g, "");
    d.setUTCDate(d.getUTCDate() + 1);
  }
}

const changes = [];
const unknown = new Set();
let reached = 0;

for (const day of dates(START, END)) {
  const json = await fetchJson(ESPN(day));
  if (!json) continue;
  reached++;
  for (const ev of json.events || []) {
    const comp = ev.competitions?.[0];
    if (!comp) continue;
    if (ev.status?.type?.state !== "post") continue; // only finished
    const cs = comp.competitors;
    const eh = cs.find((c) => c.homeAway === "home");
    const ea = cs.find((c) => c.homeAway === "away");
    if (!eh || !ea) continue;
    const home = canon(eh.team.displayName);
    const away = canon(ea.team.displayName);
    if (!home || !away) {
      if (!home) unknown.add(eh.team.displayName);
      if (!away) unknown.add(ea.team.displayName);
      continue;
    }
    const m = matchIndex.get([home, away].sort().join("|"));
    if (!m) continue;
    const hs = Number(eh.score);
    const as = Number(ea.score);
    if (Number.isNaN(hs) || Number.isNaN(as)) continue;
    // assign in the orientation our data stores
    const [nh, na] = m.home === home ? [hs, as] : [as, hs];
    if (m.homeScore !== nh || m.awayScore !== na) {
      changes.push(`${m.home} ${nh}–${na} ${m.away}`);
      m.homeScore = nh;
      m.awayScore = na;
    }
  }
}

// --- write back -------------------------------------------------------------
if (reached === 0) {
  console.error("Could not reach ESPN for any date — data left untouched.");
  process.exit(1);
}
if (changes.length) {
  const out = raw.slice(0, after) + JSON.stringify(data, null, 2) + raw.slice(semi);
  fs.writeFileSync(DATA_FILE, out);
  console.log(`Updated ${changes.length} match(es):`);
  changes.forEach((c) => console.log("  " + c));
  console.log("\nRun `npm run build` to refresh standings.");
} else {
  console.log("No new results.");
}
if (unknown.size) {
  console.log("\nUnmatched team names (ignored):", [...unknown].join(", "));
}
