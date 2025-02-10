---
title: Concerts
subtitle: in progress
layout: "base.liquid"
---

{% for concert in concerts %}
- {{ concert.date }} {{ concert.author }}. {{ concert.tour }} *{{ concert.location }}*.
{% endfor %}
