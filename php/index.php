<?php

header('Content-Type: application/json');

$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Databasuppgifter
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trainotest";

try {
    $title = $data['title'] ?? '';
    $description = $data['desc'] ?? '';
    $user = $data['role'] ?? '';
    $check = $data['check'] ?? false;

    if ($check === true) {
        $truefalse = 1;
    } else {
        $truefalse = 0;
    }
    
    // Skapar PDO-anslutning och kör SQL-koden
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO testar(title, description, user, truefalse) VALUES('$title', '$description', '$user', '$truefalse');";

    $pdo->exec($sql);

    $response = array('title' => $title, 'description' => $description, 'user' => $user, 'truefalse' => $truefalse);

    echo json_encode($response);
} 

catch(PDOException $e) {
    $error = "Connection failed: " . $e->getMessage();
    echo json_encode($error);
}

// Återställer PDO-anslutning
$pdo = null;

?>