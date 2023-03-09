var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cinema'
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to Cinema Database`);
});


exports.getMovies = function(req,res){

	connection.query("SELECT * FROM films", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
}
exports.getMoviesToday = function(req,res){
	var d = new Date();
	var todayDate = d.getFullYear()+ "-" + (d.getMonth()+1) + "-" + d.getDate();

	connection.query(`SELECT films.*, screening.date as 'Date', screening.time as 'Time',screening.screen_id as 'Screen_id' FROM films, screening where films.id = screening.film_id order by Date`, function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
}

exports.getMovieDetails = function(req, res, movie){
	connection.query("SELECT * FROM films  WHERE films.id ='"+movie.id+"'", function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));
	});
}


exports.Booking = function(req, res, data){
	if(data.operation == "CREATE"){
		connection.query("INSERT INTO booking (screening_id, no_of_seats,cust_id) VALUES(" + data.ScreenID +", " + data.Seats +", " + data.Customer+");",function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});
	}
	else{
		connection.query("UPDATE booking SET screening_id =" +data.ScreenID  + ",no_of_seats =" +data.Seats +" WHERE ID =" + data.BookingID,function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});

	}
}

exports.Customer = function(req, res, data){
	if(data.operation == "CREATE"){
		connection.query("INSERT INTO customers (name, email, age, password, phone_no) VALUES('" + data.name +"', '" + data.email +"', '" + data.age +"', '" + data.password +"', '" + data.phone_no +"');",function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});
	}
	else{
		connection.query("UPDATE customers SET name =" +data.name  + ",email =" +data.email + ",age =" +data.age + ",password =" + data.password + ",phone_no =" +data.phone_no + " WHERE ID =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});

	}
}

exports.Film = function(req, res, data){
	if(data.operation == "CREATE"){

		connection.query("INSERT INTO films (name, director, duration, trailer_url, description, age) VALUES('" + data.name +"', '" + data.director +"', '" + data.duration +"', '" + data.trailer +"', '" + data.desc + "','" + data.age  +"');",function(error, rows, feilds){

			if(error){throw error};
			res.send("200");
		});
	}
	else{
		connection.query("UPDATE films SET name =" +data.name  + ",director =" +data.director + ",age =" +data.age + ",duration =" + data.duration + ",trailer_url ='" +data.trailer +"',description =" +data.desc + " WHERE ID =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});

	}
}

exports.Screening = function(req, res, data){
	if(data.operation == "CREATE"){
		connection.query("INSERT INTO screening (price, date, time, film_id, screen_id, totalSeatsBooked) VALUES('" + data.price +"', '" + data.date +"', '" + data.time +"', '" + data.film +"', '" + data.screen + "','" + data.seats  +"');",function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});
	}
	else{
		connection.query("UPDATE screening SET price =" +data.price  + ",date =" +data.date + ",time =" +data.time + ",film_id =" + data.film + ",screen_id =" +data.screen +",totalSeatsBooked =" +data.seats + " WHERE ID =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});

	}
}

exports.Screens = function(req, res, data){
	if(data.operation == "CREATE"){
		connection.query("INSERT INTO screens (capacity, open) VALUES('" + data.capacity +"', '" + data.open +"');",function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});
	}
	else{
		connection.query("UPDATE screens SET capacity =" +data.capacity  + ",open =" +data.open+ " WHERE ID =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});

	}
}

exports.Staff = function(req, res, data){
	if(data.operation == "CREATE"){
		connection.query("INSERT INTO staff (name, email, age, password, phone_no) VALUES('" + data.name +"', '" + data.email +"', '"+data.age +"', '" +data.pass + "', '" +data.phone +"');",function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});
	}
	else{
		connection.query("UPDATE staff SET name =" +data.name  + ",email =" +data.email +  ", age= "+data.age +", password="+data.pass +", phone_no =" +data.phone + " WHERE ID =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});

	}
}

exports.getBooking = function(req,res,data){
	connection.query("SELECT * FROM booking WHERE id =" + data.id ,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	
	});
}
exports.getCustomer = function(req,res,data){
	connection.query("SELECT * FROM customers WHERE id =" + data.id ,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	
	});
}

exports.getFilms = function(req,res,data){
	connection.query("SELECT * FROM films WHERE id =" + data.id ,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	 
	});
}

exports.getScreenings= function(req,res,data){
	connection.query("SELECT * FROM screening WHERE id =" + data.id ,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	
	});
}

exports.getScreens= function(req,res,data){
	connection.query("SELECT * FROM screens WHERE id =" + data.id ,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	
	});
}

exports.getStaff= function(req,res,data){
	connection.query("SELECT * FROM staff WHERE id =" + data.id ,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	
	});
}


exports.Login = function(req,res,data){
	console.log(data)
	if(data.tmpEmail =="decade.ie"){
		connection.query("SELECT * FROM staff WHERE email = '" + data.Email +"' AND password = '" + data.Password+"'",function(error, rows, feilds){
			if(error){throw error};
			if(rows != 0){
				var login = {"value": "True", "member":"staff"};
				res.send(JSON.stringify(login));
			}else{
				var login = {"value": "False", "member":"staff"};
				res.send(JSON.stringify(login));
			}
	
		});
	}
	else{
		connection.query("SELECT * FROM customers WHERE email = '" + data.Email +"' AND password = '" + data.Password+"'",function(error, rows, feilds){
			if(error){throw error};
			if(rows != 0){
				var login = {"value": "True", "member":"customer"};
				res.send(JSON.stringify(login));
			}else{
				var login = {"value": "False", "member":"customer"};
				res.send(JSON.stringify(login));
			}
	
		});
	}
}	

exports.Delete = function(req,res,data){
	connection.query("DELETE FROM "+data.Table +" WHERE id = " + data.ID,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	
	});
}

exports.GetAll = function(req,res,data){
	connection.query("SELECT * FROM "+data.id ,function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));	
	});
}
exports.getMoviesToday = function(req,res){
	var d = new Date();
	var todayDate = d.getFullYear()+ "-" + (d.getMonth()+1) + "-" + d.getDate();

	connection.query(`SELECT films.*, screening.date as 'Date', screening.time as 'Time',screening.screen_id as 'Screen_id' FROM films, screening where films.id = screening.film_id order by Date, Time`, function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
}