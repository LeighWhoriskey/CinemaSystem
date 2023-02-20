$("document").ready(function(){
    $("#NavBar").addClass("navbar");

    $("#NavBar").append("<img src='images/logo.png' height='60px'>");
    $("#NavBar").append("<div class='navbar-items'>" +
        "<a href='Home.html'>Home</a>" +
        "<a href='Screening.html'>Screenings</a>" +
        "<a href='Booking.html'>Bookings</a>" +
        "<a href='Login.html'>Login</a>" +
        "<a href='CRUD.html'>CRUD</a>" +
        "</div>");

        //$("#LogIn").append("a href<'Login.html'>Login</a>");

    $("#footer").append("<hr><p style='text-align: center'> Copyright © 2023 L00156477 - L00152828 - L00158710 - L00157862</p>");
});
