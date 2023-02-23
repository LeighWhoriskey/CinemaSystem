create table Films (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	director VARCHAR(50),
	duration VARCHAR(50),
	trailer_url VARCHAR(1000),
	age VARCHAR(3),
	bool released(1);
	PRIMARY KEY (id)
);

insert into Films (name, director, duration, trailer_url, age, released) values (1, 'Inception', 'Christopher Nolan', '2:28', 'YoHD9XEInc0', '12A','1');
insert into Films (name, director, duration, trailer_url, age, released) values (2, 'Avatar: The Way of the Water', 'James Cameron', '3:13', 'd9MyW72ELq0','PG','1');
insert into Films (name, director, duration, trailer_url, age, released) values (3, 'The Fabelmans', 'Steven Spielberg', '2:31', 'D1G2iLSzOe8','18','1');
insert into Films (name, director, duration, trailer_url, age, released) values (4, 'Puss in Boots: The Last Wish', 'Joel Crawford', '1:42', 'RqrXhwS33yc','U','1');
insert into Films (name, director, duration, trailer_url, age, released) values (5, 'Babylon', 'Damien Chazelle', '3:09', '5muQK7CuFtY','18','1');
insert into Films (name, director, duration, trailer_url, age, released) values (6, 'Life is a Jungle', 'Robert D. Hanna', '1:41', 'rwyUzHEG_XY','U','1');
insert into Films (name, director, duration, trailer_url, age, released) values (7, 'Guardians of the Galaxy Vol. 3', 'James Gunn', '2:22', 'u3V5KDHRQvk','12A','0');
insert into Films (name, director, duration, trailer_url, age, released) values (8, 'Ant-Man and The Wasp: Quantumania', 'Peyton Reed', '2:05', 'ZlNFpri-Y40','12A','1');
insert into Films (name, director, duration, trailer_url, age, released) values (9, 'Spider-Man Across the Spiderverse', 'Joaqium Dos Santos', '1:54', 'cqGjhVJWtEg','U','0');

create table Screens (
	id INT NOT NULL AUTO_INCREMENT,
	capacity INT,
	open VARCHAR(50),
	PRIMARY KEY(id)
);

insert into screens (capacity, open) values (1, 82, false);
insert into screens (capacity, open) values (2, 121, true);
insert into screens (capacity, open) values (3, 132, false);
insert into screens (capacity, open) values (4, 60, true);
insert into screens (capacity, open) values (5, 112, false);
insert into screens (capacity, open) values (6, 146, true);
insert into screens (capacity, open) values (7, 56, true);

create table Customers (
	cust_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	email VARCHAR(50),
	age INT,
	password VARCHAR(50),
	phone_no VARCHAR(50),
	PRIMARY KEY(cust_id)
);
insert into Customers (name, email, age, password, phone_no) values (1, 'Rurik Johanning', 'rjohanning0@cornell.edu', 82, 'LxCMjHJ', '7865655219');
insert into Customers (name, email, age, password, phone_no) values (2, 'Lothaire Ick', 'lick1@sina.com.cn', 35, 'RFk9dVykTCtc', '6164556444');
insert into Customers (name, email, age, password, phone_no) values (3, 'Eleen Lammertz', 'elammertz2@cmu.edu', 35, 'VrFGDTMbr6', '1916720148');
insert into Customers (name, email, age, password, phone_no) values (4, 'Kim Allonby', 'kallonby3@nbcnews.com', 9, 'WOyHSTyhZj3', '1532278598');
insert into Customers (name, email, age, password, phone_no) values (5, 'Tommie Pullen', 'tpullen4@epa.gov', 80, '8ddyJJh', '3216789676');
insert into Customers (name, email, age, password, phone_no) values (6, 'Ludovika Spittall', 'lspittall5@examiner.com', 24, 'nCHDPjQg', '1193544521');
insert into Customers (name, email, age, password, phone_no) values (7, 'Gaye Kincla', 'gkincla6@constantcontact.com', 29, 'Avrm0E', '8376757184');
insert into Customers (name, email, age, password, phone_no) values (8, 'Merle Olland', 'molland7@salon.com', 84, 't9JfT8GYKoeK', '3733907022');
insert into Customers (name, email, age, password, phone_no) values (9, 'Bastien Arsmith', 'barsmith8@businessweek.com', 8, 'SjnCBynDiQ', '4651217753');
insert into Customers (name, email, age, password, phone_no) values (10, 'Porter Prium', 'pprium9@oracle.com', 16, '43pCXlhNBW4m', '9275672773');
insert into Customers (name, email, age, password, phone_no) values (11, 'Corrinne Farrier', 'cfarriera@canalblog.com', 51, 'vl5IIy', '8306490529');
insert into Customers (name, email, age, password, phone_no) values (12, 'Jackquelin Fike', 'jfikeb@posterous.com', 27, 'zUDiADZuDlt', '4647483046');
insert into Customers (name, email, age, password, phone_no) values (13, 'Hamel Timcke', 'htimckec@soundcloud.com', 16, 'eAzBiOCRtJb', '7713520044');
insert into Customers (name, email, age, password, phone_no) values (14, 'Giacinta Disdel', 'gdisdeld@soundcloud.com', 98, 'jAfyN1', '2029979742');
insert into Customers (name, email, age, password, phone_no) values (15, 'Kinsley Thyng', 'kthynge@rakuten.co.jp', 7, 'c7N1TTrQE', '7716477918');
insert into Customers (name, email, age, password, phone_no) values (16, 'Wilmette Zamora', 'wzamoraf@canalblog.com', 92, '3F1MHeaj', '7094684477');
insert into Customers (name, email, age, password, phone_no) values (17, 'Jen Ortes', 'jortesg@istockphoto.com', 34, 'Wn0QmHZS', '5402886127');
insert into Customers (name, email, age, password, phone_no) values (18, 'Tulley Silby', 'tsilbyh@gov.uk', 83, '92DRwHT', '1834878382');
insert into Customers (name, email, age, password, phone_no) values (19, 'Foss McGeoch', 'fmcgeochi@github.com', 87, 'YGwdrjiWu', '3669120511');
insert into Customers (name, email, age, password, phone_no) values (20, 'Perri Noen', 'pnoenj@bizjournals.com', 76, 'hXEM9q', '6476024040');
insert into Customers (name, email, age, password, phone_no) values (21, 'Idell Rearie', 'ireariek@nsw.gov.au', 84, 'UpHe8357w', '7558738959');
insert into Customers (name, email, age, password, phone_no) values (22, 'Lisette Handyside', 'lhandysidel@clickbank.net', 35, 'r47miejQgcVI', '6972400040');
insert into Customers (name, email, age, password, phone_no) values (23, 'Miof mela Wort', 'mmelam@icio.us', 17, 'Jy87GKi5nW', '3412542570');
insert into Customers (name, email, age, password, phone_no) values (24, 'Kacy Kingsman', 'kkingsmann@vistaprint.com', 99, '8jfMkaJO', '9367836078');
insert into Customers (name, email, age, password, phone_no) values (25, 'Rosie Gamage', 'rgamageo@mapquest.com', 7, 'okm6M2MN', '9352339772');
insert into Customers (name, email, age, password, phone_no) values (26, 'Janel Carvill', 'jcarvillp@hostgator.com', 52, 'OCgZcn3dwLv', '8505028637');
insert into Customers (name, email, age, password, phone_no) values (27, 'Dom Scamp', 'dscampq@smugmug.com', 88, 'SCz785lHLcG', '8425123083');
insert into Customers (name, email, age, password, phone_no) values (28, 'Atlanta Bloxsome', 'abloxsomer@answers.com', 83, 'VLZqfS', '1591771055');
insert into Customers (name, email, age, password, phone_no) values (29, 'Morten Wrotchford', 'mwrotchfords@edublogs.org', 72, 'YtpcYcne9S', '2525112771');
insert into Customers (name, email, age, password, phone_no) values (30, 'Nikolaus Vanlint', 'nvanlintt@slate.com', 94, 'Orboli8FE', '2296062496');
insert into Customers (name, email, age, password, phone_no) values (31, 'Vance Danne', 'vdanneu@lulu.com', 59, 'Te65gYUh', '6906459316');
insert into Customers (name, email, age, password, phone_no) values (32, 'Elmo Matis', 'ematisv@elegantthemes.com', 40, 'ATVClc9', '5644243491');
insert into Customers (name, email, age, password, phone_no) values (33, 'Isak Lowsely', 'ilowselyw@fotki.com', 13, 'PeBCY6j9Lm', '9694196572');
insert into Customers (name, email, age, password, phone_no) values (34, 'Sheba Elrick', 'selrickx@ovh.net', 80, 'TmN4GkdHmaA', '3823577891');
insert into Customers (name, email, age, password, phone_no) values (35, 'Loretta McCabe', 'lmccabey@live.com', 35, 'oYLyAkEyL8', '7241993250');
insert into Customers (name, email, age, password, phone_no) values (36, 'Nevile Flatte', 'nflattez@instagram.com', 63, 'nChPLN', '7364990167');
insert into Customers (name, email, age, password, phone_no) values (37, 'Lotta Bettleson', 'lbettleson10@miibeian.gov.cn', 11, 'ggy8DXI', '7256118704');
insert into Customers (name, email, age, password, phone_no) values (38, 'Jobie Watman', 'jwatman11@buzzfeed.com', 33, '7FCgNZsC', '7834297328');
insert into Customers (name, email, age, password, phone_no) values (39, 'Olenolin Benettelli', 'obenettelli12@ted.com', 66, 'wMUJz9VLO', '5849535160');
insert into Customers (name, email, age, password, phone_no) values (40, 'Tate McAnulty', 'tmcanulty13@engadget.com', 24, 'fTboDl', '5173498854');
insert into Customers (name, email, age, password, phone_no) values (41, 'Thedrick Tatterton', 'ttatterton14@stanford.edu', 45, 'ov4MGcE4', '2378755432');
insert into Customers (name, email, age, password, phone_no) values (42, 'Eleanora Brundle', 'ebrundle15@webeden.co.uk', 85, 'OGlipkP6', '6675246502');
insert into Customers (name, email, age, password, phone_no) values (43, 'Jdavie Siveter', 'jsiveter16@google.com.au', 29, 'h8xsab6q09n', '7052915715');
insert into Customers (name, email, age, password, phone_no) values (44, 'Renie Claus', 'rclaus17@people.com.cn', 55, 'Zq4ns0', '5698221377');
insert into Customers (name, email, age, password, phone_no) values (45, 'Annalise Bovis', 'abovis18@yellowpages.com', 68, 'YAkEP6TWj', '2927084717');
insert into Customers (name, email, age, password, phone_no) values (46, 'Joycelin McGregor', 'jmcgregor19@pen.io', 81, 'K5C41LuV31J', '3308247126');
insert into Customers (name, email, age, password, phone_no) values (47, 'Matelda Lamlin', 'mlamlin1a@irs.gov', 10, 'DE4G8In6', '3334294250');
insert into Customers (name, email, age, password, phone_no) values (48, 'Gibbie Littlefield', 'glittlefield1b@twitpic.com', 59, 'UUuWw2Nk8wM', '9916276347');
insert into Customers (name, email, age, password, phone_no) values (49, 'My Advani', 'madvani1c@moonfruit.com', 79, 'J9bHjnpbB', '9823076570');
insert into Customers (name, email, age, password, phone_no) values (50, 'Bartholemy Paskins', 'bpaskins1d@google.fr', 54, 'dZbEJZMPruhi', '2143950751');
insert into Customers (name, email, age, password, phone_no) values (51, 'Merola Buckie', 'mbuckie1e@nih.gov', 75, '1u25p0tqW', '8474648516');
insert into Customers (name, email, age, password, phone_no) values (52, 'Janeta Corsham', 'jcorsham1f@wunderground.com', 55, '7H6Yva5F', '9601960766');
insert into Customers (name, email, age, password, phone_no) values (53, 'Fair Coyne', 'fcoyne1g@yale.edu', 44, 'k9RuSccFCC', '2482642598');
insert into Customers (name, email, age, password, phone_no) values (54, 'Wilone Emberson', 'wemberson1h@bing.com', 12, 'gx8frm12', '4012101033');
insert into Customers (name, email, age, password, phone_no) values (55, 'Pansie Grewes', 'pgrewes1i@shutterfly.com', 78, 'ZHbMkuQC', '2937994753');
insert into Customers (name, email, age, password, phone_no) values (56, 'Chlo Primarolo', 'cprimarolo1j@g.co', 27, 'TFIHB8k', '8735455534');
insert into Customers (name, email, age, password, phone_no) values (57, 'Monique Pawlett', 'mpawlett1k@eventbrite.com', 42, 'eiYuUlP0Q', '4649186908');
insert into Customers (name, email, age, password, phone_no) values (58, 'Hagen Carnie', 'hcarnie1l@sun.com', 87, 'QsVVeUag9p', '3727592354');
insert into Customers (name, email, age, password, phone_no) values (59, 'Wyatan Pilsworth', 'wpilsworth1m@bluehost.com', 63, 'PdAsuh', '7766585240');
insert into Customers (name, email, age, password, phone_no) values (60, 'Jenine Deakins', 'jdeakins1n@dailymotion.com', 96, '3ohsJa7uzHP', '2681714863');
insert into Customers (name, email, age, password, phone_no) values (61, 'Ardyce Ettridge', 'aettridge1o@booking.com', 51, 'O3Lk3p0HOkSc', '3243516971');
insert into Customers (name, email, age, password, phone_no) values (62, 'Isidoro Munday', 'imunday1p@cnn.com', 78, 'cvLKrDgyr1XA', '4762381622');
insert into Customers (name, email, age, password, phone_no) values (63, 'Mattie Fison', 'mfison1q@purevolume.com', 49, 'mJHQbcOVSd2K', '4246231474');
insert into Customers (name, email, age, password, phone_no) values (64, 'Lonee Borwick', 'lborwick1r@nytimes.com', 95, 'BH3g2BhKX', '2801412944');
insert into Customers (name, email, age, password, phone_no) values (65, 'Lissa Flye', 'lflye1s@epa.gov', 68, 'BWmsfGbtQ9', '3235885116');
insert into Customers (name, email, age, password, phone_no) values (66, 'Meyer Graber', 'mgraber1t@storify.com', 73, 'Mc2etj', '4249619823');
insert into Customers (name, email, age, password, phone_no) values (67, 'Bobby January', 'bjanuary1u@imdb.com', 19, 'Cc9j58P', '1985231949');
insert into Customers (name, email, age, password, phone_no) values (68, 'Antonin Colson', 'acolson1v@sina.com.cn', 34, 'sFskDv8MWn', '4579754339');
insert into Customers (name, email, age, password, phone_no) values (69, 'Homer Boyen', 'hboyen1w@tripadvisor.com', 92, 'EMFuyLhLJeg', '9494836602');
insert into Customers (name, email, age, password, phone_no) values (70, 'Darrelle Sykes', 'dsykes1x@barnesandnoble.com', 79, '01QbU4r5eONo', '6563744366');
insert into Customers (name, email, age, password, phone_no) values (71, 'Marsiella Mogenot', 'mmogenot1y@storify.com', 38, 'bi4g6r6Ak', '3236849348');
insert into Customers (name, email, age, password, phone_no) values (72, 'Petronilla Marchello', 'pmarchello1z@topsy.com', 91, 'hCr9moJym2H2', '9343193628');
insert into Customers (name, email, age, password, phone_no) values (73, 'Jonas Proschke', 'jproschke20@reuters.com', 75, 'hSo3L1lLUp', '4897631566');
insert into Customers (name, email, age, password, phone_no) values (74, 'Phillipp McGriele', 'pmcgriele21@npr.org', 88, 'pCrCjV2GJH', '5703579698');
insert into Customers (name, email, age, password, phone_no) values (75, 'Aundrea Snodden', 'asnodden22@unicef.org', 55, 'GvMyt5l', '1785157175');
insert into Customers (name, email, age, password, phone_no) values (76, 'Nora Impett', 'nimpett23@auda.org.au', 46, '6QtzuVdqjBf', '8268664341');
insert into Customers (name, email, age, password, phone_no) values (77, 'Delmar MacGorrie', 'dmacgorrie24@acquirethisname.com', 31, 'a7HDIoJ06IL', '9647287239');
insert into Customers (name, email, age, password, phone_no) values (78, 'Gwendolin Chapman', 'gchapman25@goo.ne.jp', 27, 't82Ye0kc', '4615552273');
insert into Customers (name, email, age, password, phone_no) values (79, 'Rik Garrat', 'rgarrat26@sourceforge.net', 95, 'dKnkISZ1o', '2612005207');
insert into Customers (name, email, age, password, phone_no) values (80, 'Lily Duer', 'lduer27@arstechnica.com', 7, '5FGPrdizEfo', '2289718200');
insert into Customers (name, email, age, password, phone_no) values (81, 'Joyce Sinderson', 'jsinderson28@shinystat.com', 84, 'jrsoN6FNvu', '5744545470');
insert into Customers (name, email, age, password, phone_no) values (82, 'Gael Hobble', 'ghobble29@i2i.jp', 73, 'fByDQU', '8479333796');
insert into Customers (name, email, age, password, phone_no) values (83, 'Tate Glencrash', 'tglencrash2a@cdbaby.com', 65, 'G2jYqI1', '3316206378');
insert into Customers (name, email, age, password, phone_no) values (84, 'Phillis Pulford', 'ppulford2b@microsoft.com', 93, 'cV5fxP', '1134247926');
insert into Customers (name, email, age, password, phone_no) values (85, 'Benedick Paolicchi', 'bpaolicchi2c@addthis.com', 89, 'iFSlVYsSxR', '1157912018');
insert into Customers (name, email, age, password, phone_no) values (86, 'Seth Whitters', 'swhitters2d@slashdot.org', 57, '7gyTeuj', '4091096593');
insert into Customers (name, email, age, password, phone_no) values (87, 'Margo Gotcliffe', 'mgotcliffe2e@archive.org', 34, 'd4f7R2C', '8315198389');
insert into Customers (name, email, age, password, phone_no) values (88, 'Shawn Larway', 'slarway2f@youku.com', 79, 'e4v3FHJi', '3884663256');
insert into Customers (name, email, age, password, phone_no) values (89, 'Rodina Nore', 'rnore2g@google.pl', 74, 'bMyHQUOJ', '2532945102');
insert into Customers (name, email, age, password, phone_no) values (90, 'Eimile Rishman', 'erishman2h@blog.com', 53, 'iXTg3mH', '4958374573');
insert into Customers (name, email, age, password, phone_no) values (91, 'Carri Van Oort', 'cvan2i@elpais.com', 35, 'ivGD6IKAgPP', '3963551408');
insert into Customers (name, email, age, password, phone_no) values (92, 'Stephie Sketchley', 'ssketchley2j@google.de', 13, 'zK0LbadW1C', '5135038799');
insert into Customers (name, email, age, password, phone_no) values (93, 'Torrey Worsell', 'tworsell2k@nytimes.com', 21, 'UZ22wf3lO0j', '7459255111');
insert into Customers (name, email, age, password, phone_no) values (94, 'Sayres Gouldthorpe', 'sgouldthorpe2l@ebay.co.uk', 91, 'EQGzAoo', '7174387875');
insert into Customers (name, email, age, password, phone_no) values (95, 'Raoul Roughan', 'rroughan2m@ehow.com', 36, 'pYSvfKCNYxr', '8868600918');
insert into Customers (name, email, age, password, phone_no) values (96, 'Liuka Vile', 'lvile2n@oaic.gov.au', 8, 'CwmeW50mJc', '3747286176');
insert into Customers (name, email, age, password, phone_no) values (97, 'Sayres Ahrend', 'sahrend2o@shinystat.com', 97, 'Sdz9X0aZDRWn', '5913000891');
insert into Customers (name, email, age, password, phone_no) values (98, 'Jesus Heers', 'jheers2p@admin.ch', 85, 'TnBUZ1ixY23n', '6147560921');
insert into Customers (name, email, age, password, phone_no) values (99, 'Esteban Scotchford', 'escotchford2q@bigcartel.com', 58, 'vMfcdMWzIb6r', '4744813751');
insert into Customers (name, email, age, password, phone_no) values (100, 'Amble Shere', 'ashere2r@lulu.com', 67, 'OzeEyaETvl8T', '7399892030');

create table Booking (
	booking_id INT NOT NULL AUTO_INCREMENT,
	screen_id INT,
	no_of_seats INT,
	PRIMARY KEY(booking_id)

);
insert into Booking (booking_id, no_of_seats, capacity) values (1, 55, 45, 15, 77);

create table Staff (
	staff_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	email VARCHAR(50),
	age INT,
	password VARCHAR(50),
	phone_no VARCHAR(50),
	PRIMARY KEY(staff_id)
);
insert into Staff (name, email, age, password, phone_no) values (1, 'Neely Kettlestring', 'nkettlestring0@europa.eu', 23, '4sdBOo3O', '3146162205');
insert into Staff (name, email, age, password, phone_no) values (2, 'Eleanora Lammiman', 'elammiman1@devhub.com', 12, '2gvCLq66oX', '1509714908');
insert into Staff (name, email, age, password, phone_no) values (3, 'Cornie Burges', 'cburges2@tiny.cc', 41, 'rfs8a2', '2149780222');
insert into Staff (name, email, age, password, phone_no) values (4, 'Bee Playle', 'bplayle3@is.gd', 69, 'H130hKds', '8988844024');
insert into Staff (name, email, age, password, phone_no) values (5, 'Ari Siggs', 'asiggs4@acquirethisname.com', 45, '5JmkLhiBGjw', '5674631432');

create table Screening (
	screen_id INT NOT NULL AUTO_INCREMENT,
	price VARCHAR(50),
	dateTime DATE,
	film_id INT,
	phone_no VARCHAR(50)
	PRIMARY KEY(screen_id)
);
insert into Screening (screen_id, price, dateTime, film_id, phone_no) values (1, 7, '€44,32', '12/03/2023', 53, '4968684638');
insert into Screening (screen_id, price, dateTime, film_id, phone_no) values (2, 6, '€18,11', '22/09/2023', 34, '6232781023');
insert into Screening (screen_id, price, dateTime, film_id, phone_no) values (3, 6, '€28,61', '23/07/2023', 54, '8812910356');
insert into Screening (screen_id, price, dateTime, film_id, phone_no) values (4, 4, '€6,25', '07/02/2024', 59, '5021894372');
insert into Screening (screen_id, price, dateTime, film_id, phone_no) values (5, 5, '€72,05', '06/12/2023', 84, '7281147680');