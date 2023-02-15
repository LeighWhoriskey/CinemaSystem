$("document").ready(function(){

    //adds options to the operation choice, could be hard coded, we can talk about that
    $("#crud").append("<option value ='CREATE' selected>Create</option> " +  
                        "<option value ='READ'>Read</option> " + 
                        "<option value ='UPDATE'>Update</option> " + 
                        "<option value ='DELETE'>Delete</option> " );

    // same as before adds the tables form the database also can be hard coded
    $("#sqltable").append("<option value ='booking' selected>Bookings</option> " +  
                            "<option value ='customers'>Customers</option> " + 
                            "<option value ='films'>Films</option> " + 
                            "<option value ='screening'>Screenings</option> " + 
                            "<option value ='screens'>Screens</option> " + 
                            "<option value ='staff'>Staff</option> " );

    // this will need to change depending on the table selected 
    $("#form").append("<p>Customer ID: <input id='cust_id'></input> </p>" +
                        "<p>Film ID: <input id='film_id'></input> </p>" +
                        "<p>Screen ID: <input id='screen_id'></input> </p>" +
                        "<p>Number of Seat: <input id='no_of_seats'></input> </p>" +
                        "<p>Capacity: <input id='capacity'></input> </p>" +
                        "<button id='POST'>Submit</button>");


    $("#sqltable").change(function(){

        //grabs the new selected option from the tables
        var tmpTable = $("#sqltable").val();

        //clears form to add other fields 
        $("#form").empty();

        if(tmpTable == "booking"){
            $("#form").append("<p>Customer ID: <input id='cust_id'></input> </p>" +
                                "<p>Film ID: <input id='film_id'></input> </p>" +
                                "<p>Screen ID: <input id='screen_id'></input> </p>" +
                                "<p>Number of Seat: <input id='no_of_seats'></input> </p>" +
                                "<p>Capacity: <input id='capacity'></input> </p>" +
                                "<button id='POST'>Submit</button>");
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
        }

        //changes to the new button, if not here it will try find the old button
        $("#POST").on('click', function(){
            $.ajax({
                url: "Login.html",
                cache: false,
                dataType: "json",
                type: "Post",
                sucess: function(res){
                    alert(res);
                },
                error: function(res){
                    alert(res);
                }
            });
        });

    });


    //when the button is clicked its going to send data to a route to create or update
    $("#POST").on('click', function(){
        $.ajax({
            url: "Login.html",
            cache: false,
            dataType: "json",
            type: "Post",
            sucess: function(res){
                alert(res);
            },
            error: function(res){
                alert(res);
            }
        });
    });


    //todo read and delete check which operation is being choosen and then change the form 
    // to ask the user to input input the id from whatever table to pull the data or deleted it
    //everything needed is above bar the routes and ajax stuff 
    

});