$("document").ready(function(){

    // just some placeholder code for now, we should get images for all the movies 
    // and make it so when clicked they can redirect to a details page for the movie or something

    $.getJSON("http://localhost:3000/movies", function(data) {
        $.each(data, function(i, value) {
          // Create a movie card with the image and text
          var movieCard = $("<div class='movie-card'></div>");
          var movieImage = $("<img src='images/" + value.id + ".jpg' alt='" + value.name + "'>");
          var movieTitle = $("<h3>" + value.name + "</h3>");
          var movieDuration = $("<p>Runtime: " + value.duration + " mins</p>");
          // Add the image and text to the movie card
          movieCard.append(movieImage, movieTitle, movieDuration);
          // Add the movie card to the movies container
          $("#films").append(movieCard);
            
					
        });
        
    });

    
});