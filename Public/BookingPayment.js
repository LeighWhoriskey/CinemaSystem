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

        if($("#cardName").val()== 0 || $("#cardNumber").val()== 0 || $("#month").val()== 0 || $("#year").val()== 0 || $("#cvv").val()== 0){
            $("#error").empty().append("<p style='color:red'>Please enter all details</p>");
        }else{

            var cvvReg = /^[0-9]{3}/
            var cardReg = /^[0-9]{16}/
            if(cvvReg.test($("#cvv").val()) &&  cardReg.test($("#cardNumber").val())){
                console.log("test")
            
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
                            console.log(res);
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
        
        
                                //not right need to fix some stuff
                                //will look and see if this is a viable option
                                // Email.send({
                                //     Host : "smtp.gmail.com",
                                //     Username : "decadecinema@gmail.com",
                                //     Password : "Decade247",
                                //     To : 'bobysimpson4@gmail.com',
                                //     From : "test?",
                                //     Subject : "Test email",
                                //     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
                                //     }).then(
                                //         message => alert(message)
                                //     );
                                
                                }
                            });
                        }else{
                            $("#error").empty().append("<p style='color:red'>Booking already Exists</p>");
                        }  
                    }
                }); 
            }else{
                $("#error").empty().append("<p style='color:red'>CardNumber or CVV Incorrect</p>");
            }
        }
    });
});