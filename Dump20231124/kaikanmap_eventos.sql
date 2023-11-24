-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kaikanmap
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NomeEvento` varchar(50) NOT NULL,
  `LocalEvento` varchar(50) NOT NULL,
  `KaikanResponsavel` int NOT NULL,
  `imagem` varchar(50) DEFAULT NULL,
  `Descricao` text NOT NULL,
  `DiaEHora` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKKaikan` (`KaikanResponsavel`),
  CONSTRAINT `FKKaikan` FOREIGN KEY (`KaikanResponsavel`) REFERENCES `listakaikans` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (1,'Treino de Taiko','Embu-Guaçu',1,'../../img/evento1.jpg','Venha participar do tenho de taiko no Kaikan de Embu-Guaçu!','2023-11-25 21:30:00'),(2,'Bingo Cipó','Embu-Guaçu',1,'../../img/evento2.jpg','Venha participar do bingo Kaikan de Embu-Guaçu valendo 10 reais!','0000-00-00 00:00:00'),(3,'Bingo Cipó','Embu-Guaçu',1,'../../img/evento3.jpg','Venha participar do bingo Kaikan de Embu-Guaçu valendo 10 reais!','0000-00-00 00:00:00'),(4,'Bingo Cipó','Embu-Guaçu',1,'../../img/evento4.jpg','Venha participar do bingo Kaikan de Embu-Guaçu valendo 10 reais!','0000-00-00 00:00:00'),(5,'Show de fogos','Ubatuba',3,'../../img/evento5.jpg','IASDaopisndioabd','2023-11-03 09:07:00'),(6,'Show de fogos','Ubatuba',3,'../../img/kaikan_cipo.png','IASDaopisndioabd','2023-11-03 09:07:00'),(7,'Show de fogos','Ubatuba',3,'../../img/kaikan_cipo.png','IASDaopisndioabd','2023-11-03 09:07:00'),(8,'Show de Fogos','Laranjais',4,'../../img/kaikan_cipo.png','Show de Fogos Aqui e tals','2023-11-10 06:26:00'),(9,'Dia de jogos ','Atibaia',2,'../../img/kaikan_cipo.png','Venha participar de uma tarde de jogo no nosso kaikan!','2024-02-07 14:00:00'),(10,'Abertura da Copa','Bolívia',3,'../../img/kaikan_cipo.png','Vamos assistir a abertura da copa do mundo de 2302','2024-01-05 10:13:00');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-24  3:47:15
