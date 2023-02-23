$("document").ready(function(){
var colour;
    
    $.getJSON("http://localhost:3000/movies",function(data){
    
       
        $.each(data, function(i, value){
           
            $("#movies").append(`<div class="images"style=" display:inline-block; padding:0px; margin-top: 20px;  left: 100px;  position: relative;"><a href="http://localhost:3000/Movie-Detail.html?id=${value.id}"><img src='images/${value.id}.jpg'style='width: 230px; height: 300px; margin:0px; display:'></img></a></div>`);
            $("#movies").append(`<div class="name"style=" font-size:25px;left:150px; top:-250px; position: relative; display:inline-block; ">${value.name}</div>`);
            if(value.age == "12A" )
            {
            $("#movies").append(`<div class="details"style="  left:350px; top:-270px; display: block; padding:0px; margin: 0; position: relative;">
            <svg >
            <circle cx="50" cy="55" r="25" stroke="black" fill="#ff4500" />
            <text text-anchor="middle" x="50" y="60" fill="white">${value.age}</text>
            <text x="100" y="60" fill="black" font-size = 20px>${value.duration} hours</div></text>
          </svg></div>`);
            }
            if(value.age == "18" )
            {
            $("#movies").append(`<div class="details"style="  left:350px; top:-270px; display: block; padding:0px; margin: 0; position: relative;">
            <svg >
            <circle cx="50" cy="55" r="25" stroke="black" fill="red" />
            <text text-anchor="middle" x="50" y="60" fill="white">${value.age}</text>
            <text x="100" y="60" fill="black" font-size = 20px>${value.duration} hours</div></text>
          </svg></div>`);
            }
            if(value.age == "PG" )
            {
            $("#movies").append(`<div class="details"style="  left:350px; top:-270px; display: block; padding:0px; margin: 0; position: relative;">
            <svg >
            <circle cx="50" cy="55" r="25" stroke="black" fill="#008000" />
            <text text-anchor="middle" x="50" y="60" fill="white">${value.age}</text>
            <text x="100" y="60" fill="black" font-size = 20px>${value.duration} hours</div></text>
          </svg></div>`);
            }
            if(value.age == "U" )
            {
            $("#movies").append(`<div class="details"style="  left:350px; top:-270px; display: block; padding:0px; margin: 0; position: relative;">
            <svg >
            <circle cx="50" cy="55" r="25" stroke="black" fill="#0000ff" />
            <text text-anchor="middle" x="50" y="60" fill="white">${value.age}</text>
            <text x="100" y="60" fill="black" font-size = 20px>${value.duration} hours</div></text>
          </svg></div>`);
            }
          $("#movies").append("<hr>");
        
          


            //$("#movies").append(`<img src='images/${value.id}.jpg'style='width: 200px;'></img>` +"<h2 style='margin: top'>"+ value.name+"</h2>" + " " + value.duration +"h"+ value.age + " " + value.description + `<button class = 'trailer' value = '${value.trailer_url}'>Trailer</button>` +' <br> <hr>');
         
        });
       
       
     
    });

    
});