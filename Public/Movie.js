$("document").ready(function(){

    // just some placeholder code for now, we should get images for all the movies 
    // and make it so when clicked they can redirect to a details page for the movie or something

    $.getJSON("http://localhost:3000/movies",function(data){
       
        $.each(data, function(i, value){
            $("#movies").append("Movie: " + value.name + " RunTime: " + value.duration +"<br>");
        });
        
    });

    
});