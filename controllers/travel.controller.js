//File that writes control operations for a table in the database
//เช่น insert, update, delete, select
//This file works with travel_tb

const Travel = require("./../models/travel.model.js");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

//fuction insert data to travel_tb
exports.createTravel = async (req, res) => {
  try {
    //ตัวแปร
    let data = {
      ...req.body,
      //เช็คว่ามีไฟล์รูปภาพหรือไม่
      travelImage: req.file
        ? req.file.path.replace("images\\travel\\", "")
        : "",
    };

    const result = await Travel.create(data);

    res.status(201).json({
      message: "Travel created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//func get all travel in travel_tb
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
    res.status(500).json({
      message: error.message,
    });
  }
};

//func get travel by travelId in travel_tb
exports.getTravel = async (req, res) => {
  try {
    const result = await Travel.findOne({
      where: {
        travelId: req.params.travelId,
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
    res.status(500).json({
      message: error.message,
    });
  }
};

//func edit travel in travel_tb
exports.editTravel = async (req, res) => {
  try {
    //ตรวจสอบว่ามีการอัพโหลดรูปภาพหรือไม่
    //กรณีที่มี ตรวจสอบก่อนว่ามีไฟล์เก่าไหม ถ้ามีให้ลบไฟล์เก่าออก
    let data = {
      ...req.body,
    };

    if (req.file) {
      //ตรวจสอบว่ามีการอัพโหลดรูปภาพมาเพื่อแก้ไขหรือไม่
      const travel = await Travel.findOne({
        //ค้นหารูปเก่า
        where: {
          travelId: req.params.travelId,
        },
      });
      if (travel.travelImage) {
        //กรณีมีรูป
        const oldImagePath = "images/travel/" + travel.travelImage;
        //ลบไฟล์เก่าออก
        fs.unlinkSync(oldImagePath, (err) => {
          console.log(err);
        });
      }

      //อัพโหลดรูปใหม่
      data.travelImage = req.file.path.replace("images\\travel\\", "");
    } else {
      //กรณีไม่มีการอัพโหลดรูป
      delete data.travelImage;
    }

    const result = await Travel.update(data, {
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//func delete travel in travel_tb
exports.deleteTravel = async (req, res) => {
  try {
    const travel = await Travel.findOne({
      where: {
        travelId: req.params.travelId,
      },
    });
    if (travel.travelImage) {
      const oldImagePath = "images/travel/" + travel.travelImage;
      //ลบไฟล์เก่าออก
      fs.unlinkSync(oldImagePath, (err) => {
        console.log(err);
      });
    }

    const result = await Travel.destroy({
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel deeleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Travel Image upload function
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/travel");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "travel_" +
        Math.floor(Math.random() * Date.now()) +
        path.extname(file.originalname)
    );
  },
});
exports.uploadTravel = multer({
  storage: storage,
  limits: {
    // กำหนดขนาดไฟล์สูงสุดที่จะรับ 1MB
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: Images Only!");
  },
}).single("travelImage");
