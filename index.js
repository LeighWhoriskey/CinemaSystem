var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var model = require('./model/model.js');
const { response } = require("express");

var app = express();
  app.use(cors());

  app.use(express.static('public'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));




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

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});