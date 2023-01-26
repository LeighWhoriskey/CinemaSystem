var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var model = require('./model/model.js');

var app = express();
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// -----------------------------------------------------------------------------------------------

app.get("/movies", function(req,res){
	model.getMovies(req,res);
});

app.get("/genres",function(req,res){
  model.getGenres(req,res);
})

// -----------------------------------------------------------------------------------------------

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});