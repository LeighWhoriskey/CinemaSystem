$("document").ready(function(){

    $("#post").on("click", function(){
        console.log( $("#name").val()); 
        console.log( $("#age").val()); 
        console.log( $("#phone_no").val()); 
        console.log( $("#email").val()); 
        console.log( $("#password").val()); 
  
        $.ajax({
          url: "http://localhost:3000/Customer",
          cache: false,
          dataType: "json",
          type: "Post",
          data:{
            operation: "CREATE",
            name: $("#name").val(),
            age: $("#age").val(),
            phone_no: $("#phone").val(),
            email: $("#email").val(),
            password: $("#password").val()
          },
          success: function(res){
            console.log(res);
                window.location.replace("/Home.html");
            }
        });
      });
});