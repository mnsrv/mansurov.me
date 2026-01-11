---
title: Chess
subtitle: My favorite puzzles
layout: "base.liquid"
---

<link rel="stylesheet" href="{{ '/static/chessground.base.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.brown.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.cburnett.css' | bust }}" />

<div class="columns">
  <div class="col">
    <div id="chessboard" class="chess"></div>
  </div>
</div>

<script src="/static/chess-puzzles.js" type="module"></script>
<!-- <script src="/static/chess-play.js" type="module"></script> -->
