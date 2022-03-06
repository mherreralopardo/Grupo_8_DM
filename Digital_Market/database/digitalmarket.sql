-- -- phpMyAdmin SQL Dump
-- -- version 5.1.1
-- -- https://www.phpmyadmin.net/
-- --
-- -- Servidor: 127.0.0.1
-- -- Tiempo de generación: 14-01-2022 a las 04:00:43
-- -- Versión del servidor: 10.4.22-MariaDB
-- -- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Base de datos: `digitalmarket`
-- --
CREATE DATABASE IF NOT EXISTS `digitalmarket` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `digitalmarket`;
-- -- --------------------------------------------------------

-- --
-- -- Estructura de tabla para la tabla `categorias`
-- --

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -- --------------------------------------------------------

-- --
-- -- Estructura de tabla para la tabla `compras`
-- --

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `clientes_id` smallint(6) DEFAULT NULL,
  `stock` smallint(6) DEFAULT NULL,
  `direccion_envio` text NOT NULL,
  `email_compra` text NOT NULL,
  `fecha_compra` date DEFAULT NULL,
  `status_compra` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -- --------------------------------------------------------

-- --
-- -- Estructura de tabla para la tabla `productos`
-- --

CREATE TABLE `productos` (
  `id` smallint(6) NOT NULL,
  `nombre` text DEFAULT NULL,
  `precio` smallint(6) DEFAULT NULL,
  `descripcion tecnica` text DEFAULT NULL,
  `imagen` bigint(20) DEFAULT NULL,
  `categoria` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- -- --------------------------------------------------------

-- --
-- -- Estructura de tabla para la tabla `usuarios`
-- --

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` text DEFAULT NULL,
  `contraseña` text DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  `pais` text DEFAULT NULL,
  `telefono` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --
-- -- Índices para tablas volcadas
-- --

-- --
-- -- Indices de la tabla `categorias`
-- --
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `categorias` ADD FULLTEXT KEY `nombre` (`nombre`);
ALTER TABLE `categorias` ADD FULLTEXT KEY `descripcion tecnica` (`descripcion tecnica`);

-- --
-- -- Indices de la tabla `compras`
-- --
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clientes_id` (`clientes_id`),
  ADD UNIQUE KEY `fecha_compra` (`fecha_compra`),
  ADD UNIQUE KEY `status_compra` (`status_compra`) USING HASH,
  ADD KEY `stock` (`stock`);
ALTER TABLE `compras` ADD FULLTEXT KEY `direccion_envio` (`direccion_envio`);
ALTER TABLE `compras` ADD FULLTEXT KEY `email_compra` (`email_compra`);

-- --
-- -- Indices de la tabla `productos`
-- --
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`) USING HASH,
  ADD KEY `precio` (`precio`);
ALTER TABLE `productos` ADD FULLTEXT KEY `categoria` (`categoria`);

-- --
-- -- Indices de la tabla `usuarios`
-- --
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefono` (`telefono`);
ALTER TABLE `usuarios` ADD FULLTEXT KEY `email` (`email`);
COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- /* insert into productos (id,nombre,idImagen) values (,'',);
-- insert into categorias (id,nombre,idImagen) values (,'',);
-- insert into clientes (id,nombre,idImagen) values (,'',);
-- insert into compras (id,nombre,idImagen) values (,'',);*/