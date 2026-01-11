---
title: Wishlist
subtitle: inspired by <a href="https://goods.so" target="_blank">goods.so</a>
layout: "base.liquid"
class: "body_wishlist body_no_padding"
date: Last Modified
---

<div class="mb-4">
<p><i>updated at: {{ page.date | date: "%e %b %y" }}</i></p>

<div class="wishlist">
  {% for item in wishlist %}
  <div class="wishlist-item">
    <a href="{{ item.link }}" target="_blank">
      <div class="wishlist-image">
        <img src="/images/wishlist/{{item.image}}">
      </div>
    </a>
    <div class="wishlist-info">
      <div class="wishlist-brand">{{ item.brand }}</div>
      <div class="wishlist-title">{{ item.title }}</div>
    </div>
  </div>
  {% endfor %}
</div>
</div>
