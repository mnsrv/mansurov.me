---
title: Sasha Mansurov
subtitle: 📍 Warsaw, Poland
eleventyNavigation:
  key: /
  title: mansurov.me
  order: 0
layout: "base.liquid"
---

<section>
  <h3>Work Experience</h3>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2019 — 2024</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span>Senior Frontend Engineer at <a href="https://onesoil.ai" target="_blank">OneSoil</a></span>
      </div>
      <div class="work-experience-description">
        <i>TypeScript, React, React Native, WatermelonDB, Mapbox, Storybook, GitLab CI/CD</i>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2017 — 2019</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span>Senior Frontend Engineer at Rocketbank</span>
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
        <span>Frontend Engineer at <a href="https://idaproject.com" target="_blank">Idaproject</a></span>
      </div>
      <div class="work-experience-description">
        <i>HTML, CSS, JavaScript, jQuery, Canvas</i>
      </div>
    </div>
  </div>
</section>

<section>
  <h3>Side Projects</h3>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2024</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <a href="https://moviecast.app" target="_blank">MovieCast app</a>
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
        <span>mansurov.me</span>
      </div>
      <div class="work-experience-description">
        <i>Eleventy, Vercel</i>
      </div>
    </div>
  </div>
  <div class="work-block">
    <div class="work-duration">
      <span><i>2023</i></span>
    </div>
    <div class="work-experience">
      <div class="work-experience-title">
        <span>personal Telegram bot</span>
      </div>
      <div class="work-experience-description">
        <i>self-hosted n8n</i>
      </div>
    </div>
  </div>
</section>

<section>
  <h3>Education</h3>
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

<section>
  <h3>Links</h3>
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
  section {
    margin: 3rem 0;
  }
  section:first-of-type {
    margin-top: 0;
  }
  section:last-of-type {
    margin-bottom: 0;
  }
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
