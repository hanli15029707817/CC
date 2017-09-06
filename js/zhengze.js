
	 /*
	功能：正则验证
	参数1：验证类型
	参数2：验证的字符串
	返回值：true:false
	**/		
	function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
		switch(type) {				//判断该类型       
		case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
			if((/^1[34578]\d{9}$/).test(value)){   //1开头后跟34578，后跟9个数字，结尾
				return true;   
			}else{  
				return false;
			}  
			break;  
		case 'Email':  
			if((/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value)){   
				return true;   
			}else{  
				return false;
			}  
			break; 
		case "Chinese" ://只能是汉字
			if((/^[\u4e00-\u9fa5]+$/).test(value)){
				return true;
			}else{
				return false;
			}
				break;
		case "username" ://账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间
			if((/^[a-zA-Z_]\w{5,14}$/).test(value)){
				return true;
			}else{
				return false;
			}
			break;
		case "postcode" ://邮编 6位纯数字，第一位不能为0
			if((/^[1-9]\d{5}$/).test(value)){
				return true;
			}else{
				return false;
			}
			break;
		case "password" : //密码 应该由6-15位的数字字母下划线特殊字符构成
			if((/^([@#$%^&*]|\w){6,15}$/).test(value)){
				return true;
			}else{
				return false;
			}
			break;
		}  
	} 
	
window.onload=function(){
/*
	document.getElementById("f1").onsubmit=function(){//表单提交事件
//验证电话号码是否符合标准
*/	
//var num  =1;

var user,pass,name;
var flag1 = false,flag2 = false,flag3 = false,flag4 = false;

	var phone=document.getElementById("phone");
	var pb=document.getElementById("pb");
	phone.onblur=function (type,value){
		if(!checkAll("Phone",phone.value)){//验证电话号码是否符合标准
			pb.style.display="block";
			pb.innerHTML="电话号码错误。"
			//console.log(phone.value)
			//num = 0;
			//return false;//阻止表单提交
			 flag1 = false;
		}else{
			pb.style.display="none";
			//num = 1;
			//return true;
			user = phone.value;
			flag1 = true;
			}			
	}
//验证密码是否合格	
	var word=document.getElementById("password");
	var pa=document.getElementById("pa");
	word.onblur=function (type,value){
		if(!checkAll("password",word.value)){
			pa.style.display="block";
			pa.innerHTML="密码应该由6-15位的数字字母下划线特殊字符构成"
			//num = 0;
			//return false;//阻止表单提交
			flag2 = false;
		}else{
			pb.style.display="none";
			//num = 1;
			//return true;
			pass =word.value;
			flag2 = true;
			}			
	}
//验证确认密码是否和密码一致	
	var password1=document.getElementById("password1");
	var pa1=document.getElementById("pa1");
	
	password1.onblur=function(){
		if($("#password").val()!==$("#password1").val()){
			pa1.style.display="block";
			pa1.innerHTML="确认密码要和密码一至噢！"
			//num = 0;
			//return false;//阻止表单提交
			flag3 = false;
		}else{
			pb.style.display="none";
			//num = 1;
			//return true;
			flag3 = true;
		}
			
	}
//验证姓名是否为中文	
	var chinese=document.getElementById("Chinese");
	var cb=document.getElementById("cb");
	chinese.onblur=function (type,value){
		if(!checkAll("Chinese",chinese.value)){//验证电话号码是否符合标准
			cb.style.display="block";
			cb.innerHTML="名字必须为我大中华汉字"
			//num = 0;
			//return false;//阻止表单提交
			flag4 = false;
		}else{
			cb.style.display="none";
			//num = 1;
			//return true;
			name = chinese.value;
			flag4 = true;
			}			
	}
	
	
	
	 $("#dian").on("click",function(){

		if(flag1 === true && flag2 === true && flag3 === true && flag4 === true){
		 
	$.ajax({
		url:"../html/register.php",
		async:true,
		data:{
			userName:$('#Chinese').val(),
			userPass:$("#password").val(),
			userPhone:$("#phone").val()
			
		},
		type:"post",
		success:function(data){
			if(data=="1"){
				//保存cookie
				location.href="../html/debark.html";
			}else{
				$("#errmsg").html("亲，用户名或者密码错误，登录失败，请想好再输！");
			}
		}		
	});	
	

	 }
 })
	

	
}	
	
	
	
	
	
	
	
	
	
	
	