---
title: Blog
subtitle: Letters for memory
eleventyNavigation:
  key: blog
  title: blog
  order: 1
layout: "base.liquid"
---

<div class="columns mb-3">
  <div class="col">
{% for post in collections.posts reversed %}<p>
<i class="ppr"><span class="mh">{{ post.date | date: "%d %b "  }}</span>{{ post.date | date: "%Y"  }}</i><a href="{{ post.url }}">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}</a></p>
{% endfor %}
  </div>

  <div class="col">
    <div class="img-card mb-2">
      <img src="/images/apollo_8_earthrise_1968.jpg" alt="“Earthrise” by NASA Astronaut Bill Anders" />
    </div>
    <i>Earthrise, <a href="https://www.nasa.gov/image-detail/apollo-8-astronaut-bill-anders-captures-earthrise-2/" target="_blank">NASA</a></i>
  </div>
</div>
