//注册手机号邮箱验证
window.onload=function(){
	$("#emial").find("input").blur(function(){
		let userEmial=$("#emial").find("input").val();
		let reg=/(^1[0-9]{9}\d$)|\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g;
		if(reg.test(userEmial)){
			$("#msgEmial")[0].innerHTML="";
		}else{
			$("#msgEmial")[0].innerHTML="请输入一个有效的电子邮件或电话号码";
		}
    });
    $("#pass").find("input").blur(function(){
		let userPass=$("#pass").find("input").val();
		let  reg=/^[0-9][0-9]{5}/; 
		if(reg.test(userPass)){
			$("#msgPass")[0].innerHTML="";
		}else{
			$("#msgPass")[0].innerHTML="请输入一个6位数字的密码";
		}
   }); 
   $("#denglu").click(function(){
		$.post("../php/logoinCheck.php",
		      {
		      	"useremail":$("#emial").find("input").val(),
		      	"userPass":$("#pass").find("input").val()
		      },
		      function(data){
		      	if(data=="1"){  //登录成功
		      		//记录cookie
		      		addCookie("userId",$("#emial").find("input").val(),7);
		      		location.href="index.html";
		      	}else{
		      		alert("登录失败，用户名或者密码不对！");
		      	}
		      }
		)
	})
}


















