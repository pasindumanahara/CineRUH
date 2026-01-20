<?php   
    // Usage --> For the frontend to change the Fav icon color
    // Attenction --> Did not use any error messages, just success and error, 
    
    require_once 'db.php';
    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);
    
    // TODO :: match the key values with the frontend form
    $key        = trim($data['key'] ?? '');
    $movie_name = trim($data['movie_name'] ?? '');

    // check db connection
    if (!$conn){
        echo json_encode(["status"=>"error","message"=>"DB connection error"]);
        exit;
    }

    // Check exist or not
    $query = "SELECT*FROM fav_list where `key`=$key LIMIT 1";

    $result = mysqli_query($conn, $query);

    if ($result){  
        // Already add to the Favourite list
        echo json_encode(["status"=>"success"]); 
        exit;
    } else {
        // Not in the Favourite list
        echo json_encode(["status"=>"error"]); 
        exit;
    }
?>