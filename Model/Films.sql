DROP DATABASE IF EXISTS cinema;

CREATE DATABASE cinema;

USE cinema;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `screening_id` int(11) DEFAULT NULL,
  `no_of_seats` int(11) DEFAULT NULL,
  `cust_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `booking` (`screening_id`, `no_of_seats`, `cust_id`) VALUES
(6, 0, 1),
(6, 0, 1),
(6, 0, 1),
(13, 100, 102);

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone_no` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `customers` (`name`, `email`, `password`, `phone_no`) VALUES
('John Doe', 'john@gmail.com', 'john', '0871234567');

CREATE TABLE `films` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `director` varchar(50) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `trailer_url` varchar(1000) DEFAULT NULL,
  `age` varchar(3) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `released` tinyint(1) DEFAULT NULL,
  `oscar` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `films` (`name`, `director`, `duration`, `trailer_url`, `age`, `description`, `released`, `oscar`) VALUES
('Inception', 'Christopher Nolan', '2:28', 'YoHD9XEInc0', '12A', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 2, NULL),
('Avatar: The Way of the Water', 'James Cameron', '3:13', 'd9MyW72ELq0', 'PG', 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home.', 1, 'picture , (W)'),
('The Fabelmans', 'Steven Spielberg', '2:31', 'D1G2iLSzOe8', '18', 'Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.', 1, 'picture , actor , director'),
('Puss in Boots: The Last Wish', 'Joel Crawford', '1:42', 'RqrXhwS33yc', 'U', 'When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.', 1, 'animated'),
('Babylon', 'Damien Chazelle', '3:09', '5muQK7CuFtY', '18', 'A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.', 1, NULL),
('Life is a Jungle', 'Robert D. Hanna', '1:41', 'rwyUzHEG_XY', 'U', 'When Pip, a pampered and snobbish puppy, gets separated from his owners on an African safari, he is forced to adapt a new way of life in the jungle where he learns that caviar and manicures can never bring the same happiness as friendship.', 2, NULL),
('Guardians of the Galaxy Vol. 3', 'James Gunn', '2:22', 'u3V5KDHRQvk', '12A', 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.', 0, NULL),
('Ant-Man and The Wasp: Quantumania', 'Peyton Reed', '2:05', 'ZlNFpri-Y40', '12A', 'Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.', 1, NULL),
('Spider-Man Across the Spiderverse', 'Joaqium Dos Santos', '1:54', 'cqGjhVJWtEg', 'U', 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.', 0, NULL),
('Shazam! Fury of the Gods', 'David F. Sandberg', '1:40', 'h7ldMwIjlk0&t', '12A', 'Four years after gaining the ability to transform into an adult superhero by shouting Shazam!, teenage Billy Baston and his adopted super-family face the wrath of the daughters of Atlas. Shazam! Fury Of The Gods stars returning cast members Zachary Levi as Shazam; Asher Angel as Billy Batson; Jack Dylan Grazer as Freddy Freeman, with the rest of the original cast reprising their roles as Billy\'s family and their respective super-selves, and sees Rachel Zegler, Lucy Liu, and Helen Mirren join the cast.', 0, NULL),
('Creed III', 'Michael B. Jordan', '1:57', 'AHmCH7iB_IM', '12A', 'When a childhood friend and former boxing prodigy, Damian (Jonathan Majors), resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face off between former friends is more than just a fight.', 0, NULL),
('Magic Mike Last Dance', 'Steven Soderbergh', '1:52', 'oLoyU3xYwbs', '12A', 'A 1950s housewife Magic Mike\'s Last Dance with her husband in a utopian experimental community begins to worry that his glamorous company could be hiding disturbing secrets. If you\'re a fan of the comics, you won\'t want to miss this one!', 2, NULL),
('Cocaine Bear', 'Elizabeth Banks', '1:35', 'DuWEEKeJLMI', '18', 'Cocaine Bear is a 2023 American dark comedy action film directed and co-produced by Elizabeth Banks and written by Jimmy Warden. It is loosely inspired by the true story of the Cocaine Bear, an American black bear that ingested a duffel bag full of cocaine in 1985.', 1, NULL),
('John Wick 4', 'Chad Stahelski', '2:49', 'qEVUtrk8_B4', '18', 'John Wick uncovers a path to defeating the High Table, but before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into new foes.', 0, NULL),
('An Cailin Ciúin', 'Colm Bairéad', '1:36', 'LGWyqty2m-A', 'U', 'The Quiet Girl is a 2022 Irish coming-of-age drama film written and directed by Colm Bairéad. The dialogue is mostly in Irish.', 1, NULL),
('The Super Mario Bros. Movie', 'Aaron Horvath', '1:32', 'TnGl01FkMMo', 'U', 'The main hero of the Mushroom Kingdom. Mario is always bright and cheerful and instantly recognizable with his blue overalls, red cap, and trademark moustache. He\'s a trusted friend of Princess Peach, and he and his brother Luigi are known across the land for their acts of bravery.', 0, NULL),
('The Whale', 'Darren Aronofsky', '1:57', 'nWiQodhMvz4', '12A', 'Charlie is an Idaho-based English teacher who never leaves his apartment and spends his time hosting online writing courses for college students via video conference, but keeps his webcam switched off; at almost 600 lb, he is ashamed of being morbidly obese and is afraid to show the students his appearance.', 1, 'actor , (W)'),
('A Man Called Otto', 'Marc Forster', '2:06', 'eFYUX9l-m5I', '12A', 'When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.', 1, NULL),
('Knock at the Cabin', 'M. Night Shaymalan', '1:40', '0wiBHEACNHs', '18', 'A young girl named Wen and her two fathers go on vacation to a remote cabin in a forest. They have fun swimming, and while her fathers are relaxing on the deck, Wen collects and and classifies insects. Suddenly, she notices a strange man walking through the woods towards the cabin. The man, named Leonard, introduces himself to Wen and is soon joined by three others. Wen and her fathers barricade themselves inside the house, but the four armed strangers break in. Leonard tells them they\'re there to prevent the apocalypse and to do that, they have to ask the family to make a terrible decision. With limited access to the outside world, the family must decide what they believe before all is lost.', 1, NULL),
('The Banshees of Inisherin', 'Martin Mc Donagh', '1:53', 'uRu3zLOJN2c', '18', 'On a remote island off the coast of Ireland, Pádraic is devastated when his buddy Colm suddenly puts an end to their lifelong friendship. With help from his sister and a troubled young islander, Pádraic sets out to repair the damaged relationship by any means necessary. However, as Colm\'s resolve only strengthens, he soon delivers an ultimatum that leads to shocking consequences.', 1, 'picture ,  actor , director'),
('Interstellar', 'Christopher Nolan', '2:49', '2LqzF5WauAw', 'U', 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.', 2, NULL),
('Birdman or (The Unexpected Virtue of Ignorance)', 'Alejandro González Iñárritu', '2:01', 'uJfLoE6hanc', '12A', 'Riggan Thomson is a faded actor famous for playing a superhero named Birdman in a film trilogy from 1989 to 1992. He is tormented by the mocking and critical internal voice of Birdman and frequently visualizes himself performing feats of levitation and telekinesis.', 2, NULL),
('Everything Everywhere All At Once', 'Daniel Kwan', '2:20', 'wxN1T1uxQ2g', '12A', 'A Chinese immigrant gets unwillingly embroiled in an epic adventure where she must connect different versions of herself in the parallel universe to stop someone who intends to harm the multiverse.', 1, 'picture , actor , director , (W)'),
('Licorice Pizza', 'Paul Thomas Anderson', '2:13', 'ofnXPwUPENo', '12A', 'Licorice Pizza is the story of Alana Kane and Gary Valentine growing up, running around and falling in love in the San Fernando Valley, 1973. Written and directed by Paul Thomas Anderson, the film tracks the treacherous navigation of first love.', 1, NULL),
('Oppenheimer', 'Christopher Nolan', '2:30', 'bK6ldnjE3Y0&t=1s', '12A', 'The film follows the life of theoretical physicist J. Robert Oppenheimer, the director of the Los Alamos Laboratory during the Manhattan Project, and his contributions that led to the creation of the atomic bomb.', 0, NULL),
('Dune: Chapter 2', 'Denis Villenueve', '3:15', '7WdkPwJTnQk', '18', 'The film will explore the continuing journey of Paul Atreides who is united with Chani and the Fremen. He seeks revenge against the conspirators who destroyed his family.', 0, NULL),
('Pulp Fiction', 'Quentin Tarantino', '2:34', 's7EdQ4FqbhY', '18', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 1, NULL),
('All Quiet On The Western Front', 'Edward Berger', '2:23', 'hf8EYbVxtCY', '18', 'An antiwar novel set during World War I, it relies on Remarque\'s personal experience in the war to depict the era\'s broader disillusionment. The book is an account of Paul Baumer\'s experiences in battle and his short career as a soldier, and it is primarily concerned with the effect of war on young men.', 1, 'picture , cinematography , (W)'),
('Elvis', 'Baz Luhrmann', '2:39', 'wBDLRvjHVOY', '12A', 'Elvis is a 2022 biographical drama film directed by Baz Luhrmann from a screenplay he co-wrote with Sam Bromell, Craig Pearce, and Jeremy Doner. It chronicles the life of the American rock and roll singer and actor Elvis Presley under the management of Colonel Tom Parker.', 1, 'picture , actor , cinematography'),
('TÁR', 'Todd Field', '2:38', 'Na6gA1RehsU', '12A', 'Played with fierce and seamless commitment by Cate Blanchett, Lydia Tár is one of the wonders of the classical realm. She is a virtuoso pianist, an earnest ethnomusicologist, and a purposeful popularizer—she is apparently a member of the EGOT club, which isn’t a common achievement for a classical person. And as a protean conductor about to conclude recording a cycle of Mahler symphonies, Lydia needs to get away from noise to do the work to which she almost stridently commits herself.', 1, 'picture , actor , cinematography , director'),
('Top Gun: Maverick', 'Tony Scott', '2:11', 'qSqVVswa420', '12A', 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN\'s elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.', 1, 'picture'),
('Triangle of Sadness', 'Ruben Östlund', '2:20', 'VDvfFIZQIuQ', '12A', 'Celebrity model couple, Carl (Harris Dickinson) and Yaya (Charlbi Dean), are invited on a luxury cruise for the uber-rich, helmed by an unhinged boat captain (Woody Harrelson). What first appeared instagrammable ends catastrophically, leaving the survivors stranded on a desert island and fighting for survival.', 1, 'picture , director'),
('Women Talking', 'Sarah Polley', '1:44', 'pD0mFhMqDCE', '12A', 'Do nothing, stay and fight, or leave. In 2010, the women of an isolated religious community grapple with reconciling a brutal reality with their faith.', 1, 'picture'),
('Causeway', 'Lila Neugebauer', '1:32', 'VojBOTd6Euo', '12A', 'Lynsey, a U.S. soldier, experiences a traumatic brain injury after an IED explosion during her tour in Afghanistan which forces her to return home in New Orleans. She struggles to return to her daily life with her mother as she waits for her wish to return for redeployment.', 1, 'actor '),
('Aftersun', 'Charlotte Wells', '1:36', 'vXKcWRu8K_U', '12A', 'At a fading vacation resort, 11-year-old Sophie treasures rare time together with her loving and idealistic father, Calum (Paul Mescal). As a world of adolescence creeps into view, beyond her eye Calum struggles under the weight of life outside of fatherhood. Twenty years later, Sophie\'s tender recollections of their last holiday become a powerful and heartrending portrait of their relationship, as she tries to reconcile the father she knew with the man she didn\'t, in Charlotte Wells\' superb and searingly emotional debut film.', 1, 'actor'),
('Living', 'Oliver Hermanus', '1:42', 't2L8CP31-14', 'PG', 'LIVING is the story of an ordinary man, reduced by years of oppressive office routine to a shadow existence, who at the eleventh hour makes a supreme effort to turn his dull life into something wonderful.', 1, 'actor'),
('Blonde', 'Andrew Dominik', '2:46', 'aIsFywuZPoQ', '18', 'In the 1940s, Norma Jeane becomes a pin-up model under the stage name \"Marilyn Monroe\", featuring on magazine covers and calendars. While trying to break into the acting world, she is raped by film studio president Mr. Z.', 1, 'actor'),
('To Leslie', 'Michael Morris', '1:59', 'D_k63vvm3mU', '18', 'To Leslie is a 2022 American independent drama film directed by Michael Morris (in his feature directorial debut), from a screenplay by Ryan Binaco. The film stars Andrea Riseborough as Leslie Rowland, a single mother and alcoholic who squanders all the prize money she received after winning the lottery.', 1, 'actor'),
('Guillermo Del Toro\'s Pinocchio', 'Guillermo Del Toro', '1:54', 'Od2NW1sfRdA', 'U', 'A father\'s wish magically brings a wooden boy to life in Italy, giving him a chance to care for the child.', 1, 'animated, (W)'),
('Marcel The Shell With Shoes On', 'Dean Fleischer Camp', '1:29', 'k98Afd7Nf3Y', 'U', 'The film follows Marcel, a shell who lives with his grandmother, Connie, after posting a short film online bringing Marcel millions of passionate fans and a new hope of reuniting with his long-lost family.', 1, 'animated'),
('The Sea Beast', 'Chris Williams', '1:59', 'P-E-IGQCsPo', 'U', 'When a young girl stows away on the ship of a legendary sea monster hunter, they launch an epic journey into uncharted waters - and make history to boot.', 1, 'animated'),
('Turning Red', 'Domee Shi', '1:30', 'XdKzUbAiswE', 'U', 'It\'s 2002 Toronto. Meilin is a 13 year-old Chinese-Canadian girl on the verge of adulthood. Her family cares for their temple honorable their ancestor who turned into a red panda to defend her family. One morning, she wakes up to find herself transformed into a red panda.', 1, 'animated'),
('Black Panther: Wakanda Forever', 'Ryan Coogler', '2:41', 'RlOB3UALvrQ', 'U', 'T\'Challa, king of Wakanda, is dying from an unspecified terminal illness which his sister Shuri believes can be cured by the \"heart-shaped herb\". Shuri attempts to synthetically recreate the herb after it was destroyed by Erik Killmonger, but fails to do so before T\'Challa dies.', 1, 'actor'),
('Bardo, False Chronicle of a Handful of Truths', 'Alejandro González Iñárritu', '2:54', 'lCQimQfDuTs', '12A', 'The film stars Daniel Giménez Cacho alongside Griselda Siciliani, and follows a journalist/documentarian who returns to his native country of Mexico and begins having an existential crisis in the form of dreamlike visions. The title refers to the Buddhist concept bardo, a liminal state between death and rebirth.', 1, 'cinematography'),
('Empire of Light', 'Sam Mendes', '1:59', 'HdMPTgYi-0w', 'U', 'Hilary (Olivia Colman) is a cinema manager struggling with her mental health, and Stephen (Micheal Ward) is a new employee longing to escape the provincial town where he faces daily adversity. Together they find a sense of belonging and experience the healing power of music, cinema, and community.', 1, 'cinematography');

CREATE TABLE `screening` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` varchar(50) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `film_id` int(11) DEFAULT NULL,
  `screen_id` int(11) DEFAULT NULL,
  `totalSeatsBooked` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `screening` (`price`, `date`, `time`, `film_id`, `screen_id`, `totalSeatsBooked`) VALUES
('44.32', '2023-03-11', '15:00', 1, 1, 20),
('18.11', '0000-00-00', '15:00', 53, 1, 20),
('28.61', '0000-00-00', '15:00', 53, 1, 20),
('6.25', '0000-00-00', '15:00', 53, 1, 20),
('72.05', '2023-03-13', '15:00', 13, 1, 20),
('5.67', '2023-03-11', '18:00', 2, 1, 1),
('7', '2023-11-03', '16:00', 1, 1, 2);

CREATE TABLE `screens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `capacity` int(11) DEFAULT NULL,
  `open` varchar(50) DEFAULT NULL,
    primary key(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `screens` (`capacity`, `open`) VALUES
(85, '1'),
(85, '1'),
(85, '1'),
(120, '1'),
(120, '1'),
(120, '1'),
(150, '1');

CREATE TABLE `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone_no` varchar(50) DEFAULT NULL,
  primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `staff` (`name`, `email`, `password`, `phone_no`) VALUES
('Jack Mac Intyre', 'jack@decade.ie', 'jack1234', '0874594597'),
('Killian Dolan', 'killian@decade.ie', 'killian1234', '0871597543'),
('Leigh Whoriskey', 'leigh@decade.ie', 'leigh1234', '0874911568'),
('Caoimhe Gallagher', 'caoimhe@decade.ie', 'caoimhe1234', '0874812697');

