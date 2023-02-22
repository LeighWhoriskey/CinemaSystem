function login() {
    // Get the user's email and password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Send an AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        // Redirect the user to the appropriate page
        if (this.responseText === "Login successful!") {
          window.location.href = "home.html";
        } else {
          window.location.href = "screening.html";
        }
      }
    };
    xhr.send("email=" + email + "&password=" + password);
  }
  