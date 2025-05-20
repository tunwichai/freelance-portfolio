# freelance-portfolio (tunw.xyz)

เว็บไซต์พอร์ตโฟลิโอสำหรับฟรีแลนซ์/ที่ปรึกษา เน้นการนำเสนอผลงานและบทความเกี่ยวกับ AI & Automation เพื่อ SME  
สร้างด้วย [Eleventy (11ty)](https://www.11ty.dev/) และปรับแต่งดีไซน์ให้เหมาะกับผู้ใช้งานไทย

---

## คุณสมบัติเด่น

- นำเสนอผลงาน (Projects) และบทความ (Blog) ในรูปแบบที่อ่านง่าย
- ดีไซน์สวยงาม รองรับมือถือ (Responsive)
- ใช้ CSS แบบ Glassmorphism และ Gradient
- มีระบบเมนู, ปุ่มติดต่อ LINE, Facebook
- โครงสร้างไฟล์แยกชัดเจน แก้ไขง่าย

## โครงสร้างโปรเจกต์

```
.
├── src/
│   ├── index.md                # หน้าแรก
│   ├── about.md                # เกี่ยวกับฉัน
│   ├── contact.md              # ติดต่อ
│   ├── blog/                   # บทความ
│   ├── projects/               # ผลงาน
│   ├── assets/
│       ├── css/                # ไฟล์ style.css
│       ├── images/             # รูปภาพประกอบ
│       └── js/                 # สคริปต์ JS
├── docs/                       # โฟลเดอร์สำหรับ static site หลัง build
├── .gitignore
├── package.json
├── postcss.config.js
└── eleventy.config.js
```

## วิธีใช้งาน

1. **ติดตั้ง dependencies**
   ```bash
   npm install
   ```
2. **รันเซิร์ฟเวอร์สำหรับพัฒนา**
   ```bash
   npm start
   ```
   หรือ build สำหรับ production
   ```bash
   npm run build
   ```
3. **แก้ไขเนื้อหา**
   - หน้าแรก: `src/index.md`
   - ผลงาน: `src/projects/`
   - บทความ: `src/blog/`
   - เกี่ยวกับ: `src/about.md`
   - ติดต่อ: `src/contact.md`
   - รูปภาพ: `src/assets/images/`
   - สไตล์: `src/assets/css/style.css`

4. **Deploy**
   - สามารถนำไฟล์ใน `docs/` ไปใช้กับ GitHub Pages หรือโฮสติ้ง static site อื่นๆ ได้ทันที

## เทคโนโลยีที่ใช้

- [Eleventy (11ty)](https://www.11ty.dev/)
- HTML5, CSS3 (Glassmorphism, Gradient, Responsive)
- PostCSS, CSSNano
- JavaScript (สำหรับเมนูและเอฟเฟกต์)

## เครดิต

- พัฒนาโดย ตุนท์ วิชัยชาญสกุล (tunw.xyz)
- Facebook: [https://www.facebook.com/profile.php?id=61576194785976](https://www.facebook.com/profile.php?id=61576194785976)
- LINE: [@786lmeby](https://line.me/ti/p/~@786lmeby)

---

> **หมายเหตุ:**  
> สามารถนำไปต่อยอดหรือปรับแต่งได้ตามต้องการ หากพบปัญหาหรือมีข้อเสนอแนะ ติดต่อได้ทาง Facebook หรือ LINE ด้านบน

        