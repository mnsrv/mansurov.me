---
title: About
subtitle: Hello, it's me
eleventyNavigation:
  key: about
  title: about
  order: 2
layout: "base.liquid"
---

<section class="mb-4">
  <p>I'm Sasha Mansurov. Software engineer. This is my digital garden.</p>

- writing [blog](/blog)
- reading [books](/books)
- designing [calendars](/calendars)
- collecting [wishlist](/wishlist)
- learning [vocabulary](/vocabulary)
- tracking [activities](/activities)
- studying [chess](/chess)
    <!-- - saving [quotes](/quotes) -->
    <!-- - recording [concerts](/concerts) -->
  </section>

<section class="mb-4">
  <h2>Work Experience</h2>
  <hr />
  <div class="work-block">
    <div class="work-duration">
      <span><i>2019 — 2024</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span>Senior Frontend Engineer at <a href="https://onesoil.ai" target="_blank" class="icon-link" data-link="onesoil">OneSoil</a></span>
      </div>
      <div class="work-experience-description">
        <i>TypeScript, React, React Native, WatermelonDB, Mapbox, Storybook, Jest, GitLab CI/CD</i>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2017 — 2019</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span>Senior Frontend Engineer at <span class="icon-link" data-link="rocketbank">Rocketbank</span></span>
      </div>
      <div class="work-experience-description">
        <i>TypeScript, React, React Native, MobX, Redux, Lottie</i>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2014 — 2017</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span>Frontend Engineer at <a href="https://idaproject.com" target="_blank" class="icon-link" data-link="idaproject">Idaproject</a></span>
      </div>
      <div class="work-experience-description">
        <i>HTML, CSS, JavaScript, jQuery, Canvas</i>
      </div>
    </div>
  </div>
</section>

<section class="mb-4">
  <h2>Side Projects</h2>
  <hr />
  <div class="work-block">
    <div class="work-duration">
      <span><i>2024</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <a href="https://moviecast.app" target="_blank" class="icon-link" data-link="moviecast">MovieCast app</a>
      </div>
      <div class="work-experience-description">
        <i>SwiftUI, TMDB</i>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2023</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span class="icon-link" data-link="mikha">personal Telegram bot</span>
      </div>
      <div class="work-experience-description">
        <i>self-hosted n8n</i>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2016</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span class="icon-link" data-link="mansurov.me">mansurov.me</span>
      </div>
      <div class="work-experience-description">
        <i>Eleventy, Vercel</i>
      </div>
    </div>
  </div>
</section>

<section class="mb-4">
  <h2>Education</h2>
  <hr />
  <div class="work-block">
    <div class="work-duration">
      <span><i>2009 — 2014</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        Bachelor of Computer Science at RSU of Oil and Gas
      </div>
      <div class="work-experience-description">
        <i>Use of Multi-Agent Systems in the Oil and Gas Industry</i>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2014 — 2016</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        Master of Science in Information Technology at RSU of Oil and Gas
      </div>
      <div class="work-experience-description">
        <i>Development of an Integrated Web-Based User Support System</i>
      </div>
    </div>
  </div>
</section>

<section class="mb-4">
  <h2>Links</h2>
  <hr />
  <div class="work-block">
    <div class="work-duration">
      <span><i>GitHub</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <a href="https://github.com/mnsrv" target="_blank">mnsrv</a>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>Email</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <a href="mailto:email@mansurov.me" target="_blank">email@mansurov.me</a>
      </div>
    </div>
  </div>
</section>

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
  .icon-link {
    white-space: nowrap;
  }
  .icon-link[data-link]:before {
    content: '\3000';
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 6px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
    border-radius: 4px;
  }
  @media (max-width: 720px) {
    .icon-link[data-link]:before {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .icon-link[data-link="onesoil"]:before {
    background-image: url(/images/onesoil.png);
  }
  .icon-link[data-link="rocketbank"]:before {
    background-image: url(/images/rocketbank.png);
  }
  .icon-link[data-link="idaproject"]:before {
    background-image: url(/images/idaproject.png);
  }
  .icon-link[data-link="moviecast"]:before {
    background-image: url(/images/moviecast.png);
  }
  .icon-link[data-link="mansurov.me"]:before {
    background-image: url(/favicon.svg);
  }
  .icon-link[data-link="mikha"]:before {
    background-image: url(/images/mikha.png);
  }
</style>
