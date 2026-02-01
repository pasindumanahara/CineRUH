<?php
    require_once 'db.php';
    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name    = trim($data['name'] ?? '');
    $email   = trim($data['email'] ?? '');
    $message = trim($data['message'] ?? '');

    // Validate user email
    $validate_user_query = "SELECT * FROM users WHERE email = '$email'";

    if (!$conn){
         echo json_encode([
            "status" => "error",
            "message" => "DB error"
        ]);
        exit;
    }

    $first_line = mysqli_query($conn, $validate_user_query)->fetch_assoc();

    if (!($first_line > 0)) {
        echo json_encode([
            "status" => "error",
            "message" => "Invalid email"
        ]);
        exit;
    }

    $send_data_query = "INSERT INTO messages (email,name,message) VALUES ('$name','$email','$message')";
    $result = mysqli_query($conn, $send_data_query);
    
    if (!$result) {
        echo json_encode([
            "status" => "error",
            "message" => "DB Error"
        ]);
        exit;
    }
    
    echo json_encode([
        "status" => "success",
        "message" => "Successfully send the message"
    ]);


?>