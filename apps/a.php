<?php
include '../db.php';

$db = new Database();
$conn = $db->getConnection();
$sql_statement = "SELECT * FROM products";
$products = $conn->query($sql_statement)->fetchAll();

echo json_encode($products);
?>
