-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: testjpa2
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Việt Nam'),(2,'Malaysia'),(3,'Thái Lan'),(4,'Nhật Bản'),(5,'Hàn Quốc');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country_country`
--

DROP TABLE IF EXISTS `country_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country_country` (
  `Country_id` bigint NOT NULL,
  `customers_id` bigint NOT NULL,
  UNIQUE KEY `UK_45fpyktir0qir3ey1cq8e9vb1` (`customers_id`),
  KEY `FK2914klcaw49vbw7sjs59ibems` (`Country_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country_country`
--

LOCK TABLES `country_country` WRITE;
/*!40000 ALTER TABLE `country_country` DISABLE KEYS */;
/*!40000 ALTER TABLE `country_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `passWord` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `country_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKds154qldg3wlble0pwek3mole` (`country_id`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (8,'ziko@mailinator.com','Jared Eaton',NULL,'+1 (543) 721-5855',4),(9,'gypelobilu@mailinator.com','Silas Adkins',NULL,'+1 (399) 234-6217',1),(12,'gixip@mailinator.com','Acton Edwards',NULL,'+1 (892) 586-8363',2),(32,'hyvadoge@mailinator.com','Kelly Becker',NULL,'+1 (861) 813-2037',5),(33,'fugucy@mailinator.com','Hiroko Martin',NULL,'+1 (805) 421-18670',1),(45,'fyhijiqefa@mailinator.com','Chloe Deleon',NULL,'+1 (375) 852-4456',1),(46,'vunad','Miriam Dorsey',NULL,'+1 (796) 696-6013',5),(52,'kywitogyru@mailinator.com','Donovan Freeman',NULL,'+1 (533) 136-8633',1),(77,'bofuvujohu@mailinator.com','Lucy Erickson',NULL,'+1 (725) 851-9459',3),(78,'jybuhuxoz@mailinator.com','Ursa Fisher',NULL,'+1 (439) 223-6977',1),(79,'loga@mailinator.com','Camille Cochran',NULL,'+1 (366) 156-5114',4),(80,'foty@mailinator.com','Marah England',NULL,'+1 (135) 203-7054',1),(85,'rufy@mailinator.com','Blythe Carlson',NULL,'+1 (774) 964-2931',1),(86,'senoge@mailinator.com','Jacob Mosleyyy',NULL,'+1 (912) 452-1024',1),(87,'kifynasag@mailinator.com','Jenette Walker',NULL,'+1 (724) 372-8992',4),(88,'gozobuzike@mailinator.com','Brandon Molina',NULL,'+1 (693) 965-8585',4),(89,'nesyqu@mailinator.com','Callie Mcbride',NULL,'+1 (123) 714-5532',1),(91,'jurupepug@mailinator.com','Noelani Steeley',NULL,'+1 (809) 617-34678',1),(92,'gotykaxow@mailinator.com','Kenyon Jefferson',NULL,'+1 (365) 703-6698',2);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-06 14:58:16
