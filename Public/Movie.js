$("document").ready(function(){
  var colour;
      
      $.getJSON("http://localhost:3000/movies",function(data){
        
        
         
          $.each(data, function(i, value){
            $("#movies").append("<hr style='border: 2px solid black'>");
             
              $("#movies").append(`<div class="images"style=" display:inline-block; padding:0px; margin-top: 20px; "><a href="http://localhost:3000/Movie-Detail.html?id=${value.id}"><img src='images/${value.id}.jpg'style='width: 230px; height: 300px; margin:0px; display:'></img></a></div>`);
              //$("#movies").append(`<div class="name"style=" font-size:25px;left:75px; top:-250px; position: relative; display:inline-block; ">${value.name}</div>`);
              if(value.age == "12A" )
              {
              $("#movies").append(`<div class="details"style="     width: 400px; height:150px;display:inline-block; margin-left:50px; "><h2>${value.name}</h3> 
              <svg> <circle cx="25" cy="27" r="25" stroke="black" fill="#ff4500"></circle> <text text-anchor="middle" x="25" y="30" fill="white">${value.age}</text> <text x="100" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg></div>`);
              }
              if(value.age == "18" )
              {
                $("#movies").append(`<div class="details"style=" width: 400px; height:150px;display:inline-block; margin-left:50px; "><h2>${value.name}</h3> 
                <svg> <circle cx="25" cy="27" r="25" stroke="black" fill="red"></circle> <text text-anchor="middle" x="25" y="30" fill="white">${value.age}</text> <text x="100" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg></div>`);
              }
              if(value.age == "PG" )
              {
                $("#movies").append(`<div class="details"style="   width: 400px; height:150px;display:inline-block; margin-left:50px; "><h2>${value.name}</h3> 
                <svg> <circle cx="25" cy="27" r="25" stroke="black" fill="#008000"></circle> <text text-anchor="middle" x="25" y="30" fill="white">${value.age}</text> <text x="100" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg></div>`);
              }
              if(value.age == "U" )
              {
                $("#movies").append(`<div class="details"style="  width: 400px; height:150px;display:inline-block; margin-left:50px; "><h2>${value.name}</h3> 
                <svg> <circle cx="25" cy="27" r="25" stroke="black" fill="#0000ff"></circle> <text text-anchor="middle" x="25" y="30" fill="white">${value.age}</text> <text x="100" y="30" fill="black" font-size="20px">${value.duration} hours</text></svg></div>`);
              }
             
          
              });
           
            
  
  
              //$("#movies").append(`<img src='images/${value.id}.jpg'style='width: 200px;'></img>` +"<h2 style='margin: top'>"+ value.name+"</h2>" + " " + value.duration +"h"+ value.age + " " + value.description + `<button class = 'trailer' value = '${value.trailer_url}'>Trailer</button>` +' <br> <hr>');
           
          });
         
         
       
      });
     