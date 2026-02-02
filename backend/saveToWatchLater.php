<?php
    require_once 'db.php';
    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    $data = json_decode(file_get_contents("php://input"), true);

    $email = trim($data['email'] ?? '');
    $movie_id = trim($data['movie_id'] ?? '');
    $movie_name = trim($data['movie_name'] ?? '');

    if (!$movie_id || !$email){
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
        exit;
    }

    $query = "INSERT INTO watch_later (email,movie_name,`keys`) VALUES('$email','$movie_name','$movie_id')";
    $result = mysqli_query($conn, $query);

    if (!$result) {
        echo json_encode(["status" => "error", "message" => "Database error"]);
        exit;
    }

    echo json_encode(["status" => "success"]);
?>