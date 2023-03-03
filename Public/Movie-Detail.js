$("document").ready(function(){

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var filmId = urlParams.get('id');
  console.log(filmId);
  $.getJSON(`http://localhost:3000/movie-details/${filmId}/`,function(data){
    
       
    $.each(data, function(i, value){
      var age = value.age;
      var ageColor;

      switch(age) {
        case "12A":
          ageColor = "#ff4500";
          break;
        case "18":
          ageColor = "red";
          break;
        case "PG":
          ageColor = "#008000";
          break;
        case "U":
          ageColor = "#0000ff";
          break;
        default:
          ageColor = "#000000";
      }

      $("#movies").append(`<div class="images"style=" display:inline-block; padding:0px; margin-top: 20px; "><a href="http://localhost:3000/Movie-Detail.html?id=${value.id}"><img src='images/${value.id}.jpg'style='width: 230px; height: 300px; margin:0px; display:'></img></a></div>`);

      $("#movies").append(`<div class="details"style="width: 400px; height:150px;display:inline-block; margin-left:50px;"><h2>${value.name}</h3> 
      <svg height='60px'> <circle cx="40" cy="27" r="25" stroke="black" fill="${ageColor}"></circle> <text text-anchor="middle" x="40" y="30" fill="white">${age}</text> <text x="200" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg><p style=" width:560px;margin-top:20px; font-size:17px; margin-bottom:30px;">${value.description}</p></div>`);

      $("#movies").append(`<div class="video"style="   margin-left:850px; margin-top:-250px;margin-bottom:80px; "><iframe width="500" height="300" src="https://www.youtube.com/embed/${value.trailer_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`);
                       
    });

  });
  
});
