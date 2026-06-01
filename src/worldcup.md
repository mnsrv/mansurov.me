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

<p><i>48 teams, 12 groups. Top two of each group plus the eight best third-placed teams advance to the round of 32. Standings update automatically as scores are filled in.</i></p>

<h2>Groups</h2>
<hr />
<div class="columns wc-groups">
  {% for group in worldcup.groups %}
    <div class="col">
      {% include "worldcup-group.liquid", group: group %}
    </div>
  {% endfor %}
</div>

<h2>Knockout</h2>
<hr />
{% include "worldcup-bracket.liquid", knockout: worldcup.knockout %}
