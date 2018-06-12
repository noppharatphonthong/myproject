<?php
       header('Content-Type: application/json');
       header('Access-Control-Allow-Origin: *');
       header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
       header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');  
       header("Content-Type: application/json;charset=utf-8");
       
       $data = json_decode(file_get_contents('php://input'), true);
        
       require "conndb.php";
       $sql = " select * from house where house_id not in(
                select a.house_id from( SELECT h.house_id,address,h.village_no,m.datatime,count(*) 
                FROM house h 
                LEFT JOIN meter_management m 
                ON h.house_id=m.house_id 
                where MONTH(m.datatime)=6
                and YEAR(datatime)=2018  
                GROUP by h.address,h.village_no,m.datatime) a) ";
       
       
       
       $result = mysqli_query($conn,$sql);
           if($result) {
       $arr = array();
           while($row = mysqli_fetch_assoc($result))
               {
               $arr[]=$row;
               }
           echo json_encode($arr);
           }
           
       ?>
