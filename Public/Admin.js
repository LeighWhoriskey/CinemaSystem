$("document").ready(function(){

    $("#crud").change(function(){

        if($("#crud").val() =="booking"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Customer ID</th><th>Screening Number</th><th>Number of Seats</th><th> </th<th> </th><th> </th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td><input id='cust_id " + i + "' value =' " +  value.cust_id + "'></input> </td><td><input id='no_of_seats " + i + "' value =' " +  value.no_of_seats + "'></input> </td><td> <input id='no_of_seats " + i + "' value =' " +  value.no_of_seats + "'></input> "+"</td><td><button id='update "+i + "' type='button'>Update</button></td><td><button id='delete "+i + "' type='button'>Delete</button></td></tr>");
                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });

        }else if($("#crud").val() =="customers"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Name</th><th>Email</th><th>Password</th><th>Phone Number</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td><input id='name " + i + "' value =' " +  value.name + "'></input> </td><td><input id='email " + i + "' value =' " +  value.email + "'></input> </td><td> <input id='password " + i + "' value =' " +  value.password + "'></input> </td><td> <input id='phone_np " + i + "' value =' " +  value.phone_no + "'></input> </td><td><button id='update "+i + "' type='button'>Update</button></td><td><button id='delete "+i + "' type='button'>Delete</button></td></tr>");
                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });

        }else if($("#crud").val() =="films"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Film Name</th><th>Director</th><th>Duration</th><th>Trailer Url</th><th>Age</th><th>Description</th><th>Released</th><th>Oscars</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> <input id='name " + i + "' value =' " +  value.name + "'></input> </td><td> <input id='director " + i + "' value =' " +  value.director + "'></input> </td><td> <input id='duration " + i + "' value =' " +  value.duration + "'></input> </td><td> <input id='trailer_url " + i + "' value =' " +  value.trailer_url + "'></input> </td><td> <input id='age " + i + "' value =' " +  value.age + "'></input></td><td> <textarea id='description " + i + "' placeholder =' " +  value.description + "'></textarea> </td><td><input id='released " + i + "' value =' " +  value.released + "'></input> </td><td> <input id='oscar " + i + "' value =' " +  value.oscar + "'></input> </td><td><button id='update "+i + "' type='button'>Update</button></td><td><button id='delete "+i + "' type='button'>Delete</button></td></tr>");
                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });

        }else if($("#crud").val() =="screening"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Screening ID</th><th>Price</th><th>Date</th><th>Time</th><th>Film Name</th><th>Screen Number</th><th>Total Seats Booked</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> <input id='price " + i + "' value =' " +  value.price + "'></input> </td><td> <input id='date " + i + "' value =' " +  value.date + "'></input> </td><td> <input id='time " + i + "' value =' " +  value.time + "'></input> </td><td> <input id='film_id " + i + "' value =' " +  value.film_id + "'></input> </td><td> <input id='screen_id " + i + "' value =' " +  value.screen_id + "'></input></td><td> <input id='totalSeatsBooked " + i + "' value =' " +  value.totalSeatsBooked + "'></input> </td><td><button id='update "+i + "' type='button'>Update</button></td><td><button id='delete "+i + "' type='button'>Delete</button></td></tr>");
                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });

        }else if($("#crud").val() =="screens"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Screen Number</th><th>Capacity</th><th>Open or Closed</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> <input id='capacity " + i + "' value =' " +  value.capacity + "'></input> </td><td> <input id='open " + i + "' value =' " +  value.open + "'></input> </td><td><button id='update "+i + "' type='button'>Update</button></td><td><button id='delete "+i + "' type='button'>Delete</button></td></tr>");
                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });

        }else if($("#crud").val() =="staff"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Name</th><th>Email</th><th>Password</th><th>Phone Number</th><th></th><th></th>");
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td><input id='name " + i + "' value =' " +  value.name + "'></input> </td><td> <input id='email " + i + "' value =' " +  value.email + "'></input> </td><td> <input id='password " + i + "' value =' " +  value.password + "'></input> </td><td> <input id='phone_no " + i + "' value =' " +  value.phone_no + "'></input> </td><td><button id='update "+i + "' type='button'>Update</button></td><td><button id='delete "+i + "' type='button'>Delete</button></td></tr>");
                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });
        }


    });

});