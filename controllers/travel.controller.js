//ไฟล์ที่เขียนควบคุมการทำงานต่างๆ กับ table ใน database
//เช่น การเพิ่มข้อมูล(insert/create) การแก้ไขข้อมูล(update)
// การลบข้อมูล(delete) การค้นหา, ตรวจสอบ, ดึงดู(select/read)

const Travel = require("../models/travel.model.js");

//ฟังก์ชันเพิ่มข้อมูลลงใน travel_tb
exports.createTravel = async (req, res) => {
  try {
    const result = await Travel.create(req.body);
    res.status(201).json({
      message: "Travel created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//ฟังก์ชันแก้ไขข้อมูลการเดินทางใน travel_tb
exports.editTravel = async (req, res) => {
  try {
    const result = await Travel.update(req.body, {
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//ฟังก์ชันลบข้อมูลการเดินทางใน travel_tb
exports.deleteTravel = async (req, res) => {
  try {
    const result = await Travel.destroy({
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//ฟังก์ชันดึงข้อมูลการเดินทางใน travel_tb
exports.getAllTravel = async (req, res) => {
  try {
    const result = await Travel.findAll({
      where: {
        travellerId: req.params.travellerId,
      },
    });
    if (result) {
      res.status(200).json({
        message: "Travel get successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        message: "Travel get failed",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};