---
title: Blog
subtitle: Letters for memory
eleventyNavigation:
  key: blog
  title: blog
  order: 1
layout: "base.liquid"
class: "body_blog"
---

{% for post in collections.posts reversed %}<p>
<i class="ppr">{{ post.date | date: " %Y %b %d"  }}</i> <a href="{{ post.url }}">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}</a></p>
{% endfor %}
