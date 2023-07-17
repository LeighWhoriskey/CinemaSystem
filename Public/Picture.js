$("document").ready(function() {
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
  
        // Check if the movie's "oscar" column contains the word "picture"
        if (value.oscar.includes("picture")) {
          var pictureFilmCard = $("<div class='movie-card'></div>");
          var pictureFilmLink = $("<a href='movie-detail.html?id=" + value.id + "'></a>");
          var pictureFilmImage = $("<img src='images/" + value.id + ".jpg' alt='" + value.name + "'>");
          pictureFilmLink.append(pictureFilmImage);
          pictureFilmCard.append(pictureFilmLink);
          $("#oscar-films").append(pictureFilmCard);
        }
      });
  
      $("#released-films, #upcoming-films, #oscar-films").css({
        "display": "flex",
        "flex-wrap": "wrap",
        "justify-content": "space-around"
      });
    });
  });
  