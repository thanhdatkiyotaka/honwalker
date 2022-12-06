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
    "SELECT * from chitietgiohang 
    join sanpham on chitietgiohang.MA_SP = sanpham.MA_SP  
    WHERE MA_TK = 5"
);
$rows = array();
while ($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}
print json_encode($rows);
