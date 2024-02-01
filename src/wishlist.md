---
title: Wishlist
subtitle: inspired by <i><a href="https://goods.wtf" target="_blank">goods.wtf</a></i>
eleventyNavigation:
  key: wishlist
  title: wishlist
  order: 2
layout: "base.liquid"
class: "body_wishlist"
---
<i>updated at: Jan 16, 2024</i>
<div class="wishlist">
  {% for item in wishlist %}
  <div class="wishlist-item">
    <div class="wishlist-image">
      <img src="/images/wishlist/{{item.image}}">
    </div>
    <div class="wishlist-info">
      <div class="wishlist-brand">{{ item.brand }}</div>
      <div class="wishlist-title">{{ item.title }}</div>
    </div>
  </div>
  {% endfor %}
</div>