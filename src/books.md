---
title: Books
subtitle: Place for some quote
eleventyNavigation:
  key: books
  title: books
  order: 2
layout: "base.liquid"
class: "body_books body_no_padding"
date: Last Modified
---

<div class="flex container">
  <div class="col padding-no-mobile">
    <div class="books-container">{% for row in bookshelf %}
      <div class="books-row-polka"></div>
      <div class="books-row-left"></div>
      <div class="books-row-right"></div>
      <div class="books-row-background"></div>
      <div class="books-row-corner-left-bottom"></div>
      <div class="books-row-corner-right-bottom"></div>
      <div class="books-row">{% for book in row %}
      <div class="books-item-container">
      <img src="/images/books/{{book.image}}" alt="{{book.title}} spine" style="height: calc({{book.height}} * 19rem / 10)" class="books-item" />{% if book.cover %}<img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="height: calc({{book.height}} * 19rem / 10)" class="books-cover" />{% endif %}
      </div>{% endfor %}</div>{% endfor %}
    </div>
  </div>

  <div class="col padding">
    <i>updated at: {{ page.date | date: "%e %b %y" }}</i>
    {% for item in booksByYear %}<section>
    <h4>{{ item.key }}</h4>
    {% for book in item.values %}
    <p>{{ book.title }} <i>{{ book.author }}</i>{% if book.rating == '5' %} ⭐️{% endif %}</p>
    {% endfor %}</section>
    {% endfor %}
  </div>
</div>

<style>
  section {
    margin: 2rem 0;
  }
</style>
