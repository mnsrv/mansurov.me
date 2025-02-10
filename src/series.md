---
title: Series
subtitle: in progress
eleventyNavigation:
  key: series
  title: series
  order: 7
layout: "base.liquid"
---

<div class="series-container">
{% for serie in series %}
<img src="{{serie.image}}" alt="{{serie.title}} S{{serie.season}}" title="{{serie.title}} S{{serie.season}}" class="serie" />
{% endfor %}
</div>

<style>
  .series-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .serie {
    width: 3.85rem;
    border-radius: 0.25rem;
  }
</style>
