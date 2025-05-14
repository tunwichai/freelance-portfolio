---
title: ผลงานของฉัน
layout: layouts/base.njk
permalink: /projects/
---
# ผลงานของฉัน

สำรวจผลงานล่าสุดและโปรเจกต์ต่างๆ ที่เกี่ยวข้องกับการพัฒนาระบบ Agentic Document Workflows ที่ผมได้พัฒนาขึ้น

<ul class="project-list">
{% for project in collections.project %}
  <li>
    <a href="{{ project.url }}">{{ project.data.title }}</a>
    <p>{{ project.data.description | default("ไม่มีคำอธิบาย") }}</p>
  </li>
{% endfor %}
</ul>