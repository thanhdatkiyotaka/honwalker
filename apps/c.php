

<?php
include '../db.php';
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    $id = $_GET['id'];
    $db = new Database();
    $conn = $db->getConnection();
    $sql_statement = "SELECT * FROM products WHERE id=$id";
    $product = $conn->query($sql_statement)->fetch();
    // print_r($product);
    echo json_encode($product);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $id = $_POST['id'];

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
    $sql_statement = "UPDATE products set name ='$name', price='$price', description='$description', image='$image' where id='$id'";
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