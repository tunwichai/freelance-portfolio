---
title: ผลงานของฉัน
layout: layouts/base.njk
permalink: /projects/
---
# ผลงานของฉัน

สำรวจผลงานล่าสุดและโปรเจกต์ต่างๆ ที่เกี่ยวข้องกับการพัฒนาระบบ Agentic Document Workflows ที่ผมได้พัฒนาขึ้น

<div class="project-grid">
{% for project in collections.project %}
  <a href="{{ project.url }}" class="project-card">
    <h3>{{ project.data.title }}</h3>
    <p>{{ project.data.description | default("ไม่มีคำอธิบาย") }}</p>
  </a>
{% endfor %}
</div>