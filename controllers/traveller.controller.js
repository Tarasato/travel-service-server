//ไฟล์ที่เขียนควบคุมการทำงานต่างๆ กับ table ใน database
//เช่น การเพิ่มข้อมูล(insert/create) การแก้ไขข้อมูล(update)
// การลบข้อมูล(delete) การค้นหา, ตรวจสอบ, ดึงดู(select/read)

const Traveller = require("../models/traveller.model.js");

//ฟังก์ชันเพิ่มข้อมูลลงใน traveller_tb aka register
exports.createTraveller = async (req, res) => {
  try {
    const result = await Traveller.create(req.body);
    res.status(201).json({
      message: "Traveller created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//ฟังก์ชันตรวจสอบการเข้าใช้งานของผู้ใช้กับ traveller_tb aka login
exports.checkLoginTraveller = async (req, res) => {
  try {
    const result = await Traveller.findOne({
      where: {
        travellerEmail: req.params.travellerEmail,
        travellerPassword: req.params.travellerPassword,
      },
    });
    if (result) {
      res.status(200).json({
        message: "Traveller login successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        message: "Traveller login failed",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//ฟังก์ชันแก้ไขข้อมูลส่วนตัวของผู้ใช้งานใน traveller_tb
exports.editTraveller = async (req, res) => {
  try {
    const result = await Traveller.update(req.body, {
      where: {
        travellerId: req.params.travellerId,
      },
    });
    res.status(200).json({
      message: "Traveller updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//ฟังก์ชันลบข้อมูลผู้ใช้งานใน traveller_tb
exports.deleteTraveller = async (req, res) => {
    try {
        const result = await Traveller.destroy({
        where: {
            travellerId: req.params.travellerId,
        },
        });
        res.status(200).json({
        message: "Traveller deleted successfully",
        data: result,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}