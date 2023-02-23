$("document").ready(function(){
  $("#post").on("click", function(){
      $.ajax({
        url: "http://localhost:3000/login",
        cache: false,
        dataType: "json",
        type: "Post",
        data:{
            Email: $("#email").val(),
            Password: $("#password").val()
        },
        success: function(res){
            console.log(res);
        }
    });
  });
});