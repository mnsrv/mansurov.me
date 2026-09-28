// Parks map: outlines from parks-geo.json, status (favorite/visited) from window.PARKS.
(async () => {
  const COLORS = { favorite: "#d4a017", visited: "#2a7d2a", unvisited: "#205ea6" };
  const statusOf = (park) => (park.favorite ? "favorite" : park.visited ? "visited" : "unvisited");

  const map = L.map("map", { scrollWheelZoom: false }).setView([52.23, 21.01], 11);
  const OSM = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const OSM_TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  const styles = {
    Standard: L.tileLayer(OSM_TILES, { maxZoom: 19, attribution: OSM }),
    Grey: L.tileLayer(OSM_TILES, { maxZoom: 19, attribution: OSM, className: "parks-tiles-grey" }),
    Humanitarian: L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: `${OSM}, tiles &copy; <a href="https://www.hotosm.org/">HOT</a>`,
    }),
    Topo: L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution: `${OSM}, style &copy; <a href="https://opentopomap.org">OpenTopoMap</a>`,
    }),
    Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      attribution: "Tiles &copy; Esri",
    }),
  };
  // Remember the chosen style between visits.
  const saved = localStorage.getItem("parks-map-style");
  (styles[saved] || styles.Standard).addTo(map);
  L.control.layers(styles).addTo(map);
  map.on("baselayerchange", (e) => localStorage.setItem("parks-map-style", e.name));
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());

  const geo = await fetch("/static/parks-geo.json").then((r) => r.json());
  const layers = {};

  for (const park of window.PARKS) {
    if (!geo[park.id]) continue;
    const color = COLORS[statusOf(park)];
    const layer = L.polygon(geo[park.id], { color, fillColor: color, weight: 1.5, fillOpacity: 0.35 })
      .bindTooltip(park.name, { sticky: true })
      .bindPopup(
        `<b>${park.name}</b>${park.favorite ? " ★" : ""}<br />` +
          `${park.ha} ha · ${park.type} · ${park.district}<br />` +
          (park.visited ? `✓ visited${park.visited === true ? "" : " " + park.visited}<br />` : "not visited yet<br />") +
          (park.note ? `<i>${park.note}</i><br />` : "") +
          `<a href="https://www.openstreetmap.org/${park.id}" target="_blank">OpenStreetMap</a>`
      )
      .addTo(map);
    layers[park.id] = { layer, park };
  }

  // "Only not visited" hides visited parks on the map too, favorites always stay.
  document.getElementById("parks-unvisited").addEventListener("change", (e) => {
    for (const { layer, park } of Object.values(layers)) {
      if (!park.visited || park.favorite) continue;
      e.target.checked ? layer.remove() : layer.addTo(map);
    }
  });

  // Clicking a park in the list shows it on the map.
  document.querySelectorAll("[data-park]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const entry = layers[link.dataset.park];
      if (!entry) return;
      e.preventDefault();
      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
      map.fitBounds(entry.layer.getBounds(), { maxZoom: 16, padding: [20, 20] });
      entry.layer.openPopup();
    });
  });
})();
