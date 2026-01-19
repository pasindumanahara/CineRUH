<?php
    session_start();

    // Clear all the session variables
    $_SESSION[] = '';

    session_destroy();

    echo json_encode([
        "status" => "success",
        "message" => "Logout successfully!"
    ]);
?>