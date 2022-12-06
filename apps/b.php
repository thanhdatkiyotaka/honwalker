<?php
include '../db.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    print_r($_POST);
    if (strlen($name) > 40 or strlen($name) < 5) {
        echo "<script type='text/javascript'>alert('Name must from 5 -> 40 character');</script>";
    }
    if (strlen($description) > 5000) {
        echo "<script type='text/javascript'>alert('Description must lower than 5000 character');</script>";
    }
    if (gettype($price) == 'double') {
        echo "<script type='text/javascript'>alert('Price must type double');</script>";
    }
    if (strlen($image) > 255) {
        echo "<script type='text/javascript'>alert('Image must lower than 255 character');</script>";
    }
    $db = new Database();
    $conn = $db->getConnection();
    $sql_statement = "INSERT INTO products (name, price, description, image) values ('$name', '$price', '$description', '$image')";
    echo $sql_statement;
    try {
        $products = $conn->query($sql_statement);
        header("Location: /");
        die();
    } catch (PDOException $exception) {
        echo "Create product error: " . $exception->getMessage();
    }
}
?>