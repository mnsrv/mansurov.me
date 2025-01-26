---
title: Blog
subtitle: Letters for memory
eleventyNavigation:
  key: blog
  title: blog
  order: 1
layout: "base.liquid"
---

{% for post in collections.posts reversed %}<p>
<i class="ppr"><span class="mh">{{ post.date | date: "%d %b "  }}</span>{{ post.date | date: "%Y"  }}</i><a href="{{ post.url }}">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}</a></p>
{% endfor %}
