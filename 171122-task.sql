-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 17, 2022 at 08:58 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `171122-task`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `gameId` bigint(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `platform` varchar(100) NOT NULL,
  `score` decimal(19,4) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `editors_choice` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`gameId`, `title`, `platform`, `score`, `genre`, `editors_choice`) VALUES
(1, 'LittleBigPlanet PS Vita', 'PlayStation Vita', '9.0000', 'Platformer', 'Y'),
(2, 'LittleBigPlanet PS Vita -- Marvel Super Hero Edition', 'PlayStation Vita', '9.0000', 'Platformer', 'Y'),
(3, 'Splice: Tree of Life', 'iPad', '8.5000', 'Puzzle', 'N'),
(4, 'NHL 13', 'Xbox 360', '8.5000', 'Sports', 'N'),
(5, 'NHL 13', 'PlayStation 3', '8.5000', 'Sports', 'N'),
(6, 'Total War Battles: Shogun', 'Macintosh', '7.0000', 'Strategy', 'N'),
(7, 'Double Dragon: Neon', 'Xbox 360', '3.0000', 'Fighting', 'N'),
(8, 'Guild Wars 2', 'PC', '9.0000', 'RPG', 'Y'),
(9, 'Double Dragon: Neon', 'PlayStation 3', '3.0000', 'Fighting', 'N'),
(10, 'Total War Battles: Shogun', 'PC', '7.0000', 'Strategy', 'N'),
(11, 'Tekken Tag Tournament 2', 'PlayStation 3', '7.5000', 'Fighting', 'N'),
(12, 'Tekken Tag Tournament 2', 'Xbox 360', '7.5000', 'Fighting', 'N'),
(13, 'Wild Blood', 'iPhone', '7.0000', 'Action', 'N'),
(14, 'Mark of the Ninja', 'Xbox 360', '9.0000', 'Action', 'Y'),
(15, 'Mark of the Ninja', 'PC', '9.0000', 'Action', 'Y'),
(16, 'Home: A Unique Horror Adventure', 'Macintosh', '6.5000', 'Adventure', 'N'),
(17, 'Home: A Unique Horror Adventure', 'PC', '6.5000', 'Adventure', 'N'),
(18, 'Avengers Initiative', 'iPhone', '8.0000', 'Action', 'N'),
(19, 'Way of the Samurai 4', 'PlayStation 3', '5.5000', 'Action', 'N'),
(20, 'JoJo\'\'s Bizarre Adventure HD', 'Xbox 360', '7.0000', 'Fighting', 'N'),
(21, 'JoJo\'\'s Bizarre Adventure HD', 'PlayStation 3', '7.0000', 'Fighting', 'N'),
(22, 'Mass Effect 3: Leviathan', 'Xbox 360', '7.5000', 'RPG', 'N'),
(23, 'Mass Effect 3: Leviathan', 'PlayStation 3', '7.5000', 'RPG', 'N'),
(24, 'Mass Effect 3: Leviathan', 'PC', '7.5000', 'RPG', 'N'),
(25, 'Dark Souls (Prepare to Die Edition)', 'PC', '9.0000', 'Action', 'Y'),
(26, 'Symphony', 'PC', '7.0000', 'Shooter', 'N'),
(27, 'Bastion', 'iPad', '9.0000', 'Action', 'Y'),
(28, 'Tom Clancy\'\'s Ghost Recon Phantoms', 'PC', '7.5000', 'Shooter', 'N'),
(29, 'Thirty Flights of Loving', 'PC', '8.0000', 'Adventure', 'N'),
(30, 'Legasista', 'PlayStation 3', '6.5000', 'Action', 'N'),
(31, 'The Walking Dead: The Game -- Episode 3: Long Road Ahead', 'Macintosh', '9.0000', 'Adventure', 'Y'),
(32, 'World of Warcraft: Mists of Pandaria', 'PC', '8.7000', 'RPG', 'Y'),
(33, 'Hell Yeah! Wrath of the Dead Rabbit', 'PlayStation 3', '4.9000', 'Platformer', 'N'),
(34, 'Pokemon White Version 2', 'Nintendo DS', '9.6000', 'RPG', 'Y'),
(35, 'War of the Roses', 'PC', '7.3000', 'Action', 'N'),
(36, 'Pokemon Black Version 2', 'Nintendo DS', '9.6000', 'RPG', 'Y'),
(37, 'Drakerider', 'iPhone', '6.5000', 'RPG', 'N'),
(38, 'The Walking Dead: The Game -- Episode 3: Long Road Ahead', 'Xbox 360', '9.0000', 'Adventure', 'Y'),
(39, 'The Walking Dead: The Game -- Episode 3: Long Road Ahead', 'PC', '9.0000', 'Adventure', 'Y'),
(40, 'The Walking Dead: The Game -- Episode 3: Long Road Ahead', 'PlayStation 3', '9.0000', 'Adventure', 'Y'),
(41, 'Rock Band Blitz', 'Xbox 360', '8.5000', 'Music', 'Y'),
(42, 'Counter-Strike: Global Offensive', 'Macintosh', '8.0000', 'Shooter', 'N'),
(43, 'Worms Revolution', 'PlayStation 3', '8.5000', 'Strategy', 'N'),
(44, 'Worms Revolution', 'PC', '8.5000', 'Strategy', 'N'),
(45, 'Worms Revolution', 'Xbox 360', '8.5000', 'Strategy', 'N'),
(46, 'Bad Piggies', 'iPhone', '9.2000', 'Action', 'Y'),
(47, 'Resident Evil 6', 'PlayStation 3', '7.9000', 'Action', 'N'),
(48, 'Resident Evil 6', 'Xbox 360', '7.9000', 'Action', 'N'),
(49, 'Shad\'\'O', 'PC', '7.0000', 'Adventure', 'N'),
(50, 'Demon\'\'s Score', 'iPhone', '6.9000', 'Action', 'N'),
(51, 'NBA 2K13', 'Xbox 360', '9.1000', 'Sports', 'Y'),
(52, 'Counter-Strike: Global Offensive', 'PC', '8.0000', 'Shooter', 'N'),
(53, 'The World Ends with You: Solo Remix', 'iPad', '9.5000', 'RPG', 'Y'),
(54, 'Counter-Strike: Global Offensive', 'PlayStation 3', '8.0000', 'Shooter', 'N'),
(55, 'The World Ends with You: Solo Remix', 'iPhone', '9.5000', 'RPG', 'Y'),
(56, 'Counter-Strike: Global Offensive', 'Xbox 360', '8.0000', 'Shooter', 'N'),
(57, 'Madden NFL 13', 'PlayStation Vita', '6.0000', 'Sports', 'N'),
(58, 'Madden NFL 13', 'PlayStation 3', '9.0000', 'Sports', 'Y'),
(59, 'Madden NFL 13', 'Xbox 360', '9.0000', 'Sports', 'Y'),
(60, 'Hoodwink', 'PC', '2.5000', 'Adventure', 'N'),
(61, 'NBA 2K13', 'PlayStation 3', '9.1000', 'Sports', 'Y'),
(62, 'NBA 2K13', 'PC', '9.1000', 'Sports', 'Y'),
(63, 'Lili: Child of Geos', 'iPhone', '7.0000', 'Adventure', 'N'),
(64, 'Marvel vs. Capcom Origins', 'Xbox 360', '8.2000', 'Fighting', 'N'),
(65, 'Marvel vs. Capcom Origins', 'PlayStation 3', '8.2000', 'Fighting', 'N'),
(66, 'Dead or Alive 5', 'PlayStation 3', '8.8000', 'Fighting', 'N'),
(67, 'Dead or Alive 5', 'Xbox 360', '8.8000', 'Fighting', 'N'),
(68, 'Medal of Honor Warfighter', 'PC', '4.0000', 'Shooter', 'N'),
(69, 'Professor Layton and the Miracle Mask', 'Nintendo 3DS', '8.7000', 'Adventure', 'Y'),
(70, 'Hotline Miami', 'PC', '8.8000', 'Action', 'Y'),
(71, 'Edna & Harvey: Harvey\'\'s New Eyes', 'PC', '6.0000', 'Adventure', 'N'),
(72, 'Medal of Honor Warfighter', 'PlayStation 3', '4.0000', 'Shooter', 'N'),
(73, 'Medal of Honor Warfighter', 'Xbox 360', '4.0000', 'Shooter', 'N'),
(74, 'Transformers: Fall of Cybertron', 'Xbox 360', '8.5000', 'Shooter', 'N'),
(75, 'Transformers: Fall of Cybertron', 'PlayStation 3', '8.5000', 'Shooter', 'N'),
(76, 'Hero Academy', 'PC', '9.0000', 'Board', 'Y'),
(77, 'Hero Academy', 'iPhone', '9.0000', 'Strategy', 'Y'),
(78, 'Puzzle Craft', 'iPhone', '9.0000', 'Puzzle', 'Y'),
(79, 'Realms Of Ancient War', 'Xbox 360', '5.5000', 'Action', 'N'),
(80, 'Realms Of Ancient War', 'PlayStation 3', '5.5000', 'Action', 'N'),
(81, 'Anomaly: Warzone Earth', 'PlayStation 3', '8.2000', 'Action', 'N'),
(82, 'Darksiders II', 'PC', '7.5000', 'Action', 'N'),
(83, 'Left 4 Dead 2: Cold Stream', 'Macintosh', '7.0000', 'Shooter', 'N'),
(84, 'Left 4 Dead 2: Cold Stream', 'PC', '7.0000', 'Shooter', 'N'),
(85, 'Puzzle Craft', 'Android', '9.0000', 'Puzzle', 'Y'),
(86, 'Left 4 Dead 2: Cold Stream', 'Xbox 360', '7.0000', 'Shooter', 'N'),
(87, 'Horn', 'iPhone', '9.0000', 'Action', 'Y'),
(88, 'Forza Horizon', 'Xbox 360', '9.0000', 'Racing', 'Y'),
(89, 'FIFA Soccer 13', 'PlayStation Vita', '4.0000', 'Sports', 'N'),
(90, 'Mugen Souls', 'PlayStation 3', '3.9000', 'Strategy', 'N'),
(91, 'Crazy Taxi', 'iPhone', '7.1000', 'Racing', 'N'),
(92, 'New Little King\'\'s Story', 'PlayStation Vita', '5.8000', 'RPG', 'N'),
(93, 'Fable: The Journey', 'Xbox 360', '7.2000', 'Action', 'N'),
(94, 'The Lord of the Rings Online: Riders of Rohan', 'PC', '8.3000', 'RPG', 'N'),
(95, 'Doom 3: BFG Edition', 'Xbox 360', '7.6000', 'RPG', 'N'),
(96, 'Rugby League Live 2', 'Xbox 360', '6.0000', 'Sports', 'N'),
(97, 'Rugby League Live 2', 'PlayStation 3', '6.0000', 'Sports', 'N'),
(98, 'Doom 3: BFG Edition', 'PlayStation 3', '7.6000', 'RPG', 'N'),
(99, 'Punch Quest', 'iPhone', '9.3000', 'Action', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` bigint(20) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`gameId`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `gameId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
