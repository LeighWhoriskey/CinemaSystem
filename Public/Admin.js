$("document").ready(function(){

    var cookie = document.cookie;
    if(cookie.includes("Selected=")){

        var tmpid = cookie.split("Selected=");
        var id = tmpid[1].split(";");
        
        id = id[0];
        console.log(id);

        if(id == "booking"){
            $("#crud").append("<option value='booking' selected>Booking</option><option value='customers'>Customers</option>"
            +"<option value='films'>Films</option><option value='screening'>Screening</option><option value='screens'>Screens</option><option value='staff'>Staff</option>");

        }else if(id == "customers"){
            $("#crud").append("<option value='booking'>Booking</option><option value='customers' selected>Customers</option>"
            +"<option value='films'>Films</option><option value='screening'>Screening</option><option value='screens'>Screens</option><option value='staff'>Staff</option>");

        }else if(id == "films"){
            $("#crud").append("<option value='booking'>Booking</option><option value='customers'>Customers</option>"
            +"<option value='films' selected>Films</option><option value='screening'>Screening</option><option value='screens'>Screens</option><option value='staff'>Staff</option>");
        }else if(id =="screening"){
            $("#crud").append("<option value='booking' >Booking</option><option value='customers'>Customers</option>"
            +"<option value='films'>Films</option><option value='screening' selected>Screening</option><option value='screens'>Screens</option><option value='staff'>Staff</option>");
        }else if(id == "screens"){
            $("#crud").append("<option value='booking' >Booking</option><option value='customers'>Customers</option>"
            +"<option value='films'>Films</option><option value='screening'>Screening</option><option value='screens' selected>Screens</option><option value='staff' >Staff</option>");
        }else if(id == "staff"){
            $("#crud").append("<option value='booking' >Booking</option><option value='customers'>Customers</option>"
            +"<option value='films'>Films</option><option value='screening'>Screening</option><option value='screens'>Screens</option><option value='staff' selected>Staff</option>");
        }
        else{
            $("#crud").append("<option value='booking' selected>Booking</option><option value='customers'>Customers</option>"
            +"<option value='films'>Films</option><option value='screening'>Screening</option><option value='screens'>Screens</option><option value='staff'>Staff</option>");
        }
    }else{
        $("#crud").append("<option value='booking' selected>Booking</option><option value='customers'>Customers</option>"
        +"<option value='films'>Films</option><option value='screening'>Screening</option><option value='screens'>Screens</option><option value='staff'>Staff</option>");
    }

    


    if ($("#crud").val() == "booking") {
        $("#thead").empty();
        $("#tbody").empty();
      
        $.getJSON("/getData/" + $("#crud").val(), function (data) {
          $("#thead").append("<th>Customer ID</th><th>Screening Number</th><th>Number of Seats</th><th></th><th></th>");
          $.each(data, function (i, value) {
            $("#tbody").append("<tr><td><input id='cust_id" + i + "' value ='" + value.cust_id + "'></input> </td><td><input id='screening_id" + i + "' value ='" + value.no_of_seats + "'></input> </td><td> <input id='no_of_seats" + i + "' value ='" + value.no_of_seats + "'></input> " + "</td><td><button id='update" + i + "' type='button'>Update</button></td><td><button id='delete" + i + "' type='button'>Delete</button></td></tr>");
      
            $("#update" + i).on('click', function () {
              $.ajax({
                url: "/Booking",
                cache: false,
                dataType: "json",
                type: "POST",
                data: {
                  operation: "UPDATE",
                  BookingID: value.id,
                  CustID: value.cust_id,
                  Seats: $("#no_of_seats" + i).val(),
                  ScreenID: $("#screening_id" + i).val(),
                }, success: function (res) {
                  alert("Booking has been Updated");
      
                }
              });
            });
      
            $("#delete" + i).on('click', function () {
              $.ajax({
                url: "/delete",
                cache: false,
                dataType: "json",
                type: "POST",
                data: {
                  Table: "booking",
                  ID: value.id
                }, success: function (res) {
                  alert("Booking has been deleted");
      
                }
              });
            });
      
          });
      
        });
      

    }else if($("#crud").val() =="customers"){
        $("#thead").empty();
        $("#tbody").empty();

        $.getJSON("/getData/"+ $("#crud").val(),function(data){
            $("#thead").append("<th>Name</th><th>Email</th><th>Password</th><th>Phone Number</th><th></th><th></th><th></th>");
            $.each(data,function(i, value){

                $("#tbody").append("<tr><td><input id='name" + i + "' value =' " +  value.name + "'></input> </td><td><input id='email" + i + "' value =' " +  value.email + "'></input> </td><td> <input id='password" + i + "' value =' " +  value.password + "'></input> </td><td> <input id='phone_no" + i + "' value =' " +  value.phone_no + "'></input> </td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");
                
                //customer update
                $("#update"+i).on('click',function(){
                    $.ajax({
                        url: "/Customer",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            operation: "UPDATE",
                            id :value.id,
                            name :$("#name" + i).val(),
                            email: $("#email" + i).val(),
                            age: $("#age" + i).val(),
                            password: $("#password" + i).val(),
                            phone_no: $("#phone_no" + i).val(),
                        },success: function(res){
                            alert($("#name" + i).val() +" has been Successfully Updated.");

                        }
                    });
                });

                //customer delete
                $("#delete"+i).on('click',function(){
                    $.ajax({
                        url: "/delete",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            Table: "customers",
                            ID : value.id
                        },success: function(res){
                            alert($("#name" + i).val() + " has been deleted. Please refresh to see changes");

                        }
                    });
                });   
            });

        });

    }else if($("#crud").val() =="films"){
        $("#thead").empty();
        $("#tbody").empty();

        //create new film to add to website
        $("#thead").append("<th>Film Name</th><th>Director</th><th>Duration</th><th>Trailer Url</th><th>Age Rating</th><th>Description</th><th>Released</th><th>Oscars</th><th></th><th></th>");
        
        $("#tbody").append("<tr><td> <input id='NewFilm'> </input> </td><td> <input id='NewDirector'> </input> </td><td> <input id='NewDuration'> </input> </td><td> <input id='NewTrailer_url'> </input> </td><td> <input id='NewRating'> </input></td><td> <textarea id='NewDescription'> </textarea> </td><td><input id='NewReleased'></input> </td> <td><input id='NewOscar'> </input></td></td> <td><button id='create' type='button'>Create Film</button></td></tr>");
        $("#create").on('click',function(){
            $.ajax({
                url: "/Film",
                cache: false,
                dataType: "json",
                type: "POST",
                data:{
                    operation: "CREATE",
                    name :$("#NewFilm").val(),
                    director: $("#NewDirector").val(),
                    duration: $("#NewDuration").val(),
                    trailer: $("#Newtrailer_url").val(),
                    age: $("#NewRating").val(),
                    desc: $("#NewDescription").val(),
                    oscar: $("#NewOscar").val(),
                    released: $("#NewReleased").val(),
                    oscar: $("NewOscar").val(),
                },success: function(res){
                    alert($("#NewFilm").val() +" has been Successfully Created.");

                }
            });
        });
        $.getJSON("/getData/"+ $("#crud").val(),function(data){
            $.each(data,function(i, value){

                $("#tbody").append("<tr><td> <input id='name" + i + "' value =' " +  value.name + "'></input> </td><td> <input id='director" + i + "' value =' " +  value.director + "'></input> </td><td> <input id='duration" + i + "' value =' " +  value.duration + "'></input> </td><td> <input id='trailer_url" + i + "' value =' " +  value.trailer_url + "'></input> </td><td> <input id='age" + i + "' value =' " +  value.age + "'></input></td><td> <textarea id='description" + i + "' placeholder =' " +  value.description + "'></textarea> </td><td><input id='released" + i + "' value =' " +  value.released + "'></input> </td><td> <input id='oscar" + i + "' value =' " +  value.oscar + "'></input> </td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");
               
                //film update
                $("#update"+i).on('click',function(){
                    $.ajax({
                        url: "/Film",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            operation: "UPDATE",
                            id : value.id,
                            name :$("#name" + i).val(),
                            director: $("#director" + i).val(),
                            duration: $("#duration" + i).val(),
                            trailer_url: $("#trailer_url" + i).val(),
                            age: $("#age" + i).val(),
                            description: $("#description" + i).val(),
                            oscar: $("#oscar" + i).val(),
                            released: $("#released" + i).val(),
                        },success: function(res){
                            alert($("#name" + i).val() +" has been Successfully Updated.");

                        }
                    });
                });

                //film delete
                $("#delete"+i).on('click',function(){
                    $.ajax({
                        url: "/delete",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            Table: "films",
                            ID : value.id,
                        },success: function(res){
                            alert($("#name" + i).val() + " has been deleted. Please refresh to see changes");

                        }
                    });
                });   

            })
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
            alert("Error occurred when getting data for booking");
        });

    }else if($("#crud").val() =="screening"){
        $("#thead").empty();
        $("#tbody").empty();

        //create screening on website
        $("#thead").append("<th>Screening Number</th><th>Price</th><th>Date</th><th>Time</th><th>Film Name</th><th>Screen Number</th><th>Total Seats Booked</th><th></th><th></th>");
        $("#tbody").append("<tr><td><td> <input id='NewPrice'></input> </td><td> <input id='NewDate' placeholder='yyyy-mm-dd'></input> </td><td> <input id='NewTime'></input> </td><td> <input id='NewFilm_id'></input> </td><td> <input id='NewScreen_id'></input></td><td> <input id='NewTotalSeatsBooked'></input> </td><td><button id='create' type='button'>Create Screening</button></td><td></td></tr>");
        $("#create").on('click',function(){
            $.ajax({
                url: "/checkForOverScreening",
                cache: false,
                dataType: "json",
                type: "POST",
                data:{
                    Price :$("#NewPrice").val(),
                    Date: $("#NewDate").val(),
                    Time: $("#NewTime").val(),
                    Film: $("#NewFilm_id").val(),
                    Screen: $("#NewScreen_id").val(),

                },success: function(res){
                    if(Object.keys(res).length === 0){
                        console.log(res);
                        alert("New Screening has been Successfully Created.");

                        $.ajax({
                            url: "/Screening",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                operation: "CREATE",
                                price :$("#NewPrice").val(),
                                date: $("#NewDate").val(),
                                time: $("#NewTime").val(),
                                film_id: $("#NewFilm_id").val(),
                                screen_id: $("#NewScreen_id").val(),
                                totalSeatsBooked: $("#NewTotalSeatsBooked").val(),  
                            },success: function(res){
                                alert("New Screening has been Successfully Created.");

                            }
                        });
                    }else{
                        alert("Screening Already Exists");
                    }  
                }
            });
        });

        $.getJSON("/getData/"+ $("#crud").val(),function(data){
            $.each(data,function(i, value){

                $("#tbody").append("<tr><td> "+ value.id + "</td><td> <input id='price" + i + "' value =' " +  value.price + "'></input> </td><td> <input id='date" + i + "' value =' " +  value.date + "'></input> </td><td> <input id='time" + i + "' value =' " +  value.time + "'></input> </td><td> <input id='film_id" + i + "' value =' " +  value.film_id + "'></input> </td><td> <input id='screen_id" + i + "' value =' " +  value.screen_id + "'></input></td><td> <input id='totalSeatsBooked" + i + "' value =' " +  value.totalSeatsBooked + "'></input> </td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");
                
                //update screening
                $("#update"+i).on('click',function(){
                    $.ajax({
                        url: "/Screening",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            operation: "UPDATE",
                            id : value.duration,
                            price :$("#price" + i).val(),
                            date: $("#date" + i).val(),
                            time: $("#time" + i).val(),
                            film_id: $("#film_id" + i).val(),
                            screen_id: $("#screen_id" + i).val(),
                            totalSeatsBooked: $("#totalSeatsBooked" + i).val(),  
                        },success: function(res){
                            alert($("#name" + i).val() +" has been Successfully Updated.");

                        }
                    });
                });
                
                //delete Screening
                $("#delete"+i).on('click',function(){
                    $.ajax({
                        url: "/delete",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            Table: "screening",
                            ID : value.id,
                        },success: function(res){
                            alert("Screening has been deleted. Please refresh to see changes");

                        }
                    });
                });   
    

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

                $("#tbody").append("<tr><td> "+ value.id + "</td><td> <input id='capacity" + i + "' value =' " +  value.capacity + "'></input> </td><td> <input id='open" + i + "' value =' " +  value.open + "'></input> </td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");

                //update screens
                $("#update"+i).on('click',function(){
                    $.ajax({
                        url: "/Screens",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            operation: "UPDATE",
                            id : value.id,
                            capacity :$("#capacity" + i).val(),
                            open: $("#open" + i).val(),  
                            },success: function(res){
                            alert("Screen" + $("#name" + i).val() +" has been Successfully Updated.");

                        }
                    });
                });

                //delete Screens
                $("#delete"+i).on('click',function(){
                    $.ajax({
                        url: "/delete",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            Table: "screens",
                            ID : value.id,
                        },success: function(res){
                            alert("Screen " +$("#name" + i).val() + " has been deleted. Please refresh to see changes");

                        }
                    });
                });   
            

            })
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
            alert("Error occurred when getting data for booking");
        });

    }else if($("#crud").val() =="staff"){
        $("#thead").empty();
        $("#tbody").empty();

        //create new staff
        $("#thead").append("<th>Name</th><th>Email</th><th>Password</th><th>Phone Number</th><th></th><th></th>");
        $("#tbody").append("<tr><td><input id='NewStaffName'></input> </td><td> <input id='NewStaffEmail'></input> </td><td> <input id='NewStaffPassword'></input> </td><td> <input id='NewStaffPhone_no'></input> </td><td><button id='create' type='button'>Create New Staff</button></td></tr>");
        //create staff
        $("#create").on('click',function(){
            $.ajax({
                url: "/Staff",
                cache: false,
                dataType: "json",
                type: "POST",
                data:{
                    operation: "CREATE",
                    name :$("#NewStaffName").val(),
                    email: $("#NewStaffEmail").val(),  
                    password: $("#NewStaffPassword").val(),
                    phone_no: $("#NewStaffPhone_no").val(),
                    },success: function(res){
                    alert("Staff: " + $("#NewStaffName").val() +" has been Successfully Created");

                }
            });
        });


        $.getJSON("/getData/"+ $("#crud").val(),function(data){
            $.each(data,function(i, value){
                $("#tbody").append("<tr><td> <input id='name" + i + "' value =' " +  value.name + "'></input> </td><td> <input id='email" + i + "' value =' " +  value.email + "'></input> </td><td> <input id='password" + i + "' value =' " +  value.password + "'></input> </td><td> <input id='phone_no" + i + "' value =' " +  value.phone_no + "'></input> </td><td><button id='update' type='button'>Update</button></td><td><button id='delete' type='button'>Delete</button></td><td></td><td></td></tr>");
                //update staff
                $("#update"+i).on('click',function(){
                    $.ajax({
                        url: "/Staff",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            operation: "UPDATE",
                            id : value.id,
                            name :$("#name" + i).val(),
                            email: $("#email" + i).val(),  
                            password: $("#password" + i).val(),
                            phone_no: $("#phone_no" + i).val(),
                            },success: function(res){
                            alert("Staff: " + $("#name" + i).val() +" has been Successfully Updated.");

                        }
                    });
                });

                 //delete Staff
                 $("#delete"+i).on('click',function(){
                    $.ajax({
                        url: "/delete",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            Table: "staff",
                            ID : value.id,
                        },success: function(res){
                            alert("Screen " +$("#name" + i).val() + " has been deleted. Please refresh to see changes");

                        }
                    });
                });   


            })
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
            alert("Error occurred when getting data for booking");
        });
    }



    //updates tables to currently selected database table
    $("#crud").change(function(){

        var selected = $("#crud").val();
        document.cookie = "Selected="+selected;

        if($("#crud").val() =="booking"){
            $("#thead").empty();
            $("#tbody").empty();


            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Customer ID</th><th>Screening Number</th><th>Number of Seats</th><th> </th<th> </th><th> </th>");
                $.each(data,function(i, value){

                    $("#tbody").append("<tr><td><input id='cust_id" + i + "' value =' " +  value.cust_id + "'></input> </td><td><input id='screening_id" + i + "' value =' " +  value.no_of_seats + "'></input> </td><td> <input id='no_of_seats" + i + "' value =' " +  value.no_of_seats + "'></input> "+"</td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");
                    
                    $("#update"+i).on('click',function(){
                            $.ajax({
                            url: "/Booking",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                operation: "UPDATE",
                                BookingID : value.id,
                                CustID : value.cust_id,
                                Seats: $("#no_of_seats" + i).val(),
                                ScreenID: $("#screening_id" + i).val(),
                            },success: function(res){
                                alert("Booking has been Updated");
    
                            }
                        });
                    });

                    $("#delete"+i).on('click',function(){
                        $.ajax({
                        url: "/delete",
                        cache: false,
                        dataType: "json",
                        type: "POST",
                        data:{
                            Table: "booking",
                            ID : value.id
                        },success: function(res){
                            alert("Booking has been deleted");

                        }
                    });
                });
                    
                });

            });

        }else if($("#crud").val() =="customers"){
            $("#thead").empty();
            $("#tbody").empty();

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $("#thead").append("<th>Name</th><th>Email</th><th>Password</th><th>Phone Number</th><th></th><th></th>");
                $.each(data,function(i, value){

                    $("#tbody").append("<tr><td><input id='name" + i + "' value =' " +  value.name + "'></input> </td><td><input id='email" + i + "' value =' " +  value.email + "'></input> </td><td> <input id='password" + i + "' value =' " +  value.password + "'></input> </td><td> <input id='phone_no" + i + "' value =' " +  value.phone_no + "'></input> </td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");
                    
                    //customer update
                    $("#update"+i).on('click',function(){
                        $.ajax({
                            url: "/Customer",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                operation: "UPDATE",
                                id :value.id,
                                name :$("#name" + i).val(),
                                email: $("#email" + i).val(),
                                age: $("#age" + i).val(),
                                password: $("#password" + i).val(),
                                phone_no: $("#phone_no" + i).val(),
                            },success: function(res){
                                alert($("#name" + i).val() +" has been Successfully Updated.");

                            }
                        });
                    });

                    //customer delete
                    $("#delete"+i).on('click',function(){
                        $.ajax({
                            url: "/delete",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                Table: "customers",
                                ID : value.id
                            },success: function(res){
                                alert($("#name" + i).val() + " has been deleted. Please refresh to see changes");

                            }
                        });
                    });   
                });

            });

        }else if($("#crud").val() =="films"){
            $("#thead").empty();
            $("#tbody").empty();

            //create new film to add to website
            $("#thead").append("<th>Film Name</th><th>Director</th><th>Duration</th><th>Trailer Url</th><th>Age</th><th>Description</th><th>Released</th><th>Oscars</th><th></th><th></th>");
            
            $("#tbody").append("<tr><td> <input id='NewFilm'> </input> </td><td> <input id='NewDirector'> </input> </td><td> <input id='NewDuration'> </input> </td><td> <input id='NewTrailer_url'> </input> </td><td> <input id='NewRating'> </input></td><td> <textarea id='NewDescription'> </textarea> </td><td><input id='NewReleased'></input> </td><input id='NewReleased'></td><td><input id='NewOscar'></td><td><button id='create' type='button'>Create Film</button></td></tr>");
            $("#create").on('click',function(){
                $.ajax({
                    url: "/Film",
                    cache: false,
                    dataType: "json",
                    type: "POST",
                    data:{
                        operation: "CREATE",
                        name :$("#NewFilm").val(),
                        director: $("#NewDirector").val(),
                        duration: $("#NewDuration").val(),
                        trailer: $("#Newtrailer_url").val(),
                        age: $("#NewRating").val(),
                        desc: $("#NewDescription").val(),
                        released: $("#NewReleased").val(),
                        oscar: $("NewOscar").val(),
                    },success: function(res){
                        alert($("#NewFilm").val() +" has been Successfully Created.");

                    }
                });
            });
            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $.each(data,function(i, value){

                    $("#tbody").append("<tr><td> <input id='name" + i + "' value =' " +  value.name + "'></input> </td><td> <input id='director" + i + "' value =' " +  value.director + "'></input> </td><td> <input id='duration" + i + "' value =' " +  value.duration + "'></input> </td><td> <input id='trailer_url" + i + "' value =' " +  value.trailer_url + "'></input> </td><td> <input id='age" + i + "' value =' " +  value.age + "'></input></td><td> <textarea id='description" + i + "' placeholder =' " +  value.description + "'></textarea> </td><td><input id='released" + i + "' value =' " +  value.released + "'></input> </td><td><input id='oscar" + i + "' value =' " +  value.oscar + "'></input></td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");
                   
                    //film update
                    $("#update"+i).on('click',function(){
                        $.ajax({
                            url: "/Film",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                operation: "UPDATE",
                                id : value.id,
                                name :$("#name" + i).val(),
                                director: $("#director" + i).val(),
                                duration: $("#duration" + i).val(),
                                trailer_url: $("#trailer_url" + i).val(),
                                age: $("#age" + i).val(),
                                description: $("#description" + i).val(),
                                released: $("#released" + i).val(),
                                oscar: $("NewOscar").val(),
                            },success: function(res){
                                alert($("#name" + i).val() +" has been Successfully Updated.");

                            }
                        });
                    });

                    //film delete
                    $("#delete"+i).on('click',function(){
                        $.ajax({
                            url: "/delete",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                Table: "films",
                                ID : value.id,
                            },success: function(res){
                                alert($("#name" + i).val() + " has been deleted. Please refresh to see changes");

                            }
                        });
                    });   

                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });

        }else if($("#crud").val() =="screening"){
            $("#thead").empty();
            $("#tbody").empty();

            //create screening on website
            $("#thead").append("<th>Screening Number</th><th>Price</th><th>Date</th><th>Time</th><th>Film Name</th><th>Screen Number</th><th>Total Seats Booked</th><th></th><th></th>");

            $("#tbody").append("<tr><td></td><td> <input id='NewPrice'></input> </td><td> <input id='NewDate' placeholder='yyyy-mm-dd'></input> </td><td> <input id='NewTime'></input> </td><td> <input id='NewFilm_id'></input> </td><td> <input id='NewScreen_id'></input></td><td> <input id='NewTotalSeatsBooked'></input> </td><td><button id='create' type='button'>Create Screening</button></td></tr>");

            $("#create").on('click',function(){
                

                $.ajax({
                    url: "/checkForOverScreening",
                    cache: false,
                    dataType: "json",
                    type: "POST",
                    data:{
                        Price :$("#NewPrice").val(),
                        Date: $("#NewDate").val(),
                        Time: $("#NewTime").val(),
                        Film: $("#NewFilm_id").val(),
                        Screen: $("#NewScreen_id").val(),
  
                    },success: function(res){
                        if(Object.keys(res).length === 0){
                            console.log(res);
                            alert("New Screening has been Successfully Created.");

                            $.ajax({
                                url: "/Screening",
                                cache: false,
                                dataType: "json",
                                type: "POST",
                                data:{
                                    operation: "CREATE",
                                    price :$("#NewPrice").val(),
                                    date: $("#NewDate").val(),
                                    time: $("#NewTime").val(),
                                    film_id: $("#NewFilm_id").val(),
                                    screen_id: $("#NewScreen_id").val(),
                                    totalSeatsBooked: $("#NewTotalSeatsBooked").val(),  
                                },success: function(res){
                                    alert("New Screening has been Successfully Created.");

                                }
                            });
                        }else{
                            alert("Screening Already Exists");
                        }  
                    }
                });

                
            });

            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $.each(data,function(i, value){

                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> <input id='price" + i + "' value =' " +  value.price + "'></input> </td><td> <input id='date" + i + "' value =' " +  value.date + "'></input> </td><td> <input id='time" + i + "' value =' " +  value.time + "'></input> </td><td> <input id='film_id" + i + "' value =' " +  value.film_id + "'></input> </td><td> <input id='screen_id" + i + "' value =' " +  value.screen_id + "'></input></td><td> <input id='totalSeatsBooked" + i + "' value =' " +  value.totalSeatsBooked + "'></input> </td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");
                    
                    //update screening
                    $("#update"+i).on('click',function(){
                        $.ajax({
                            url: "/Screening",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                operation: "UPDATE",
                                id : value.duration,
                                price :$("#price" + i).val(),
                                date: $("#date" + i).val(),
                                time: $("#time" + i).val(),
                                film_id: $("#film_id" + i).val(),
                                screen_id: $("#screen_id" + i).val(),
                                totalSeatsBooked: $("#totalSeatsBooked" + i).val(),  
                            },success: function(res){
                                alert($("#name" + i).val() +" has been Successfully Updated.");

                            }
                        });
                    });
                    
                    //delete Screening
                    $("#delete"+i).on('click',function(){
                        $.ajax({
                            url: "/delete",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                Table: "screening",
                                ID : value.id,
                            },success: function(res){
                                alert($("#name" + i).val() + " has been deleted. Please refresh to see changes");

                            }
                        });
                    });   
        

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

                    $("#tbody").append("<tr><td> "+ value.id + "</td><td> <input id='capacity" + i + "' value =' " +  value.capacity + "'></input> </td><td> <input id='open" + i + "' value =' " +  value.open + "'></input> </td><td><button id='update"+i + "' type='button'>Update</button></td><td><button id='delete"+i + "' type='button'>Delete</button></td></tr>");

                    //update screens
                    $("#update"+i).on('click',function(){
                        $.ajax({
                            url: "/Screens",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                operation: "UPDATE",
                                id : value.id,
                                capacity :$("#capacity" + i).val(),
                                open: $("#open" + i).val(),  
                                },success: function(res){
                                alert("Screen" + $("#name" + i).val() +" has been Successfully Updated.");

                            }
                        });
                    });

                    //delete Screens
                    $("#delete"+i).on('click',function(){
                        $.ajax({
                            url: "/delete",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                Table: "screens",
                                ID : value.id,
                            },success: function(res){
                                alert("Screen " +$("#name" + i).val() + " has been deleted. Please refresh to see changes");

                            }
                        });
                    });   
                

                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });

        }else if($("#crud").val() =="staff"){
            $("#thead").empty();
            $("#tbody").empty();

            //create new staff
            $("#thead").append("<th>Name</th><th>Email</th><th>Password</th><th>Phone Number</th><th></th><th></th>");
            $("#tbody").append("<tr><td><input id='NewStaffName'></input> </td><td> <input id='NewStaffEmail'></input> </td><td> <input id='NewStaffPassword'></input> </td><td> <input id='NewStaffPhone_no'></input> </td><td><button id='create' type='button'>Create New Staff</button></td></tr>");
            //create staff
            $("#create").on('click',function(){
                $.ajax({
                    url: "/Staff",
                    cache: false,
                    dataType: "json",
                    type: "POST",
                    data:{
                        operation: "CREATE",
                        name :$("#NewStaffName").val(),
                        email: $("#NewStaffEmail").val(),  
                        password: $("#NewStaffPassword").val(),
                        phone_no: $("#NewStaffPhone_no").val(),
                        },success: function(res){
                        alert("Staff: " + $("#NewStaffName").val() +" has been Successfully Created");

                    }
                });
            });


            $.getJSON("/getData/"+ $("#crud").val(),function(data){
                $.each(data,function(i, value){
                    $("#tbody").append("<tr><td> <input id='name" + i + "' value =' " +  value.name + "'></input> </td><td> <input id='email" + i + "' value =' " +  value.email + "'></input> </td><td> <input id='password" + i + "' value =' " +  value.password + "'></input> </td><td> <input id='phone_no" + i + "' value =' " +  value.phone_no + "'></input> </td><td><button id='update' type='button'>Update</button></td><td><button id='delete' type='button'>Delete</button></td></tr>");
                    //update staff
                    $("#update"+i).on('click',function(){
                        $.ajax({
                            url: "/Staff",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                operation: "UPDATE",
                                id : value.id,
                                name :$("#name" + i).val(),
                                email: $("#email" + i).val(),  
                                password: $("#password" + i).val(),
                                phone_no: $("#phone_no" + i).val(),
                                },success: function(res){
                                alert("Staff: " + $("#name" + i).val() +" has been Successfully Updated.");

                            }
                        });
                    });

                     //delete Staff
                     $("#delete"+i).on('click',function(){
                        $.ajax({
                            url: "/delete",
                            cache: false,
                            dataType: "json",
                            type: "POST",
                            data:{
                                Table: "staff",
                                ID : value.id,
                            },success: function(res){
                                alert("Screen " +$("#name" + i).val() + " has been deleted. Please refresh to see changes");

                            }
                        });
                    });   


                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error occurred when getting data for booking:", textStatus, errorThrown);
                alert("Error occurred when getting data for booking");
            });
        }


    });

});