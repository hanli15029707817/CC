<?php
   header("Content-type","text/html;charset=utf-8");
   //1、接收浏览器端的数据（即是客户端的数据）
   $name=$_POST['useremail'];
   $pass=$_POST['userPass'];
   //2、插入数据库
   
   //3、连接数据库
   $con=mysql_connect("localhost","root","root");
   if(!$con){
   	    die("连接失败".mysql_error);
   }else{
   	    mysql_select_db("freepeople",$con);
    	$str="select * from usertable where userId='".$userName."' and passId='".$userPass."'";
    	$result=mysql_query($str,$con);
    	$rowCount = mysql_num_rows($result);
		if($rowCount==0){   //数据库中没有信息
			echo "0"; //登录失败
		}else{
			echo "1"  //登陆成功
		}
    	mysql_close($con);
   }
 ?> 