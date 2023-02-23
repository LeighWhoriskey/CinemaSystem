<?php

// Retrieve the email and password for the given user
$email = $_POST["email"];
$password = $_POST["password"];

// Connect to the database
$servername = "localhost";
$username = "root";
$password_db = "";
$dbname = "cinema";

$conn = mysqli_connect($servername, $username, $password_db, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Construct the SQL query
$sql = "SELECT email, password FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

// Check if the query returned a result
if (mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  // Verify the password
  if ($password === $row["password"]) {
    alert( "Login successful!");  
  } else {
    echo "Invalid email or password.";
  }
} else {
  echo "Invalid email or password.";
}

// Close the database connection
mysqli_close($conn);
?>
