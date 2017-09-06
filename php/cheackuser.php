<?php
    header("content-type","text/html;charset=utf-8");
   //用户名的存在性验证
   //1、获取客户端的数据
   $userName=$_GET['username'];
   //2、连接数据库
   $con=mysql_connect("localhost","root","root");
    if(!$con){ 
        die("连接失败".mysql_error());	
    }else{
    	mysql_select_db("freepeople",$con);
    	$str="select * from usertable where userName='".$userName."'";
    	$result=mysql_query($str,$con);
    	$rowCount=mysql_num_rows($result);
  		if($rowCount==0){
  			echo "0"; //用户名不存在
  		}else{
  			echo "1"  //用户名存在
  		}
    }
    mysql_close($con);
    
?>