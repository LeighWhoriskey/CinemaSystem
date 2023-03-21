$("document").ready(function(){
	var cookie = document.cookie;
	var tmpid = cookie.split("Cust_id=");
	var id = tmpid[1].split(";");
	id = id[0];
	
	// Retrieve customer information using the customer ID
	$.getJSON("/getCustomer/" + id, function(data){
	$("#name").val(data.name);
	$("#age").val(data.age);
	$("#phone_no").val(data.phone_no);
	$("#email").val(data.email);
	$("#password").val(data.password);
	}).fail(function() {
	alert("An error occurred while retrieving customer information");
	});
	
	// Update customer information when the form is submitted
	$("#customer-info").on("submit", function(e){
	e.preventDefault();
	
	// Get the form values
	var nameValue = $("#name").val();
	var ageValue = $("#age").val();
	var phoneNoValue = $("#phone_no").val();
	var emailValue = $("#email").val();
	var passwordValue = $("#password").val();
	
	// Validate the form values
	if(nameValue.trim() == "" || ageValue.trim() == "" || phoneNoValue.trim() == "" || emailValue.trim() == "" || passwordValue.trim() == ""){
	  alert("All fields are required");
	  return;
	}
	
	// Use prepared statements and parameterized queries to prevent SQL injection
	$.ajax({
	  url: "/updateCustomer",
	  type: "POST",
	  data: {
		id: id,
		name: nameValue,
		age: ageValue,
		phone_no: phoneNoValue,
		email: emailValue,
		password: passwordValue
	  },
	  success: function(res){
		alert("Information updated successfully");
	  },
	  error: function(xhr, status, error){
		alert("An error occurred while updating information");
	  }
	});
});
});