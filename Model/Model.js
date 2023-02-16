var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cinema',
  port: 3305
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

// need to make a film details table that will hold a description of the moive etc 
// maybe we can move some details that we have in films in there 

exports.getMovieDetails = function(req, res, movie){
	connection.query("SELECT * FROM films, filmdetails WHERE films.id ='"+movie.id +"' AND filmdetails.id ='"+ movie.id +"'", function(error, rows, feilds){
		if(error){throw error};
		res.send(JSON.stringify(rows));
	});
}

	
