$.getJSON("http://localhost:3000/movies", function(data) {
    $.each(data, function(i, value) {
      // Create a movie card with the image and text
      var movieCard = $("<div class='movie-card'></div>");
      var movieImageLink = $("<a href='movie-detail.html' target='_blank'></a>");
      var movieImage = $("<img src='images/" + value.id + ".jpg' alt='" + value.name + "'>");
      movieImageLink.append(movieImage);
      var movieTitle = $("<h3>" + value.name + "</h3>");
      var movieDuration = $("<p>Runtime: " + value.duration + " mins</p>");
      // Add the image and text to the movie card
      movieCard.append(movieImageLink, movieTitle, movieDuration);
      // Add the movie card to the movies container
      $("#films").append(movieCard);

      
        
				
    });
    
});
