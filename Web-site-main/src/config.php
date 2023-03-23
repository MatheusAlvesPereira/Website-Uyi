<?php
    $username = 'SYSDBA';
    $password = '2302';
    $dbh = null;

    try {
        $pdo = new PDO("firebird:localhost=localhost;dbname=DATABASE",$username,$password);    
    } 
    catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
        exit;
    }

    if(isset($_POST['email'])){
        $sql = $pdo->prepare("INSERT INTO CLIENTES Values (null,?,?)");
        $sql->execute(array($_POST['email'], $_POST['senha']));
        echo('INSERT SUCESS!!!!');
    }

    echo('funcionou');  
?>