<?php
    require_once 'db.php';

    $email = 'test@gmail.com';
    
    $fav_list_query = "SELECT * FROM fav_list WHERE email = '$email'";
    $watch_later_query = "SELECT * FROM watch_later WHERE email = '$email'";
    $watched_query = "SELECT * FROM watched WHERE email = '$email'";
    
    $fav_list_result = mysqli_query($conn, $fav_list_query);
    $watch_later_result = mysqli_query($conn, $watch_later_query);
    $watched_result = mysqli_query($conn, $watched_query);
    
    $fav_key_list = [];
    while ($row = $fav_list_result->fetch_assoc()) {
        $fav_key_list[] = $row['keys'];
    }
    
    $watch_later_key_list = [];
    while ($row = $watch_later_result->fetch_assoc()) {
        $watch_later_key_list[] = $row['keys'];
    }
    
    $watched_key_list = [];
    while ($row = $watched_result->fetch_assoc()) {
        $watched_key_list[] = $row['keys'];
    }

    echo json_encode([
        "status" => "success",
        "fav_list" => $fav_key_list,
        "watch_later_list" => $watch_later_key_list,
        "watched_list" => $watched_key_list
    ]);
    
    #var_dump($row)

?>