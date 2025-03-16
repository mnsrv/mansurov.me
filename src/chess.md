---
title: Chess
subtitle: My favorite puzzles
eleventyNavigation:
  key: chess
  title: chess
  order: 5
layout: "base.liquid"
class: "body_chess body_no_padding"
---
<link rel="stylesheet" href="{{ '/static/chessground.base.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.brown.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.cburnett.css' | bust }}" />

<div class="container">
  <div class="col padding">
    <div id="reti" class="chess"></div>

  </div>
</div>

<script src="/static/chess-puzzles.js" type="module"></script>
