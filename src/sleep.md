---
title: Sleep
subtitle: in progress
layout: 'base.liquid'
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

{% assign current_date = current_year | append: '-' | append: current_month | append: '-01' %}

<h2>{{ current_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: current_year, month: current_month %}

{% assign prev_date = prev_year | append: '-' | append: prev_month | append: '-01' %}

<h2>{{ prev_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev_year, month: prev_month %}

{% assign prev2_date = prev2_year | append: '-' | append: prev2_month | append: '-01' %}

<h2>{{ prev2_date | date: "%B %Y" }}</h2>
{% include 'sleep-calendar.liquid', year: prev2_year, month: prev2_month %}
