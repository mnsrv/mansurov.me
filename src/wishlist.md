---
title: Wishlist
subtitle: inspired by <i><a href="https://goods.so" target="_blank">goods.so</a></i>
eleventyNavigation:
  key: wishlist
  title: wishlist
  order: 3
layout: "base.liquid"
class: "body_wishlist body_no_padding"
date: Last Modified
---

<div class="container padding">
<p><i>updated at: {{ page.date | date: "%e %b %y" }}</i></p>

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
</div>
