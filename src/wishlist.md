---
title: Wishlist
subtitle: inspired by <i><a href="https://goods.wtf" target="_blank">goods.wtf</a></i>
eleventyNavigation:
  key: wishlist
  title: wishlist
  order: 2
layout: "base.liquid"
---
<p>updated at: Jan 15, 2024</p>
<div class="wishlist">
  {% for item in wishlist %}<div class="wishlist-item">
    <div class="wishlist-image">
      <img src="/images/wishlist/{{item.image}}">
    </div>
    <div class="wishlist-info">
      <div class="wishlist-brand">{{ item.brand }}</div>
      <div class="wishlist-title">{{ item.title }}</div>
    </div>
  </div>{% endfor %}
</div>