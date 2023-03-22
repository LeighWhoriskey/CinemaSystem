$("document").ready(function(){

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var filmId = urlParams.get('id');

  $.getJSON(`http://localhost:3000/movie-details/${filmId}/`,function(data){
        

    $.each(data, function(i, value){
      

      $("#movies").append(`<div class="images"style=" display:inline-block; padding:0px;  "><a href="http://localhost:3000/Movie-Detail.html?id=${value.id}"><img src='images/${value.id}.jpg'style='width: 230px; height: 300px; margin:0px; display:'></img></a></div>`);
      //$("#movies").append(`<div class="name"style=" font-size:25px;left:75px; top:-250px; position: relative; display:inline-block; ">${value.name}</div>`);
      if(value.age == "12A" )
      {
        $("#movies").append(`<div class="details"style="   width: 400px; height:150px;display:inline-block; margin-left:50px; "><h2>${value.name}</h3> 
            <svg height='60px'> <circle cx="40" cy="27" r="25" stroke="black" fill=" #ff4500"></circle> <text text-anchor="middle" x="40" y="30" fill="white">${value.age}</text> <text x="200" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg><p style=" width:600px;margin-top:20px; font-size:17px; margin-bottom:30px;">${value.description}</p></div>`);
      }
      if(value.age == "18" )
      {
        
          $("#movies").append(`<div class="details"style="    width: 400px; height:150px;display:inline-block; margin-left:50px;"><h2>${value.name}</h3> 
            <svg height='60px'> <circle cx="40" cy="27" r="25" stroke="black" fill="red"></circle> <text text-anchor="middle" x="40" y="30" fill="white">${value.age}</text> <text x="200" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg><p style=" width:600px;margin-top:20px; font-size:17px; margin-bottom:30px;">${value.description}</p></div>`);
      }
      if(value.age == "PG" )
      {
          $("#movies").append(`<div class="details"style="width: 400px; height:150px;display:inline-block; margin-left:50px;"><h2>${value.name}</h3> 
            <svg height='60px'> <circle cx="40" cy="27" r="25" stroke="black" fill="  #008000"></circle> <text text-anchor="middle" x="40" y="30" fill="white">${value.age}</text> <text x="200" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg><p style=" width:600px;margin-top:20px; font-size:17px; margin-bottom:30px;">${value.description}</p></div>`);
      }
      if(value.age == "U" )
      {
        $("#movies").append(`<div class="details"style=" width: 400px; height:150px;display:inline-block; margin-left:50px;  "><h2>${value.name}</h3> 
          <svg height='60px'> <circle cx="40" cy="27" r="25" stroke="black" fill="#0000ff"></circle> <text text-anchor="middle" x="40" y="30" fill="white">${value.age}</text> <text x="200" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg><p style=" width:600px;margin-top:20px; font-size:17px; margin-bottom:30px;">${value.description}</p></div>`);
      }
        
        
      $("#movies").append(`<div class="video"style="   margin-left:900px; margin-top:-250px;margin-bottom:80px; "><iframe width="500" height="300" src="https://www.youtube.com/embed/${value.trailer_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`);
                   
    });

  });

  $.ajax({
    url: "/ticketsBooked",
    cache: false,
    dataType: "json",
    type: "POST",
    data:{
      FilmId: filmId
    },
    success: function(res){
        
        $.each(res,function(value){
          console.log(value.date);
          console.log(value.time);
        })
        $("#movie-times").append("<p>")
    }
  });
});