$("document").ready(function(){

    var cookie = document.cookie;

    var tmpid = cookie.split("Cust_id=");
    var id = tmpid[1].split(";");
    
    id = id[0];
    //console.log(id);
    if(id == 0 || id == null){
        window.location.replace("/Login.html");
    }else{
        
        $.getJSON("/getBookingCustom/" + id, function(data){

            $("#thead").append("<th>Name</th><th>Screen Number</th><th>Film Name</th><th>Duration</th><th>Seats Booked</th><th></th>");
            
            $.each(data,function(i, value){

                $("#tbody").append("<tr><td>"+ value.custname +"</td><td>"+ value.ScreenId +"</td><td>"+ value.filmname +"</td><td>"+ value.duration +"</td><td>"+ value.no_of_seats +"</td><td><button id='delete"+i +"'>Cancel</button></td></tr>");
            
                $("#delete"+i).on("click",function(){

                    $.ajax({
                        url: "/delete",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            Table: "booking",
                            ID: value.id
                        },
                        success: function(res){
                            window.location.replace("/Booking.html");
                        }
                    });
                }) 
            });
        });
    }
});