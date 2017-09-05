<?php
   //1、获取客户端的数据
   $userName=$_GET['username'];
   //2、连接数据库
   $con=mysql_connect("localhost","root","root");
    if(!$con){
        die("连接失败".mysql_error());	
    }else{
    	mysql_select_db("freepeople",$con);
    	$str="select * from userTable where userId='".$userName."'";
    	$result=mysql_query($str,$con);
    	$rowCount=mysql_num_rows($result);
    	mysql_close($con);
    	echo $rowCount;
    }
?>