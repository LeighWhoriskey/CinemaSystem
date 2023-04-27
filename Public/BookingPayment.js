$("document").ready(function(){
    var url = window.location.href;
    var params = new URLSearchParams(url);

    var aTicket = params.get("adult");
    var cTicket = params.get("child");
    var screenNum = params.get("ScreenNum");
    var screeningId = params.get("Screening");
    var filmId = params.get("film");
    var custId = params.get("custId");
    var dateIn = params.get("date");
    var time = params.get("time");
    var aPrice = params.get("adultPrice");
    var cPrice = params.get("childPrice");
    var totalSeats = params.get("totalseats");
    var totalTickets = parseInt(aTicket) + parseInt(cTicket);
    var totalPrice = parseInt(aPrice) + parseInt(cPrice);
    var CustEmail =0;


    console.log(screeningId)
    
    if(custId !=0){
        $.getJSON("http://localhost:3000/getCustomer/"+custId,function(data){
            console.log(data);
            $.each(data,function(i,value){
                CustEmail = value.email;
            });
        });
    }
    else{
        CustEmail = params.get("Email");
    }
    


    $("#payment").append("<p id='totalPrice'>Tickets: " + totalTickets +" Total €"+ totalPrice +"</p>");

    for(var i=1; i <=12; i++){
        if(i <10){
            $("#month").append("<option>0"+i+"</option>");
        }else{
            $("#month").append("<option>"+i+"</option>"); 
        }
    }

    for(var i = 23; i <= 38; i++){
        $("#year").append("<option>"+i+"</option>");
    }
    
    
    $("#paymentButton").on("click",function(){
        if(custId == 0){
            $.ajax({
                url: "/makeBooking",
                cache: false,
                dataType: "json",
                type: "POST",
                data:{
                ScreenId: screenNum,
                Seats: totalTickets,
                CustID: custId,
                totalSeats: totalSeats,
                screeningId: screeningId
                },
                success: function(res2){

                alert("Booking has been Made");


                //not right need to fix some stuff
                //will look and see if this is a viable option
                    $.getJSON("/getFilms2",function(data){
                        $.each(data,function(i,value){
                            if(value.id == filmId){
                                Email.send({
                                    Host : "smtp.elasticemail.com",
                                    Username : "decadecinema@gmail.com",
                                    Password : "3427DEF415020DA8D677FFDA47E151070ED4",
                                    To : CustEmail,
                                    From : "decadecinema@gmail.com",
                                    Subject : "Booking Conformation",
                                    Body : "<html><h2>"+value.name+"</h2><p> You have booked "+totalTickets +" tickets for the date of + "+dateIn +"</p><p><a href='http://localhost:3000/Booking.html'>View Bookings</a></p> </html>"
                                });
                            }
                        })
                            
                    })
                }
            });
        }else{
            $.ajax({
                url: "/checkForOverBooking",
                cache: false,
                dataType: "json",
                type: "POST",
                data:{
                    cust_id: custId,
                    seats: totalTickets,
                    screeningId: screeningId
                },
                success: function(res){
                    if(Object.keys(res).length === 0){
                        $.ajax({
                            url: "/makeBooking",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                            ScreenId: screenNum,
                            Seats: totalTickets,
                            CustID: custId,
                            totalSeats: totalSeats,
                            screeningId: screeningId
                            },
                            success: function(res2){
                                alert("Booking has been Made");
                                $.getJSON("/getFilms2",function(data){
                                    $.each(data,function(i,value){
                                        if(value.id == filmId){
                                            Email.send({
                                                Host : "smtp.elasticemail.com",
                                                Username : "decadecinema@gmail.com",
                                                Password : "3427DEF415020DA8D677FFDA47E151070ED4",
                                                To : CustEmail,
                                                From : "decadecinema@gmail.com",
                                                Subject : "Booking Conformation",
                                                Body : "<html><h2>"+value.name+"</h2><p> You have booked "+totalTickets +" tickets for the date of + "+dateIn +" </p><p><a href='http://localhost:3000/Booking.html'>View Bookings</a></p></html>"
                                            });
                                        }
                                    })
                                        
                                })
                            }
                        });
                    }else{
                        $("#error").empty();
                        $("#error").append("<p style='color:red'>Booking already Exists");
                    }  
                }
            }); 
        }  
    });
});