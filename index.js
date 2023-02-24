var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var model = require('./model/model.js');
const { response } = require("express");

var app = express();
  app.use(cors());

  app.use(express.static('public'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));


  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + '/public/Home.html'));
  });

  app.get("/movies", function(req,res){
    model.getMovies(req,res);
  });

  app.get("/movie-details/:id?",function(req,res){
    model.getMovieDetails(req,res ,{id : req.params.id});
  })

  app.post("/Booking",function(req,res){

    var data = req.body;
    model.Booking(req, res, data);
  })

  app.post("/Customer",function(req,res){

    var data = req.body;
    model.Customer(req, res, data);
  })

  app.post("/Film",function(req,res){

    var data = req.body;
    model.Film(req, res, data);
  })

  app.post("/Staff",function(req,res){

    var data = req.body;
    model.Staff(req, res, data);
  })

  app.post("/Screens",function(req,res){

    var data = req.body;
    model.Screens(req, res, data);
  })

  app.post("/Screening",function(req,res){

    var data = req.body;
    model.Screening(req, res, data);
  })

  app.get("/getBooking/:id?",function(req,res){
    console.log({id : req.params.id});
    model.getBooking(req,res ,{id : req.params.id});
  })

  app.get("/getCustomers/:id?",function(req,res){
    console.log({id : req.params.id});
    model.getCustomer(req,res ,{id : req.params.id});
  })

  app.get("/getFilms/:id?",function(req,res){
    console.log({id : req.params.id});
    model.getFilms(req,res ,{id : req.params.id});
  })

  app.get("/getScreenings/:id?",function(req,res){
    console.log({id : req.params.id});
    model.getScreenings(req,res ,{id : req.params.id});
  })

  app.get("/getScreens/:id?",function(req,res){
    console.log({id : req.params.id});
    model.getScreens(req,res ,{id : req.params.id});
  })

  app.get("/getStaff/:id?",function(req,res){
    console.log({id : req.params.id});
    model.getStaff(req,res ,{id : req.params.id});
  })

  app.get("/login",function(req,res){
    var data = req.body;
    model.Login(req, res, data);
  })

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});