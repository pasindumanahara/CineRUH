<?php 
    require_once 'db.php';

    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);

    $email    = $data['email'] ?? '';

    // Check email and password null 
    if ($email === "") {
        echo json_encode([
            "status" => "error",
        ]);
        exit;
    }

    // Database connection check
    if (!$conn) {
        echo json_encode(["status" => "error", "message" => "DB error"]);
        exit;
    }

    // Query lists to get from DB
    $fav_list_query = "SELECT * FROM fav_list WHERE email = '$email'";
    $watch_later_query = "SELECT * FROM watch_later WHERE email = '$email'";
    $watched_query = "SELECT * FROM watched WHERE email = '$email'";
    
    // Results
    $fav_list_result = mysqli_query($conn, $fav_list_query);
    $watch_later_result = mysqli_query($conn, $watch_later_query);
    $watched_result = mysqli_query($conn, $watched_query);
    
    // While loops to store each in an array
    $fav_key_list = [];
    while ($row = $fav_list_result->fetch_assoc()) {
        $fav_key_list[] = $row['movie_name'];
    }
    
    $watch_later_key_list = [];
    while ($row = $watch_later_result->fetch_assoc()) {
        $watch_later_key_list[] = $row['movie_name'];
    }
    
    $watched_key_list = [];
    while ($row = $watched_result->fetch_assoc()) {
        $watched_key_list[] = $row['movie_name'];
    }

    // JSON encode
    echo json_encode([
        "status" => "success",
        "fav_list" => $fav_key_list,
        "watch_later_list" => $watch_later_key_list,
        "watched_list" => $watched_key_list
    ]);


?>