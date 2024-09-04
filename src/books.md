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
  <div class="books-row-polka"></div>
  <div class="books-row-left"></div>
  <div class="books-row-right"></div>
  <div class="books-row-background"></div>
  <div class="books-row-corner-left-bottom"></div>
  <div class="books-row-corner-right-bottom"></div>
  <div class="books-row">
  {% for book in row %}
  <div class="books-item-container">
  <img src="/images/books/{{book.image}}" alt="{{book.title}}" style="height: calc({{book.height}} * 300px / 10)" class="books-item" />
  </div>
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