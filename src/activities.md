---
title: Activities
subtitle: Monthly activity summary
layout: "base.liquid"
templateEngineOverride: liquid
---

{% include "activities-graph.liquid" %}

{% include 'activities-calendars.liquid', activities: activitiesByDay %}

<h2>Yearly Summary</h2>

{% include 'activities-table.liquid',
   title: activitiesByMonth.yearly.title,
   types: activitiesByMonth.yearly.types,
   rows: activitiesByMonth.yearly.rows %}

<h2>Monthly Summary</h2>

{% include 'activities-table.liquid',
   title: activitiesByMonth.monthly.title,
   types: activitiesByMonth.monthly.types,
   rows: activitiesByMonth.monthly.rows %}
