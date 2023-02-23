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

            //Booking
            if(tmpTable == "booking" ){
                $("#POST").on('click', function(){
                    $("#empDiv").empty();

                    $.getJSON("http://localhost:3000/getBooking/" + $("#RDid").val(), function(data){
                        $.each(data,function(i, value){
                            $("#empDiv").append("<label>Booking ID: </label>" + value.id + "<br>" + "<label>Screening ID: </label>" + value.screening_id + "<br>" + "<label>Number of Seats booked: </label>" + value.no_of_seats + "<br>" + "<label>Customer ID: </label> " + value.cust_id)
                        })
                    });
                });
            }
            //Customer
            else if(tmpTable =="customers")
            {
                $("#POST").on('click', function(){
                    $("#empDiv").empty();

                    $.getJSON("http://localhost:3000/getCustomers/" + $("#RDid").val(), function(data){
                        console.log(data);
                        $.each(data,function(i, value){
                            $("#empDiv").append("<label>Customer Name: </label>" + value.name + "<br>" + "<label>Email: </label>" + value.email + "<br>" + "<label>Age: </label>" + value.age + "<br>" + "<label>Password: </label>" + value.password  + "<br>" + "<label>Phone Number: </label>" + value.phone_no)
                        });
                    });
                });
            }

            //Film
            else if(tmpTable =="films")
            {
                $("#POST").on('click', function(){
                    $("#empDiv").empty();

                    $.getJSON("http://localhost:3000/getFilms/" + $("#RDid").val(), function(data){
                        console.log(data);
                        $.each(data,function(i, value){
                            $("#empDiv").append("<label>Film ID: </label>" + value.id +"<br>" + "<label>Film Name: </label>" + value.name+ "<br>" +"<label>Director: </label>" + value.director + "<br>" + "<label>Duration: </label>" + value.duration  + "<br>" + "<label>Trailer Url: </label>" + value.trailer_url + "<br>" + "<label>Description: </label>" + value.description + "<br>" + "<label>Age Rating: </label>" + value.age)
                        });
                    });
                });
            }

            //Screenings
            else if(tmpTable =="screening")
            {
                $("#POST").on('click', function(){
                    $("#empDiv").empty();

                    $.getJSON("http://localhost:3000/getScreenings/" + $("#RDid").val(), function(data){
                        console.log(data);
                        $.each(data,function(i, value){
                            $("#empDiv").append("<label>Screen ID: </label>" + value.id + "<br>" + "<label>Price: </label>" + value.price + "<br>" + "<label>Time & Date: </label>" + value.dateTime + "<br>" + "<label>Film ID: </label>" + value.film_id)
                        });
                    });
                });
            }

            //Screen
            else if(tmpTable =="screens")
            {
                $("#POST").on('click', function(){
                    $("#empDiv").empty();

                    $.getJSON("http://localhost:3000/getScreens/" + $("#RDid").val(), function(data){
                        console.log(data);
                        $.each(data,function(i, value){
                            $("#empDiv").append("<label>Screen ID: </label>" + value.id + "<br>" + "<label>Capacity: </label>" + value.capacity + "<br>" + "<label>Open: </label>" + value.open)
                        });
                    });
                });
            }

            //Staff
            else if(tmpTable =="staff")
            {
                $("#POST").on('click', function(){
                    $("#empDiv").empty();

                    $.getJSON("http://localhost:3000/getStaff/" + $("#RDid").val(), function(data){
                        console.log(data);
                        $.each(data,function(i, value){
                            $("#empDiv").append("<label>Staff ID: </label>" + value.id + "<br>" + "<label>Staff Name: </label>" + value.name + "<br>" + "<label>Email: </label>" + value.email + "<br>" + "<label>Age: </label>" + value.age + "<br>" + "<label>Password: </label>" + value.password + "<br>" + "<label>Phone Number: </label>" + value.phone_no)
                        });
                    });
                });
            }

        }
        else if(operationTbl == "DELETE"){

            $("#form").append("<label for='RDid'>ID:</label><input id='RDid' name='RDid'></input>" +
            "<button id ='POST' type='button'> Delete</button>");
            
            $("#POST").on('click', function(){
                $.ajax({
                    url: "http://localhost:3000/Delete",
                    cache: false,
                    dataType: "json",
                    type: "Post",
                    data:{
                        Table: tmpTable,
                        Id: $("#RDid").val(),
                    },
                    success: function(res){
                        console.log(res);
                    }
                });
            });
        }
        else if( operationTbl == "CREATE"){

            if(tmpTable == "booking"){
                $("#form").append("<label for='screen_id'>Screen ID: </label> <input id='screen_id' name='screen_id'></input>" +
                                    "<label for='no_of_seats'>Number of Seat: </label><input id='no_of_seats' name='no_of_seats'</input> " +
                                    "<label for='cust_id'>Customer ID: </label><input id='cust_id' name='cust_id'</input> "+
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
                            Seats: $("#no_of_seats").val(),
                            Customer: $("#cust_id").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "customers"){
                $("#form").append("<label for='name'>Name: </label> <input id='name' name='name'></input>" +
                                    "<label for='email'>Email: </label><input id='email' name='email'</input> " +
                                    "<label for='age'>Age: </label><input id='age' name='age'</input> " +
                                    "<label for='pasword'>Password: </label><input id='password' name='password'</input> " +
                                    "<label for='phone'>Phone No: </label><input id='phone' name='phone'</input> " +
                                    "<button id='POST' type='button'>Submit</button>");

                //changes to the new button, if not here it will try find the old button
                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Customer",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            name: $("#name").val(),
                            email: $("#email").val(),
                            age: $("#age").val(),
                            password: $("#password").val(),
                            phone_no: $("#phone").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "films"){
                $("#form").append("<label for='name'>Name: <input id='name' name='name'></input> </label>" +
                                    "<label for='director'>Director: <input id='director' name='director'></input> </label>" +
                                    "<label for='duration'>Duration: <input id='duration' name='duration'></input> </label>" +
                                    "<label for='trailer'>Trailer URL: <input id='trailer' name='trailer'></input> </label> " +
                                    "<label for='desc'>Description: <input id='desc' name='desc'></input> </label> " +
                                    "<label for='age'>Age Rating: <input id='age' name='age'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Film",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            name: $("#name").val(),
                            director: $("#director").val(),
                            duration: $("#duration").val(),
                            trailer: $("#trailer").val(),
                            desc: $("#desc").val(),
                            age: $("#age").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "screening"){
                $("#form").append("<label for='screen'>Screen ID: <input id='screen' name='screen'></input> </label>" +
                                    "<label for='price'>Price: <input id='price' name='price'></input> </label>" +
                                    "<label for ='date'>Date: <input id='date' name='date'></input> </label>" +
                                    "<label for ='time'>Time: <input id='time' name='time'></input> </label>" +
                                    "<label for ='film'>Film Id: <input id='film' name='film'></input> </label> " +
                                    "<label for='seats'>Seats Booked: <input id='seats' name='seats'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Screening",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            screen: $("#screen").val(),
                            price: $("#price").val(),
                            date: $("#date").val(),
                            time: $("#time").val(),
                            film: $("#film").val(),
                            seats: $("#seats").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "screens"){
                $("#form").append("<label for='capacity'>Capacity: <input id='capacity' name='capacity'></input> </label>" +
                                    "<label for='open'>Open or Closed <input id='open' name='open' placeholder='1 = open  0 = closed'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Screens",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            screen: $("#screen").val(),
                            capacity: $("#capacity").val(),
                            open: $("#open").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "staff"){
                $("#form").append("<label for='name'>Name: <input id='name' name='name'></input> </label>" +
                                    "<label for='email'>Email: <input id='email' name='email'></input> </label>" +
                                    "<label for='age'>Age: <input id='age' name='age'></input> </label>" +
                                    "<label for='pass'>Password: <input id='pass' name='pass'></input> </label> " +
                                    "<label for='phone'>Phone Number: <input id='phone' name='phone'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Staff",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            name: $("#name").val(),
                            email: $("#email").val(),
                            age: $("#age").val(),
                            pass: $("#pass").val(),
                            phone: $("#phone").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
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
                            success: function(res){
                                alert(res);
                            }
                        });
                    });
            }
            else if(tmpTable == "customers"){
                $("#form").append("<label for='id'>ID: </label> <input id='id' name='id'></input>" +
                                    "<label for='name'>Name: </label> <input id='name' name='name'></input>" +
                                    "<label for='email'>Email: </label><input id='email' name='email'</input> " +
                                    "<label for='age'>Age: </label><input id='age' name='age'</input> " +
                                    "<label for='pasword'>Password: </label><input id='password' name='password'</input> " +
                                    "<label for='phone'>Phone No: </label><input id='phone' name='phone'</input> " +
                                    "<button id='POST' type='button'>Submit</button>");

                //changes to the new button, if not here it will try find the old button
                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Customer",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            id: $("#id").val(),
                            name: $("#name").val(),
                            email: $("#email").val(),
                            age: $("#age").val(),
                            password: $("#password").val(),
                            phone_no: $("#phone").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "films"){
                $("#form").append("<label for='film'>Film ID: <input id='film' name='film'></input> </label>" +
                                    "<label for='name'>Name: <input id='name' name='name'></input> </label>" +
                                    "<label for='director'>Director: <input id='director' name='director'></input> </label>" +
                                    "<label for='duration'>Duration: <input id='duration' name='duration'></input> </label>" +
                                    "<label for='trailer'>Trailer URL: <input id='trailer' name='trailer'></input> </label> " +
                                    "<label for='desc'>Description: <input id='desc' name='desc'></input> </label> " +
                                    "<label for='age'>Age Rating: <input id='age' name='age'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Film",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            id: $("#film").val(),
                            name: $("#name").val(),
                            director: $("#director").val(),
                            duration: $("#duration").val(),
                            trailer: $("#trailer").val(),
                            desc: $("#desc").val(),
                            age: $("#age").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "screening"){
                $("#form").append("<label for='booking'>Booking ID: <input id='booking' name='booking'></input> </label>" +
                                    "<label for='screen'>Screen ID: <input id='screen' name='screen'></input> </label>" +
                                    "<label for='price'>Price: <input id='price' name='price'></input> </label>" +
                                    "<label for ='date'>Date: <input id='date' name='date'></input> </label>" +
                                    "<label for ='time'>Time: <input id='time' name='time'></input> </label>" +
                                    "<label for ='film'>Film Id: <input id='film' name='film'></input> </label> " +
                                    "<label for='seats'>Seats Booked: <input id='seats' name='seats'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Screening",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            id: $("#booking").val(),
                            screen: $("#screen").val(),
                            price: $("#price").val(),
                            date: $("#date").val(),
                            time: $("#time").val(),
                            film: $("#film").val(),
                            seats: $("#seats").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "screens"){
                $("#form").append("<label for='screen'>Screen ID: <input id='screen' name='screen'></input> </label>" +
                                    "<label for='capacity'>Capacity: <input id='capacity' name='capacity'></input> </label>" +
                                    "<label for='open'>Open or Closed <input id='open' name='open' placeholder='1 = open  0 = closed'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Screens",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            id: $("#screen").val(),
                            capacity: $("#capacity").val(),
                            open: $("#open").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }
            else if(tmpTable == "staff"){
                $("#form").append("<label for='staff'>Staff ID: <input id='staff' name='staff'></input> </label>" +
                                    "<label for='name'>Name: <input id='name' name='name'></input> </label>" +
                                    "<label for='email'>Email: <input id='email' name='email'></input> </label>" +
                                    "<label for='age'>Age: <input id='age' name='age'></input> </label>" +
                                    "<label for='pass'>Password: <input id='pass' name='pass'></input> </label> " +
                                    "<label for='phone'>Phone Number: <input id='phone' name='phone'></input> </p>" +
                                    "<button id='POST' type='button'>Submit</button>");

                $("#POST").on('click', function(){
                    $.ajax({
                        url: "http://localhost:3000/Staff",
                        cache: false,
                        dataType: "json",
                        type: "Post",
                        data:{
                            operation: operationTbl,
                            id: $("#staff").val(),
                            name: $("#name").val(),
                            email: $("#email").val(),
                            age: $("#age").val(),
                            pass: $("#pass").val(),
                            phone: $("#phone").val()
                        },
                        success: function(res){
                            alert(res);
                        }
                    });
                });
            }  
        }
    });
});