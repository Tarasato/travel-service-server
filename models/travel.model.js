//ไฟล์ที่ทำงานหรือแมพกับ table ใน database
//ไฟล์นี้ทำงานกับ travel_tb
const Sequelize = require("sequelize");
const sequelize = require("./../db/db.js");

//สร้าง model เพื่อแมพกับ table ใน database
const Travel = sequelize.define("travel_tb", {
  travelId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: "travelId",
  },
  travelPlace: {
    type: Sequelize.STRING(200),
    allowNull: false,
    field: "travelPlace",
  },
  travelStartDate: {
    type: Sequelize.STRING(30),
    allowNull: false,
    field: "travelStartDate",
  },
  travelEndDate: {
    type: Sequelize.STRING(30),
    allowNull: false,
    field: "travelEndDate",
  },
  travelCostTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        field: "travelCostTotal",
    },
    travellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "travellerId",
    },
},
{
    tableName: 'travel_tb',
    timestamps: false, //ถ้าต้องการให้ในตารางมีการบันทึก timestamp ให้ใส่ true
    freezeTableName: true
});

//export model ออกไปใช้งาน
module.exports = Travel;