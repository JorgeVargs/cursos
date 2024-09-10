-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         8.0.36 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para angular-express-jwt
DROP DATABASE IF EXISTS `angular-express-jwt`;
CREATE DATABASE IF NOT EXISTS `angular-express-jwt` /*!40100 DEFAULT CHARACTER SET armscii8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `angular-express-jwt`;

-- Volcando estructura para tabla angular-express-jwt.products
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=armscii8;

-- Volcando datos para la tabla angular-express-jwt.products: ~2 rows (aproximadamente)
DELETE FROM `products`;
INSERT INTO `products` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
	(1, 'Coca cola', 'Bebida gaseosa', '2024-08-22 17:16:44', '2024-08-22 17:16:45'),
	(2, 'Sabritas', 'Papas originales', '2024-08-22 17:23:33', '2024-08-22 17:23:34');

-- Volcando estructura para tabla angular-express-jwt.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=armscii8;

-- Volcando datos para la tabla angular-express-jwt.users: ~4 rows (aproximadamente)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
	(1, 'luis', '$2b$10$QW42RgWtnvvWN83AzTTOiu1PM.ESxXXninQJWBKP42i95nwknjBpu', '2024-08-23 02:45:45', '2024-08-23 02:45:45'),
	(5, 'luisvardez', '$2b$10$5xMNUN.VdOJOc3ZHtmP0IOkAlazotULDrcNRafgtHbi5RzLEws6xq', '2024-08-29 02:18:37', '2024-08-29 02:18:37'),
	(6, 'pepito', '$2b$10$LuJ0gu3g/B0bw7J.s8JVp.uc5ynE/Ko7R7jt5dC.dH.RzA.IuPFU6', '2024-08-29 22:35:53', '2024-08-29 22:35:53'),
	(7, 'luisvardez2', '$2b$10$ljLN3R.lZo/IPbca.3xatuj2nA.jfCaOVckTBhVxnq4xtFkq3D.Qi', '2024-08-29 23:59:37', '2024-08-29 23:59:37');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
