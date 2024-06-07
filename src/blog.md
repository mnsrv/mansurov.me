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
<div>
  {% for post in collections.posts %}
  <p>
    <a href="{{ post.url }}">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}</a>
    <i class="book-author">{{ post.date | date: "%e %b %y"  }}</i>
  </p>
  {% endfor %}
</div>
