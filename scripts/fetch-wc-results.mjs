#!/usr/bin/env node
// Fetch finished 2026 World Cup results from ESPN's public scoreboard API (no key)
// and write them into src/_data/worldcup.js. Also derives the third-place
// allocation (which group's 3rd-placed team fills each Round-of-32 slot) from
// ESPN's R32 fixtures, filling THIRD_ALLOCATION as FIFA locks each slot.
//
//   node scripts/fetch-wc-results.mjs
//
// Idempotent: writes only when something changed. Standings/bracket recompute on
// the next `npm run build`.

import fs from "fs";

const DATA_FILE = "src/_data/worldcup.js";
const ESPN = (d) =>
  `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${d}`;
const START = "2026-06-11";
const END = "2026-07-20";
const R32_START = "2026-06-28"; // round of 32 window, for allocation only
const R32_END = "2026-07-03";
const HEADERS = { "User-Agent": "mansurov.me-worldcup/1.0 (personal site)" };

// Third-facing group winner → its R32 slot's feeder label.
const WINNER_SLOT = {
  E: "3rd A/B/C/D/F", I: "3rd C/D/F/G/H", A: "3rd C/E/F/H/I", L: "3rd E/H/I/J/K",
  D: "3rd B/E/F/I/J", G: "3rd A/E/H/I/J", B: "3rd E/F/G/I/J", K: "3rd D/E/I/J/L",
};
const SLOT_MATCH = {
  "3rd A/B/C/D/F": "M74", "3rd C/D/F/G/H": "M77", "3rd C/E/F/H/I": "M79", "3rd E/H/I/J/K": "M80",
  "3rd B/E/F/I/J": "M81", "3rd A/E/H/I/J": "M82", "3rd E/F/G/I/J": "M85", "3rd D/E/I/J/L": "M87",
};

const ALIASES = {
  "Bosnia-Herzegovina": "Bosnia and Herzegovina", "Bosnia & Herzegovina": "Bosnia and Herzegovina",
  USA: "United States", "Korea Republic": "South Korea", "Czech Republic": "Czechia",
  Turkey: "Türkiye", Turkiye: "Türkiye", Curacao: "Curaçao", "Cabo Verde": "Cape Verde",
  "Congo DR": "DR Congo", "Côte d'Ivoire": "Ivory Coast", "Cote d'Ivoire": "Ivory Coast",
};
const strip = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function fetchJson(url, retries = 3) {
  let delay = 1000;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (res.ok) return res.json();
      if (![429, 500, 502, 503, 504].includes(res.status) || attempt === retries) return null;
      await sleep(Number(res.headers.get("retry-after")) * 1000 || delay);
      delay *= 2;
    } catch {
      if (attempt === retries) return null;
      await sleep(delay);
      delay *= 2;
    }
  }
  return null;
}

function* dates(startStr, endStr) {
  const d = new Date(startStr + "T00:00:00Z");
  const end = new Date(endStr + "T00:00:00Z");
  while (d <= end) {
    yield d.toISOString().slice(0, 10).replace(/-/g, "");
    d.setUTCDate(d.getUTCDate() + 1);
  }
}

// ---------------------------------------------------------------------------
const raw0 = fs.readFileSync(DATA_FILE, "utf8");
const marker = "const data = ";
const dStart = raw0.indexOf(marker) + marker.length;
const dEnd = raw0.indexOf(";", dStart); // JSON literal has no ';'
const data = JSON.parse(raw0.slice(dStart, dEnd));

const canonical = new Set();
data.groups.forEach((g) => g.teams.forEach((t) => canonical.add(t.name)));
const stripIndex = new Map([...canonical].map((n) => [strip(n), n]));
const canon = (espn) => ALIASES[espn] || (canonical.has(espn) ? espn : stripIndex.get(strip(espn)) || null);

const allMatches = [
  ...data.groups.flatMap((g) => g.matches),
  ...data.knockout.round32, ...data.knockout.round16, ...data.knockout.quarterfinals,
  ...data.knockout.semifinals, data.knockout.thirdPlace, data.knockout.final,
];
const matchIndex = new Map(allMatches.map((m) => [[m.home, m.away].sort().join("|"), m]));

// --- pass 1: collect finished scores + cache R32-window events --------------
const changes = [];
const r32events = []; // { names: [home, away] }
let reached = 0;
for (const day of dates(START, END)) {
  const json = await fetchJson(ESPN(day));
  if (!json) continue;
  reached++;
  const inR32 = day >= R32_START.replaceAll("-", "") && day <= R32_END.replaceAll("-", "");
  for (const ev of json.events || []) {
    const comp = ev.competitions?.[0];
    const cs = comp?.competitors;
    if (!cs) continue;
    const eh = cs.find((c) => c.homeAway === "home");
    const ea = cs.find((c) => c.homeAway === "away");
    if (!eh || !ea) continue;
    if (inR32) r32events.push({ home: eh.team.displayName, away: ea.team.displayName, date: ev.date });
    if (ev.status?.type?.state !== "post") continue;
    const home = canon(eh.team.displayName), away = canon(ea.team.displayName);
    if (!home || !away) continue;
    const m = matchIndex.get([home, away].sort().join("|"));
    if (!m) continue;
    const hs = Number(eh.score), as = Number(ea.score);
    if (Number.isNaN(hs) || Number.isNaN(as)) continue;
    const [nh, na] = m.home === home ? [hs, as] : [as, hs];
    if (m.homeScore !== nh || m.awayScore !== na) {
      changes.push(`${m.home} ${nh}–${na} ${m.away}`);
      m.homeScore = nh; m.awayScore = na;
    }
  }
}

if (reached === 0) {
  console.error("Could not reach ESPN for any date — data left untouched.");
  process.exit(1);
}

// Splice the (mutated) data object back into the file text.
const spliceData = (text) => {
  const s = text.indexOf(marker) + marker.length;
  const e = text.indexOf(";", s);
  return text.slice(0, s) + JSON.stringify(data, null, 2) + text.slice(e);
};

// Write score changes first so the freshly-imported module reflects them.
if (changes.length) fs.writeFileSync(DATA_FILE, spliceData(raw0));

// --- pass 2: derive third-place allocation + R32 kickoff times ---------------
const mod = await import("../src/_data/worldcup.js?u=" + Date.now());
const computed = mod.default();
const winnerByGroup = {}, complete = {}, thirdByGroup = {};
computed.groups.forEach((g) => {
  complete[g.name] = g.standings.every((r) => r.played === 3);
  winnerByGroup[g.name] = g.standings[0]?.name;
  thirdByGroup[g.name] = g.standings.find((r) => r.rank === 3)?.name;
});
const teamGroup = {};
data.groups.forEach((g) => g.teams.forEach((t) => { teamGroup[t.name] = g.name; }));

// winner team name → { group, label }, only for finished third-facing groups
const winnerLookup = {};
for (const [grp, label] of Object.entries(WINNER_SLOT)) {
  if (complete[grp] && winnerByGroup[grp]) winnerLookup[winnerByGroup[grp]] = { grp, label };
}

const derived = {};
for (const { home, away } of r32events) {
  const sides = [[canon(home), canon(away)], [canon(away), canon(home)]];
  for (const [a, b] of sides) {
    const w = winnerLookup[a];
    if (!w || !b) continue;
    const og = teamGroup[b];
    if (!og) continue; // unresolved placeholder ("Third Place Group …")
    const allowed = w.label.replace("3rd ", "").split("/");
    if (og !== w.grp && allowed.includes(og)) derived[w.label] = og;
  }
}

// Forced allocations: a qualifying third whose group fits only one R32 slot can
// only go there (e.g. a Group L third → M87), regardless of the other results.
for (const t of computed.thirds.filter((x) => x.certainty === "in")) {
  const fits = Object.keys(SLOT_MATCH).filter((label) => label.replace("3rd ", "").split("/").includes(t.group));
  if (fits.length === 1) derived[fits[0]] = t.group;
}

// Kick-off time per R32 match (M-label), from ESPN, via a resolved team on it.
const labelByTeam = {};
computed.knockout.round32.forEach((m) => {
  if (m.homeState === "confirmed" && m.homeTeams[0]) labelByTeam[m.homeTeams[0].name] = m.label;
  if (m.awayState === "confirmed" && m.awayTeams[0]) labelByTeam[m.awayTeams[0].name] = m.label;
});
const kickoffByLabel = {};
for (const { home, away, date } of r32events) {
  const lbl = labelByTeam[canon(home)] || labelByTeam[canon(away)];
  if (lbl && date) kickoffByLabel[lbl] = new Date(date).toISOString();
}
const kickChanges = [];
data.knockout.round32.forEach((m) => {
  const k = kickoffByLabel[m.label];
  if (k && m.kickoff !== k) { m.kickoff = k; kickChanges.push(m.label); }
});

// --- merge into THIRD_ALLOCATION block + write everything -------------------
let raw = spliceData(fs.readFileSync(DATA_FILE, "utf8")); // data now has scores + kickoffs
const taStart = raw.indexOf("const THIRD_ALLOCATION = {");
const existing = {};
raw.slice(taStart, raw.indexOf("};", taStart)).replace(/"(3rd[^"]+)":\s*"([A-L])"/g, (_, k, v) => { existing[k] = v; return _; });
const merged = { ...existing, ...derived };
const allocAdded = Object.keys(merged).filter((k) => merged[k] !== existing[k]);
if (allocAdded.length) {
  const lines = Object.keys(SLOT_MATCH).sort((a, b) => SLOT_MATCH[a].localeCompare(SLOT_MATCH[b])).map((label) => {
    const g = merged[label];
    if (g) return `  "${label}": "${g}", // ${SLOT_MATCH[label]} → ${thirdByGroup[g] || g}`;
    return `  // "${label}": "", // ${SLOT_MATCH[label]}`;
  });
  const block = "const THIRD_ALLOCATION = {\n" + lines.join("\n") + "\n};";
  raw = raw.slice(0, taStart) + block + raw.slice(raw.indexOf("};", taStart) + 2);
}

if (changes.length || kickChanges.length || allocAdded.length) {
  fs.writeFileSync(DATA_FILE, raw);
}

// --- report -----------------------------------------------------------------
if (changes.length) {
  console.log(`Updated ${changes.length} result(s):`);
  changes.forEach((c) => console.log("  " + c));
}
if (allocAdded.length) {
  console.log(`Allocated ${allocAdded.length} third-place slot(s):`);
  allocAdded.forEach((k) => console.log(`  ${SLOT_MATCH[k]} ← 3rd of Group ${merged[k]} (${thirdByGroup[merged[k]] || "?"})`));
}
if (kickChanges.length) console.log(`Set kick-off time for ${kickChanges.length} R32 match(es): ${kickChanges.join(", ")}`);
const any = changes.length || allocAdded.length || kickChanges.length;
if (!any) console.log("No changes.");
console.log(any ? "\nRun `npm run build` to refresh." : "");
