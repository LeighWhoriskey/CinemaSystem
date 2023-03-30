$("document").ready(function(){


    var url = window.location.href;
    var params = new URLSearchParams(url);

    //get film id when you click into the booking 
    var screeningId = params.get("Screening");
    var screenId = params.get("Screen");
    var dateIn = params.get("Date");
    var time = params.get("Time"); 
    var ScreenCapacity = 0;
    var BookedTickets = 0;
    var filmId = params.get("filmID");
    var custID =0;


    console.log(screeningId)
    var cookie = document.cookie;
    if(cookie.includes("Cust_id")){
        var tmpid = cookie.split("Cust_id=");
        custID = tmpid[1].split(";");
        if(custID[0] == 0 || custID[0] == null){
            custID = 0;   
        }
        else{
            custID = custID[0];
        }
    }else{
        console.log("moo")
    }
    

    
    var aTicketPrice = 0;
    var cTicketPrice = 0;


    //you book without being a customer
    
    


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
            $.each(res,function(i,value){
                BookedTickets = value.totalSeatsBooked;
                ScreenCapacity = value.capacity;
            });
        }
    });

    //need to remove all € from database price from screening

    $.getJSON("/getScreenings/"+ screeningId, function(data){
        $.each(data,function(i,value){
            console.log(data)
            if(value.date == dateIn && value.time == time){
                if(value.time >= 18)
                {
                    aTicketPrice = value.price + 2.30;
                }else{
                    aTicketPrice = value.price;
                }
                cTicketPrice = value.price -1.50;
            }
            //add small picture of film, the screen number, the time, show how many seats are able to be booked 
        });
        console.log(cTicketPrice)
        console.log(aTicketPrice)
        $("#childLabel").append("Adult ticket @ €"+aTicketPrice);
        $("#adultLabel").append("Child ticket @ €"+cTicketPrice);
    });

    

    $.getJSON("/movie-details/"+ filmId, function(data){
        $.each(data,function(i,value){
            console.log(data)
            //add small picture of film, the screen number, the time, show how many seats are able to be booked 
            $("#filmDiv").append("<div id='image'><img src='images/"+value.id+".jpg'></div> <p id='filmName'>"+ value.name
                +"</p><p id='dateTime'>" + dateIn + " @ " + time +"</p><p id='screen'> Showing in Screen "+ screenId +"</p><p id='runTime'>RunTime: " +value.duration);
        });
    });

    for(var i = 0; i <10; i++){
        $("#adult").append("<option value = "+ i +">"+ i +"</option>");
        $("#child").append("<option value = "+ i +">"+ i +"</option>");
    }


    //need information about the screening and the booking 

    $("#BookTickets").on("click",function(){

        var childTicket = $("#child").val();
        var adultTicket = $("#adult").val();
     

        if(childTicket == 0 && adultTicket == 0){
            $("#error").empty().append("<p style='color:red'>Please a ticket</p>");
        }else{
            if((parseInt(childTicket) + parseInt(adultTicket)) < (parseInt( ScreenCapacity) - parseInt( BookedTickets))){
                var seat = parseInt(childTicket) + parseInt(adultTicket)+ parseInt(BookedTickets);
                if(custID != 0){
                    window.location.href ="BookingPayment.html?&adult="+adultTicket+"&child="+ childTicket +"&ScreenNum=" 
                    + screenId +"&Screening=" + screeningId + "&film=" +filmId +"&custId="+ custID +"&date=" + dateIn +"&time=" + time 
                    +"&adultPrice="+aTicketPrice+"&childPrice="+cTicketPrice +"&totalseats=" + parseInt(seat);
            
                }
                else{
                    window.location.href ="BookingPayment.html?&adult="+adultTicket+"&child="+ childTicket +"&ScreenNum=" 
                    + screenId +"&Screening=" + screeningId + "&film=" +filmId +"&custId="+ custID +"&date=" + dateIn +"&time=" + time
                    +"&adultPrice="+aTicketPrice+"&childPrice="+cTicketPrice +"&totalseats="+ parseInt(seat);
                }
            }
            else{
    
                $("#error").empty().append("<p style='color:red'>Cannot Book this many seats please lower ticket count and try again</p>");
            }
            
        }

        
        

    });

});