<?php 
    session_start();
    
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");


    echo json_encode([
        "status" => "success",
        "name"  =>  $_SESSION['name']
    ]);
    
    //////////////
//     <?php
// session_start();
// header("Content-Type: application/json");

// if (!isset($_SESSION['user_id'])) {
//     echo json_encode([
//         "loggedIn" => false
//     ]);
//     exit;
// }

// echo json_encode([
//     "loggedIn" => true,
//     "user" => [
//         "id" => $_SESSION['user_id'],
//         "name" => $_SESSION['username'],
//         "role" => $_SESSION['role']
//     ]
// ]);
?>
// fetch("http://localhost/api/me.php", {
//   credentials: "include"
// })
//   .then(res => res.json())
//   .then(data => {
//     if (data.loggedIn) {
//       setUser(data.user);
//     }
//   });