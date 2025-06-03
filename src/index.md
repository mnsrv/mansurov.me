---
title: Sasha Mansurov
subtitle: ネーヴァ ギヴ アップ!!
eleventyNavigation:
  key: /
  title: mansurov.me
  order: 0
layout: 'base.liquid'
---

<div class="indexRow">
{% for book in books.list limit: 1 %}<div class="indexBook">{% if mapBooksReviews[book.title] %}<a href="/books/{{mapBooksReviews[book.title]}}"><img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="width: 150px" /></a>{% else %}<img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="width: 150px" />{% endif %}</div>
{% endfor %}
</div>

<style>
  .indexRow {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
  .indexBook {
    transform: rotate(-10deg);
    transition: transform 0.3s ease;
  }
  .indexBook:hover {
    transform: rotate(0deg);
  }
</style>
