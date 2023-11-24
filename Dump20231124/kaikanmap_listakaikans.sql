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
-- Table structure for table `listakaikans`
--

DROP TABLE IF EXISTS `listakaikans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listakaikans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NomeKaikan` varchar(50) NOT NULL,
  `Rua` varchar(100) NOT NULL,
  `Numero` varchar(100) NOT NULL,
  `Bairro` varchar(100) NOT NULL,
  `Cidade` varchar(100) NOT NULL,
  `Estado` varchar(100) NOT NULL,
  `CEP` varchar(11) NOT NULL,
  `DescricaoCompleta` text NOT NULL,
  `imagem` varchar(50) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Senha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listakaikans`
--

LOCK TABLES `listakaikans` WRITE;
/*!40000 ALTER TABLE `listakaikans` DISABLE KEYS */;
INSERT INTO `listakaikans` VALUES (1,'Kaikan do Cipó','Estrada Sem Nome','3','Laranjais','São Marcos','São Paulo','09090-909','Kaikan Do cipó faz eventos todos os meses com o intuito de preservar a cultura japonesa na sociedade que está inserida e piriri pororó','../../img/kaikan_cipo.png','cipo@gmail.com','123'),(2,'Kaikan de Itapecerica','Estrada Sem Nome','3','Laranjais','São Marcos','São Paulo','09090-909','Kaikan de Itapecerica faz eventos todos os meses com o intuito de preservar a cultura japonesa na sociedade que está inserida e piriri pororó','../../img/evento1.jpg','itapecerica@gmail.com','123456'),(3,'Kaikan de Casa Grande','Estrada Sem Nome','3','Laranjais','São Marcos','São Paulo','09090-909','Kaikan de Casa Grande parará e tals ','../../img/evento2.jpg','casagrande@gmail.com','12345678'),(4,'Kaikan de Santo Amaro','Manta Azul','15','Chácara Manoilis','São Paulo','SP','5894615','O kaikan de santo amaro faz uns coiso legal e tals','../../img/evento4.jpg','kaikansantoamaro@gmail.com','abcdefghijklmn'),(5,'Kaikan de Monte verde','Estrada do João','84546','Perdizes','São Paulo','SP','15648447','Somos um grupo japonês independente que faz eventos de vez em quando','../../img/evento3.jpg','kaikanmonteverde@yahoo.com','54652165dasd'),(6,'Kaikan de Taubaté','Rua das Pitangas','127','Pinhais','São Paulo','SP','8952468','O kaikan de Taubaté possui uma rica história que queremos compartilhar por meio de atividades recreativas e eventos','../../img/kaikan_cipo.png','taubate@gmail.com','456879');
/*!40000 ALTER TABLE `listakaikans` ENABLE KEYS */;
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
