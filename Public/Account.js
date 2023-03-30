$("document").ready(function(){
    var id;
    var cookie = document.cookie;
    if (cookie) {
    var tmpid = cookie.split("Cust_id=");
    if (tmpid.length > 1) {
    var idArr = tmpid[1].split(";");
    if (idArr.length > 0) {
    id = idArr[0];
    }
    }
    }

    $(document).ready(function() {
        $(".toggle-password-icon").click(function() {
          var input = $(this).prev();
          if (input.attr("type") === "password") {
            input.attr("type", "text");
            $(this).children().removeClass("fa-eye-slash").addClass("fa-eye");
          } else {
            input.attr("type", "password");
            $(this).children().removeClass("fa-eye").addClass("fa-eye-slash");
          }
        });
      });
      
    
    $.getJSON("/getCustomer/" + id, function(data){
        console.log(data);
        $.each(data,function(i, value){
            $("email").val(value.email);
            $("password").val(value.password);
            $("#name").val(value.name);
            $("#phone_no").val(value.phone_no);
        });
        
    }).fail(function() {
        alert("An error occurred while retrieving customer information");
    });
    
    $("#submit-btn").on("click", function(e){
        e.preventDefault();
        
        var nameValue = $("#name").val();
        var phoneValue = $("#phone_no").val();
        var emailValue = $("#email").val();
        var passwordValue = $("#password").val();
    
        if(nameValue.trim() == "" || phoneValue.trim() == "" || emailValue.trim() == "" || passwordValue.trim() == ""){
            alert("All fields are required");
            return;
        }
            
        $.ajax({
            url: "/updateCustomer",
            cache: false,
            dataType: "json",
            type: "POST",
            data: {
                id: id,
                name: nameValue,
                phone: phoneValue,
                email: emailValue,
                password: passwordValue,
            },
            success: function(res){
                alert("Information updated successfully. Values: " + nameValue + ", " + phoneValue + ", " + emailValue + ", " + passwordValue);
                document.cookie = "Cust_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.href = "/Login.html";
            },
            error: function(xhr, status, error){
                alert("An error occurred while updating information");
            }
        });
    });});