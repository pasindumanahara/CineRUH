<?php
    require_once 'db.php';
    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    
    // Get the username and email
    $email = $_SESSION['email'];
    
    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);

    $key = trim($data['key'] ?? '');
    $movie_name = trim($data['movie_name'] ?? '');
    
    if (!$key && !$movie_name){
        echo json_encode(["status" => "error", "message" => "Empty selected"]);
        exit;
    }

    $query = "INSERT INTO fav_list (email,movie_name,keys) VALUES($email','$movie_name','$key')";

    // Execute the Qeury
    $result = mysqli_query($conn, $query);

    if (!$result) {
        echo json_encode(["status" => "error", "message" => "Database erro"]);
        exit;
    }

    $message = "$movie_name Added to Favourite List";

    echo json_encode([
        "status" => "success",
        "message" => $message
    ]);

?>