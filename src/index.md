---
title: Sasha Mansurov
subtitle: ネーヴァ ギヴ アップ!!
eleventyNavigation:
  key: /
  title: mansurov.me
  order: 0
layout: "base.liquid"
templateEngineOverride: liquid
---

<div class="flex container">
  <div class="col padding">
<div class="indexRow">
<div>{% for book in books.list limit: 1 %}{% if mapBooksReviews[book.title] %}<a href="/books/{{mapBooksReviews[book.title]}}"><img class="indexBook" src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="" /></a>{% else %}<img class="indexBook" src="/images/books/{{book.cover}}" alt="{{book.title}} cover" />{% endif %}{% endfor %}</div>
</div>
</div>

<div class="col padding">
<div class="currentMonthCalendar">
  <h2><a href="/activities">Activities</a></h2>
  {% assign now = 'now' | date: '%Y-%m-%d' %}
  {% assign current_year = now | slice: 0, 4 | plus: 0 %}
  {% assign current_month = now | slice: 5, 2 | plus: 0 %}
  {% assign current_date = current_year | append: '-' | append: current_month | append: '-01' %}
  {% assign current_month_activities = activitiesByDay | where_exp: "activity", "activity.date contains current_date | slice: 0, 7" %}
  {% include 'activities-calendar.liquid', year: current_year, month: current_month, activities: current_month_activities %}
</div>

<div class="currentMonthSleep">
  <h2><a href="/sleep">Sleep</a></h2>
  {% include 'sleep-calendar.liquid', year: current_year, month: current_month %}
</div>
</div>

<style>
  .indexRow {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
  }
  .indexBook {
    height: 200px;
    transform: rotate(-8deg);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  .indexBook:hover {
    transform: rotate(0deg);
  }
</style>
