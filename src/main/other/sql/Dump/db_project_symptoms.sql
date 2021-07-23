-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_project
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `symptoms`
--

DROP TABLE IF EXISTS `symptoms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `symptoms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) DEFAULT NULL,
  `Prescription` int DEFAULT NULL,
  `medicine` varchar(45) DEFAULT NULL,
  `userFor` varchar(255) DEFAULT NULL,
  `benefits` varchar(255) DEFAULT NULL,
  `sideEffects` varchar(255) DEFAULT NULL,
  `timeUsed` datetime DEFAULT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `prescription_idx` (`medicine`,`Prescription`),
  CONSTRAINT `prescribed` FOREIGN KEY (`medicine`, `Prescription`) REFERENCES `prescriptions` (`medication`, `id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `symptoms`
--

LOCK TABLES `symptoms` WRITE;
/*!40000 ALTER TABLE `symptoms` DISABLE KEYS */;
INSERT INTO `symptoms` VALUES (1,'Breathing problems',3,'Trazadone','Anxiety','Helps anxiety before sleeping','Shallow breathing','2021-04-18 20:15:15','2021-04-19 12:50:00'),(2,'Sleeping problems',1,'Zoloft','Anxiety, Depression','Helps with Anxiety and Depression','Unable to sleep well since using medicine','2021-03-30 21:30:10','2021-04-19 12:53:00'),(3,'Loss of Apetit',7,'Adderall','ADHD','Helps attention','Lack of apetit, loss of weight','2021-04-10 20:15:15','2021-04-19 12:55:19'),(4,'Dizziness',10,'Hydrocodeine','Broken Bone Pain','Helps alleviate pain','Dizziness and drowsiness occur when used','2021-04-19 08:15:15','2021-04-19 12:57:14'),(5,'Birth Control Causing Acne?',8,'Ocella','Birth Control','Helps with cramps','Recently have had more acne, is this from the meds?','2021-04-19 10:15:15','2021-04-19 13:02:17'),(6,'Not effective',5,'Ativan','Major Depression',NULL,'Sleepiness; not helping depression','2021-04-13 22:45:44','2021-04-19 13:04:46'),(7,'I Feel Much Better',9,'Levora','Endometriosis','Alleviates pain really well',NULL,'2021-04-19 10:30:15','2021-04-19 13:06:51');
/*!40000 ALTER TABLE `symptoms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-19 16:07:18
