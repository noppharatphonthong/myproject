<?php
     header('Content-Type: application/json');
     header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
     header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');  
     header("Content-Type: application/json;charset=utf-8");
     
     $data = json_decode(file_get_contents('php://input'), true);
     $address = $data['address'];
     $villageno = $data['villageno'];
     $password = $data['password'];

    require "conndb.php";
    $sql = "    SELECT * FROM house a INNER JOIN customer b ON a.customer_id=b.customer_id
                WHERE address='$address'and village_no='$villageno'and password='$password' 
                ";

        $result = mysqli_query($conn,$sql);
        $arr = array();
        while($row = mysqli_fetch_assoc($result))
        {
                $arr[]=$row;
        }
        if($arr) {
                echo '{"status":"ok","message":"ok","photo":"'.$arr[0]["photo"].'", "name":"'.$arr[0]["name"].'", "lastname":"'.$arr[0]["lastname"].'"}';
        
        }else{
                echo '{"status":"null","message":"address หรือ villageno หรือ password ไม่ถูกต้อง"}';
        }
?>



    
