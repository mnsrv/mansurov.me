---
title: About me
subtitle: Hello, it's me
eleventyNavigation:
  key: about
  title: about
  order: 0
layout: "base.liquid"
---

I'm Sasha. I consider myself as software engineer. This is my digital garden.

- writing [blog](/blog)
- reading [books](/books)
- designing [calendars](/calendars)
- collecting [wishlist](/wishlist)
- learning [vocabulary](/vocabulary)
- tracking [activities](/activities)
- studying [chess](/chess)
- saving [quotes](/quotes)
- recording [concerts](/concerts)


<section>
  <h3>Work Experience</h3>
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

<section>
  <h3>Side Projects</h3>
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
        <span>
          <svg class="eye-icon" width="20" height="20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#ECECEC"/>
            <circle id="eye-pupil" cx="135" cy="100" r="35" fill="black"/>
          </svg>mansurov.me
        </span>
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
        <span class="icon-link" data-link="mikha">personal Telegram bot</span>
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
  @media (max-width: 960px) {
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
  .icon-link[data-link="mikha"]:before {
    background-image: url(/images/mikha.png);
  }
  .eye-icon {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: top;
    margin-right: 6px;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const pupil = document.getElementById('eye-pupil');
    if (!pupil) return;
    
    const eyeSvg = pupil.parentElement;
    const maxRadius = 40;
    
    function updatePupilPosition(e) {
      const mouseX = e ? e.clientX : window.innerWidth / 2;
      const mouseY = e ? e.clientY : window.innerHeight / 2;
      
      const rect = eyeSvg.getBoundingClientRect();
      const svgCenterX = rect.left + rect.width / 2;
      const svgCenterY = rect.top + rect.height / 2;
      
      const deltaX = mouseX - svgCenterX;
      const deltaY = mouseY - svgCenterY;
      const angle = Math.atan2(deltaY, deltaX);
      
      const maxDistance = Math.min(window.innerWidth, window.innerHeight) / 2;
      const distance = Math.hypot(deltaX, deltaY);
      const distanceFactor = Math.min(1, Math.pow(distance / maxDistance, 0.7));
      
      const newX = 100 + Math.cos(angle) * distanceFactor * maxRadius;
      const newY = 100 + Math.sin(angle) * distanceFactor * maxRadius;
      
      if (!isNaN(newX) && !isNaN(newY)) {
        pupil.setAttribute('cx', newX);
        pupil.setAttribute('cy', newY);
      }
    }
    
    document.addEventListener('mousemove', updatePupilPosition, { passive: true });
  });
</script>
