<?php

try {
    if (isset($_POST['title']) && isset($_POST['description']) && isset($_POST['user'])  && isset($_POST['truefalse'])) {
        $object->title = $_POST['title'];
        $object->description = $_POST['description'];
        $object->user = $_POST['user'];
        $object->truefalse = $_POST['truefalse'];
        
        $pdo;

        $sql = "INSERT INTO testar(title, description, user, truefalse) VALUES('$object->title', '$object->description', '$object->user', '$object->truefalse');";

        $pdo->exec($sql);

        echo json_encode($object);
    }
} 

catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$pdo = null;

?>