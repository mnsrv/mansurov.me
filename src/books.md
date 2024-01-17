---
title: Books
subtitle: Place for some quote
eleventyNavigation:
  key: books
  title: books
  order: 1
layout: "base.liquid"
---
<i>updated at: Jan 16, 2024</i>
<div>
  {% for item in booksByYear %}
  <h4>{{ item.key }}</h4>
  {% for book in item.values %}
  <p>{{ book.title }} <i class="book-author">{{ book.author }}</i></p>
  {% endfor %}
  {% endfor %}
</div>