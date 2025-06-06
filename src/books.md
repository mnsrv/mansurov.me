---
title: Books
subtitle: Place for some quote
layout: 'base.liquid'
class: 'body_books body_no_padding'
date: Last Modified
---

<div class="flex container">
  <div class="col padding-no-mobile">
    <div class="books-container">
      <div class="books-row-polka"></div>
      <div class="books-row-left"></div>
      <div class="books-row-right"></div>
      <div class="books-row-background"></div>
      <div class="books-row-corner-left-bottom"></div>
      <div class="books-row-corner-right-bottom"></div>
      <div class="books-row">{% for book in books.list reversed %}{% if book.image and book.height %}
      <div class="books-item-container">
      <img src="/images/books/{{book.image}}" alt="{{book.title}} spine" style="height: calc({{book.height}} * 19rem / 10)" class="books-item" />{% if book.cover %}<img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="height: calc({{book.height}} * 19rem / 10)" class="books-cover" loading="lazy" />{% endif %}
      </div>{% endif %}{% endfor %}</div>
    </div>
  </div>

  <div class="col padding">
    <p><i>updated at: {{ page.date | date: "%e %b %y" }}</i></p>
    {% for item in books.byYear %}<section>
    <h4>{{ item.key }}</h4>
    {% for book in item.values %}
    {% if mapBooksReviews[book.title] %}[{{book.title}}](/books/{{mapBooksReviews[book.title]}})
    {% else %}{{ book.title }}{% endif %} <i>{{ book.author }}</i>{% if book.rating == 5 %} ⭐️{% endif %}{% if not book.image %} 🖼️{% endif %}{% if not book.cover %} 📕{% endif %}
    {% endfor %}</section>
    {% endfor %}
    {% if books.noSpine > 0 %}<p>🖼️ no spine: {{ books.noSpine }}</p>{% endif %}
    {% if books.noCover > 0 %}<p>📕 no cover: {{ books.noCover }}</p>{% endif %}
  </div>
</div>

<style>
  section {
    margin: 2rem 0;
  }
</style>
