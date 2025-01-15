CREATE TABLE `traveller_tb` (
  `travellerId` integer PRIMARY KEY AUTO_INCREMENT,
  `travellerFullname` varchar(50) NOT NULL,
  `travellerEmail` varchar(50) NOT NULL,
  `travellerPassword` varchar(50) NOT NULL
);

CREATE TABLE `travel_tb` (
  `travelId` integer PRIMARY KEY AUTO_INCREMENT,
  `travelPlace` varchar(200),
  `travelStartDate` varchar(30),
  `travelEndDate` varchar(30),
  `travelCostTotal` double,
  `travellerId` integer
);

ALTER TABLE `travel_tb` ADD FOREIGN KEY (`travellerId`) REFERENCES `traveller_tb` (`travellerId`);

USE travel_db;

INSERT INTO `traveller_tb` (`travellerId`, `travellerFullname`, `travellerEmail`, `travellerPassword`) VALUES
(1, 'สมชาย ใจดี', 'somchai.jai@gmail.com', 'password123'),
(2, 'สมหญิง สง่า', 'somying.sa@gmail.com', 'pass456'),
(3, 'อนุชา หนุ่มนิรันดร์', 'anucha.nu@gmail.com', 'secure789');

INSERT INTO `travel_tb` (`travelId`, `travelPlace`, `travelStartDate`, `travelEndDate`, `travelCostTotal`, `travellerId`) VALUES
(1, 'กรุงเทพมหานคร', '2025-01-10', '2025-01-12', 4500.00, 1),
(2, 'เชียงใหม่', '2025-02-01', '2025-02-05', 7500.00, 2),
(3, 'ภูเก็ต', '2025-03-15', '2025-03-18', 12000.00, 3),
(4, 'กระบี่', '2025-04-01', '2025-04-04', 9500.00, 1),
(5, 'สุโขทัย', '2025-05-10', '2025-05-12', 3800.00, 2),
(6, 'อยุธยา', '2025-06-20', '2025-06-21', 1500.00, 3),
(7, 'พัทยา', '2025-07-05', '2025-07-07', 3200.00, 1),
(8, 'หัวหิน', '2025-08-12', '2025-08-15', 4700.00, 2),
(9, 'เขาใหญ่', '2025-09-18', '2025-09-20', 5500.00, 3),
(10, 'เกาะสมุย', '2025-10-01', '2025-10-05', 15500.00, 1),
(11, 'เกาะเสม็ด', '2025-11-10', '2025-11-12', 6300.00, 2),
(12, 'น่าน', '2025-12-01', '2025-12-04', 7200.00, 3),
(13, 'แม่ฮ่องสอน', '2026-01-15', '2026-01-20', 10200.00, 1);