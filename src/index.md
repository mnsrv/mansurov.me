---
title: Sasha Mansurov
subtitle: ネーヴァ ギヴ アップ!!
eleventyNavigation:
  key: /
  title: mansurov.me
  order: 0
layout: "base.liquid"
class: "body_no_padding"
templateEngineOverride: liquid
---

<div class="flex container">
  <div class="col padding">
<div class="indexRow">
<a href="/calendars">
<div class="calendar-container">
  <div class="y2k-badge">
    <div class="badge-ribbon"></div>
    <div class="badge-text">NEW YEAR<br>CALENDAR</div>
    <div class="badge-stars">⭐️ ⭐️ ⭐️</div>
  </div>
  <img src="/images/2026-year-calendar-A2.jpg" alt="2026 year calendar A2" style="max-width: 842px; width: 100%;" />
</div>
</a>
</div>
</div>

<div class="col padding">
</div>

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
  .calendar-container {
    position: relative;
    display: inline-block;
  }
  .y2k-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    z-index: 10;
    padding: 8px 16px;
    background: linear-gradient(180deg, #ff0066 0%, #ff3366 50%, #ff0066 100%);
    border: 3px solid #000;
    box-shadow: 
      0 0 0 2px #fff,
      0 0 0 5px #000,
      4px 4px 0 0 #000,
      0 0 15px rgba(255, 0, 102, 0.6);
    transform: rotate(-8deg) translateZ(0);
    animation: badgeFloat 2.5s ease-in-out infinite;
    overflow: visible;
    will-change: transform;
  }
  .badge-ribbon {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #000;
  }
  .badge-text {
    font-family: 'Impact', 'Arial Black', sans-serif;
    font-size: 16px;
    font-weight: 900;
    color: #fff;
    text-shadow: 
      2px 2px 0 #000,
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;
    position: relative;
    z-index: 2;
  }
  .badge-stars {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    text-shadow: 
      1px 1px 0 #000,
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000;
    animation: starTwinkle 1.5s ease-in-out infinite;
    z-index: 3;
  }
  @keyframes badgeFloat {
    0%, 100% {
      transform: rotate(8deg) translateY(0) translateZ(0);
    }
    50% {
      transform: rotate(6deg) translateY(5px) translateZ(0);
    }
  }
  @keyframes starTwinkle {
    0%, 100% {
      opacity: 1;
      transform: translateX(-50%) scale(1) translateZ(0);
    }
    50% {
      opacity: 0.6;
      transform: translateX(-50%) scale(1.2) translateZ(0);
    }
  }
  .indexBook {
    height: 200px;
    transform: rotate(-5deg);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  .indexBook:hover {
    transform: rotate(0deg);
  }
</style>
