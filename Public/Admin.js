$("document").ready(function(){

    $("#crud").change(function(){

        if($("#crud").val() =="booking"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Booking ID</th><th>Screening ID</th><th>Number of Seats</th><th>Customer ID</th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> "+ value.screening_id +"</td><td> "+ value.no_of_seats +"</td><td> "+ value.cust_id +"</td></tr>");
                })
            });

        }else if($("#crud").val() =="customers"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Customer ID</th><th>Name</th><th>Email</th><th>Age</th><th>Password</th><th>Phone Number</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> "+ value.name +"</td><td> "+ value.email +"</td><td> "+ value.age +"</td><td> "+ value.password +"</td><td> "+ value.phone_no +"</td></tr>");
                })
            });

        }else if($("#crud").val() =="films"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Film ID</th><th>Name</th><th>Director</th><th>Duration</th><th>Trailer Url</th><th>Age</th><th>Description</th><th>Released</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> "+ value.name +"</td><td> "+ value.director +"</td><td> "+ value.duration +"</td><td> "+ value.trailer_url +"</td><td> "+ value.age +"</td><td> "+ value.description +"</td><td> "+ value.released +"</td></tr>");
                })
            });

        }else if($("#crud").val() =="screening"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Screening ID</th><th>Price</th><th>Date</th><th>Time</th><th>Film ID</th><th>Screen ID</th><th>Total Seats Booked</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> "+ value.price +"</td><td> "+ value.date +"</td><td> "+ value.time +"</td><td> "+ value.film_id +"</td><td> "+ value.screen_id +"</td><td> "+ value.totalSeatsBooked +"</td></tr>");
                })
            });

        }else if($("#crud").val() =="screens"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Screen ID</th><th>Capacity</th><th>Open or Closed</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> "+ value.capacity +"</td><td> "+ value.open +"</td></tr>");
                })
            });

        }else if($("#crud").val() =="staff"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>staff ID</th><th>Name</th><th>Email</th><th>Age</th><th>Password</th><th>Phone Number</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> "+ value.name +"</td><td> "+ value.email +"</td><td> "+ value.age +"</td><td> "+ value.password +"</td><td> "+ value.phone_no +"</td></tr>");
                })
            });
        }


    });

});