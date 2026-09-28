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

<p class="mb-3">
  {{ visited.size }} / {{ parks.size }} visited · {{ favorites.size }} favorites
  <label class="parks-toggle"><input type="checkbox" id="parks-unvisited" /> only not visited</label>
</p>

{% if favorites.size > 0 %}
  <h2>Favorites</h2>
  <hr />
  <ul class="parks parks-favorites mb-4">
    {% for park in favorites %}
      {% include "park.liquid", park: park, showDistrict: true %}
    {% endfor %}
  </ul>
{% endif %}

<h2>Districts</h2>
<hr />
{% for district in districts %}
  {% assign districtVisited = district.items | where: "visited" %}
  <h3 class="parks-district{% if districtVisited.size == 0 %} parks-district-new{% endif %}">
    {{ district.name }} <span class="parks-meta">{{ districtVisited.size }} / {{ district.items.size }}</span>
  </h3>
  <ul class="parks mb-3">
    {% for park in district.items %}
      {% include "park.liquid", park: park %}
    {% endfor %}
  </ul>
{% endfor %}

<p><i>Data © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.</i></p>

<script>
  window.PARKS = {{ parks | json }};
  document.getElementById("parks-unvisited").addEventListener("change", (e) => {
    document.body.classList.toggle("parks-only-unvisited", e.target.checked);
  });
</script>
<script src="/static/leaflet/leaflet.js"></script>
<script src="{{ '/static/parks-map.js' | bust }}"></script>
