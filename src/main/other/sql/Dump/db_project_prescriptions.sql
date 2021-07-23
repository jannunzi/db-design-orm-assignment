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
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `medication` varchar(45) DEFAULT NULL,
  `patient` int DEFAULT NULL,
  `diagnosis` varchar(45) DEFAULT NULL,
  `dosage` decimal(5,2) DEFAULT NULL,
  `prescribed` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `medication_idx` (`medication`),
  KEY `patient_idx` (`patient`),
  CONSTRAINT `medication` FOREIGN KEY (`medication`) REFERENCES `medications` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `patient` FOREIGN KEY (`patient`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
INSERT INTO `prescriptions` VALUES (1,'Zoloft',1,'Anxiety, Depression',100.00,'2021-04-19 12:22:03','2021-04-19 12:22:03'),(2,'Prozac',2,'OCD',160.00,'2021-04-19 12:26:48','2021-04-19 12:26:48'),(3,'Trazadone',2,'Anxiety',100.00,'2021-04-19 12:26:51','2021-04-19 12:26:51'),(4,'Lexapro',3,'Major Depression',20.00,'2021-04-19 12:26:52','2021-04-19 12:26:52'),(5,'Ativan',3,'Major Depression',0.50,'2021-04-19 12:29:44','2021-04-19 12:30:14'),(6,'Welbutrin',4,'Nicotine Dependency',150.00,'2021-04-19 12:32:06','2021-04-19 12:32:19'),(7,'Adderall',4,'ADHD',20.00,'2021-04-19 12:32:07','2021-04-19 12:32:19'),(8,'Ocella',5,'Birth Control',0.03,'2021-04-19 12:39:37','2021-04-19 12:40:08'),(9,'Levora',6,'Endometriosis',0.15,'2021-04-19 12:39:45','2021-04-19 12:40:08'),(10,'Hydrocodeine',7,'Acute Pain From Injuries',10.00,'2021-04-19 12:39:53','2021-04-19 12:40:08'),(11,'Dronabinol',7,'Acute Pain From Injuries',2.50,'2021-04-19 12:40:33','2021-04-19 12:40:49'),(12,'Zyrtec',7,'Breathing Issues from broken rib',10.00,'2021-04-19 12:43:28','2021-04-19 12:45:48'),(13,'Allegra',8,'Chronic Allergies',120.00,'2021-04-19 12:44:21','2021-04-19 12:45:48');
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-19 16:07:19
