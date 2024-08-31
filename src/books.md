---
title: Books
subtitle: Place for some quote
eleventyNavigation:
  key: books
  title: books
  order: 2
layout: "base.liquid"
class: "body_books"
date: Last Modified
---
<i>updated at: {{ page.date | date: "%e %b %y" }}</i>
<div class="books-container">
  {% for row in bookshelf %}
  <div class="books-row" style="height: 300px;">
  <div class="books-row-background"></div>
  {% for book in row %}
  <img src="/images/books/{{book.image}}" alt="{{book.title}}" style="height: calc({{book.height}} * 300px / 10)" class="books-item" />
  {% endfor %}
  </div>
  {% endfor %}
</div>
<div>
  {% for item in booksByYear %}
  <h4>{{ item.key }}</h4>
  {% for book in item.values %}
  <p>{{ book.title }} <i class="book-author">{{ book.author }}</i>{% if book.rating == '5' %} ⭐️{% endif %}</p>
  {% endfor %}
  {% endfor %}
</div>