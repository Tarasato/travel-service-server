//ไฟล์ที่ทำงานหรือแมพกับ table ใน database
//ไฟล์นี้ทำงานกับ traveller_tb
const Sequelize = require("sequelize");
const sequelize = require("./../db/db.js");

//สร้าง model เพื่อแมพกับ table ใน database
const Traveller = sequelize.define("traveller_tb", {
    travellerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'travellerId'
    },
    travellerFullname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'travellerFullname'
    },
    travellerEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'travellerEmail'
    },
    travellerPassword: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'travellerPassword'
    },
},
{
    tableName: 'traveller_tb',
    timestamps: false, //ถ้าต้องการให้ในตารางมีการบันทึก timestamp ให้ใส่ true
    freezeTableName: true
});

//export model ออกไปใช้งาน
module.exports = Traveller;