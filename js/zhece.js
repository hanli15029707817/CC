window.onload=function(){
	var check=false;
	var check1=false;
	var check2=false;
	var check3=false;
	var check4=false;
	var check5=false;
	$("#username").find("input").blur(function(){
		//账户名只能使用拼音
		let reg=/[a-zA-Z]/;
		let username=$("#username").find("input").val();
		//用户名需要做一次存在性验证运用ajax
		if(reg.test(username)){
			$.ajax({
				url:"../php/checkuser.php",
				async:true,
				data:"username="+this.value,
				type:"get",
				sucess:function(date){
					if(data=="1"){
						$("#msgname").html("该用户已经注册过了");
					}else{
						$("msgname").html("该用户没人使用");
					}
				}
			})
			check1=true;
		}else{
			$("#msgname").html("请输入一个用户名只能是拼音");
			check1=false;
		}
		return check1;
    });
    
    
    //电话邮箱验证
   $("#emial").find("input").blur(function(){
	   	let userEmial=$("#emial").find("input").val();
		let reg=/(^1[0-9]{9}\d$)|\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g;
	   	if(reg.test(userEmial)){
	   		$("#msgemial")[0].innerHTML="请填写下一步";
	   		check2=true;
	   	}else{
	   		$("#msgemial")[0].innerHTML="请输入一个有效的电子邮件或电话号码";
	   		check2=false;
	   	}
	   	return check2;
    });
    
    //密码验证
    
    $("#pass").find("input").blur(function(){	
		let reg=/^[0-9][0-9]{5}$/; 
		var userPass=$("#pass").find("input").val();
		if(reg.test(userPass)){
			$("#msgpass1")[0].innerHTML="";
			check3=true;
		}else{
			$("#msgpass1")[0].innerHTML="请输入一个6位数字的密码";
			check3=false;
		}
		return check3;
    });
    
    //第二次密码验证
    
    $("#pass2").find("input").blur(function(){
		var userPass2=$("#pass2").find("input").val();
		if($("#pass").find("input").val()==userPass2){
			$("#msgpass2")[0].innerHTML="请填写下一步";
			check4=true;
		}else{
			$("#msgpass2")[0].innerHTML="两次输入密码不一致";
			check4=false;
		}
		return check4;
    });
    
    //检测文本框里的内容
    function checkIn(){
    	if($(":checked").length>0){
    		check5=true;
    	}else{
    		check5=false;
    	}
    	return check5;
    }
    //选择性提交
    $("form").submit(function(){
    	check=check1&&check2&&check3&&check4&&check5;
    	return check;
    });
}