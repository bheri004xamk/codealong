-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2020 at 01:21 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tehtavalista`
--
CREATE DATABASE IF NOT EXISTS `tehtavalista` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `tehtavalista`;

-- --------------------------------------------------------

--
-- Table structure for table `tehtavat`
--

CREATE TABLE `tehtavat` (
  `id` int(11) NOT NULL,
  `nimi` text COLLATE utf8_swedish_ci NOT NULL,
  `ohje` text COLLATE utf8_swedish_ci NOT NULL,
  `suoritettu` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `tehtavat`
--

INSERT INTO `tehtavat` (`id`, `nimi`, `ohje`, `suoritettu`) VALUES
(345, 'Siivoa lattiat', 'Myös sohvan takaa ja maton alta', 1),
(346, 'Isoäidin synttärit', 'Muista kukat', 0),
(349, 'Käy kaupassa', 'Muista ostaa talouspaperia', 0),
(350, 'Tilaa polkupyörän huolto', 'Kysy, käykö bonuskortti', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tehtavat`
--
ALTER TABLE `tehtavat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tehtavat`
--
ALTER TABLE `tehtavat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=352;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
