-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 17 jan. 2023 à 13:32
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `data1`
--

-- --------------------------------------------------------

--
-- Structure de la table `certificat_info`
--

DROP TABLE IF EXISTS `certificat_info`;
CREATE TABLE IF NOT EXISTS `certificat_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `nom_doctor` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `nom_pation` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `nomber_jour` int(11) NOT NULL,
  `place` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `certificat_info`
--

INSERT INTO `certificat_info` (`id`, `date`, `date_debut`, `date_fin`, `nom_doctor`, `nom_pation`, `nomber_jour`, `place`) VALUES
(11, '2022-12-02', '2022-12-04', '2022-12-07', 'محمد الشيهب', 'حمزة عبد المومن', 3, 'الرباط'),
(12, '2022-12-08', '2022-12-09', '2022-12-12', '. أشهد', 'الصحية ', 2, 'الصحية '),
(13, '2023-01-16', '2023-01-17', '2023-01-19', 'حمزة عبد المؤمن', 'حمزة عبد المؤمن', 2, 'الرباط'),
(14, '2023-01-17', '2023-01-17', '2023-01-19', 'لدكتور', 'لدكتور', 2, 'لدكتور');

-- --------------------------------------------------------

--
-- Structure de la table `model`
--

DROP TABLE IF EXISTS `model`;
CREATE TABLE IF NOT EXISTS `model` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `part1` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part2` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part10` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part3` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part4` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part5` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part6` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part7` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part8` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `part9` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `model`
--

INSERT INTO `model` (`id`, `part1`, `part2`, `part10`, `part3`, `part4`, `part5`, `part6`, `part7`, `part8`, `part9`) VALUES
(1, 'أنا الموقع أسفله الدكتور(ة)', 'أشهد أني فحصت هذا اليوم', 'المسمى(ة)', 'وتبين أن حالته(ا) الصحية تقتضي الراحة مع التوقف عن العمل لمدة', 'ابتداء من يوم', 'الى غاية', 'و قد سلمت هذه الشهادة للمعني(ة) بالأمر قصد الإدلاء بها عند الحاجة.', 'حرر ب', 'يوم', NULL),
(2, 'أنا الموقع أسفله الدكتور(ة)', 'أشهد أني فحصت هذا اليوم', 'المسمى(ة)', 'وتبين أن حالته(ا) الصحية تشكل إعاقة ', 'وقد سلمت هذه الشهادة للمعني (ة) بالأمر قصد الإدلاء بها عند الحاجة.', 'حرر ب', 'يوم', NULL, NULL, NULL),
(3, 'أنا الموقع أسفله الدكتور(ة)', 'أشهد أني فحصت هذا اليوم', 'المسمى(ة)', 'وتبين بعد الفحص السريري و نتائج الفحوصات الطبية أنه لا تظهر عليه علامة لأي مرض معد و أنه مؤهل لمزاولة ', '  وقد سلمت هذه الشهادة للمعني (ة) بالأمر قصد الإدلاء بها عند الحاجة', 'حرر ب', 'يوم', NULL, NULL, NULL),
(4, 'أنا الموقع أسفله الدكتور(ة)', 'أشهد أني فحصت يوم', 'بطلب من المسمى(ة)', 'الحامل لرقم البطاقة الوطنية', 'وتبين بعد الفحص السريري أن المعني(ة) لا تظهر عليه علامة لمرض معد', 'استنتاجات الطبيب ', 'وسلمت له/لها هذه الشهادة للإدلاء بها قصد الزواج', 'حرر ب', 'يوم', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
