---
title: Quotes
subtitle: from books, songs, movies
eleventyNavigation:
  key: quotes
  title: quotes
  order: 6
layout: "base.liquid"
---

{% for quote in quotes %}

> {{ quote.title | newline_to_br }}
>
> — {{ quote.author }}, _{% if quote.link %}[{{ quote.song }}](/blog/{{quote.link}}){% else %}{{ quote.song }}{% endif %}_

{% endfor %}
