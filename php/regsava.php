<?php
	header("Content-type: text/html; charset=utf-8");
	
	//1、接收浏览器端的数据（即客户端的数据）
	$username = $_GET['userName'];
	$userEmial=$_POST['userEmial'];
	$userPass = $_POST['userPass'];
	
	//2、插入数据库
	
	//1、连接数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("亲，connect fail");
	}else{
		echo "connect success";
	}
	//2、选择数据库
	mysql_select_db("freepeople",$con);
	
	//3、执行SQL语句
	$sqlStr="insert into usertable(userName,userEmial,userPass)
     values('".$username."','".$userEmial."','".$userPass."')";
    mysql_query($sqlStr,$con);
    
    //4、关闭数据库
    mysql_close($con); 
	

?>