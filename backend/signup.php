<?php
require_once "db.php";
    session_start();
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    

    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);

    $name            = trim($data['username'] ?? '');
    $email           = trim($data['email'] ?? '');
    $password        = trim($data['password'] ?? '');
    $confirmPassword = trim($data['confirmPassword'] ?? '');

    // Validate user inputs



    // Check any feild is empty
    if ($name === '' || $email === '' || $password === '' || $confirmPassword === ''){
        echo json_encode(["status" => "error", "message" => "Please fill all the fields"]);
        exit;
    }

    // Database connection check
    if (!$conn) {
        echo json_encode(["status" => "error", "message" => "DB error"]);
        exit;
    }
    
    // Check email is in valid format
    $pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
    if(preg_match($pattern, $email) !== 1){
        echo json_encode(["status" => "error", "message" => "Invalide email format"]);
        exit;
    }

    // Handle duplicate email and password and confirmation of password not matching
    if ($password != $confirmPassword){
        echo json_encode(["status" => "error", "message" => "Re-Enter password"]);
        exit;
    }

    $test_query = "SELECT * FROM users WHERE email = '$email'";
    $test_result = mysqli_query($conn, $test_query);

    // TODO :: Check this for what is the return
    if (mysqli_num_rows($test_result) > 0) {
        echo json_encode(["status" => "error", "message" => "Email already registered"]);
        exit;
    }
 
    // Hash the password
    $hashed_password = password_hash($password,PASSWORD_DEFAULT);

    // Query to select all the data about user (from email)
    $query = "INSERT INTO users (name,email,hashed_password) VALUES('$name','$email','$hashed_password')";

    // Execute the Qeury
    $result = mysqli_query($conn, $query);

    if (!$result) {
        echo json_encode(["status" => "error", "message" => "Database error"]);
        exit;
    }

    echo json_encode([
        "status" => "success",
        "message" => "User sign-up successfully",
    ]);
    

?>