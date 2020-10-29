 <?php
$mysqli = new mysqli("localhost","root","root","egro_calculator");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?> 