---
tags: posts
title: nanochess
layout: "post.liquid"
date: 2025-11-30
summary: "2025-11"
---

Только сейчас увидел проект [nanochess](https://nanochess.org/chess4.html). Программист в 2009 портировал свою миниатюрную версию шахмат с языка C на Javascript. Код не менялся с 2009 года. Весит в разных UI версиях около 2 кб. Умели же раньше. Для понимания: в этот кусок кода входит абсолютно все: движок с выбором лучшего хода, логика валидации шахматных ходов, en passant, рокировка, превращение пешки в фигуру, выбор фигуры и выбор поля, отрисовка поля и фигур. Честно говоря я в шоке. Для сравнения я посмотрел [chess.js](https://github.com/jhlywa/chess.js) там валидация и генерация ходов. 71 кб, и [chessground.js](https://github.com/lichess-org/chessground) тут только UI доски и фигур. 29 кб. При этом сами библиотеки приятные, ничего против не имею, сам с удовольствием пользуюсь. Просто это реально много всего надо учесть по ощущениям.

<figure>
<img src="/images/blog/nanochess.png" alt="source code of nanochess by Oscar Toledo G." />
</figure>

Перенес этот движок к себе в [шахматные задачки](/chess), как раз не хватало чего-то, что будет делать ответные ходы в задачах. Нести целый стокфиш или что-то подобное совсем не хотелось. Он довольно прилично играет. У меня, например, получилось его обыграть только один раз из 10. Попробуйте вы

<div id="chessboard" class="chess"></div>
<link rel="stylesheet" href="{{ '/static/chessground.base.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.brown.css' | bust }}" />
<link rel="stylesheet" href="{{ '/static/chessground.cburnett.css' | bust }}" />
<script src="/static/chess-play.js" type="module"></script>
