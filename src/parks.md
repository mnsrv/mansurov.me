---
title: Parks
subtitle: walking around Warsaw
layout: "base.liquid"
templateEngineOverride: liquid
---

{% assign visited = parks | where: "visited" %}
{% assign favorites = parks | where: "favorite" %}
{% assign districts = parks | sort: "ha" | reverse | group_by: "district" | sortPl: "name" %}

<link rel="stylesheet" href="/static/leaflet/leaflet.css" />
<div id="map" class="parks-map mb-2"></div>
<p class="parks-legend mb-3">
  <span style="--c: #205ea6">not visited</span>
  <span style="--c: #2a7d2a">visited</span>
  <span style="--c: #d4a017">favorite</span>
</p>

<p class="parks-summary mb-3">
  <b>{{ visited.size }} / {{ parks.size }}</b> visited · <b>{{ favorites.size }}</b> favorites
</p>

<p class="parks-filters mb-2">
  <label class="parks-toggle"><input type="checkbox" id="parks-unvisited" /> only not visited</label>
  <label class="parks-toggle"><input type="checkbox" id="parks-favorites" /> only favorites</label>
  <button type="button" id="parks-reset" class="parks-reset">reset</button>
</p>

<p class="parks-filters mb-3">
  {% assign types = "park,square,forest,reserve,fort" | split: "," %}
  {% for type in types %}
    {% assign ofType = parks | where: "type", type %}
    {% assign ofTypeVisited = ofType | where: "visited" %}
    {% if ofType.size > 0 %}
      <label class="parks-toggle"><input type="checkbox" name="parks-type" value="{{ type }}" checked /> {{ type }}s <span class="parks-meta">{{ ofTypeVisited.size }} / {{ ofType.size }}</span></label>
    {% endif %}
  {% endfor %}
</p>

<h2>Districts</h2>
<hr />
<div class="parks-columns">
{% for district in districts %}
  {% assign districtVisited = district.items | where: "visited" %}
  <section class="parks-district-block">
  <h3 class="parks-district{% if districtVisited.size == 0 %} parks-district-new{% endif %}">
    {{ district.name }} <span class="parks-meta">{{ districtVisited.size }} / {{ district.items.size }}</span>
  </h3>
  <ul class="parks mb-3">
    {% for park in district.items %}
      {% include "park.liquid", park: park %}
    {% endfor %}
  </ul>
  </section>
{% endfor %}
</div>

<p><i>Data © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.</i></p>

<script>
  window.PARKS = {{ parks | json }};

  // Filters: park types + "only not visited" + "only favorites".
  const filters = {};
  window.parksShown = (park) =>
    filters.types.has(park.type) && (!filters.unvisited || !park.visited) && (!filters.favorites || park.favorite);

  function applyFilters() {
    filters.types = new Set([...document.querySelectorAll("[name=parks-type]:checked")].map((i) => i.value));
    filters.unvisited = document.getElementById("parks-unvisited").checked;
    filters.favorites = document.getElementById("parks-favorites").checked;
    document.querySelectorAll(".park").forEach((li) => {
      const park = {
        type: li.dataset.type,
        visited: li.classList.contains("park-visited"),
        favorite: li.classList.contains("park-favorite"),
      };
      li.hidden = !window.parksShown(park);
    });
    document.querySelectorAll(".parks-district-block").forEach((block) => {
      block.hidden = !block.querySelector(".park:not([hidden])");
    });
    document.dispatchEvent(new Event("parks-filter"));
  }
  document.querySelectorAll(".parks-toggle input").forEach((input) => input.addEventListener("change", applyFilters));
  document.getElementById("parks-reset").addEventListener("click", () => {
    document.querySelectorAll("[name=parks-type]").forEach((input) => (input.checked = true));
    document.getElementById("parks-unvisited").checked = false;
    document.getElementById("parks-favorites").checked = false;
    applyFilters();
  });
  applyFilters();
</script>
<script src="/static/leaflet/leaflet.js"></script>
<script src="{{ '/static/parks-map.js' | bust }}"></script>
