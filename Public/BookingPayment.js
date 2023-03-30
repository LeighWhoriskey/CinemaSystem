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


    console.log(custId)


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
            success: function(res){
              console.log(res);
              alert("Booking has been Made");
              
            }
        });
    });
});