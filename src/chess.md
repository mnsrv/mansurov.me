---
title: Chess
subtitle: My favorite puzzles
layout: "base.liquid"
class: "body_chess body_no_padding"
---

<link rel="stylesheet" href="{{ '/static/chessground.base.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.brown.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.cburnett.css' | bust }}" />

<div class="container">
  <div class="col padding">
    <div id="chessboard" class="chess"></div>

  </div>
</div>

<script src="/static/chess-play.js" type="module"></script>
