<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: *");

$servername = "localhost";
$username   = "root";
$password   = "htkieT0964643875";
$dbname     = "hieusach";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$trp = mysqli_query(
    $conn,
    "SELECT SUM(GIA_SP) as total
    FROM sanpham join chitietgiohang on sanpham.MA_SP = chitietgiohang.MA_SP
    WHERE MA_TK = 5"
);
$rows = mysqli_fetch_assoc($trp);
print json_encode($rows);
