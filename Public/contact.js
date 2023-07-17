$("document").ready(function(){
    
    $("#send").on("click",function(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "decadecinema@gmail.com",
            Password : "3427DEF415020DA8D677FFDA47E151070ED4",
            To : "decadecinema@gmail.com",
            From : $("#email").val(),
            Subject : "Booking Conformation",
            Body : "<html>"+$("#message").val()+ "</html>"
        
        });
    })

    
    


})