$("document").ready(function(){
<<<<<<< HEAD
=======
  var colour;
>>>>>>> main

  $.getJSON("http://localhost:3000/films/today", function(data){
    $.each(data, function(i, value){
      // Check if div with the same id already exists
      var existingDiv = $('#' + value.id);
      if (existingDiv.length) {
        // Append new time value to existing div
        existingDiv.find('.time').append('<div>'+"Screen "+value.Screen_id+ " " + value.Time + '</div>');
      } else {
        // Create new div for movie details
        var screenTime = "Screen "+value.Screen_id+ " " + value.Time;
        $("#movies").append("<hr style='border: 2px solid black'>");
        $("#movies").append(`<div id="${value.id}" class="movie" style="display:inline-block;">`);
        $("#" + value.id).append(`<div class="images" style="display:inline-block; padding:0px; margin-top: 20px;"><a href="http://localhost:3000/Movie-Detail.html?id=${value.id}"><img src='images/${value.id}.jpg' style='width: 230px; height: 300px; margin:0px; display:'></a></div>`);
        $("#" + value.id).append(`<div class="details" style="width: 200px; height:150px;display:inline-block; margin-left:20px;"><h2>${value.name}</h2>
        
        <svg height="200px" width="200px"> <circle cx="25" cy="27" r="25" stroke="black" fill="${getAgeColor(value.age)}"></circle> <text text-anchor="middle" x="25" y="30" fill="white">${value.age}</text> <text x="100" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg></div>`);
        $("#" + value.id).append(`<div class="time" style=" padding:0px; margin-left: 600px; "><div>${screenTime}</div></div>`);
      }
    });
  });
});

function getAgeColor(age) {
  switch(age) {
    case '12A':
      return '#ff4500';
    case '18':
      return 'red';
    case 'PG':
      return '#008000';
    case 'U':
      return '#0000ff';
    default:
      return 'black';
  }
}
<<<<<<< HEAD

=======
>>>>>>> main
