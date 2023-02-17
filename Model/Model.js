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



	
