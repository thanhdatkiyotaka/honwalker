<?php
require "config.php";
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$email = $request->email;
$password = $request->password;

$query = "select * from taikhoan where EMAIL = '$email' and MATKHAU = '$password'";
$result = mysqli_query($connect, $query);

class Account {
    public $name, $photoUrl, $id;
    public $isAdmin = false;

}

$newAccount = new Account();

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $newAccount->id = $row['MA_TK'];
        $newAccount->name = $row['TEN'];
        $newAccount->photoUrl = $row['PHOTOURL'];
    }
    $query1 = "select * from webadmin where MA_AD = '$newAccount->id'";
    $result1 = mysqli_query($connect, $query1);
    if (mysqli_num_rows($result1) > 0) {
        $newAccount->isAdmin = true;
    }
    else {
        $newAccount->isAdmin = false;
    }
    echo json_encode($newAccount);
} 
else
    echo '';






?>