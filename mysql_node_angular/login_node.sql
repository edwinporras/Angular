-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 24-09-2020 a las 21:04:30
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login_node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `apellidos` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `createAt`, `updateAt`, `apellidos`, `telefono`, `correo`, `direccion`) VALUES
(5, 'edwin_loginM', '123456', 'admin', '2020-09-20 13:58:53.454222', '2020-09-20 14:15:08.000000', '', 0, '', ''),
(7, 'login_encryptado', '$2a$10$wcpSsg5mL3f7apmYPoXLmemKMeaFt8nBrj8UKxb/Ul6fZKJU7VjZu', 'admin', '2020-09-20 15:06:50.588979', '2020-09-20 15:06:50.588979', '', 0, '', ''),
(8, 'Edwin Eduardoq', '$2a$10$R2hpix/AL7ZNBEyJJTX/yu7lRCwp5qCarShf.9Vg4SlsQdNHGs.Ii', 'suscriptor', '2020-09-21 17:24:03.384781', '2020-09-24 12:50:35.000000', 'Porras', 312533323, '', 'cll 344d # 22-11'),
(9, 'ing@mail.com', '$2a$10$yELlnZg4.tdKnF3.H1k3COH9h4aM1X6QBVCxxHi5579pGL2JdeSM.', 'suscriptor', '2020-09-23 19:19:34.689740', '2020-09-23 19:19:34.689740', '', 0, '', ''),
(10, '', '$2a$10$rFiGfC3f/m5XL/SSHZOzy.qMlX8cxySrlfc.WMhtEB7ieNCP1n4vW', 'admin', '2020-09-24 11:42:36.503078', '2020-09-24 11:42:36.503078', 'bien', 312533323, 'edwin11@mail.co', 'cll 344d # 22-11'),
(11, 'exitossver', '$2a$10$4o.bFP5El3GvTzkoiOCsfecWRzF0D6w21tuAU8vyGUxqL4RkjK9Uq', 'admin', '2020-09-24 11:45:47.118587', '2020-09-24 11:45:47.118587', 'bien', 312533323, 'edwin11@mail.co', 'cll 344d # 22-11'),
(12, 'edwinedwin', '$2a$10$J3D4i.CckTTs8ixmfC7g9.4nKnXDVeMi3VbOekU9R0YqxFX53xlnq', 'admin', '2020-09-24 12:45:04.433918', '2020-09-24 12:45:04.433918', 'porras', 123123, 'edw@mail.com', '131231'),
(13, 'edwin', '$2a$10$epGIAY.Xcy6FoJHugTArU.l3kOYm8aFCxZP3.gNDySPHJ/S4xNXPK', 'admin', '2020-09-24 12:47:20.228541', '2020-09-24 12:47:20.228541', 'qeqweqw', 123123, 'edw@mail.com', '123123'),
(14, 'edwin1111', '$2a$10$8u66wFtrysO.mRwwZiHeKOm8v3X9G/8w9t90haWllYqN/i1UoMO3G', 'admin', '2020-09-24 12:47:29.448916', '2020-09-24 12:47:29.448916', 'qeqweqw', 123123, 'edw@mail.com', '123123'),
(15, 'qwewqeqw', '$2a$10$aWiwCGH2MscTGRQK0KPqf.cD.hlGEfm/HyJmMrSAxh7bUvgds6.rK', 'admin', '2020-09-24 12:51:52.233926', '2020-09-24 12:51:52.233926', 'eqweqwe', 1231231, 'edw@mail.com', 'qweqwc'),
(16, 'qweqwe', '$2a$10$vCv9WvkfAN649QEF7ZSXOuy2pZ7GiOx/fwSH5jYKkCZ3xAetq//cq', 'admin', '2020-09-24 12:53:29.147720', '2020-09-24 12:53:29.147720', 'qweqwe', 213123, 'edw', 'cas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
