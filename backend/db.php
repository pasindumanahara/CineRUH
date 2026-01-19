<?php 
    // Making the connection with the database
    $host     = "localhost";
    $username = "root";
    $password = "1234";
    $db_name  = "movie";

    // Creating a db connection 
    $conn = mysqli_connect($host, $username, $password, $db_name);

?>