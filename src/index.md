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
<div>{% for book in books.list limit: 1 %}{% if mapBooksReviews[book.title] %}<a href="/books/{{mapBooksReviews[book.title]}}"><img class="indexBook" src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="" /></a>{% else %}<img class="indexBook" src="/images/books/{{book.cover}}" alt="{{book.title}} cover" />{% endif %}{% endfor %}</div><div><a href="https://open.spotify.com/playlist/7m2tz2kVmcckLek7cCus6e?go=1" target="_blank"><img class="indexSpotify" src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845fe61e03c06dd9483569dae5" alt="On The Go · Stas Polyakov" /></a></div><div>
<a href="https://unsplash.com/photos/gray-asphalt-road-between-green-grass-field-under-blue-sky-during-daytime-NErnyM53U5Q" target="_blank"><img src="https://images.unsplash.com/photo-1582033307729-3ab3c1fe5857?q=80&amp;h=1200" alt="gray asphalt road between green grass field under blue sky during daytime" class="indexUnsplash" /></a></div>
</div>

<style>
  .indexRow {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
  }
  .indexBook {
    height: 200px;
    transform: rotate(-8deg);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  .indexBook:hover {
    transform: rotate(0deg);
  }
  .indexSpotify {
    height: 150px;
    border-radius: 12px;
    transition: opacity 0.4s;
  }
  .indexSpotify:hover {
    opacity: 0.8;
  }
  .indexUnsplash {
    border-radius: 12px;
    height: 400px;
    transition: transform 0.3s ease;
    transform: rotate(1deg);
  }
  .indexUnsplash:hover {
    transform: scale(0.98);
  }
</style>
