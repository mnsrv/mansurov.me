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

  const statusEl = document.getElementById("wc-feed-status");

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

  const setStatus = (state, text) => {
    if (!statusEl) return;
    statusEl.hidden = false;
    statusEl.className = `wc-feed-status wc-feed-${state}`;
    statusEl.innerHTML = `<span class="wc-feed-dot" aria-hidden="true"></span><span>${text}</span>`;
  };

  const badgeFor = (el) => {
    let badge = el.querySelector(".wc-live-badge");
    if (badge) return badge;
    badge = document.createElement("span");
    badge.className = "wc-live-badge";
    const score = el.querySelector(".wc-score");
    const label = el.querySelector(".wc-match-label");
    if (score) score.before(badge);
    else if (label) label.prepend(badge);
    else el.prepend(badge);
    return badge;
  };

  const clearLive = () => {
    document.querySelectorAll("[data-wc-home].wc-live").forEach((el) => el.classList.remove("wc-live"));
    document.querySelectorAll(".wc-live-badge").forEach((el) => el.remove());
  };

  const apply = (results) => {
    let liveCount = 0;
    document.querySelectorAll("[data-wc-home]").forEach((el) => {
      const r = results.get([el.dataset.wcHome, el.dataset.wcAway].sort().join("|"));
      el.classList.toggle("wc-live", r?.state === "in");
      if (r?.state === "in") {
        liveCount++;
        badgeFor(el).textContent = r.detail || "LIVE";
      }
      if (!r || (r.state !== "in" && r.state !== "post")) return;
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
    return liveCount;
  };

  const poll = async () => {
    const known = knownTeams();
    if (!known.size) {
      if (statusEl) statusEl.hidden = true;
      return;
    }
    setStatus("wait", "Checking ESPN…");
    try {
      const res = await fetch(`${ESPN}?dates=${datesParam()}`);
      if (!res.ok) throw new Error(String(res.status));
      const json = await res.json();
      clearLive();
      const results = new Map();
      for (const ev of json.events || []) {
        const state = ev.status?.type?.state;
        if (state !== "in" && state !== "post") continue;
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
        const detail = ev.status?.type?.shortDetail || ev.status?.type?.detail || "";
        results.set([home, away].sort().join("|"), { hs, as, hps, aps, state, detail });
      }
      const liveCount = apply(results);
      if (liveCount) setStatus("live", `${liveCount} live · ESPN connected`);
      else setStatus("ok", "ESPN connected · updates every minute");
    } catch {
      clearLive();
      setStatus("err", "ESPN unavailable");
    }
  };

  poll();
  setInterval(poll, 60_000);
})();
