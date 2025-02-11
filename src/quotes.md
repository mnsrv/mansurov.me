---
title: Quotes
subtitle: from books, songs, movies
layout: "base.liquid"
---

{% for quote in quotes %}
{% if quote.type != "book" %}

> {{ quote.title | newline_to_br }}
>
> — {{ quote.author }}, _{% if quote.link %}[{{ quote.song }}](/blog/{{quote.link}}){% else %}{{ quote.song }}{% endif %}_

{% endif %}
{% endfor %}
