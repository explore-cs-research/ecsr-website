---
layout: default
title: Home
layout_style: landing
---

<!-- ===========================================================================
     HOMEPAGE
     Everything marked "placeholder" below needs real content. See the README
     section "Replacing placeholders" for how to swap each one in.
     =========================================================================== -->

<!-- LATEST NEWS BAR — a thin ticker under the nav. One item at a time, drawn from
     _data/news.yml; the full list lives at /news/. Add news there, not here. -->
<div class="news-bar" data-carousel aria-roledescription="carousel" aria-label="Latest news">
  <div class="wrap news-bar-inner">
    <span class="news-bar-label">Latest</span>

    <ul class="carousel-track" data-carousel-track>
      {% for item in site.data.news limit: 5 %}
      <li class="carousel-slide" data-carousel-slide>
        <a href="{% if item.url contains '://' %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">
          <time datetime="{{ item.datetime }}">{{ item.date }}</time>
          <span class="news-bar-title">{{ item.title }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>

    <div class="news-bar-controls">
      <button class="carousel-btn carousel-btn--prev" type="button" data-carousel-prev aria-label="Previous news item"></button>
      <button class="carousel-btn carousel-btn--next" type="button" data-carousel-next aria-label="Next news item"></button>
      <a class="news-bar-all" href="{{ '/news/' | relative_url }}">All news</a>
    </div>
  </div>
</div>

<section class="hero hero--center">
  <div class="hero-inner">
    <div class="hero-content">
      <p class="eyebrow">University of Michigan &middot; CSE</p>
      <h1>Undergraduate research starts <em>here</em>.</h1>
      <p class="hero-lede">
        Explore CS Research (ECSR) pairs Michigan undergraduates with a faculty or PhD mentor
        for a year-long, hands-on research project &mdash; no prior experience required.
      </p>
      <div class="hero-actions">
        <a href="{{ '/prospective-students/' | relative_url }}" class="btn btn--primary">I want to be a mentee</a>
        <a href="{{ '/mentors/' | relative_url }}" class="btn btn--ghost">I want to mentor</a>
      </div>
    </div>
  </div>
</section>

<!-- PHOTO GALLERY — replace each <div class="ph ph--photo"> with an <img> tag.
     See README > Replacing placeholders > Photos. -->
<section class="section section--surface">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">The program in pictures</p>
      <h2>A year of discovery</h2>
      <p>Poster sessions, panels, lab meetings, and the people who make the program work.</p>
    </div>

    <div class="gallery">
      <figure class="gallery-item gallery-item--wide">
        <img src="{{ '/assets/images/poster-session.jpg' | relative_url }}" alt="Students and mentors at the annual ECSR poster session" loading="lazy">
        <figcaption>Annual poster session</figcaption>
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/assets/images/student-presenting.jpg' | relative_url }}" alt="A student discussing their poster with a visitor at the showcase" loading="lazy">
        <figcaption>Student presenting their project</figcaption>
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/assets/images/research-panel.jpg' | relative_url }}" alt="Students seated in a classroom during a research career panel" loading="lazy">
        <figcaption>Research career panel</figcaption>
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/assets/images/first-gathering.jpg' | relative_url }}" alt="Students gathered around tables at the program's first meeting of the year" loading="lazy">
        <figcaption>The first gathering</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- QUOTES — the two student quotes are real. The two mentor quotes are placeholders. -->
<section class="section section--blue">
  <div class="wrap">
    <div class="section-head section-head--center">
      <p class="eyebrow">In their words</p>
      <h2>From students and mentors</h2>
    </div>

    <div class="quotes">
      <blockquote class="quote">
        <p>The program offered a very structured start that helped introduce students to hands-on learning.</p>
        <footer>ECSR student <span>2025 cohort</span></footer>
      </blockquote>

      <blockquote class="quote">
        <p>ECSR serves as a low-pressure way to explore research and figure out whether it is something you enjoy &hellip; you can learn, ask questions, and develop new skills without feeling like you have to know everything from the start.</p>
        <footer>ECSR student <span>2025 cohort</span></footer>
      </blockquote>

      <blockquote class="quote">
        <p>(The program is valuable in that it) connect promising young students who are unfamiliar with research or with the topics studied in specific labs to research groups working on interesting projects</p>
        <footer>ECSR mentor</footer>
      </blockquote>
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Student highlights</p>
      <h2>Where ECSR projects have led</h2>
      <p>Work that started as an ECSR project and went further.</p>
    </div>

    <ul class="achievements">
      <li>
        <span class="achievement-tag">Publication</span>
        <div>
          <p class="achievement-title">Workshop paper accepted at VLDB</p>
          <p class="achievement-meta">Yike Yuan &mdash; mentored by Lin Ma</p>
        </div>
      </li>
      <li>
        <span class="achievement-tag">Publication</span>
        <div>
          <p class="achievement-title">Paper accepted at ICWSM</p>
          <p class="achievement-meta">Veronica Jude &mdash; mentored by Ceren Burak</p>
        </div>
      </li>
      <li>
        <span class="achievement-tag">Project</span>
        <div>
          <p class="achievement-title"><a href="https://www.terramosaic.org/">Terra Mosaic</a></p>
          <p class="achievement-meta">Reiko Chen &mdash; mentored by Xin Wei</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section section--tint">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Alumni</p>
      <h2>Next steps of ECSR cohorts</h2>
      <p>Past participants have gone on to graduate programs across the country.</p>
    </div>

    <ul class="alumni">
      <li>
        <span class="alumni-name">Katherine Tomashevsky</span>
        <span class="alumni-role">PhD student, Texas A&amp;M</span>
      </li>
      <li>
        <span class="alumni-name">Yuhan Zhang</span>
        <span class="alumni-role">PhD student, University of Michigan</span>
      </li>
      <li>
        <span class="alumni-name">Ananya Kasi</span>
        <span class="alumni-role">PhD student, Georgia Tech</span>
      </li>
      <li>
        <span class="alumni-name">Anna Ablove</span>
        <span class="alumni-role">PhD student, University of Michigan</span>
      </li>
      <li>
        <span class="alumni-name">Alexia Moreno</span>
        <span class="alumni-role">MS student, University of Michigan</span>
      </li>
      <li>
        <span class="alumni-name">Xinyi Zhu</span>
        <span class="alumni-role">MS student, University of Michigan</span>
      </li>
      <li>
        <span class="alumni-name">And more!</span>
      </li>
    </ul>
  </div>
</section>



<!-- BY THE NUMBERS — every value below is a placeholder. Replace the digits. -->
<section class="section section--tint">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Impact</p>
      <h2>By the numbers</h2>
      <p>A snapshot of the program so far.</p>
    </div>

    <dl class="facts">
      <div class="fact">
        <dt>Students mentored</dt>
        <dd><span class="ph-value">70+</span><small>since the program began</small></dd>
      </div>
      <div class="fact">
        <dt>Research mentors</dt>
        <dd><span class="ph-value">30+</span><small>faculty, PhD students, and research staff</small></dd>
      </div>
      <div class="fact">
        <dt>Projects completed</dt>
        <dd><span class="ph-value">All students</span><small>presented at the annual poster session</small></dd>
      </div>
    </dl>
  </div>
</section>

<section class="section section--tint">
  <div class="wrap">
    <div class="split-cta">
      <div class="cta">
        <div class="cta-text">
          <h2>Thinking about research?</h2>
          <p>See what the program involves, who it's for, and how to apply.</p>
        </div>
        <a href="{{ '/prospective-students/' | relative_url }}" class="btn btn--primary">For prospective students</a>
      </div>

      <div class="cta cta--alt">
        <div class="cta-text">
          <h2>Want to mentor?</h2>
          <p>Work with a motivated undergraduate on a project you care about.</p>
        </div>
        <a href="{{ '/mentors/' | relative_url }}" class="btn btn--primary">For prospective mentors</a>
      </div>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/carousel.js' | relative_url }}" defer></script>
