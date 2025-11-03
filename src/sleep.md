---
title: Sleep
subtitle: in progress
layout: "base.liquid"
class: "body_no_padding"
templateEngineOverride: liquid
---

{% assign month_names = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}

{% assign now = 'now' | date: '%Y-%m-%d' %}
{% assign current_year = now | slice: 0, 4 | plus: 0 %}
{% assign current_month = now | slice: 5, 2 | plus: 0 %}

{% assign prev_month = current_month | minus: 1 %}
{% assign prev_year = current_year %}
{% if prev_month < 1 %}
{% assign prev_month = 12 %}
{% assign prev_year = current_year | minus: 1 %}
{% endif %}

{% assign prev2_month = prev_month | minus: 1 %}
{% assign prev2_year = prev_year %}
{% if prev2_month < 1 %}
{% assign prev2_month = 12 %}
{% assign prev2_year = prev_year | minus: 1 %}
{% endif %}

{% assign prev3_month = prev2_month | minus: 1 %}
{% assign prev3_year = prev2_year %}
{% if prev3_month < 1 %}
{% assign prev3_month = 12 %}
{% assign prev3_year = prev2_year | minus: 1 %}
{% endif %}

{% assign prev4_month = prev3_month | minus: 1 %}
{% assign prev4_year = prev3_year %}
{% if prev4_month < 1 %}
{% assign prev4_month = 12 %}
{% assign prev4_year = prev3_year | minus: 1 %}
{% endif %}

{% assign prev5_month = prev4_month | minus: 1 %}
{% assign prev5_year = prev4_year %}
{% if prev5_month < 1 %}
{% assign prev5_month = 12 %}
{% assign prev5_year = prev4_year | minus: 1 %}
{% endif %}

{% assign prev6_month = prev5_month | minus: 1 %}
{% assign prev6_year = prev5_year %}
{% if prev6_month < 1 %}
{% assign prev6_month = 12 %}
{% assign prev6_year = prev5_year | minus: 1 %}
{% endif %}

{% assign prev7_month = prev6_month | minus: 1 %}
{% assign prev7_year = prev6_year %}
{% if prev7_month < 1 %}
{% assign prev7_month = 12 %}
{% assign prev7_year = prev6_year | minus: 1 %}
{% endif %}

{% assign prev8_month = prev7_month | minus: 1 %}
{% assign prev8_year = prev7_year %}
{% if prev8_month < 1 %}
{% assign prev8_month = 12 %}
{% assign prev8_year = prev7_year | minus: 1 %}
{% endif %}

{% assign prev9_month = prev8_month | minus: 1 %}
{% assign prev9_year = prev8_year %}
{% if prev9_month < 1 %}
{% assign prev9_month = 12 %}
{% assign prev9_year = prev8_year | minus: 1 %}
{% endif %}

{% assign prev10_month = prev9_month | minus: 1 %}
{% assign prev10_year = prev9_year %}
{% if prev10_month < 1 %}
{% assign prev10_month = 12 %}
{% assign prev10_year = prev9_year | minus: 1 %}
{% endif %}

{% assign prev11_month = prev10_month | minus: 1 %}
{% assign prev11_year = prev10_year %}
{% if prev11_month < 1 %}
{% assign prev11_month = 12 %}
{% assign prev11_year = prev10_year | minus: 1 %}
{% endif %}

<div class="flex container">
  <div class="col padding">
{% assign current_date = current_year | append: '-' | append: current_month | append: '-01' %}

<h2>{{ current_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: current_year, month: current_month, sleep: sleep %}
</div>
<div class="col padding">

{% assign prev_date = prev_year | append: '-' | append: prev_month | append: '-01' %}

<h2>{{ prev_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev_year, month: prev_month, sleep: sleep %}
</div>
<div class="col padding">

{% assign prev2_date = prev2_year | append: '-' | append: prev2_month | append: '-01' %}

<h2>{{ prev2_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev2_year, month: prev2_month, sleep: sleep %}
</div>
<div class="col padding">

{% assign prev3_date = prev3_year | append: '-' | append: prev3_month | append: '-01' %}

<h2>{{ prev3_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev3_year, month: prev3_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev4_date = prev4_year | append: '-' | append: prev4_month | append: '-01' %}

<h2>{{ prev4_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev4_year, month: prev4_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev5_date = prev5_year | append: '-' | append: prev5_month | append: '-01' %}

<h2>{{ prev5_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev5_year, month: prev5_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev6_date = prev6_year | append: '-' | append: prev6_month | append: '-01' %}

<h2>{{ prev6_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev6_year, month: prev6_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev7_date = prev7_year | append: '-' | append: prev7_month | append: '-01' %}

<h2>{{ prev7_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev7_year, month: prev7_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev8_date = prev8_year | append: '-' | append: prev8_month | append: '-01' %}

<h2>{{ prev8_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev8_year, month: prev8_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev9_date = prev9_year | append: '-' | append: prev9_month | append: '-01' %}

<h2>{{ prev9_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev9_year, month: prev9_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev10_date = prev10_year | append: '-' | append: prev10_month | append: '-01' %}

<h2>{{ prev10_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev10_year, month: prev10_month, sleep: sleep %}
</div>
<div class="col padding">
{% assign prev11_date = prev11_year | append: '-' | append: prev11_month | append: '-01' %}

<h2>{{ prev11_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev11_year, month: prev11_month, sleep: sleep %}
  </div>
</div>
