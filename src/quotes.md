---
title: Quotes
subtitle: from books, songs, movies
eleventyNavigation:
  key: quotes
  title: quotes
  order: 6
layout: "base.liquid"
---

{% for quote in quotes %}<blockquote><p>{{ quote.title | newline_to_br }}</p><footer>— {{ quote.author }}, <cite>{{ quote.song }}</cite></footer></blockquote>{% endfor %}

<style>
  blockquote {
    margin: 3rem 0;
  }
  blockquote:first-child {
    margin-top: 0;
  }
</style>
