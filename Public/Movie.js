$("document").ready(function(){

    
    $.getJSON("http://localhost:3000/movies",function(data){
        var output =""
       
        $.each(data, function(i, value){
          


            $("#movies").append(`<img src='images/${value.id}.jpg'style='width: 200px;'></img>` +"<h2 style='margin: top'>"+ value.name+"</h2>" + " " + value.duration +"h"+ value.age + " " + value.description + `<button class = 'trailer' value = '${value.trailer_url}'>Trailer</button>` +' <br> <hr>');
         
        });
        $(".trailer").click(function(event){
         
            window.location.replace(event.target.value);
        });
    });

    
});