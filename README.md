# mini-ecommerce-collaboration
✅ สรุปการทำงานของโปรเจกต์
1. 🔧 เทคโนโลยีที่ใช้
HTML: โครงสร้างพื้นฐานของหน้าเว็บ

CSS: การตกแต่งหน้าตา (Style)

JavaScript: การโหลดข้อมูลและโต้ตอบกับผู้ใช้ (Dynamic)

2. 🧩 องค์ประกอบของแต่ละไฟล์
📄 index.html
ส่วน <header> มีชื่อร้านและ input สำหรับค้นหา

<div id="loader"> แสดงข้อความ "Loading..." ขณะกำลังโหลดข้อมูล

<main id="product-list"> เป็นที่แสดงรายการสินค้า

html
Copy
Edit
<div id="loader" class="loader">Loading...</div>
<main id="product-list"></main>
🎨 style.css
จัดรูปแบบให้การ์ดสินค้า (.product-card)

ซ่อนหรือแสดง #loader

ใช้พื้นหลังสีเทาอ่อน และดีไซน์เรียบง่าย

⚙️ main.js
เมื่อโหลดหน้าเว็บ:

ซ่อน #product-list

แสดง #loader

โหลดข้อมูลจาก products.json

สร้างการ์ดสินค้าใน DOM ด้วย JavaScript

เมื่อโหลดเสร็จ:

ซ่อน #loader

แสดง #product-list

มีระบบ search แบบ real-time

js
Copy
Edit
fetch('js/products.json')
  .then(response => response.json())
  .then(data => {
    displayProducts(data);
    loader.style.display = 'none';
    productList.style.display = 'flex';
  });
📦 products.json
ข้อมูลสินค้าเป็น array เช่น:

json
Copy
Edit
{
  "name": "Classic T-Shirt",
  "price": 499,
  "image": "https://..."
}
3. 💡 ฟีเจอร์หลัก
ฟีเจอร์	รายละเอียด
✅ แสดงสินค้า	โหลดและแสดงรายการสินค้าแบบ dynamic จาก JSON
🔍 ค้นหา	พิมพ์ในช่องค้นหาเพื่อกรองชื่อสินค้า
⏳ Loading State	แสดงข้อความ "Loading..." ก่อนโหลดข้อมูลเสร็จ
💅 UI	การ์ดแสดงสินค้าแบบ responsive และจัดเรียงสวยงาม

🔄 ตัวอย่างการทำงาน
เปิดเว็บ > เห็นข้อความ “Loading...”

โหลดข้อมูลจาก products.json

แสดงสินค้าเป็นกล่อง ๆ

ค้นหาได้ทันทีด้วย input ด้านบน
