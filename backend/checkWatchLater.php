<?php       
    require_once 'db.php';
    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);
    
    // TODO :: match the key values with the frontend form
    $movie_id        = trim($data['movie_id'] ?? '');
    $email        = trim($data['email'] ?? '');
    
    

    // check db connection
    if (!$conn){
        echo json_encode(["status"=>"error","message"=>"DB connection error"]);
        exit;
    }

    // Check exist or not
    $query = "SELECT*FROM watch_later where `keys`='$movie_id' AND email = '$email' LIMIT 1";

    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0){  
        // Already add to the Favourite list
        echo json_encode([
            "status"=>"success",
            "in_watchlater" => true,

        ]); 
        exit;
    } else {
        // Not in the Favourite list
        echo json_encode(["status"=>"error","in_watchlater" => false,
        ]); 
        exit;
    }
?>