-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: travel_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `travel_tb`
--

DROP TABLE IF EXISTS `travel_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travel_tb` (
  `travelId` int(11) NOT NULL AUTO_INCREMENT,
  `travelPlace` varchar(200) DEFAULT NULL,
  `travelStartDate` varchar(30) DEFAULT NULL,
  `travelEndDate` varchar(30) DEFAULT NULL,
  `travelCostTotal` double DEFAULT NULL,
  `travellerId` int(11) DEFAULT NULL,
  `travelImage` varchar(150) NOT NULL,
  PRIMARY KEY (`travelId`),
  KEY `travellerId` (`travellerId`),
  CONSTRAINT `travel_tb_ibfk_1` FOREIGN KEY (`travellerId`) REFERENCES `traveller_tb` (`travellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travel_tb`
--

/*!40000 ALTER TABLE `travel_tb` DISABLE KEYS */;
INSERT INTO `travel_tb` VALUES (1,'กรุงเทพมหานคร','2025-01-10','2025-01-12',4500,1,''),(2,'เชียงใหม่','2025-02-01','2025-02-05',7500,2,''),(3,'ภูเก็ต','2025-03-15','2025-03-18',12000,3,''),(4,'กระบี่','2025-04-01','2025-04-04',9500,1,''),(5,'สุโขทัย','2025-05-10','2025-05-12',3800,2,''),(6,'อยุธยา','2025-06-20','2025-06-21',1500,3,''),(7,'พัทยา','2025-07-05','2025-07-07',3200,1,''),(8,'หัวหิน','2025-08-12','2025-08-15',4700,2,''),(9,'เขาใหญ่','2025-09-18','2025-09-20',5500,3,''),(10,'เกาะสมุย','2025-10-01','2025-10-05',15500,1,''),(11,'เกาะเสม็ด','2025-11-10','2025-11-12',6300,2,''),(12,'น่าน','2025-12-01','2025-12-04',7200,3,''),(13,'แม่ฮ่องสอน','2026-01-15','2026-01-20',10200,1,''),(15,'Taramiratsu\'s home','2025-01-10','2025-01-10',200,5,'travel_1236081442963.png');
/*!40000 ALTER TABLE `travel_tb` ENABLE KEYS */;

--
-- Table structure for table `traveller_tb`
--

DROP TABLE IF EXISTS `traveller_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traveller_tb` (
  `travellerId` int(11) NOT NULL AUTO_INCREMENT,
  `travellerFullname` varchar(50) NOT NULL,
  `travellerEmail` varchar(50) NOT NULL,
  `travellerPassword` varchar(50) NOT NULL,
  `travellerImage` varchar(150) NOT NULL,
  PRIMARY KEY (`travellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traveller_tb`
--

/*!40000 ALTER TABLE `traveller_tb` DISABLE KEYS */;
INSERT INTO `traveller_tb` VALUES (1,'สมชาย ใจดี','somchai.jai@gmail.com','password123',''),(2,'สมหญิง สง่า','somying.sa@gmail.com','pass456',''),(3,'อนุชา หนุ่มนิรันดร์','anucha.nu@gmail.com','secure789',''),(4,'Tarasato','taramiratsu@gmail.com','123456',''),(5,'Taramiratsu Xato','taramiratsuxato@gmail.com','123456','traveller_1286337387965.png');
/*!40000 ALTER TABLE `traveller_tb` ENABLE KEYS */;

--
-- Dumping routines for database 'travel_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-22 14:59:31
