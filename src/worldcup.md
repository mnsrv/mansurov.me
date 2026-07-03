---
title: World Cup 2026
subtitle: 🇨🇦 🇲🇽 🇺🇸 &middot; 11 June – 19 July
eleventyNavigation:
  key: world cup
  title: world cup
  order: 3
layout: "base.liquid"
templateEngineOverride: liquid
---

<p><i>48 teams, 12 groups. Top two of each group plus the eight best third-placed teams advance to the round of 32. Kick-off times shown in Warsaw time (CEST).</i></p>
<p id="wc-feed-status" class="wc-feed-status" hidden></p>

<div class="wc-tabs">
  <input type="radio" name="wc-tab" id="wc-tab-matches" class="wc-tab-input" checked />
  <input type="radio" name="wc-tab" id="wc-tab-standings" class="wc-tab-input" />
  <input type="radio" name="wc-tab" id="wc-tab-knockout" class="wc-tab-input" />

  <div class="wc-tab-bar">
    <label for="wc-tab-matches">Matches</label>
    <label for="wc-tab-standings">Groups</label>
    <label for="wc-tab-knockout">Knockout</label>
  </div>

  <div class="wc-tab-panel wc-panel-matches">
    <h2>Matches</h2>
    <hr />
    {% include "worldcup-schedule.liquid", schedule: worldcup.schedule %}
  </div>

  <div class="wc-tab-panel wc-panel-standings">
    <h2>Groups</h2>
    <hr />
    <div class="columns wc-groups">
      {% for group in worldcup.groups %}
        <div class="col">
          {% include "worldcup-group.liquid", group: group %}
        </div>
      {% endfor %}
    </div>

    <h2>Third-placed teams</h2>
    <hr />
    <p><i>The eight best third-placed teams advance to the round of 32, ranked by points, then goal difference, then goals scored. Provisional until all groups finish.</i></p>
    {% include "worldcup-thirds.liquid", thirds: worldcup.thirds %}
  </div>

  <div class="wc-tab-panel wc-panel-knockout">
    <h2>Knockout</h2>
    <hr />
    {% include "worldcup-bracket.liquid", knockout: worldcup.knockout %}
  </div>
</div>

<script src="{{ '/static/worldcup-live.js' | bust }}"></script>
