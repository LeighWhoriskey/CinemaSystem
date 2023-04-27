$("document").ready(function(){


  $("#login-button").on("click", function(){

    if($("#email").val() != 0 || $("#password").val() != 0){
      var tmpEmail = $("#email").val();
      console.log($("#email").val())
      console.log($("#password").val())
  
        var tmp2 = tmpEmail.substring(tmpEmail.indexOf("@") + 1);
  
        $.ajax({
          url: "/login",
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
                window.location.replace("/Admin.html");
              }
              else if(res.member =="customer"){
                document.cookie  = "CustomerLogin = true";
                document.cookie  = "StaffLogin = false";
                document.cookie  = "Cust_id =" + res.ID;
                window.location.replace("/Home.html");
              }
            }
            else{
              $("#text").empty().append("<p style='color:red'> Invalid Email or Password</p>");
            }
          }
        });

    }else{
      $("#text").empty().append("<p style='color:red'>Please enter Email and Password</p>");
    }
  });
});