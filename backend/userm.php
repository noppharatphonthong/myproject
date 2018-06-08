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
     $year = $data['year'];
    //  $address = "1";
    //  $villageno ="1";
    //  $password = "1";
    //  $year = "2018";
    
    require "conndb.php";
    $sql = "    SELECT * FROM house
                WHERE address='$address'and village_no='$villageno'and password='$password' 
                ";

        $result = mysqli_query($conn,$sql);
        $arr = array();
        while($row = mysqli_fetch_assoc($result))
        {
                $arr[]=$row;
        }
        if($arr) {
                $houseId = $arr[0]["house_id"];
                $sqlmeter = "    SELECT money,MONTH(datatime) AS mm FROM meter_management
                WHERE house_id='$houseId'
                and YEAR(datatime)='$year'";

                $resultmeter = mysqli_query($conn,$sqlmeter);
                $arrmeter = array();
                while($rowmeter = mysqli_fetch_assoc($resultmeter))
                {
                        $arrmeter[]=$rowmeter;
                }
                if($arrmeter) {
                $mm = $arrmeter[0]["mm"];
                $a=array();
                if($mm>1){
                        for($i=0;$i<$mm-1;$i++){
                                array_push($a,"0");
                        }
                }

                // echo '['.$mm.']';
                
                for($i=0;$i<count($arrmeter);$i++){
                        array_push($a,$arrmeter[$i]["money"]);
                }
                echo '[{"meter":'.json_encode($a).'}]';
                }else{
                    echo '[{"meter":[0]}]';
            }
        
        }else{
                echo '[{"meter":[0]}]';
        }
?>
