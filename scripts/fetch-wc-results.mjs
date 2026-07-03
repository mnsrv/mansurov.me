#!/usr/bin/env node
// Fetch today's World Cup results from ESPN (one request) and write into
// src/_data/worldcup.js. Idempotent: writes only when something changed.
//
//   node scripts/fetch-wc-results.mjs

import fs from "fs";

const DATA_FILE = "src/_data/worldcup.js";
const ESPN = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard";
const HEADERS = { "User-Agent": "mansurov.me-worldcup/1.0 (personal site)" };

const ALIASES = {
  "Bosnia-Herzegovina": "Bosnia and Herzegovina", "Bosnia & Herzegovina": "Bosnia and Herzegovina",
  USA: "United States", "Korea Republic": "South Korea", "Czech Republic": "Czechia",
  Turkey: "Türkiye", Turkiye: "Türkiye", Curacao: "Curaçao", "Cabo Verde": "Cape Verde",
  "Congo DR": "DR Congo", "Côte d'Ivoire": "Ivory Coast", "Cote d'Ivoire": "Ivory Coast",
};
const strip = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

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

// ---------------------------------------------------------------------------
const raw0 = fs.readFileSync(DATA_FILE, "utf8");
const marker = "const data = ";
const dStart = raw0.indexOf(marker) + marker.length;
const dEnd = raw0.indexOf(";", dStart);
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

const changes = [];
const applyResult = (m, orientHome, home, away, hs, as, hps, aps, tag) => {
  const [nh, na] = orientHome === home ? [hs, as] : [as, hs];
  const [nhp, nap] = orientHome === home ? [hps, aps] : [aps, hps];
  if (m.homeScore !== nh || m.awayScore !== na) {
    changes.push(`${tag} ${nh}–${na} ${m.home} v ${m.away}`);
    m.homeScore = nh; m.awayScore = na;
  }
  if (hps != null && aps != null && !Number.isNaN(hps) && !Number.isNaN(aps)) {
    if (m.homePenalties !== nhp || m.awayPenalties !== nap) {
      changes.push(`${tag} pens ${nhp}–${nap} (${m.home} v ${m.away})`);
      m.homePenalties = nhp; m.awayPenalties = nap;
    }
  }
};

const spliceData = (text) => {
  const s = text.indexOf(marker) + marker.length;
  const e = text.indexOf(";", s);
  return text.slice(0, s) + JSON.stringify(data, null, 2) + text.slice(e);
};

// --- fetch today's scoreboard (1 request) -----------------------------------
const json = await fetchJson(ESPN);
if (!json) {
  console.error("Could not reach ESPN — data left untouched.");
  process.exit(1);
}

const finished = [];
const koEvents = [];
for (const ev of json.events || []) {
  const cs = ev.competitions?.[0]?.competitors;
  if (!cs) continue;
  const eh = cs.find((c) => c.homeAway === "home");
  const ea = cs.find((c) => c.homeAway === "away");
  if (!eh || !ea) continue;
  koEvents.push({ home: eh.team.displayName, away: ea.team.displayName, date: ev.date });
  if (ev.status?.type?.state !== "post") continue;
  const home = canon(eh.team.displayName), away = canon(ea.team.displayName);
  const hs = Number(eh.score), as = Number(ea.score);
  const hps = eh.shootoutScore != null ? Number(eh.shootoutScore) : null;
  const aps = ea.shootoutScore != null ? Number(ea.shootoutScore) : null;
  if (!home || !away || Number.isNaN(hs) || Number.isNaN(as)) continue;
  finished.push({ home, away, hs, as, hps, aps });
  const m = matchIndex.get([home, away].sort().join("|"));
  if (m) applyResult(m, m.home, home, away, hs, as, hps, aps, `${m.home} ${hs}–${as} ${m.away}`);
}

if (changes.length) fs.writeFileSync(DATA_FILE, spliceData(raw0));

// --- knockout scores + kick-off times (needs resolved bracket teams) --------
const mod = await import("../src/_data/worldcup.js?u=" + Date.now());
const computed = mod.default();

const labelByTeams = new Map();
const koByTeams = new Map();
[
  ...computed.knockout.round32, ...computed.knockout.round16, ...computed.knockout.quarterfinals,
  ...computed.knockout.semifinals, computed.knockout.thirdPlace, computed.knockout.final,
].forEach((m) => {
  if (m.homeState === "confirmed" && m.awayState === "confirmed") {
    const pair = [m.homeTeams[0].name, m.awayTeams[0].name].sort().join("|");
    labelByTeams.set(pair, m.label);
    koByTeams.set(pair, { label: m.label, home: m.homeTeams[0].name });
  }
});

const rawKo = [
  ...data.knockout.round32, ...data.knockout.round16, ...data.knockout.quarterfinals,
  ...data.knockout.semifinals, data.knockout.thirdPlace, data.knockout.final,
];
const rawByLabel = new Map(rawKo.map((m) => [m.label, m]));

const kickChanges = [];
for (const { home, away, date } of koEvents) {
  const ch = canon(home), ca = canon(away);
  if (!ch || !ca) continue;
  const pair = [ch, ca].sort().join("|");
  const lbl = labelByTeams.get(pair);
  if (lbl && date) {
    const m = rawByLabel.get(lbl);
    const k = new Date(date).toISOString();
    if (m && m.kickoff !== k) { m.kickoff = k; kickChanges.push(lbl); }
  }
}

for (const f of finished) {
  const hit = koByTeams.get([f.home, f.away].sort().join("|"));
  if (!hit) continue;
  applyResult(rawByLabel.get(hit.label), hit.home, f.home, f.away, f.hs, f.as, f.hps, f.aps, hit.label);
}

if (changes.length || kickChanges.length) fs.writeFileSync(DATA_FILE, spliceData(fs.readFileSync(DATA_FILE, "utf8")));

// --- report -----------------------------------------------------------------
if (changes.length) {
  console.log(`Updated ${changes.length} result(s):`);
  changes.forEach((c) => console.log("  " + c));
}
if (kickChanges.length) console.log(`Set kick-off time for ${kickChanges.length} knockout match(es): ${kickChanges.join(", ")}`);
const any = changes.length || kickChanges.length;
if (!any) console.log("No changes.");
console.log(any ? "\nRun `npm run build` to refresh." : "");
