---
title: Concerts
subtitle: in progress
eleventyNavigation:
  key: concerts
  title: concerts
  order: 8
layout: "base.liquid"
---

{% for concert in concerts %}
- {{ concert.date }} {{ concert.author }}. {{ concert.tour }} *{{ concert.location }}*.
{% endfor %}
