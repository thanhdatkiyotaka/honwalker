<?php
require "./db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$db = new Database();
$conn = $db->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    $sql_statement = "SELECT * FROM sanpham ORDER BY MA_SP DESC";
    $products = $conn->query($sql_statement)->fetchAll();

    echo json_encode($products);
}


?>