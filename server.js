const express = require('express'); //เรียกใช้งาน module express เพื่อสร้าง web server
const bodyParser = require('body-parser');
const cors = require('cors');
const travellerRoute = require('./routes/traveller.route');
const travelRoute = require('./routes/travel.route');

require('dotenv').config(); //เรียกใช้งาน module dotenv เพื่อเรียกใช้งานไฟล์ .env

const app = express(); //สร้าง web server
const PORT = process.env.PORT || 5000;

//ใช้ middleware ในการจัดการต่างๆ
app.use(bodyParser.json()); //จัดการข้อมูลที่เป็น json
app.use(cors()) //จัดการเรื่องการเรียกใช้งานข้ามโดเมน
app.use('/traveller', travellerRoute);
app.use('/travel', travelRoute);

//เทสการเรียกใช้งาน web server จาก client/user/ระบบอื่นๆ
app.get('/', (req, res) => {
    res.send('Hello from Tarasato\'s server!');
})

//สร้างช่องทางในการติดต่อ web server นี้จาก client/user/ระบบอื่นๆ
app.listen(PORT, () => {
    console.log('Server is running on port: '+ PORT);
});