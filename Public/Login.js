$("document").ready(function(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  $("#post").on("click", function(){
      $.ajax({
        url: "http://localhost:3000/login",
        cache: false,
        dataType: "json",
        type: "Post",
        data:{
            Email: email,
            Password: password
        },
        sucess: function(res){
            alert(res);
        }
    });
  });
  


});