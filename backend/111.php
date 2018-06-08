<?php

        require "conndb.php";
     $sql = "   SELECT h.house_id,p.* FROM problem p inner JOIN house h on p.house_id=h.house_id WHERE status = 'ยังไม่ได้แก้' ";
 
     $result = mysqli_query($conn,$sql);
 
     $arr = array();
     while($row = mysqli_fetch_assoc($result))
     {
         $arr[]=$row;
     }
     echo json_encode($arr);
?>