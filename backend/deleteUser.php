<?php 
    include_once 'db.php';
    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    $data = json_decode(file_get_contents("php://input"), true);

    $email    = $data['email'] ?? '';

    // Check email and password null 
    if ($email === "") {
        echo json_encode([
            "status" => "error",
            "message" => "Please fill all fields"
        ]);
        exit;
    }

    // Database connection check
    if (!$conn) {
        echo json_encode(["status" => "error", "message" => "DB error"]);
        exit;
    }

    // Query to select all the data about user (from email)
    $query = "SELECT * FROM users WHERE email = '$email'";

    // Catch the return result
    $result = mysqli_query($conn, $query);

    // Fetch first assosiative array
    $row = $result->fetch_assoc();

    // No rows --> No matching user
    if (!$row) {
        echo json_encode(["status" => "error", "message" => "User not found"]);
        exit;
    }


    // Query to delete user
    $delete_user = "DELETE FROM users WHERE email='$email'";
    $delete_watched = "DELETE FROM watched WHERE email='$email'";
    $delete_fav = "DELETE FROM fav_list WHERE email='$email'";
    $delete_watch_later = "DELETE FROM watch_later WHERE email='$email'";
    
    $result_dlt_user = mysqli_query($conn, $delete_user);
    $result_dlt_watched = mysqli_query($conn, $delete_watched);
    $result_dlt_fav = mysqli_query($conn, $delete_fav);
    $result_dlt_watch_later = mysqli_query($conn, $delete_watch_later);    

    // Check return 
    if (!$result_dlt_fav || !$result_dlt_watched || $result_dlt_watch_later || $result_dlt_user) {
        echo json_encode(["status" => "error", "message" => "DB Error"]);
        exit;
    }

    $ucfirstname = ucfirst($name);
    $message = `$ucfirstname has successfully deleted`;
    
    echo json_encode([
        "status" => "success",
        "message" => $message
    ]);    

?>