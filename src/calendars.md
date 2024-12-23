---
title: Calendars
subtitle: I design and print calendar for myself
eleventyNavigation:
  key: calendars
  title: calendars
  order: 4
layout: "base.liquid"
class: "body_calendars body_no_padding"
preloads:
  - url: /images/2025-year-calendar-A2-en-pink.jpg
    type: image/jpeg
  - url: /images/2025-year-calendar-A2-en-blue.jpg
    type: image/jpeg
  - url: /images/2025-year-calendar-A2-en-green.jpg
    type: image/jpeg
  - url: /images/2025-year-calendar-A2-en-gray.jpg
    type: image/jpeg
  - url: /images/2025-year-calendar-A2-ru-pink.jpg
    type: image/jpeg
  - url: /images/2025-year-calendar-A2-ru-blue.jpg
    type: image/jpeg
  - url: /images/2025-year-calendar-A2-ru-green.jpg
    type: image/jpeg
  - url: /images/2025-year-calendar-A2-ru-gray.jpg
    type: image/jpeg
---

<div class="flex container">
  <div class="col padding">
    <img id="calendar-image" src="/images/2025-year-calendar-A2-en-pink.jpg" alt="2025 year calendar A2 en pink" style="max-width: 842px; width: 100%;" />
  </div>
  <div class="col padding">
    <h4>2025 year calendar A2</h4>
    <p>inspired by <i><a href="https://jesseitzler.com/products/the-big-a-calendar" target="_blank">THE BIG A## CALENDAR</a></i></p>
    <div class="image-preview" style="background-image:url('/images/2025-year-calendar-A2-en-pink.jpg')"></div>
    <fieldset>
      <legend>Select color:</legend>
      <div>
        <label style="--color: #FF6482">
          <input type="radio" name="color" value="pink" checked data-umami-event="Calendar Color Changed" data-umami-event-color="pink" />
          Pink
        </label>
        <label style="--color: #409CFF">
          <input type="radio" name="color" value="blue" data-umami-event="Calendar Color Changed" data-umami-event-color="blue" />
          Blue
        </label>
        <label style="--color: #30DB5B">
          <input type="radio" name="color" value="green" data-umami-event="Calendar Color Changed" data-umami-event-color="green" />
          Green
        </label>
        <label style="--color: #7C7C80">
          <input type="radio" name="color" value="gray" data-umami-event="Calendar Color Changed" data-umami-event-color="gray" />
          Gray
        </label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Select language:</legend>
      <div>
        <label>
          <input type="radio" name="lang" value="en" checked data-umami-event="Calendar Language Changed" data-umami-event-language="english" />
          English
        </label>
        <label>
          <input type="radio" name="lang" value="ru" data-umami-event="Calendar Language Changed" data-umami-event-language="russian" />
          Russian
        </label>
      </div>
    </fieldset>
    <a id="pdf-download" href="/files/2025-A2-en-pink.pdf" download="2025-A2-en-pink.pdf" class="download-button" data-umami-event="PDF Download">
      Download PDF
    </a>
    <p class="print-hint">Recommended: A2 matte paper, 170 g/m²</p>
  </div>
  
  <div class="col padding">
<h4>2024 year calendar A2</h4>
<p>inspired by <i><a href="https://www.justbenice.ru/product/calendar-2023/" target="_blank">Just Be Nice</a></i></p>
<img src="/images/2024-year-calendar-A2.jpg" alt="2024 year calendar A2" style="max-width: 842px; width: 100%;" />
</div>
<div class="col padding">
<h4>2023 month calendar A4</h4>
<p>same as prev year but with more space for day</p>
<img src="/images/2023-month-calendar-A4.jpg" alt="2023 month calendar A4" style="width: 297.5px;" />
</div>
<div class="col padding">
<h4>2022 month calendar A4</h4>
<p>inspired by <i><a href="https://www.instagram.com/kalstorecom/" target="_blank">KALSTORE</a></i></p>
<img src="/images/2022-month-calendar-A4.jpg" alt="2022 month calendar A4" style="width: 297.5px;" />
</div>
<div class="col padding">
<h4>2021 year calendar A1</h4>
<p>inspired by <i><a href="https://www.instagram.com/lelevina/" target="_blank">olia levina</a></i>, <i><a href="https://www.instagram.com/partisanpress/" target="_blank">Partisan Press</a></i></p>
<img src="/images/2021-year-calendar-A1.jpg" alt="2021 year calendar A1" style="max-width: 1192px; width: 100%;" />
</div>
<div class="col padding">
<h4>2020 month calendar A4</h4>
<p>inspired by <i><a href="https://github.com/eliheuer/gregorian-wall-calendar" target="_blank">Eli Heuer</a></i></p>
<img src="/images/2020-month-calendar-A4.jpg" alt="2020 month calendar A4" style="width: 297.5px;" />
</div>
</div>

<style>
  input[type="radio"] {
    accent-color: var(--color);
  }

  label {
    color: var(--color);
  }

  fieldset {
    margin-bottom: 1rem;
  }

  .image-preview {
    max-width: 328px;
    height: 91px;
    background-size: 1684px;
    background-position: -15px -106px;
    margin-bottom: 1rem;
  }

  .download-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #FF6482;
    color: white;
    border-radius: 24px;
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    transition: all 0.2s ease;
  }

  .download-button:hover {
    opacity: 0.9;
  }

  .download-button:active {
    transform: scale(0.98);
  }

  .print-hint {
    margin-top: 0.5rem;
    opacity: 0.5;
    font-size: 14px;
  }
  .print-hint i {
    font-style: italic;
  }
</style>

<script src="/static/calendar.js" type="module"></script>
