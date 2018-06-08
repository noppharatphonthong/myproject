<?php
 $host="127.0.0.1";
 $user="root";
 $pass="";
 $db="watermanagement";

 $conn=mysqli_connect($host,$user,$pass,$db);
 mysqli_set_charset($conn,'utf8');
 if(!$conn)
 {
     echo "unconnect";
     echo mysqli_error_list();
 }

?>