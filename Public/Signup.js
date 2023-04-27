$("document").ready(function(){

    $("#signup-button").on("click", function(){
        console.log( $("#name").val()); 
        console.log( $("#phone").val()); 
        console.log( $("#email").val()); 
        console.log( $("#password").val());
        
        var passReg = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-99!@#$%^&*]{7,}$/i;
        var emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 

        if($("#name").val()!= 0 || $("#phone").val() != 0 || $("#email").val() != 0 || $("#password").val() != 0){
          if(emailReg.test($("#email").val()) && passReg.test($("#password").val())){
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
          }else{
            $("#text").empty().append("<p style='color:red'>Please use More secure Password <br>or a valid email address</p>");
          }
        }else{
          $("#text").empty().append("<p style='color:red'>Please enter all details</p>");
        }
        
        
    });
});

