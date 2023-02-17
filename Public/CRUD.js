$("document").ready(function(){

    //adds options to the operation choice, could be hard coded, we can talk about that
    $("#crud").append("<option value ='CREATE' selected>Create</option> " +  
                        "<option value ='READ'>Read</option> " + 
                        "<option value ='UPDATE'>Update</option> " + 
                        "<option value ='DELETE'>Delete</option> " );

    // same as before adds the tables form the database also can be hard coded
    $("#sqltable").append("<option selected>Choose Table</option> "+
                            "<option value ='booking'>Bookings</option> " +  
                            "<option value ='customers'>Customers</option> " + 
                            "<option value ='films'>Films</option> " + 
                            "<option value ='screening'>Screenings</option> " + 
                            "<option value ='screens'>Screens</option> " + 
                            "<option value ='staff'>Staff</option> " );


    $("#sqltable").change(function(){

        //grabs the new selected option from the tables
        var tmpTable = $("#sqltable").val();

        //clears form to add other fields 
        $("#form").empty();
    
    
        //grabs the new selected option from the tables
        var operationTbl = $("#crud").val();

        //clears form to add other fields 
        $("#form").empty();

        if(operationTbl == "READ"){
            $("#form").append("<label for='id'>ID:</label><input id='RDid' name='id'></input>" +
            "<button id ='POST' type='button'> Read</button>");
        }
        else if(operationTbl == "DELETE"){

            $("#form").append("<label for='id'>ID:</label><input id='RDid' name='id'></input>" +
            "<button id ='POST' type='button'> Delete</button>");
        }
        else if( operationTbl == "CREATE"){

            if(tmpTable == "booking"){
                $("#form").append("<label for='screen_id'>Screen ID: </label> <input id='screen_id' name='screen_id'></input>" +
                                    "<label for='no_of_seats'>Number of Seat: </label><input id='no_of_seats' name='no_of_seats'</input> " +
                                    "<button id='POST' type='button'>Submit</button>");

                //changes to the new button, if not here it will try find the old button
                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Booking",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            ScreenID: $("#screen_id").val(),
                            Seats: $("#no_of_seats").val()
                        },
                        sucess: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "customers"){
                $("#form").append("<label for='name'>Name: </label> <input id='name' name='name'></input>" +
                                    "<label for='email'>Email: </label><input id='email' name='email'</input> " +
                                    "<button id='POST' type='button'>Submit</button>");

                //changes to the new button, if not here it will try find the old button
                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/CreateCustomer",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            ScreenID: $("#screen_id").val(),
                            Seats: $("#no_of_seats").val()
                        },
                        sucess: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "films"){
                $("#form").append("<p>Film ID: <input id='film_id'></input> </p>" +
                                    "<p>Name: <input id='name'></input> </p>" +
                                    "<p>Director: <input id='director'></input> </p>" +
                                    "<p>Duration: <input id='duration'></input> </p>" +
                                    "<p>Trailer URL: <input id='trailer'></input> </p> " +
                                    "<p>Age Rating: <input id='age'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
            else if(tmpTable == "screening"){
                $("#form").append("<p>Booking ID: <input id='booking_id'></input> </p>" +
                                    "<p>Screen ID: <input id='screen_id'></input> </p>" +
                                    "<p>Price: <input id='price'></input> </p>" +
                                    "<p>Date & Time: <input id='duration'></input> </p>" +
                                    "<p>Film Id: <input id='film_id'></input> </p> " +
                                    "<p>Phone Number: <input id='phone_no'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
            else if(tmpTable == "screens"){
                $("#form").append("<p>Screen ID: <input id='screen_id'></input> </p>" +
                                    "<p>Capacity: <input id='capacity'></input> </p>" +
                                    "<p>Open or Closed <input id='open' placeholder='1 = open  0 = closed'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
            else if(tmpTable == "staff"){
                $("#form").append("<p>Staff ID: <input id='staff_id'></input> </p>" +
                                    "<p>Name: <input id='name'></input> </p>" +
                                    "<p>Email: <input id='email'></input> </p>" +
                                    "<p>Age: <input id='age'></input> </p>" +
                                    "<p>Password: <input id='password'></input> </p> " +
                                    "<p>Phone Number: <input id='phone_no'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
        }
        else{

            if(tmpTable == "booking"){
                $("#form").append("<label for='booking_id'>Booking ID: </label> <input id='booking_id' name='booking_id'></input>" +
                                    "<label for='screen_id'>Screen ID: </label> <input id='screen_id' name='screen_id'></input>" +
                                    "<label for='no_of_seats'>Number of Seat: </label><input id='no_of_seats' name='no_of_seats'</input> " +
                                    "<button id='POST' type='button'>Submit</button>");

                    //new one of these for every function but the routes can be the same as long as you check and send the operation, the model can check what the sql statement is going to do
                    $("#POST").on('click', function(){
                        $.ajax({
                            url: "http://localhost:3000/Booking",
                            cache: false,
                            dataType: "json",
                            type: "Post",
                            data:{
                                operation: operationTbl,
                                ScreenID: $("#screen_id").val(),
                                Seats: $("#no_of_seats").val(),
                                BookingID: $("#booking_id").val()
                            },
                            sucess: function(res){
                                alert(res);
                            }
                        });
                    });
            }
            else if(tmpTable == "customers"){
                $("#form").append("<p>Customer ID: <input id='cust_id'></input> </p>" +
                                    "<p>Name: <input id='name'></input> </p>" +
                                    "<p>Email: <input id='email'></input> </p>" +
                                    "<p>Age: <input id='age'></input> </p>" +
                                    "<p>Password: <input id='password'></input> </p> " +
                                    "<p>Phone Number: <input id='phone_no'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
            else if(tmpTable == "films"){
                $("#form").append("<p>Film ID: <input id='film_id'></input> </p>" +
                                    "<p>Name: <input id='name'></input> </p>" +
                                    "<p>Director: <input id='director'></input> </p>" +
                                    "<p>Duration: <input id='duration'></input> </p>" +
                                    "<p>Trailer URL: <input id='trailer'></input> </p> " +
                                    "<p>Age Rating: <input id='age'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
            else if(tmpTable == "screening"){
                $("#form").append("<p>Booking ID: <input id='booking_id'></input> </p>" +
                                    "<p>Screen ID: <input id='screen_id'></input> </p>" +
                                    "<p>Price: <input id='price'></input> </p>" +
                                    "<p>Date & Time: <input id='duration'></input> </p>" +
                                    "<p>Film Id: <input id='film_id'></input> </p> " +
                                    "<p>Phone Number: <input id='phone_no'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
            else if(tmpTable == "screens"){
                $("#form").append("<p>Screen ID: <input id='screen_id'></input> </p>" +
                                    "<p>Capacity: <input id='capacity'></input> </p>" +
                                    "<p>Open or Closed <input id='open' placeholder='1 = open  0 = closed'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }
            else if(tmpTable == "staff"){
                $("#form").append("<p>Staff ID: <input id='staff_id'></input> </p>" +
                                    "<p>Name: <input id='name'></input> </p>" +
                                    "<p>Email: <input id='email'></input> </p>" +
                                    "<p>Age: <input id='age'></input> </p>" +
                                    "<p>Password: <input id='password'></input> </p> " +
                                    "<p>Phone Number: <input id='phone_no'></input> </p>" +
                                    "<button id='POST'>Submit</button>");
            }}
    });
});