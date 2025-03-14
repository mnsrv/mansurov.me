---
title: Activities
subtitle: Monthly activity summary
layout: "base.liquid"
---

## Yearly Summary

{% include 'activities-table.liquid', 
   title: activitiesByMonth.yearly.title, 
   types: activitiesByMonth.yearly.types, 
   rows: activitiesByMonth.yearly.rows %}

## Monthly Summary

{% include 'activities-table.liquid', 
   title: activitiesByMonth.monthly.title, 
   types: activitiesByMonth.monthly.types, 
   rows: activitiesByMonth.monthly.rows %}