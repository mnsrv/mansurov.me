---
title: Blog
subtitle: Letters for memory
layout: "base.liquid"
class: "body_no_padding"
---

<div class="flex container">
  <div class="col padding">
{% for post in collections.posts reversed %}<p>
<i class="ppr"><span class="mh">{{ post.date | date: "%d %b "  }}</span>{{ post.date | date: "%Y"  }}</i><a href="{{ post.url }}">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}</a></p>
{% endfor %}
</div>

<div class="col padding">
    <figure>
    <img src="/images/apollo_8_earthrise_1968.jpg" alt="“Earthrise” by NASA Astronaut Bill Anders" />
    <figcaption>Earthrise, <a href="https://www.nasa.gov/image-detail/apollo-8-astronaut-bill-anders-captures-earthrise-2/" target="_blank">NASA</a></figcaption>
  </figure>
  </div>
</div>

<style>
  figure {
    margin: 0;
  }
</style>
