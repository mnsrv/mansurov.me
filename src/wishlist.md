---
title: Wishlist
subtitle: inspired by <a href="https://goods.so" target="_blank">goods.so</a>
layout: "base.liquid"
class: "body_wishlist body_no_padding"
date: Last Modified
---

<p><i>updated at: {{ page.date | date: "%e %b %y" }}</i></p>

<div class="columns mb-3">
  {% for wish in wishlist %}
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
