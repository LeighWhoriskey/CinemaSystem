$("document").ready(function(){
  $.getJSON("http://localhost:3000/movies", function(data) {
  $.each(data, function(i, value) {
  var movieCard = $("<div class='movie-card'></div>");
  var movieImageLink = $("<a href='movie-detail.html?id=" + value.id + "'></a>");
  var movieImage = $("<img src='images/" + value.id + ".jpg' alt='" + value.name + "'>");
  movieImageLink.append(movieImage);
  movieCard.append(movieImageLink);

      // Check if the movie is released
      if (value.released) {
        $("#released-films").append(movieCard);
      } else {
        $("#upcoming-films").append(movieCard);
      }
    });

    $("#released-films, #upcoming-films").css({
      "display": "flex",
      "flex-wrap": "wrap",
      "justify-content": "space-around"
    });
  });
});
