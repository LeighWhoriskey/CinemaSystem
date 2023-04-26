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

 


    $("#submit").on("click",function(){
        if($("#Name").val() == 0 || $("#Phone").val() == 0 || $("#EmailAddress").val() == 0){
            $("#error").empty().append("<p style='color:red'>One or more Information is Missing</p>");
        }else{
            var emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 
            if(emailReg.test($("#EmailAddress").val())){
                window.location.href ="BookingPayment.html?&adult="+aTicket+"&child="+ cTicket +"&ScreenNum=" 
                + screenNum +"&Screening=" + screeningId + "&film=" +filmId +"&custId="+ custId +"&date=" + dateIn +"&time=" + time 
                +"&adultPrice="+aPrice+"&childPrice="+cPrice +"&totalseats=" + totalSeats + "&Email=" +$("#EmailAddress").val();
            }else{
                $("#error").empty().append("<p style='color:red'>Invalid Email</p>");
            }
        }
    });
    
    $("#signUp").on("click",function(){
        window.location.href ="Signup.html";
        
    });
});