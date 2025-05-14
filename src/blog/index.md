---
title: My Blog
layout: layouts/base.njk
permalink: /blog/
---
# My Blog

Welcome to my blog! Here are my latest posts.

<ul class="blog-list">
{% for post in collections.blog %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <p>{{ post.data.description | default("No description available") }}</p>
    <small>Posted on {{ post.data.date | date("%B %d, %Y") }}</small>
  </li>
{% endfor %}
</ul>