<?php
class Database
{
    private $host = "127.0.0.1";
    private $database_name = "shop";
    private $username = "root";
    private $password = "";

    public $conn;

    public function getConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Database could not be connected: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
$id = $_GET["id"];
$db = new Database();
$conn = $db->getConnection();
$sql_statement = "DELETE FROM products WHERE id =".$id;
try {
    $conn->query($sql_statement);
    header("Location: /");
    die();
} catch (PDOException $exception) {
    echo "Delete product error: " . $exception->getMessage();
}

?>
