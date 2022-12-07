<?php
require "config.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$key = $request->key;


$query = "select * from sanpham where TEN_SP like '%$key%' order by SOLD";
$result = mysqli_query($connect, $query);

class Sanpham {
    public $name, $price, $supply, $sold, $sale, $href, $mota, $photoUrl;
    function Sanpham($name, $price, $supply, $sold, $sale, $href, $mota, $photoUrl) {
        $this->name = $name;
        $this->price = $price;
        $this->supply = $supply;
        $this->sold = $sold;
        $this->sale = $sale;
        $this->href = $href;
        $this->mota = $mota;
        $this->photoUrl = $photoUrl;
    }
}

$listProduct = array();

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($listProduct, new Sanpham($row['TEN_SP'], $row['GIA_SP'], $row['NHACUNGCAP_SP'], $row['SOLD'], $row['SALE'], $row['HREF'], $row['MOTA'], $row['PHOTOURL']));
    }
    echo json_encode($listProduct);
    
} 
else {
    echo 'no result';
}
    






?>