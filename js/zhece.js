window.onload=function(){
	var check=false;
	var check1=false;
	var check2=false;
	var check3=false;
	var check4=false;
	var check5=false;
	$("#username1").blur(function(){
		let reg=/^[\u4e00-\u9fa5]/;
		let username=$("#username1").val();
		console.log(username);
		//用户名需要做一次存在性验证运用ajax
		if(reg.test(username)){
			$.ajax({
				url:"cheackuser.php",
				async:true,
				data:"username="+this.value,
				type:"get",
				sucess:function(date){
					if(data=="1"){
						$("#msgname").html("该用户已经注册过了");
					}else{
						$("#msgname").html("√");
					}
				}
			})
			check1=true;
		}else{
			$("#msgname").html("请输入中文字符");
			check1=false;
		}
		return check1;
    });
    
    
    //电话邮箱验证
   $("#emial1").blur(function(){
	   	let userEmial=$("#emial1").val();
		let reg=/(^1[0-9]{9}\d$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/g;
	   	if(reg.test(userEmial)){
	   		$("#msgemial")[0].innerHTML=" ";
	   		check2=true;
	   	}else{
	   		$("#msgemial")[0].innerHTML="请输入一个有效的电子邮件或电话号码";
	   		check2=false;
	   	}
	   	return check2;
    });
    
    //密码验证
    
    $("#p1").blur(function(){	
		let reg=/^[0-9][0-9]{5}$/; 
		var userPass=$("#p1").val();
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
    
    $("#p2").blur(function(){
		var userPass2=$("#p2").val();
		if($("#p1").val()==userPass2){
			$("#msgpass2")[0].innerHTML=" ";
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