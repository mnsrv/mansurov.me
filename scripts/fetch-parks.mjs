#!/usr/bin/env node
// Fetch Warsaw parks, forests and nature reserves from OpenStreetMap (Overpass) into src/_data/parks.json.
// Simplified outlines for the map go to src/static/parks-geo.json.
// Personal fields (favorite, visited, note) are kept between runs, matched by OSM id.
//
//   node scripts/fetch-parks.mjs

import fs from "fs";

const DATA_FILE = "src/_data/parks.json";
const GEO_FILE = "src/static/parks-geo.json";
const SIMPLIFY_M = 5; // outline precision in meters
const WARSAW = 336075; // OSM relation id of Warszawa
const MIN_AREA_HA = 2;
const EXCLUDE = new Set([
  "way/883956400", // Cmentarz Mauzoleum Żołnierzy Radzieckich
]); // OSM ids to skip
// Skip national/landscape parks (too big) and small ecological sites (użytki ekologiczne).
const SKIP_PROTECT_CLASS = new Set(["2", "5", "19"]);
const ENDPOINTS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter"];
const HEADERS = { "User-Agent": "mansurov.me-parks/1.0 (personal site)" };

const QUERY = `[out:json][timeout:180];
area(${3600000000 + WARSAW})->.w;
rel(area.w)["boundary"="administrative"]["admin_level"="9"];
out geom;
(
  nwr["leisure"="park"]["name"](area.w);
  nwr["landuse"="forest"]["name"](area.w);
  nwr["natural"="wood"]["name"](area.w);
  nwr["leisure"="nature_reserve"]["name"](area.w);
);
out geom;`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function overpass(query) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const url = ENDPOINTS[attempt % ENDPOINTS.length];
    try {
      const res = await fetch(url, { method: "POST", headers: HEADERS, body: new URLSearchParams({ data: query }) });
      const text = await res.text();
      if (res.ok && text.startsWith("{")) return JSON.parse(text);
      console.warn(`${url}: ${res.status}, retrying`);
    } catch (e) {
      console.warn(`${url}: ${e.message}, retrying`);
    }
    await sleep(5000 * (attempt + 1));
  }
  throw new Error("Overpass unavailable");
}

// Join way segments into closed rings (multipolygon members are often split).
function assembleRings(ways) {
  const rings = [];
  const open = ways.map((w) => w.map((p) => [p.lon, p.lat])).filter((w) => w.length > 1);
  const same = (a, b) => a[0] === b[0] && a[1] === b[1];
  while (open.length) {
    let ring = open.shift();
    let grown = true;
    while (!same(ring[0], ring[ring.length - 1]) && grown) {
      grown = false;
      for (let i = 0; i < open.length; i++) {
        const w = open[i];
        const end = ring[ring.length - 1];
        if (same(end, w[0])) ring = ring.concat(w.slice(1));
        else if (same(end, w[w.length - 1])) ring = ring.concat(w.slice(0, -1).reverse());
        else continue;
        open.splice(i, 1);
        grown = true;
        break;
      }
    }
    if (same(ring[0], ring[ring.length - 1]) && ring.length > 3) rings.push(ring);
  }
  return rings;
}

function polygons(el) {
  if (el.type === "way") return { outer: assembleRings([el.geometry || []]), inner: [] };
  if (el.type !== "relation") return { outer: [], inner: [] };
  const byRole = (role) => el.members.filter((m) => m.type === "way" && m.role === role).map((m) => m.geometry);
  return { outer: assembleRings(byRole("outer").concat(byRole(""))), inner: assembleRings(byRole("inner")) };
}

// Area in m² using a local equirectangular projection (fine at city scale).
function ringArea(ring) {
  const k = Math.cos((52.23 * Math.PI) / 180);
  const R = 6371008.8;
  let sum = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[i + 1];
    sum += x1 * k * y2 - x2 * k * y1;
  }
  return Math.abs(sum / 2) * (Math.PI / 180) ** 2 * R * R;
}

function centroid(rings) {
  let [cx, cy, total] = [0, 0, 0];
  for (const ring of rings) {
    const a = ringArea(ring);
    const n = ring.length - 1;
    const [x, y] = ring.slice(0, n).reduce(([sx, sy], [px, py]) => [sx + px / n, sy + py / n], [0, 0]);
    cx += x * a;
    cy += y * a;
    total += a;
  }
  return total ? [cx / total, cy / total] : null;
}

function inRing([x, y], ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// Douglas–Peucker on a local metric projection, keeps outlines light for the browser.
function simplify(ring, tolerance = SIMPLIFY_M) {
  const k = Math.cos((52.23 * Math.PI) / 180) * 111320;
  const pts = ring.map(([x, y]) => [x * k, y * 110540]);
  const keep = new Uint8Array(ring.length);
  keep[0] = keep[ring.length - 1] = 1;
  const stack = [[0, ring.length - 1]];
  while (stack.length) {
    const [first, last] = stack.pop();
    const [ax, ay] = pts[first];
    const [bx, by] = pts[last];
    const len = Math.hypot(bx - ax, by - ay);
    let [maxDist, index] = [0, 0];
    for (let i = first + 1; i < last; i++) {
      const [px, py] = pts[i];
      const dist = len ? Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / len : Math.hypot(px - ax, py - ay);
      if (dist > maxDist) [maxDist, index] = [dist, i];
    }
    if (maxDist > tolerance) {
      keep[index] = 1;
      stack.push([first, index], [index, last]);
    }
  }
  return ring.filter((_, i) => keep[i]);
}

const distanceKm = ([x1, y1], [x2, y2]) => Math.hypot((x1 - x2) * 68, (y1 - y2) * 111);
const round = (n, d) => Math.round(n * 10 ** d) / 10 ** d;

const { elements } = await overpass(QUERY);

const districts = elements
  .filter((el) => el.tags?.admin_level === "9")
  .map((el) => ({ name: el.tags.name, rings: polygons(el).outer }));
const districtAt = (point) => districts.find((d) => d.rings.some((r) => inRing(point, r)))?.name;
// Forests on the city border have their center outside Warsaw: use the district holding most of the outline.
function districtOf(center, rings) {
  if (districtAt(center)) return districtAt(center);
  const votes = {};
  for (const point of rings.flat()) {
    const name = districtAt(point);
    if (name) votes[name] = (votes[name] || 0) + 1;
  }
  return Object.entries(votes).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
}
const typeOf = (tags) => (tags.leisure === "park" ? "park" : tags.leisure === "nature_reserve" ? "reserve" : "forest");

const features = elements
  .filter((el) => el.tags?.admin_level !== "9" && el.type !== "node" && !SKIP_PROTECT_CLASS.has(el.tags.protect_class))
  .map((el) => {
    const { outer, inner } = polygons(el);
    const area = outer.reduce((s, r) => s + ringArea(r), 0) - inner.reduce((s, r) => s + ringArea(r), 0);
    return {
      id: `${el.type}/${el.id}`,
      name: el.tags.name,
      type: typeOf(el.tags),
      area,
      rings: outer,
      center: centroid(outer),
    };
  })
  .filter((f) => f.center && !EXCLUDE.has(f.id));

// The same park is often split into several OSM objects: merge same-named pieces that are close together.
const merged = [];
for (const f of features.filter((f) => f.type !== "reserve").sort((a, b) => b.area - a.area)) {
  const twin = merged.find((m) => m.name === f.name && distanceKm(m.center, f.center) < 3);
  if (twin) {
    twin.area += f.area;
    twin.rings = twin.rings.concat(f.rings);
    twin.ids.push(f.id);
    if (f.type === "park") twin.type = "park";
  } else merged.push({ ...f, ids: [f.id] });
}
// Reserves often cover a park or forest already listed (Las Kabacki, Las Bielański): keep only the new ones.
const overlaps = (a, b) => b.rings.some((r) => inRing(a.center, r)) || a.rings.some((r) => inRing(b.center, r));
for (const f of features.filter((f) => f.type === "reserve")) {
  if (!merged.some((m) => overlaps(f, m))) merged.push({ ...f, ids: [f.id] });
}

const previous = fs.existsSync(DATA_FILE) ? JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) : [];
const personal = new Map(previous.map((p) => [p.id, { favorite: p.favorite, visited: p.visited, note: p.note }]));

const geo = {};
const parks = merged
  .filter((m) => m.area >= MIN_AREA_HA * 10000)
  .map((m) => {
    const id = m.ids.find((i) => personal.has(i)) ?? m.ids[0];
    geo[id] = m.rings
      .map((r) => simplify(r).map(([lon, lat]) => [round(lat, 5), round(lon, 5)]))
      .filter((r) => r.length > 3);
    return {
      id,
      name: m.name,
      type: m.type,
      district: districtOf(m.center, m.rings),
      ha: round(m.area / 10000, 1),
      lat: round(m.center[1], 5),
      lon: round(m.center[0], 5),
      favorite: false,
      visited: null,
      note: "",
      ...personal.get(id),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name, "pl"));

const lost = previous.filter((p) => !parks.some((q) => q.id === p.id) && (p.favorite || p.visited || p.note));
if (lost.length) console.warn("Marked parks no longer found, check manually:", lost.map((p) => p.name));

// One park per line, easy to edit by hand.
fs.writeFileSync(DATA_FILE, "[\n" + parks.map((p) => "  " + JSON.stringify(p)).join(",\n") + "\n]\n");
fs.writeFileSync(GEO_FILE, JSON.stringify(geo));
console.log(`${parks.length} parks/forests saved to ${DATA_FILE} (${merged.length - parks.length} smaller than ${MIN_AREA_HA} ha skipped)`);
