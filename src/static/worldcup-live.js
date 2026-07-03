(() => {
  const ESPN = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard";
  const ALIASES = {
    USA: "United States",
    "Korea Republic": "South Korea",
    Turkiye: "Türkiye",
    Turkey: "Türkiye",
    Curacao: "Curaçao",
    "Cabo Verde": "Cape Verde",
    "Congo DR": "DR Congo",
    "Côte d'Ivoire": "Ivory Coast",
    "Cote d'Ivoire": "Ivory Coast",
    "Bosnia-Herzegovina": "Bosnia and Herzegovina",
    "Bosnia & Herzegovina": "Bosnia and Herzegovina",
  };
  const strip = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

  const datesParam = () => {
    const now = new Date();
    const today = now.toISOString().slice(0, 10).replace(/-/g, "");
    const y = new Date(now - 86400000).toISOString().slice(0, 10).replace(/-/g, "");
    return y === today ? today : `${y}-${today}`;
  };

  const knownTeams = () => {
    const names = new Set();
    document.querySelectorAll("[data-wc-home]").forEach((el) => {
      names.add(el.dataset.wcHome);
      names.add(el.dataset.wcAway);
    });
    return names;
  };

  const canon = (name, known) => {
    if (ALIASES[name]) return ALIASES[name];
    if (known.has(name)) return name;
    const s = strip(name);
    for (const k of known) if (strip(k) === s) return k;
    return null;
  };

  const goalsHtml = (score, pens) => {
    if (pens != null) return `${score}<span class="wc-match-pens">(${pens})</span>`;
    return String(score);
  };

  const apply = (results) => {
    document.querySelectorAll("[data-wc-home]").forEach((el) => {
      const r = results.get([el.dataset.wcHome, el.dataset.wcAway].sort().join("|"));
      if (!r) return;
      const score = el.querySelector(".wc-score");
      if (score) {
        score.textContent = r.hps != null ? `${r.hs}–${r.as} (${r.hps}–${r.aps})` : `${r.hs}–${r.as}`;
      }
      const rows = el.querySelectorAll(".wc-match-row");
      if (rows.length !== 2) return;
      const hg = rows[0].querySelector(".wc-match-goals");
      const ag = rows[1].querySelector(".wc-match-goals");
      if (hg) hg.innerHTML = goalsHtml(r.hs, r.hps);
      if (ag) ag.innerHTML = goalsHtml(r.as, r.aps);
    });
  };

  const poll = async () => {
    try {
      const known = knownTeams();
      if (!known.size) return;
      const res = await fetch(`${ESPN}?dates=${datesParam()}`);
      if (!res.ok) return;
      const json = await res.json();
      const results = new Map();
      for (const ev of json.events || []) {
        if (ev.status?.type?.state !== "post") continue;
        const cs = ev.competitions?.[0]?.competitors;
        if (!cs) continue;
        const eh = cs.find((c) => c.homeAway === "home");
        const ea = cs.find((c) => c.homeAway === "away");
        if (!eh || !ea) continue;
        const home = canon(eh.team.displayName, known);
        const away = canon(ea.team.displayName, known);
        if (!home || !away) continue;
        const hs = Number(eh.score);
        const as = Number(ea.score);
        if (Number.isNaN(hs) || Number.isNaN(as)) continue;
        const hps = eh.shootoutScore != null ? Number(eh.shootoutScore) : null;
        const aps = ea.shootoutScore != null ? Number(ea.shootoutScore) : null;
        results.set([home, away].sort().join("|"), { hs, as, hps, aps });
      }
      apply(results);
    } catch {
      /* ignore */
    }
  };

  poll();
  setInterval(poll, 60_000);
})();
