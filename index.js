var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var multer = require("multer"); // Require multer for handling file uploads
var fs = require("fs"); // Require fs to write uploaded files to the server

var model = require('./model/model.js');
const { response } = require("express");

var app = express();

app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set up multer for handling file uploads
var upload = multer({ dest: "public/images/profile" });

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

app.post("/Customer", function(req, res) {
// Upload the profile picture to the server and update the customer information
upload.single("profilePicture")(req, res, function(err) {
if (err) {
console.log(err);
return res.status(500).json({ message: "Error uploading file" });
}

var data = req.body;
var profilePicturePath = null;

if (req.file) {
  profilePicturePath = req.file.path;
}

model.Customer(req, res, data, profilePicturePath);
});
});

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
model.getBooking(req,res ,{id : req.params.id});
})

app.get("/getBookingCustom/:id?",function(req,res){
model.getBookingCustom(req,res ,{id : req.params.id});
})

app.post("/checkForOverBooking",function(req,res){
  var data = req.body;
  model.checkOverBooking(req, res, data);
});


app.get("/getCustomer/:id?",function(req,res){
model.getCustomer(req,res ,{id : req.params.id});
})

app.post("/getCustomerbyName",function(req,res){
  var data = req.body;
  model.getCusomerbyName(req, res, data);
});

app.get("/getFilms/:id?",function(req,res){
model.getFilms(req,res ,{id : req.params.id});
})


app.get("/getScreenings/:id?",function(req,res){
model.getScreenings(req,res ,{id : req.params.id});
})

app.post("/checkForOverScreening",function(req,res){
  var data = req.body;
  model.checkOverScreening(req, res, data);
});

app.get("/getScreens/:id?",function(req,res){
model.getScreens(req,res ,{id : req.params.id});
})

app.get("/getStaff/:id?",function(req,res){
model.getStaff(req,res ,{id : req.params.id});
})

app.post("/login",function(req,res){
var data = req.body;
model.Login(req, res, data);
})

app.get("/films/today",function(req,res){
model.getMoviesToday(req,res);
})


app.post("/getFilmTimes", function(req, res){

  var data = req.body;
  model.GetFilmTimes(req,res, data)
});


app.get("/getFilmsDate/:date?", function(req, res) {
  model.getFilmsDate(req, res, { date: req.params.date });
});

app.get("/getFilms2", function(req, res) {
  model.getFilms2(req, res);
});

app.post("/delete",function(req,res){
var data = req.body;
model.Delete(req, res, data);
})

app.post("/ticketsBooked",function(req,res){
  var data = req.body;
  model.CheckBookedTickets(req, res, data);
})

app.get("/getData/:id?",function(req,res){
model.GetAll(req, res, {id : req.params.id});
})

app.post("/makeBooking",function(req,res){
  var data = req.body;
  model.makeBooking(req, res, data);
})


app.post("/updateCustomer",function(req,res){
  var data = req.body;
  console.log(data);
  model.updateCustomer(req, res, data);
})



var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});