---
layout: default
title: News
permalink: /news/
eyebrow: Latest
heading: News &amp; Media
subtitle: Program announcements and coverage of ECSR students and their work.
---

<!-- The list below is generated from _data/news.yml — add new items there, not here. -->
<ul class="news">
  {% for item in site.data.news %}
  <li>
    <time datetime="{{ item.datetime }}">{{ item.date }}</time>
    <div>
      <a href="{% if item.url contains '://' %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">{{ item.title }}</a>
      {% if item.source or item.summary %}
        <p>{% if item.source %}{{ item.source }}{% if item.summary %} &mdash; {% endif %}{% endif %}{{ item.summary }}</p>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>

<p class="news-foot">Have something that belongs here? Email <a href="mailto:ecsr-program@umich.edu">ecsr-program@umich.edu</a>.</p>
