$("document").ready(function(){

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
$("#movies").append(`<div class="movie-container"><div class="images" ><a href="http://localhost:3000/Movie-Detail.html?id=${value.id}"><img src='images/${value.id}.jpg'style="width:200px; height:300px;"></a></div>
                      <div class="details" ><h2>${value.name}</h2>
                      <svg height="100px" width="200px"> <circle cx="30" cy="27" r="25" stroke="black" fill="${getAgeColor(value.age)}"></circle> <text text-anchor="middle" x="30" y="30" fill="white">${value.age}</text> <text x="100" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg></div>
                      <div class="screens"id="${value.id}" ><div class="time" id="time-${value.id}" style=""><div>${screenTime}</div></div></div>
                          </div>`);
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

