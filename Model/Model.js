var mysql = require('mysql');

//change databas to our own and port number depending on our own system

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'netflix',
  //change port to 3306 if using default settings
  port: 3305

});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database netflix`);
});


exports.getMovies = function(req,res){

	connection.query("SELECT * FROM movies", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}

exports.getGenres = function(req,res){

	connection.query("SELECT * FROM genres", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}

exports.getGenres = function(req,res){

	connection.query("SELECT * FROM genres", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}
