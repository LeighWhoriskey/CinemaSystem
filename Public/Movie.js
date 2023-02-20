$("document").ready(function(){

    
    $.getJSON("http://localhost:3000/movies",function(data){
        var output ="";
       
        $.each(data, function(i, value){
            $("#movies").append(`<div class="images"style=" display:inline-block; padding:0px; margin: 0;  left: 100px;  position: relative;"><img src='images/${value.id}.jpg'style='width: 230px; margin:0px; display:'></img></div>`);
            //$("#movies").append(`<div class="name"style="  display:inline-block; padding:0px; margin: 0; left: 150px; bottom:220px;  position: relative;"><h3 style="font-size:25px;">${value.name}</h3></div>`);
            $("#movies").append(`<div class="details"style=" display:inline-block; padding:0px; margin: 0; left: 150px; bottom:20px;    position: relative;">
            <svg height="250" width="250">
            <circle cx="50" cy="55" r="25" stroke="black" fill="red" />
            <text x="30" y="20" fill="black"font-size = 25px>${value.name}</text>
            <text x="35" y="60" fill="black">${value.age}</text>
            <text x="100" y="60" fill="black" font-size = 15px>${value.duration} hours</div></text>
          </svg></div>`);
          $("#movies").append("<hr>");
        
          


            //$("#movies").append(`<img src='images/${value.id}.jpg'style='width: 200px;'></img>` +"<h2 style='margin: top'>"+ value.name+"</h2>" + " " + value.duration +"h"+ value.age + " " + value.description + `<button class = 'trailer' value = '${value.trailer_url}'>Trailer</button>` +' <br> <hr>');
         
        });
       
        /*$(".trailer").click(function(event){
         
            window.location.replace(event.target.value);
        });*/
    });

    
});