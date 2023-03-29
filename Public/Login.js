$("document").ready(function(){


  $("#login-button").on("click", function(){
    var tmpEmail = $("#email").val();
    
    var tmp2 = tmpEmail.substring(tmpEmail.indexOf("@") + 1);

    $.ajax({
      url: "http://localhost:3000/login",
      cache: false,
      dataType: "json",
      type: "POST",
      data:{
        Email: $("#email").val(),
        Password: $("#password").val(),
        tmpEmail: tmp2
      },
      success: function(res){
        console.log(res);
        
        if(res.value == "True"){
          
          if(res.member =="staff"){
            document.cookie  = "StaffLogin = true";
            document.cookie  = "CustomerLogin = false";
            window.location.replace("http://localhost/CinemaSystem/Public/Admin.html");
          }
          else if(res.member =="customer"){
            document.cookie  = "CustomerLogin = true";
            document.cookie  = "StaffLogin = false";
            document.cookie  = "Cust_id =" + res.ID;
            window.location.replace("http://localhost/CinemaSystem/Public/home.html");
          }
        }
        else{
          $("#text").append("<p style='color:red'> Invalid Email or Password</p>");
        }
      }
    });
  });
});