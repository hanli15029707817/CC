<?php
	//字符编码使用utf-8；
	header("Content-type: text/html; charset=utf-8");

	//1、接收客户端的输入的数据
	$name = $_POST['userName'];//$_POST:针对post请求方法。
	$pass = $_POST['userPass'];
	

	//2、保存到数据库
	//1)、连接数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		//die("连接失败".mysql.error());
		echo "注册失败:服务器连接有问题".mysql.error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("meitu",$con);
		$str="insert into userTable(userName,userPass) values('".$name."','".$pass."')";
		$result = mysql_query($str,$con); 
		
		
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应
		echo $result;
	}	
?>