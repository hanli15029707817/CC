<?php
   header("Content-type","text/html;charset=utf-8");
   //1、接收浏览器端的数据（即是客户端的数据）
   $name=$_POST['userPhone'];
   $pass=$_POST['userPass'];
   //2、插入数据库
   
   //3、连接数据库
   $con=mysql_connect("localhost","root","root");
   if(!$){
   	
   }
 ?> 