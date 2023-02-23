$("document").ready(function(){
  $("#NavBar").addClass("navbar");

      "<a href='Booking.html'>Bookings</a>" +

    $("#NavBar").append("<img src='images/logoback.png' height='90px'>");

    $("#NavBar").append("<div class='navbar-items'>" +
        "<a href='Home.html'>Home</a>" +
        "<a href='Movie.html'>Screenings</a>" +
        "<a href='Booking.html'>Bookings</a>" +
        "<a href='Login.html'>Login</a>" +
        "<a href='CRUD.html'>CRUD</a>" +
        "</div>");

            
        //$("#LogIn").append("a href<'Login.html'>Login</a>"),

  $("#NavBar").append("<a href ='Login.html'> <img src='images/login.png' height='60px'></a>");

var footerDiv = $("<div id='footer'></div>");

// Add a horizontal line to separate the footer from the rest of the page
var hr = $("<hr>");
footerDiv.append(hr);

// Create a container for the footer links
var footerLinks = $("<div class='footer-links'></div>");

// Add each footer link to the container
var link1 = $("<a href='#'>About Us</a>");
var link2 = $("<a href='#'>Contact Us</a>");
var link3 = $("<a href='#'>Privacy Policy</a>");
var link4 = $("<a href='#'>Terms of Use</a>");
footerLinks.append(link1, link2, link3, link4);

// Add the footer links container to the footer div
footerDiv.append(footerLinks);

// Add the copyright notice to the footer
var copyright = $("<p>© 2023 L00156477 - L00152828 - L00158710 - L00157862</p>");
footerDiv.append(copyright);

footerDiv.css({
    "background": "linear-gradient(180deg, #0BD3F6 0%, #AF69FF 100%)",
    "color": "#fff",
    "font-size": "14px",
    "text-align": "center",
    "padding": "30px 0"
  });
  
  footerLinks.css({
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "margin-bottom": "20px"
  });
  
  footerLinks.find("a").css({
    "color": "#fff",
    "text-decoration": "none",
    "margin": "0 20px"
  });
  
  hr.css({
    "border": "none",
    "border-top": "1px solid #fff",
    "margin": "0"
  });

// Append the footer div to the body of the page
$("body").append(footerDiv);

});
