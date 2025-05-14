---
title: My Projects
layout: layouts/base.njk
permalink: /projects/
---
# My Projects

Explore my latest work and projects.

<ul class="project-list">
{% for project in collections.project %}
  <li>
    <a href="{{ project.url }}">{{ project.data.title }}</a>
    <p>{{ project.data.description | default("No description available") }}</p>
  </li>
{% endfor %}
</ul>