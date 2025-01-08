const express = require('express'); //เรียกใช้งาน module express เพื่อสร้าง web server
require('dotenv').config(); //เรียกใช้งาน module dotenv เพื่อเรียกใช้งานไฟล์ .env

const app = express(); //สร้าง web server
const PORT = process.env.PORT || 5000;

//เทสการเรียกใช้งาน web server จาก client/user/ระบบอื่นๆ
app.get('/', (req, res) => {
    res.send('Hello from Tarasato\'s server!');
})

//สร้างช่องทางในการติดต่อ web server นี้จาก client/user/ระบบอื่นๆ
app.listen(PORT, () => {
    console.log('Server is running on port: '+ PORT);
});