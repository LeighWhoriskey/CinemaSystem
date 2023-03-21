$("document").ready(function(){
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var filmId = urlParams.get('id');
  
  if (!filmId) {
    console.error("No film ID provided in URL");
    alert("No film ID provided in URL");
    return;
  }

  $.getJSON(`http://localhost:3000/movie-details/${filmId}/`, function(data){
    if (!data) {
      console.error(`No movie details found for ID ${filmId}`);
      alert(`No movie details found for ID ${filmId}`);
      return;
    }

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

      $("#movies").append(`<div class="movie-details" style="display: flex; margin-top: 20px;">
        <div class="movie-poster">
          <a href="http://localhost:3000/Movie-Detail.html?id=${value.id}">
            <img src='images/${value.id}.jpg' style='width: 230px; height: 300px; margin:0px; display:'></img>
          </a>
        </div>
        <div class="movie-info" style="margin-left: 50px;">
          <h2 style="margin-top: 0;">${value.name}</h2>
          <div class="age-rating" style="display: flex; align-items: center; margin-bottom: 10px;">
            <svg height='60px' width ='100%' style="margin-right: 10px;">
              <circle cx="275" cy="27" r="25" stroke="black" fill="${ageColor}"></circle>
              <text text-anchor="middle" x="275" y="33" fill="white">${age}</text>
            </svg>
          </div>
          <p style="font-size: 20px; margin: 0;">${value.duration} hours</p>

          <p style="width: 560px; margin-top: 20px; font-size: 17px; margin-bottom: 30px;">${value.description}</p>
        </div>
        <div class="movie-trailer" style="margin-left: auto;">
          <iframe width="500" height="300" src="https://www.youtube.com/embed/${value.trailer_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>`);
    });
    
    $.getJSON(`http://localhost:3000/movie-details/${filmId}/`, function(data){
      if (!data) {
        console.error(`No movie details found for ID ${filmId}`);
        return;
      }

      $.each(data, function(i, screening) {
        if (screening.film_ID == id) {
          $("#screenings").append(`<p>Date: ${screening.date}, Time: ${screening.time}</p>`);
        }
      });
    });
  });
});
