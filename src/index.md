---
title: Sasha Mansurov
subtitle: ネーヴァ ギヴ アップ!!
eleventyNavigation:
  key: /
  title: mansurov.me
  order: 0
layout: 'base.liquid'
templateEngineOverride: liquid
---

<h2><a href="/worldcup">World Cup 2026</a></h2>
<hr />
<div class="columns mb-3">
  <div class="col">
    <p>🇨🇦 🇲🇽 🇺🇸 48 teams · 11 June – 19 July</p>
    <p>Groups, standings and the full knockout bracket.</p>
    <p><a href="/worldcup" class="btn bg-blue white">World Cup ></a></p>
  </div>
  <div class="col">
    <p>Next matches</p>
    <ul class="wc-home-fixtures">
      {% for m in worldcup.upcoming limit: 5 %}
        <li>
          <span class="wc-hf-date">{{ m.date | date: "%e %b" }}</span>
          <span class="wc-hf-home">{{ m.home }} {{ m.homeFlag }}</span>
          <span class="wc-hf-v">v</span>
          <span class="wc-hf-away">{{ m.awayFlag }} {{ m.away }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<h2><a href="/books">Books</a></h2>
<hr />
<div class="columns mb-3">
  {% for book in books.list limit: 4 %}
    <div class="col-3 book-card">
      {% if mapBooksReviews[book.title] %}
        <a href="/books/{{mapBooksReviews[book.title]}}">
          <div class="book-cover mb-2">
            <img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" />
          </div>
        </a>
        <span>{{book.title}}</span>
      {% else %}
        <div class="book-cover mb-2">
          <img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" />
        </div>
        <span>{{book.title}}. {{book.author}}</span>
      {% endif %}
    </div>
  {% endfor %}
</div>

<h2><a href="https://letterboxd.com/mansurov/" target="_blank">Letterboxd</a></h2>
<hr />
<div class="columns mb-3">
  {% for movie in movies.items %}
    <div class="col-3 book-card">
      <a href="{{ movie.link }}" target="_blank">
        <div class="poster">
          <img src="{{ movie.image }}" alt="{{ movie.title }}" />
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<h2>Last Added Wishes</h2>
<hr />
<div class="columns mb-3">
  <div class="col-3">
    <p>Updated {{ lastUpdatedWishlist }}</p>
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
