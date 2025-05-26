---
title: Sasha Mansurov
subtitle: ネーヴァ ギヴ アップ!!
eleventyNavigation:
  key: /
  title: mansurov.me
  order: 0
layout: 'base.liquid'
class: 'body_no_padding'
pagination:
  data: books.list
  size: 1
  reverse: true
---

<div class="flex container">
  <div class="col padding">
    <section>
      <h3>Last read <a href="/books">book</a></h3>
      {% for book in pagination.items %}
      <div class="work-block">
        <div class="work-duration">
          {% if mapBooksReviews[book.title] %}<a href="/books/{{mapBooksReviews[book.title]}}">
            <img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="width: 100px" /></a>{% else %}<img src="/images/books/{{book.cover}}" alt="{{book.title}} cover" style="width: 100px" />{% endif %}
        </div>
        <div class="work-experience">
          <div class="work-experience-title">
            <span>{{book.title}}</span>
          </div>
          <div class="work-experience-description">
            <i>{{book.author}}</i>
          </div>
        </div>
      </div>
      {% endfor %}
    </section>
  </div>

  <div class="col padding">
    
  </div>
</div>

<style>
  .work-block {
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  h3 + .work-block {
    margin-top: 2rem;
  }
  .work-block:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 480px) {
    .work-block {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  .work-duration {
    flex-shrink: 0;
  }
  .work-duration:after {
    content: '0000 — 0000';
    visibility: hidden;
  }
  .work-duration span {
    position: absolute;
  }
  .work-experience-description {
    margin-top: 0.5rem;
  }
</style>
