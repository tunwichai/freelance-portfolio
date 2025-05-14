---
title: บทความ
layout: layouts/base.njk
permalink: /blog/
---
# บทความของฉัน

ยินดีต้อนรับสู่บล็อกของ {{ site.author }}! ที่นี่คุณจะได้พบกับบทความล่าสุดเกี่ยวกับเทคโนโลยี, การพัฒนาระบบ, และ agentic document workflows

<div class="blog-grid">
{% for post in collections.blog %}
  <article class="blog-card">
    <a href="{{ post.url }}">
      <h3>{{ post.data.title }}</h3>
    </a>
    <p>{{ post.data.description | default("ไม่มีคำอธิบาย") }}</p>
    <small class="post-date">เผยแพร่เมื่อ {{ post.data.date | date("d MMMM yyyy", "th-TH") }}</small>
  </article>
{% endfor %}
</div>