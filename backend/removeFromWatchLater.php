<?php
    require_once 'db.php';
    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
   
    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);
    
    $email = trim($data['email'] ?? '');
    $movie_id = trim($data['movie_id'] ?? '');
    
    if (!$movie_id || !$email){
        echo json_encode(["status" => "error"]);
        exit;
    }

    $query = "DELETE FROM watch_later WHERE email='$email' AND `keys`='$movie_id'";

    // Execute the Query
    $result = mysqli_query($conn, $query);

    if (!$result) {
        echo json_encode(["status" => "error"]);
        exit;
    }

    echo json_encode([
        "status" => "success"
    ]);

?>