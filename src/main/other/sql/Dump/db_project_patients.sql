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
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `doctor` int DEFAULT NULL,
  `conditions` varchar(255) DEFAULT NULL,
  `admitted` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `doctor_idx` (`doctor`),
  CONSTRAINT `doctor` FOREIGN KEY (`doctor`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'Sam','Blue','samb','everyth1ng1sblue','sblue120@gmail.com','1994-10-04',1,'Anxiety, depression','2021-04-14 18:02:52'),(2,'Lisa','Dee','LisaD','DeeLorNoDeeLisa','LisaDee2203@yahoo.com','2003-02-02',1,'Anxiety, OCD','2021-04-14 18:16:03'),(3,'Johnny','Depressed','JohnnyDep','piratesofdepressed111','Johnnydep@hotmail.com','1984-01-08',1,'Major depression','2021-04-14 18:16:36'),(4,'Syd','Shokes','SShokes','sydshmokes','shokes4396@gmail.com','1996-03-04',1,'Nicotine Dependince, ADHD','2021-04-14 18:20:42'),(5,'Nellie','Lahomes','NellHome','lahomesBells2','Nellie7700@gmail.com','2000-07-07',2,NULL,'2021-04-14 18:25:19'),(6,'Olivia','Ophelia','OOOliva','O11v1aO','OOphelia@gmail.com','1989-05-11',2,'Endometriosis','2021-04-14 18:30:49'),(7,'Ron','Ragdoll','RonDoll','Ragd0llR0n','ragdollthestuntman@aol.com','1977-04-02',2,'Multiple Broken Ribs, CTE, Broken R Arm, Fractured R femur','2021-04-14 18:31:56'),(8,'Ian','Sniff','iansf','sniffian22','ianSniff22@gmail.com','1994-12-07',2,'Allergies','2021-04-14 18:33:51');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
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
