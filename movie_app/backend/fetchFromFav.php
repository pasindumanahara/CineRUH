<?php 
    // TODO :: this file should run with list fav button 
    require_once 'db.php';

    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Email from server session data
    $email = $_SESSION['email'];

    // Get the keys from db , related to user email
    $query = "SELECT keys FROM fav_list WHERE email = '$email'";

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

    // React way to list fav
    
    //import { useEffect, useState } from "react";

    // function Messages() {
    // const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost/api/fetchFromFav.php")
    //     .then(res => res.json())
    //     .then(data => setMessages(data));
    // }, []);

    // return (
    //     <div>
    //     {messages.map((msg, index) => (
    //         <div key={index}>{msg}</div>
    //     ))}
    //     </div>
    // );
    // }

    // export default Messages;

?>
