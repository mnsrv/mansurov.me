---
title: Books
subtitle: Place for some quote
eleventyNavigation:
  key: books
  title: books
  order: 1
layout: "base.liquid"
class: "body_books"
---
<i>updated at: Mar 8, 2024</i>
<div>
  {% for item in booksByYear %}
  <h4>{{ item.key }}</h4>
  {% for book in item.values %}
  <p>{{ book.title }} <i class="book-author">{{ book.author }}</i>{% if book.rating == '5' %} ⭐️{% endif %}</p>
  {% endfor %}
  {% endfor %}
</div>