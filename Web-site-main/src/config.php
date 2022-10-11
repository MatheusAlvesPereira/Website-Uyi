<?php

    echo 'Hello world'

    $username = '#';
    $password = '#';
    $dsn = '#';
    $dbh = null;

    try {
        $dbh = new PDO($dsn, $username, $password);
    } 
    catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
        exit;
    }
?>