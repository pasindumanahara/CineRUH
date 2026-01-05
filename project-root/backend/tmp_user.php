<?php 
    $conn = mysqli_connect("localhost", "root", "1234", "movie");
    $password = password_hash("1234",PASSWORD_DEFAULT);
 
    $sql = "insert into users (email,hashed_password,role) values('test@gmail.com','$password','admin');";
    
    try {
        mysqli_query($conn,$sql);
    } catch (mysqli_sql_exception $e) {
        echo "error".$e;
    }


    echo "$password";
?>    

?>      