<?php 
    require_once 'db.php';

    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Email from server session data
    $email = $_SESSION['email'];

    // Get the keys from db , related to user email
    $query = "SELECT keys FROM watch_later WHERE email = '$email'";

    // Establish connection and fetch resul into result
    $result = mysqli_query($conn, $query);

    // Empty list
    if (mysqli_num_rows($result) === 0) {
        echo json_encode([
            "status" => "success",
            "key_list" => []
        ]);
        exit;
    }


    $keys = [];
    // Fetch each line and to json obj
    while ($row = mysqli_fetch_assoc($result)) {
        $keys[] = $row['keys'];
    }

    // Success --> return keys to fronend
    echo json_encode([
        "status" => "success",
        "key_list" => $keys
    ]);
?>
