<?php
    session_start();
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once "db.php";

    // Get frontend data
    $data = json_decode(file_get_contents("php://input"), true);

    $email    = $data['email'] ?? '';
    $password = $data['password'] ?? '';

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

    // Password doesn't match
    if (!password_verify($password, $row['hashed_password'])) {
        echo json_encode(["status" => "error", "message" => "Wrong password"]);
        exit;
    }

    $_SESSION['name'] = $row['name'];

    // Success
    echo json_encode([
        "status" => "success",
        "email"  => $row['email'],
        "name" => $_SESSION['name']
    ]);

?>