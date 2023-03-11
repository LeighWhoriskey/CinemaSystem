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
	});
	
	// Update customer information when the form is submitted
	$("#customer-info").on("submit", function(e){
		e.preventDefault();
		$.ajax({
			url: "/updateCustomer",
			type: "POST",
			data: {
				id: id,
				name: $("#name").val(),
				age: $("#age").val(),
				phone_no: $("#phone_no").val(),
				email: $("#email").val(),
				password: $("#password").val()
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
