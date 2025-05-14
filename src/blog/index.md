---
title: บทความ
layout: layouts/base.njk
permalink: /blog/
---
# บทความของฉัน

ยินดีต้อนรับสู่บล็อกของ {{ site.author }}! ที่นี่คุณจะได้พบกับบทความล่าสุดเกี่ยวกับเทคโนโลยี, การพัฒนาระบบ, และ agentic document workflows

<ul class="blog-list">
{% for post in collections.blog %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <p>{{ post.data.description | default("ไม่มีคำอธิบาย") }}</p>
    <small>เผยแพร่เมื่อ {{ post.data.date | date("d MMMM yyyy", "th-TH") }}</small>
  </li>
{% endfor %}
</ul>