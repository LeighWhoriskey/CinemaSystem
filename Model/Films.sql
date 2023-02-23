DROP DATABASE IF EXISTS cinema;

create DATABASE cinema;

use cinema;

create table Films (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	director VARCHAR(50),
	duration VARCHAR(50),
	trailer_url VARCHAR(1000),
	description VARCHAR(1000),
	age VARCHAR(3),
	PRIMARY KEY (id)
);

insert into Films (name, director, duration, trailer_url, description, age) values ('Inception', 'Christopher Nolan', '2:28', 'https://www.youtube.com/watch?v=YoHD9XEInc0','A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', '12A');
insert into Films (name, director, duration, trailer_url, description, age) values ('Avatar: The Way of the Water', 'James Cameron', '3:13', 'https://www.youtube.com/watch?v=d9MyW72ELq0',"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",'PG');
insert into Films (name, director, duration, trailer_url, description, age) values ('The Fabelmans', 'Steven Spielberg', '2:31', 'https://www.youtube.com/watch?v=D1G2iLSzOe8',"Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",'18');
insert into Films (name, director, duration, trailer_url, description, age) values ('Puss in Boots: The Last Wish', 'Joel Crawford', '1:42', 'https://www.youtube.com/watch?v=RqrXhwS33yc',"When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.",'U');
insert into Films (name, director, duration, trailer_url, description, age) values ('Babylon', 'Damien Chazelle', '3:09', 'https://www.youtube.com/watch?v=5muQK7CuFtY',"A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",'18');
insert into Films (name, director, duration, trailer_url, description, age) values ('Life is a Jungle', 'Robert D. Hanna', '1:41', 'https://www.youtube.com/watch?v=rwyUzHEG_XY',"When Pip, a pampered and snobbish puppy, gets separated from his owners on an African safari, he is forced to adapt a new way of life in the jungle where he learns that caviar and manicures can never bring the same happiness as friendship.",'U');
insert into Films (name, director, duration, trailer_url, description, age) values ('Guardians of the Galaxy Vol. 3', 'James Gunn', '2:22', 'https://www.youtube.com/watch?v=u3V5KDHRQvk',"Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",'12A');
insert into Films (name, director, duration, trailer_url, description, age) values ('Ant-Man and The Wasp: Quantumania', 'Peyton Reed', '2:05', 'https://www.youtube.com/watch?v=ZlNFpri-Y40',"Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",'12A');
insert into Films (name, director, duration, trailer_url, description, age) values ('Spider-Man Across the Spiderverse', 'Joaqium Dos Santos', '1:54', 'https://www.youtube.com/watch?v=cqGjhVJWtEg',"Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",'U');

create table Screens (
	id INT NOT NULL AUTO_INCREMENT,
	capacity INT,
	open VARCHAR(50),
	PRIMARY KEY(id)
);

insert into screens (capacity, open) values (82, false);
insert into screens (capacity, open) values (121, true);
insert into screens (capacity, open) values (132, false);
insert into screens (capacity, open) values (60, true);
insert into screens (capacity, open) values (112, false);
insert into screens (capacity, open) values (146, true);
insert into screens (capacity, open) values (56, true);

create table Customers (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	email VARCHAR(50),
	age INT,
	password VARCHAR(50),
	phone_no VARCHAR(50),
	PRIMARY KEY(id)
);

insert into Customers (name, email, age, password, phone_no) values ('Rurik Johanning', 'rjohanning0@cornell.edu', 82, 'LxCMjHJ', '7865655219');
insert into Customers (name, email, age, password, phone_no) values ('Lothaire Ick', 'lick1@sina.com.cn', 35, 'RFk9dVykTCtc', '6164556444');
insert into Customers (name, email, age, password, phone_no) values ('Eleen Lammertz', 'elammertz2@cmu.edu', 35, 'VrFGDTMbr6', '1916720148');
insert into Customers (name, email, age, password, phone_no) values ('Kim Allonby', 'kallonby3@nbcnews.com', 9, 'WOyHSTyhZj3', '1532278598');
insert into Customers (name, email, age, password, phone_no) values ('Tommie Pullen', 'tpullen4@epa.gov', 80, '8ddyJJh', '3216789676');
insert into Customers (name, email, age, password, phone_no) values ('Ludovika Spittall', 'lspittall5@examiner.com', 24, 'nCHDPjQg', '1193544521');
insert into Customers (name, email, age, password, phone_no) values ('Gaye Kincla', 'gkincla6@constantcontact.com', 29, 'Avrm0E', '8376757184');
insert into Customers (name, email, age, password, phone_no) values ('Merle Olland', 'molland7@salon.com', 84, 't9JfT8GYKoeK', '3733907022');
insert into Customers (name, email, age, password, phone_no) values ('Bastien Arsmith', 'barsmith8@businessweek.com', 8, 'SjnCBynDiQ', '4651217753');
insert into Customers (name, email, age, password, phone_no) values ('Porter Prium', 'pprium9@oracle.com', 16, '43pCXlhNBW4m', '9275672773');
insert into Customers (name, email, age, password, phone_no) values ('Corrinne Farrier', 'cfarriera@canalblog.com', 51, 'vl5IIy', '8306490529');
insert into Customers (name, email, age, password, phone_no) values ('Jackquelin Fike', 'jfikeb@posterous.com', 27, 'zUDiADZuDlt', '4647483046');
insert into Customers (name, email, age, password, phone_no) values ('Hamel Timcke', 'htimckec@soundcloud.com', 16, 'eAzBiOCRtJb', '7713520044');
insert into Customers (name, email, age, password, phone_no) values ('Giacinta Disdel', 'gdisdeld@soundcloud.com', 98, 'jAfyN1', '2029979742');
insert into Customers (name, email, age, password, phone_no) values ('Kinsley Thyng', 'kthynge@rakuten.co.jp', 7, 'c7N1TTrQE', '7716477918');
insert into Customers (name, email, age, password, phone_no) values ('Wilmette Zamora', 'wzamoraf@canalblog.com', 92, '3F1MHeaj', '7094684477');
insert into Customers (name, email, age, password, phone_no) values ('Jen Ortes', 'jortesg@istockphoto.com', 34, 'Wn0QmHZS', '5402886127');
insert into Customers (name, email, age, password, phone_no) values ('Tulley Silby', 'tsilbyh@gov.uk', 83, '92DRwHT', '1834878382');
insert into Customers (name, email, age, password, phone_no) values ('Foss McGeoch', 'fmcgeochi@github.com', 87, 'YGwdrjiWu', '3669120511');
insert into Customers (name, email, age, password, phone_no) values ('Perri Noen', 'pnoenj@bizjournals.com', 76, 'hXEM9q', '6476024040');
insert into Customers (name, email, age, password, phone_no) values ('Idell Rearie', 'ireariek@nsw.gov.au', 84, 'UpHe8357w', '7558738959');
insert into Customers (name, email, age, password, phone_no) values ('Lisette Handyside', 'lhandysidel@clickbank.net', 35, 'r47miejQgcVI', '6972400040');
insert into Customers (name, email, age, password, phone_no) values ('Miof mela Wort', 'mmelam@icio.us', 17, 'Jy87GKi5nW', '3412542570');
insert into Customers (name, email, age, password, phone_no) values ('Kacy Kingsman', 'kkingsmann@vistaprint.com', 99, '8jfMkaJO', '9367836078');
insert into Customers (name, email, age, password, phone_no) values ('Rosie Gamage', 'rgamageo@mapquest.com', 7, 'okm6M2MN', '9352339772');
insert into Customers (name, email, age, password, phone_no) values ('Janel Carvill', 'jcarvillp@hostgator.com', 52, 'OCgZcn3dwLv', '8505028637');
insert into Customers (name, email, age, password, phone_no) values ('Dom Scamp', 'dscampq@smugmug.com', 88, 'SCz785lHLcG', '8425123083');
insert into Customers (name, email, age, password, phone_no) values ('Atlanta Bloxsome', 'abloxsomer@answers.com', 83, 'VLZqfS', '1591771055');
insert into Customers (name, email, age, password, phone_no) values ('Morten Wrotchford', 'mwrotchfords@edublogs.org', 72, 'YtpcYcne9S', '2525112771');
insert into Customers (name, email, age, password, phone_no) values ('Nikolaus Vanlint', 'nvanlintt@slate.com', 94, 'Orboli8FE', '2296062496');
insert into Customers (name, email, age, password, phone_no) values ('Vance Danne', 'vdanneu@lulu.com', 59, 'Te65gYUh', '6906459316');
insert into Customers (name, email, age, password, phone_no) values ('Elmo Matis', 'ematisv@elegantthemes.com', 40, 'ATVClc9', '5644243491');
insert into Customers (name, email, age, password, phone_no) values ('Isak Lowsely', 'ilowselyw@fotki.com', 13, 'PeBCY6j9Lm', '9694196572');
insert into Customers (name, email, age, password, phone_no) values ('Sheba Elrick', 'selrickx@ovh.net', 80, 'TmN4GkdHmaA', '3823577891');
insert into Customers (name, email, age, password, phone_no) values ('Loretta McCabe', 'lmccabey@live.com', 35, 'oYLyAkEyL8', '7241993250');
insert into Customers (name, email, age, password, phone_no) values ('Nevile Flatte', 'nflattez@instagram.com', 63, 'nChPLN', '7364990167');
insert into Customers (name, email, age, password, phone_no) values ('Lotta Bettleson', 'lbettleson10@miibeian.gov.cn', 11, 'ggy8DXI', '7256118704');
insert into Customers (name, email, age, password, phone_no) values ('Jobie Watman', 'jwatman11@buzzfeed.com', 33, '7FCgNZsC', '7834297328');
insert into Customers (name, email, age, password, phone_no) values ('Olenolin Benettelli', 'obenettelli12@ted.com', 66, 'wMUJz9VLO', '5849535160');
insert into Customers (name, email, age, password, phone_no) values ('Tate McAnulty', 'tmcanulty13@engadget.com', 24, 'fTboDl', '5173498854');
insert into Customers (name, email, age, password, phone_no) values ('Thedrick Tatterton', 'ttatterton14@stanford.edu', 45, 'ov4MGcE4', '2378755432');
insert into Customers (name, email, age, password, phone_no) values ('Eleanora Brundle', 'ebrundle15@webeden.co.uk', 85, 'OGlipkP6', '6675246502');
insert into Customers (name, email, age, password, phone_no) values ('Jdavie Siveter', 'jsiveter16@google.com.au', 29, 'h8xsab6q09n', '7052915715');
insert into Customers (name, email, age, password, phone_no) values ('Renie Claus', 'rclaus17@people.com.cn', 55, 'Zq4ns0', '5698221377');
insert into Customers (name, email, age, password, phone_no) values ('Annalise Bovis', 'abovis18@yellowpages.com', 68, 'YAkEP6TWj', '2927084717');
insert into Customers (name, email, age, password, phone_no) values ('Joycelin McGregor', 'jmcgregor19@pen.io', 81, 'K5C41LuV31J', '3308247126');
insert into Customers (name, email, age, password, phone_no) values ('Matelda Lamlin', 'mlamlin1a@irs.gov', 10, 'DE4G8In6', '3334294250');
insert into Customers (name, email, age, password, phone_no) values ('Gibbie Littlefield', 'glittlefield1b@twitpic.com', 59, 'UUuWw2Nk8wM', '9916276347');
insert into Customers (name, email, age, password, phone_no) values ('My Advani', 'madvani1c@moonfruit.com', 79, 'J9bHjnpbB', '9823076570');
insert into Customers (name, email, age, password, phone_no) values ('Bartholemy Paskins', 'bpaskins1d@google.fr', 54, 'dZbEJZMPruhi', '2143950751');
insert into Customers (name, email, age, password, phone_no) values ('Merola Buckie', 'mbuckie1e@nih.gov', 75, '1u25p0tqW', '8474648516');
insert into Customers (name, email, age, password, phone_no) values ('Janeta Corsham', 'jcorsham1f@wunderground.com', 55, '7H6Yva5F', '9601960766');
insert into Customers (name, email, age, password, phone_no) values ('Fair Coyne', 'fcoyne1g@yale.edu', 44, 'k9RuSccFCC', '2482642598');
insert into Customers (name, email, age, password, phone_no) values ('Wilone Emberson', 'wemberson1h@bing.com', 12, 'gx8frm12', '4012101033');
insert into Customers (name, email, age, password, phone_no) values ('Pansie Grewes', 'pgrewes1i@shutterfly.com', 78, 'ZHbMkuQC', '2937994753');
insert into Customers (name, email, age, password, phone_no) values ('Chlo Primarolo', 'cprimarolo1j@g.co', 27, 'TFIHB8k', '8735455534');
insert into Customers (name, email, age, password, phone_no) values ('Monique Pawlett', 'mpawlett1k@eventbrite.com', 42, 'eiYuUlP0Q', '4649186908');
insert into Customers (name, email, age, password, phone_no) values ('Hagen Carnie', 'hcarnie1l@sun.com', 87, 'QsVVeUag9p', '3727592354');
insert into Customers (name, email, age, password, phone_no) values ('Wyatan Pilsworth', 'wpilsworth1m@bluehost.com', 63, 'PdAsuh', '7766585240');
insert into Customers (name, email, age, password, phone_no) values ('Jenine Deakins', 'jdeakins1n@dailymotion.com', 96, '3ohsJa7uzHP', '2681714863');
insert into Customers (name, email, age, password, phone_no) values ('Ardyce Ettridge', 'aettridge1o@booking.com', 51, 'O3Lk3p0HOkSc', '3243516971');
insert into Customers (name, email, age, password, phone_no) values ('Isidoro Munday', 'imunday1p@cnn.com', 78, 'cvLKrDgyr1XA', '4762381622');
insert into Customers (name, email, age, password, phone_no) values ('Mattie Fison', 'mfison1q@purevolume.com', 49, 'mJHQbcOVSd2K', '4246231474');
insert into Customers (name, email, age, password, phone_no) values ('Lonee Borwick', 'lborwick1r@nytimes.com', 95, 'BH3g2BhKX', '2801412944');
insert into Customers (name, email, age, password, phone_no) values ('Lissa Flye', 'lflye1s@epa.gov', 68, 'BWmsfGbtQ9', '3235885116');
insert into Customers (name, email, age, password, phone_no) values ('Meyer Graber', 'mgraber1t@storify.com', 73, 'Mc2etj', '4249619823');
insert into Customers (name, email, age, password, phone_no) values ('Bobby January', 'bjanuary1u@imdb.com', 19, 'Cc9j58P', '1985231949');
insert into Customers (name, email, age, password, phone_no) values ('Antonin Colson', 'acolson1v@sina.com.cn', 34, 'sFskDv8MWn', '4579754339');
insert into Customers (name, email, age, password, phone_no) values ('Homer Boyen', 'hboyen1w@tripadvisor.com', 92, 'EMFuyLhLJeg', '9494836602');
insert into Customers (name, email, age, password, phone_no) values ('Darrelle Sykes', 'dsykes1x@barnesandnoble.com', 79, '01QbU4r5eONo', '6563744366');
insert into Customers (name, email, age, password, phone_no) values ('Marsiella Mogenot', 'mmogenot1y@storify.com', 38, 'bi4g6r6Ak', '3236849348');
insert into Customers (name, email, age, password, phone_no) values ('Petronilla Marchello', 'pmarchello1z@topsy.com', 91, 'hCr9moJym2H2', '9343193628');
insert into Customers (name, email, age, password, phone_no) values ('Jonas Proschke', 'jproschke20@reuters.com', 75, 'hSo3L1lLUp', '4897631566');
insert into Customers (name, email, age, password, phone_no) values ('Phillipp McGriele', 'pmcgriele21@npr.org', 88, 'pCrCjV2GJH', '5703579698');
insert into Customers (name, email, age, password, phone_no) values ('Aundrea Snodden', 'asnodden22@unicef.org', 55, 'GvMyt5l', '1785157175');
insert into Customers (name, email, age, password, phone_no) values ('Nora Impett', 'nimpett23@auda.org.au', 46, '6QtzuVdqjBf', '8268664341');
insert into Customers (name, email, age, password, phone_no) values ('Delmar MacGorrie', 'dmacgorrie24@acquirethisname.com', 31, 'a7HDIoJ06IL', '9647287239');
insert into Customers (name, email, age, password, phone_no) values ('Gwendolin Chapman', 'gchapman25@goo.ne.jp', 27, 't82Ye0kc', '4615552273');
insert into Customers (name, email, age, password, phone_no) values ('Rik Garrat', 'rgarrat26@sourceforge.net', 95, 'dKnkISZ1o', '2612005207');
insert into Customers (name, email, age, password, phone_no) values ('Lily Duer', 'lduer27@arstechnica.com', 7, '5FGPrdizEfo', '2289718200');
insert into Customers (name, email, age, password, phone_no) values ('Joyce Sinderson', 'jsinderson28@shinystat.com', 84, 'jrsoN6FNvu', '5744545470');
insert into Customers (name, email, age, password, phone_no) values ('Gael Hobble', 'ghobble29@i2i.jp', 73, 'fByDQU', '8479333796');
insert into Customers (name, email, age, password, phone_no) values ('Tate Glencrash', 'tglencrash2a@cdbaby.com', 65, 'G2jYqI1', '3316206378');
insert into Customers (name, email, age, password, phone_no) values ('Phillis Pulford', 'ppulford2b@microsoft.com', 93, 'cV5fxP', '1134247926');
insert into Customers (name, email, age, password, phone_no) values ('Benedick Paolicchi', 'bpaolicchi2c@addthis.com', 89, 'iFSlVYsSxR', '1157912018');
insert into Customers (name, email, age, password, phone_no) values ('Seth Whitters', 'swhitters2d@slashdot.org', 57, '7gyTeuj', '4091096593');
insert into Customers (name, email, age, password, phone_no) values ('Margo Gotcliffe', 'mgotcliffe2e@archive.org', 34, 'd4f7R2C', '8315198389');
insert into Customers (name, email, age, password, phone_no) values ('Shawn Larway', 'slarway2f@youku.com', 79, 'e4v3FHJi', '3884663256');
insert into Customers (name, email, age, password, phone_no) values ('Rodina Nore', 'rnore2g@google.pl', 74, 'bMyHQUOJ', '2532945102');
insert into Customers (name, email, age, password, phone_no) values ('Eimile Rishman', 'erishman2h@blog.com', 53, 'iXTg3mH', '4958374573');
insert into Customers (name, email, age, password, phone_no) values ('Carri Van Oort', 'cvan2i@elpais.com', 35, 'ivGD6IKAgPP', '3963551408');
insert into Customers (name, email, age, password, phone_no) values ('Stephie Sketchley', 'ssketchley2j@google.de', 13, 'zK0LbadW1C', '5135038799');
insert into Customers (name, email, age, password, phone_no) values ('Torrey Worsell', 'tworsell2k@nytimes.com', 21, 'UZ22wf3lO0j', '7459255111');
insert into Customers (name, email, age, password, phone_no) values ('Sayres Gouldthorpe', 'sgouldthorpe2l@ebay.co.uk', 91, 'EQGzAoo', '7174387875');
insert into Customers (name, email, age, password, phone_no) values ('Raoul Roughan', 'rroughan2m@ehow.com', 36, 'pYSvfKCNYxr', '8868600918');
insert into Customers (name, email, age, password, phone_no) values ('Liuka Vile', 'lvile2n@oaic.gov.au', 8, 'CwmeW50mJc', '3747286176');
insert into Customers (name, email, age, password, phone_no) values ('Sayres Ahrend', 'sahrend2o@shinystat.com', 97, 'Sdz9X0aZDRWn', '5913000891');
insert into Customers (name, email, age, password, phone_no) values ('Jesus Heers', 'jheers2p@admin.ch', 85, 'TnBUZ1ixY23n', '6147560921');
insert into Customers (name, email, age, password, phone_no) values ('Esteban Scotchford', 'escotchford2q@bigcartel.com', 58, 'vMfcdMWzIb6r', '4744813751');
insert into Customers (name, email, age, password, phone_no) values ('Amble Shere', 'ashere2r@lulu.com', 67, 'OzeEyaETvl8T', '7399892030');

create table Booking (
	id INT NOT NULL AUTO_INCREMENT,
	screening_id INT,
	no_of_seats INT,
	cust_id INT,
	PRIMARY KEY(id)

);

insert into Booking (screening_id, no_of_seats, cust_id) values (45, 15,1);

create table Staff (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	email VARCHAR(50),
	age INT,
	password VARCHAR(50),
	phone_no VARCHAR(50),
	PRIMARY KEY(id)
);

insert into Staff (name, email, age, password, phone_no) values ('Neely Kettlestring', 'nkettlestring0@europa.eu', 23, '4sdBOo3O', '3146162205');
insert into Staff (name, email, age, password, phone_no) values ('Eleanora Lammiman', 'elammiman1@devhub.com', 12, '2gvCLq66oX', '1509714908');
insert into Staff (name, email, age, password, phone_no) values ('Cornie Burges', 'cburges2@tiny.cc', 41, 'rfs8a2', '2149780222');
insert into Staff (name, email, age, password, phone_no) values ('Bee Playle', 'bplayle3@is.gd', 69, 'H130hKds', '8988844024');
insert into Staff (name, email, age, password, phone_no) values ('Ari Siggs', 'asiggs4@acquirethisname.com', 45, '5JmkLhiBGjw', '5674631432');

create table Screening (
	id INT NOT NULL AUTO_INCREMENT,
	price VARCHAR(50),
	date DATE,
	time VARCHAR(50),
	film_id INT,
	screen_id INT,
	totalSeatsBooked INT,
	PRIMARY KEY(id)
);

#need to fix the date va;ue it doesnt work maybe change to varchar

insert into Screening (price, date ,time, film_id, screen_id, totalSeatsBooked) values ('€44,32', '12/03/2023','15:00', 53, 1, 20);
insert into Screening (price, date, time, film_id, screen_id, totalSeatsBooked) values ('€18,11', '22/09/2023','15:00', 53, 1, 20);
insert into Screening (price, date, time, film_id, screen_id, totalSeatsBooked) values ('€28,61', '23/07/2023','15:00', 53, 1, 20);
insert into Screening (price, date, time, film_id, screen_id, totalSeatsBooked) values ('€6,25', '07/02/2024','15:00', 53, 1, 20);
insert into Screening (price, date, time, film_id, screen_id, totalSeatsBooked) values ('€72,05', '06/12/2023','15:00', 53, 1, 20);