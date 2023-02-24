$("document").ready(function(){


  $("#post").on("click", function(){
    var tmpEmail = $("#email").val();
    var tmp2 = tmpEmail.substring(tmpEmail.indexOf("@") + 1);

    $.ajax({
      url: "http://localhost:3000/login",
      cache: false,
      dataType: "json",
      type: "Post",
      data:{
        Email: $("#email").val(),
        Password: $("#password").val(),
        tmpEmail: tmp2
      },
      success: function(res){
        console.log(res);
        if(res.value == "True"){
          
          if(res.member =="staff"){
            document.cookie  = "StaffLogin = true" ;
            document.cookie  = "CustomerLogin = false" ;
            window.location.replace("/Admin.html");
          }
          else if(res.member =="customer"){
            document.cookie  = "CustomerLogin = true" ;
            document.cookie  = "StaffLogin = false" ;
            window.location.replace("/Home.html");
          }
        }
        else{
          $("#text").append("<p style='color:red'> Invalid Email or Password</p>");
        }
      }
    });
  });
  


});