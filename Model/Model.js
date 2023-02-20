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

exports.getMovieDetails = function(req, res, movie){
	connection.query("SELECT * FROM films, filmdetails WHERE films.id ='"+movie.id +"' AND filmdetails.id ='"+ movie.id +"'", function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));
	});
}


exports.Booking = function(req, res, data){
	if(data.operation == "CREATE"){
		connection.query("INSERT INTO booking (screen_id, no_of_seats) VALUES(" + data.ScreenID +", " + data.Seats +");",function(error, rows, feilds){
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
		connection.query("INSERT INTO customers (name, email, age, password, phone_no) VALUES(" + data.name +", " + data.email +", " + data.age +", " + data.password +", " + data.phone_no +");",function(error, rows, feilds){
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
		connection.query("INSERT INTO films (name, director, duration, trailer_url, description, age) VALUES(" + data.name +", " + data.director +", " + data.duration +", " + data.trailer +", " + data.desc + "," + data.age  +");",function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});
	}
	else{
		connection.query("UPDATE films SET name =" +data.name  + ",director =" +data.director + ",age =" +data.age + ",duration =" + data.duration + ",trailer_url =" +data.trailer +",description =" +data.desc + " WHERE ID =" + data.id ,function(error, rows, feilds){
			if(error){throw error};
			res.send("200");
		});

	}
}

exports.Screening = function(req, res, data){
	if(data.operation == "CREATE"){
		connection.query("INSERT INTO screening (price, date, time, film_id, screen_id, totalSeatsBooked) VALUES(" + data.price +", " + data.date +", " + data.time +", " + data.film +", " + data.screen + "," + data.seats  +");",function(error, rows, feilds){
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
		connection.query("INSERT INTO screens (capacity, open) VALUES(" + data.capacity +", " + data.open +");",function(error, rows, feilds){
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
		connection.query("INSERT INTO staff (name, email, age, password, phone_no) VALUES(" + data.name +", " + data.email +", "+data.age +", " +data.pass + ", " +data.phone +");",function(error, rows, feilds){
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



	
