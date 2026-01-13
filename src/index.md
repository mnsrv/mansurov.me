---
title: Sasha Mansurov
subtitle: ネーヴァ ギヴ アップ!!
eleventyNavigation:
  key: /
  title: mansurov.me
  order: 0
layout: "base.liquid"
templateEngineOverride: liquid
---

<h2>Calendar</h2>
<hr />
<div class="columns mb-3">
  <div class="col">
    <p>2026 year calendar A2</p>
    <p>inspired by <a href="https://en.wikipedia.org/wiki/International_Fixed_Calendar" target="_blank">International Fixed Calendar</a></p>
    <p><a href="/calendars" class="btn bg-blue white">All Calendars ></a></p>
  </div>
  <div class="col">
    <div class="square img-card" style="aspect-ratio: 1684/1191;">
      <img src="/images/2026-year-calendar-A2.jpg" alt="2026 year calendar A2" />
    </div>
  </div>
</div>

<h2>Last Added Wishes</h2>
<hr />
<div class="columns mb-3">
  <div class="col-3">
    <p>Updated 9 Jan 26</p>
    <p><a href="/wishlist" class="btn bg-blue white">Wishlist ></a></p>
  </div>
  {% for wish in wishlist limit: 3 %}
    <div class="col-3">
      <a href="{{ wish.link }}" target="_blank">
        <div class="square img-card mb-2">
          <img src="/images/wishlist/{{wish.image}}" alt="{{wish.brand}} {{wish.title}}" />
        </div>
      </a>
      <span>{{wish.brand}} {{wish.title}}</span>
    </div>
  {% endfor %}
</div>

<h2>Last Read Books</h2>
<hr />
<div class="columns mb-3">
  <div class="col-3">
    <p>Updated 3 Nov 25</p>
    <p><a href="/books" class="btn bg-blue white">All Books ></a></p>
  </div>
  {% for book in books.list limit: 3 %}
    <div class="col-3">
      {% if mapBooksReviews[book.title] %}
        <a href="/books/{{mapBooksReviews[book.title]}}">
          <div class="square img-card mb-2">
            <img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="" />
          </div>
        </a>
        <span>{{book.title}}</span>
      {% else %}
        <div class="square img-card mb-2">
          <img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" />
        </div>
        <span>{{book.title}}. {{book.author}}</span>
      {% endif %}
    </div>
  {% endfor %}
</div>

<h2>Last Watched Movies</h2>
<hr />
<div class="columns mb-3">
  <div class="col-3">
    <p><a href="https://letterboxd.com/mansurov/" target="_blank" class="btn bg-blue white">Letterboxd ></a></p>
  </div>
  {% for movie in movies %}
    <div class="col-3">
      <a href="{{ movie.link }}" target="_blank">
        <div class="square img-card mb-2">
          <img src="{{ movie.image }}" alt="{{ movie.title }}" />
        </div>
      </a>
      <span>{{ movie.title }}</span>
    </div>
  {% endfor %}
</div>
