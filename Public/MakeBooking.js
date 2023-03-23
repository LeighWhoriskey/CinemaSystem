$("document").ready(function(){


    var url = window.location.href;
    var params = URLSearchParams(url);


    console.log(url);

    var filmId = params.get("filmNumber");//get film id when you click into the booking 
    var screeningId = params.get("Screening");//need to grab it
    var screenId = params.get("Screen");
    var dateTime = params.get("dateTime"); 
    var ScreenCapacity = 0;
    var BookedTickets = 0;

    var cookie = document.cookie;

    var tmpid = cookie.split("Cust_id=");
    var custID = tmpid[1].split(";");
    
    custID = id[0];

    $.ajax({
        url: "/ticketsBooked",
        cache: false,
        dataType: "json",
        type: "POST",
        data:{
          FilmId: filmId,
          ScreeningId: screeningId,
          ScreenId: screenId
        },
        success: function(res){
            console.log(res);
            BookedTickets = res[0].totalSeatsBooked;
            ScreenCapacity = res[0].capacity;
        }
    });

    

    $.getJSON("/movie-details/"+ filmId, function(data){
        $.each(data,function(value,i){
            //add small picture of film, the screen number, the time, show how many seats are able to be booked 
            $("#filmDiv").append("<p>"+ i.name+"</p>");
        });
    });

    for(var i =0; i <10; i++){
        $("#adult").append("<option value = "+ i +">"+ i +"</option>");
        $("#child").append("<option value = "+ i +">"+ i +"</option>");
    }


    //need information about the screening and the booking 

    $("#BookTickets").on("click",function(){

        var childTicket = $("#child").val();
        var adultTicket = $("#adult").val();
        
        if((childTicket + adultTicket) < (ScreenCapacity - BookedTickets)){

            window.location.href ="BookingPayment.html?adult="+adultTicket+"&child="+ childTicket +"&ScreenNum=" 
                + screenId +"&Screening=" + screeningId + "&film=" +filmId +"&custId="+ custID +"&dateTime=" + dateTime;

        }
        else{

            $("#error").empty().append("<p style='color:red'>Cannot Book this many seats please lower ticket count and try again</p>");
        }

    });

});