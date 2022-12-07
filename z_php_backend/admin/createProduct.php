<?php
require "./db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-type: multipart/form-data");
$db = new Database();
$conn = $db->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $id = $_GET['id'];
    $sql_statement = "SELECT * FROM sanpham WHERE MA_SP=$id";
    $product = $conn->query($sql_statement)->fetch();

    echo json_encode($product);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $file_name = '';
    if ($_FILES['file']){
        $upload_dir = dirname(__DIR__, 2).'/src/assets/images/';
        $file_name = $_FILES["file"]["name"][0];
        echo $file_name;
        $file_tmp_name = $_FILES["file"]["tmp_name"][0];
        $upload_name = $upload_dir.$file_name;
        move_uploaded_file($file_tmp_name, $upload_name);
    }
    $TEN_SP = $_POST['TEN_SP'];
    $GIA_SP = $_POST['GIA_SP'];
    $NHACUNGCAP_SP = $_POST['NHACUNGCAP_SP'];
    $TYPEONE = $_POST['TYPEONE'];
    $TYPETWO = $_POST['TYPETWO'];
    $TYPETHERE = $_POST['TYPETHERE'];
    $SOLD = $_POST['SOLD'];
    $MO_TA = $_POST['MOTA'];
    $phptourl = '~/assets/image/'.$file_name;
    $sql_statement = "INSERT INTO sanpham (TEN_SP, GIA_SP, NHACUNGCAP_SP, TYPEONE,TYPETWO, TYPETHREE, SOLD, MOTA, TINHTRANG_SP, PHOTOURL ) values ('$TEN_SP', '$GIA_SP', '$NHACUNGCAP_SP', '$TYPEONE', '$TYPETWO', '$TYPETHERE', '$SOLD', '$MO_TA', '1', '$phptourl')";
    try {
        $products = $conn->query($sql_statement);
        die();
    } catch (PDOException $exception) {
        echo "Create product error: " . $exception->getMessage();
    }
}

