$("document").ready(function() {
  $.getJSON("http://localhost:3000/movies", function(data) {
    if (data.length > 0) {
      $.each(data, function(i, value) {
        var movieCard = $("<div class='movie-card'></div>");
        var movieImageLink = $("<a href='movie-detail.html?id=" + value.id + "'></a>");
        var movieImage = $("<img src='images/" + value.id + ".jpg' alt='" + value.name + "'>");
        movieImageLink.append(movieImage);
        movieCard.append(movieImageLink);

        
        // Check if the movie is released
        if (value.released == 1) {
          $("#released-films").append(movieCard);
        } else if (value.released == 0) {
          $("#upcoming-films").append(movieCard);
        } else {
          console.log("Invalid value for 'released' property");
        }

        if (value.oscar != null && value.oscar.includes('picture')) {
          $("#picture-films").append(movieCard);
        }
        if (value.oscar != null && value.oscar.includes('actor')) {
          $("#actor-films").append(movieCard);
        }
        if (value.oscar != null && value.oscar.includes('animated')) {
          $("#animated-films").append(movieCard);
        }
        if (value.oscar != null && value.oscar.includes('cinematography')) {
          $("#cinematography-films").append(movieCard);
        }
        if (value.oscar != null && value.oscar.includes('director')) {
          $("#director-films").append(movieCard);
        }

        if (value.oscar != null && value.oscar.includes('(W)')) {
          movieCard.addClass('gold-background');
        }
      });
    } else {
      alert("No movies found in data");
    }
  }).fail(function() {
    alert("Error retrieving data from server");
  });
});