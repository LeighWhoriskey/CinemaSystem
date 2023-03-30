var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cinema'
});

	connection.connect(function(err){
		try{
		if(err) throw err;
		console.log(`Sucessfully connected to Cinema Database`);
		}
		catch(err){
			console.log(err);
		}
	});


	exports.getMovies = function(req,res){
		try{
		connection.query("SELECT * FROM films", function(err, rows, fields) {
		if (err) throw err;

		res.send(JSON.stringify(rows));
		});
			}
		catch(err)
		{
			console.log(err);
		}
	}
	exports.getMoviesToday = function(req,res){
		try{
		var d = new Date();
		var todayDate = d.getFullYear()+ "-" + (d.getMonth()+1) + "-" + d.getDate();

		connection.query(`SELECT films.*, screening.date as 'Date', screening.time as 'Time',screening.screen_id as 'Screen_id' FROM films, screening where films.id = screening.film_id order by Date`, function(err, rows, fields) {
		if (err) throw err;

		res.send(JSON.stringify(rows));
		
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.getMovieDetails = function(req, res, movie){
		try{
		connection.query("SELECT * FROM films  WHERE films.id ='"+movie.id+"'", function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}


	exports.CheckBookedTickets = function(req, res, tickets){
		try{
		connection.query("SELECT screening.totalSeatsBooked, screens.capacity FROM screening, screens  WHERE screens.id = screening.screen_id AND screening.film_id ='"+tickets.FilmId+"' AND screening.id='"+ tickets.ScreeningId+"' AND screens.id='"+tickets.ScreenId+"'", function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}


	exports.Booking = function(req, res, data){
		try{
		if(data.operation == "CREATE"){
			connection.query("INSERT INTO booking (screening_id, no_of_seats,cust_id) VALUES(" + data.ScreenID +", " + data.Seats +", " + data.Customer+");",function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});
		}
		else{
			connection.query("UPDATE booking SET screening_id =" +data.ScreenID  + ",no_of_seats =" +data.Seats +",cust_id =" +data.CustID +" WHERE ID =" + data.BookingID,function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});

		}
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.Customer = function(req, res, data){
		try{
		if(data.operation == "CREATE"){
			connection.query("INSERT INTO customers (name, email, password, phone_no) VALUES('" + data.name +"', '" + data.email +"', '" + data.password +"', '" + data.phone_no +"');",function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});
		}
		else{
			connection.query("UPDATE customers SET name ='" +data.name  + "',email ='" +data.email + "',age ='" +data.age + "',password ='" + data.password + "',phone_no ='" +data.phone_no + "' WHERE ID =" + data.id ,function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});

		}
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.Film = function(req, res, data){
		try{
		if(data.operation == "CREATE"){

			connection.query("INSERT INTO films (name, director, duration, trailer_url, description, age, released) VALUES('" + data.name +"', '" + data.director +"', '" + data.duration +"', '" + data.trailer +"', '" + data.desc + "','" + data.age  +"',  '" + data.released + "');",function(error, rows, feilds){

				if(error){throw error};
				res.send("200");
			});
		}
		else{
			connection.query("UPDATE films SET name ='" +data.name  + "',director ='" +data.director + "',age ='" +data.age + "',duration ='" + data.duration + "',trailer_url ='" +data.trailer +"',description ='" +data.desc + "' WHERE ID =" + data.id ,function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});

		}
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.Screening = function(req, res, data){
		try{
		if(data.operation == "CREATE"){
			connection.query("INSERT INTO screening (price, date, time, film_id, screen_id, totalSeatsBooked) VALUES('" + data.price +"', '" + data.date +"', '" + data.time +"', '" + data.film +"', '" + data.screen + "','" + data.seats  +"');",function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});
		}
		else{
			connection.query("UPDATE screening SET price ='" +data.price  + "',date ='" +data.date + "',time ='" +data.time + "',film_id ='" + data.film + "',screen_id ='" +data.screen +"',totalSeatsBooked ='" +data.seats + "' WHERE ID =" + data.id ,function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});

		}
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.Screens = function(req, res, data){
		try{
		if(data.operation == "CREATE"){
			connection.query("INSERT INTO screens (capacity, open) VALUES('" + data.capacity +"', '" + data.open +"');",function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});
		}
		else{
			connection.query("UPDATE screens SET capacity ='" +data.capacity  + "',open ='" +data.open+ "' WHERE ID =" + data.id ,function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});

		}
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.Staff = function(req, res, data){
		try{
		console.log(data);
		if(data.operation == "CREATE"){
			connection.query("INSERT INTO staff (name, email, password, phone_no) VALUES('" + data.name +"', '" + data.email +"', '" +data.pass + "', '" +data.phone +"');",function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});
		}
		else{
			connection.query("UPDATE staff SET name ='" +data.name  + "',email ='" +data.email + ", password='"+data.password +"', phone_no ='" +data.phone_no + "' WHERE ID =" + data.id ,function(error, rows, feilds){
				if(error){throw error};
				res.send("200");
			});

		}
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.getBooking = function(req,res,data){
		try{
		connection.query("SELECT * FROM booking WHERE id =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.getBookingCustom = function(req,res,data){
		try{
		connection.query("SELECT b.id, b.screening_id, b.no_of_seats, c.name as'custname', f.name as 'filmname', f.duration, screens.id as 'ScreenId' FROM booking b, customers c, screening s, films f, screens WHERE b.cust_id = c.id AND s.id = b.screening_id AND s.film_id = f.id AND s.screen_id = screens.id AND b.cust_id =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
		}
	exports.getCustomer = function(req,res,data){
		try{
		connection.query("SELECT * FROM customers WHERE id =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
		}

	exports.getFilms = function(req,res,data){
		try{
		connection.query("SELECT * FROM films WHERE id =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	 
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}


	exports.getScreenings = function(req,res,data){
		try{
		connection.query("SELECT * FROM screening WHERE id =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.GetFilmTimes = function(req,res,data){
		try{
		connection.query("SELECT date, time, id, screen_id FROM screening WHERE film_id =" + data.FilmId ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.getScreens = function(req,res,data){
		try{
		connection.query("SELECT * FROM screens WHERE id =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.getStaff = function(req,res,data){
		try{
		connection.query("SELECT * FROM staff WHERE id =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}


	exports.Login = function(req,res,data){
		try{
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
				var id = 0;
				if(rows != 0){

					for(const element of rows){
						id = element.id;
					}

					var login = {"value": "True", "member":"customer", "ID": id};
					res.send(JSON.stringify(login));
				}else{
					var login = {"value": "False", "member":"customer", "cust_id": null};
					res.send(JSON.stringify(login));
				}
		
			});
		}
		}
		catch(err)
		{
			console.log(err);
		}
	}	

	exports.Delete = function(req,res,data){
		try{
		console.log(data);
		connection.query("DELETE FROM "+data.Table +" WHERE id = " + data.ID,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	exports.GetAll = function(req,res,data){
		try{
		connection.query("SELECT * FROM "+data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send(JSON.stringify(rows));	
		});
		}
		catch(err)
		{
			console.log(err);
		}
	}
	exports.getMoviesToday = function(req,res){
		try{
		
		connection.query(`SELECT DISTINCT date FROM screening order by date, Time`, function(err, rows, fields) {
		if (err) throw err;


exports.Delete = function(req,res,data){
	console.log(data);
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
	
	connection.query("SELECT DISTINCT date FROM screening order by date, Time", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});

}
exports.getFilmsDate = function(req, res, data) {
	connection.query("SELECT films.*, screening.date as 'Date', screening.time as 'Time',screening.screen_id as 'Screen_id' FROM films, screening WHERE films.id = screening.film_id AND Date = '${data.date}' ORDER BY Date, Time",
	  function(error, rows, fields) {
		if (error) {
		  throw error;
		}
		res.send(JSON.stringify(rows));
	  }
	);
}

exports.makeBooking = function(req,res,data){
	connection.query("INSERT INTO booking(screening_id,no_of_seats,cust_id) VALUES('"+data.ScreenId +"','"+data.Seats +"','"+data.CustID+"')",function(error, rows, fields) {
			if (error) {
				throw error;
			}
		}
	)

	connection.query("UPDATE screening SET totalSeatsBooked="+data.totalSeats +" WHERE id="+data.screeningId,function(error, rows, fields) {
			if (error) {
				throw error;
			}
		}
	)
	var success = {"value": "Success"};
	res.send(JSON.stringify(success));

	

}
