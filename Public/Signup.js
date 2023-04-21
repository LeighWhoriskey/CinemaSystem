$("document").ready(function(){

    $("#signup-button").on("click", function(){
        console.log( $("#name").val()); 
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
            phone_no: $("#phone").val(),
            email: $("#email").val(),
            password: $("#password").val()
          },
          success: function(res){
            console.log(res);

            if(Object.keys(res).length === 0){
              $.ajax({
                url: "/getCustomerbyName",
                cache: false,
                dataType: "json",
                type: "Post",
                data:{
                  name: $("#name").val(),
                  phone_no: $("#phone").val(),
                  email: $("#email").val(),
                  password: $("#password").val()
                },
                success: function(res){
                  console.log(res);
                  if(Object.keys(res).length !== 0){
                    $.each(res,function(i,value){
                      document.cookie  = "CustomerLogin = true";
                      document.cookie  = "StaffLogin = false";
                      document.cookie  = "Cust_id =" + value.id;
                      window.location.replace("/Home.html");
                    })
                  }                  
                }
              }); 

            }
          }
        });

    });
});

