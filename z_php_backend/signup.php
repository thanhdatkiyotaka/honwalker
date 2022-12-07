<?php
require "config.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$email = $request->email;
$password = $request->password;

$query = "select * from taikhoan where EMAIL = '$email'";
$result = mysqli_query($connect, $query);





if (mysqli_num_rows($result) > 0) {
    echo "fail";

} else {
    $query1 = "insert into taikhoan (EMAIL, TEN, MATKHAU)
    values ('$email', '$email', '$password')";
    mysqli_query($connect, $query1);
    echo 'success';
}




?>