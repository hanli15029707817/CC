function $Id(id){
	return document.getEelementById(id);
}
function $Class(className){
	return document.getElementsByClassName(className);
}
//轮播图
var mySwiper = new Swiper ('.swiper-container', {
     // direction: 'vertical',//是否垂直
     loop: true,//是否可以循环拖动
     autoplay:2000,//是否自动播放
     // 如果需要分页器
     pagination: '.swiper-pagination',
  
     // 如果需要前进后退按钮
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
  
     // 如果需要滚动条
     //scrollbar: '.swiper-scrollbar',
});
//点击菜单
//$(function(){
//	$("#tip").click(function(){
//		$("#nav-Twomenu")[0].style.display="block";
//	})
//	$(".one").mouseover(function(){
//		$(".sort-two").toggle()
//		})
//});


//页面加载
window.onload=function(){
	
	////头部菜单
	var i=$("#l1").find("p").find("i");
	$("#l1").mouseenter(function(){
		console.log(i);
		i.html("&#xe604;");  //改变箭头的样子
		$(".two-menu").slideDown("slow");
    });
	$("#l1").mouseleave(function(){
		i.html("&#xe611;");
		$(".two-menu").slideUp("slow");
	});
	
	$("#fashion-one").find("a").mouseenter(function(){
		$("#fashion-one").find("a").find("i").html("&#xe604;");
		$("#fashion").css({top:"0",opacity:"1"});
		$("#fashion-box").slideDown();
	});
	$("#fashion-box").mouseleave(function(){
		$("#fashion-one").find("a").find("i").html("&#xe611;");
		$("#fashion-box").hide();
	})
	//nav菜单
	console.log($("#header-down").find("li").find("a"));
	$("#header-down").find("li").find("a").mouseenter(function(){
		$("#header-down-two-box").css({opacity:"1"})
		$("#header-down-two").css({top:"0",display:"block"});
	});
	$("#header-down").find("li").find("a").mouseleave(function(){
		$("#header-down-two-box").css({opacity:"0"})
	});
	
	//点击菜单
	$("#tip").click(function(){
		$("#nav-Twomenu").css({transform:"translateX(0)"});
		let w=$("#all")[0].offsetWidth;
		let w1=-1*w+"px";
		console.log(w1);
		$("#all").hide(1000);
	//	$("#zzc").css({display:"block"});
	});
	$("#cha").click(function(){
		$("#nav-Twomenu").css({transform:"translateX(-300px)"});
		$("#all").show(1000);
	});

	
	
	
	
	
	
}


//搜索框
	$("#search").focus(function(){
		$("#fashion-all").hide();
		$("#logo").hide();
		$("#search1").find("a").css({display:"block"});
		$("#search").css({width:"100%"});
	});
	$("#search1").find("a").dblclick(function(){
		$("#fashion-all").show();
		$("#logo").show();
		$("#search1").find("a").css({display:"none"});
		$("#search").css({width:"120px"});
	});
	$("#search").blur(function(){
		$("#fashion-all").show();
		$("#logo").show();
		$("#search1").find("a").css({display:"none"});
		$("#search").css({width:"120px"});
	});
	//屏幕缩小时的搜索框
	$("#searchs").focus(function(){
		$("#logo").css({display:"none"})
		$("#search2").find("i").css({display:"none"});
		$("#tip").css({display:"none"});
		$("#search2").find("form").css({margin:"0 0px",justifyContent:"space-between"});
		$("#search2").find("input").css({backgroundPosition:"20px 2px",marginRight:"0",paddingBottom:"6px"})
		$("#search2").find("a").css({display:"block",position:"absolute", top: "6px",right: "40px"});
		$("header-mid").css({flexDirection:"column"})
		$("#search2").css({width:"100%"});
		$("#searchs").css({width:"100%",borderRadius:"0",border:"0",borderBottom:"1px solid #000",paddingLeft:"50px"});
		$("#searchs")[0].placeholder="搜索";
	});
	$("#search2").find("a").click(function(){
		$("#logo").css({display:"block",width:"80%"})
		$("#search2").find("i").css({display:"block"});
		$("#tip").css({display:"block",width:"4%"});
		$("#search2").find("form").css({width:"22px",margin:"0 20px",justifyContent:"flexEnd"});
		$("#search2").find("input").css({backgroundPosition:"1px 2px",marginRight:"10px",paddingBottom:"0px"})
		$("#search2").find("a").css({display:"none"});
		$("header-mid").css({flexDirection:"row"});
		$("#search2").css({width:"22px"});
		$("#searchs").css({width:"22px",borderRadius:"50%",border:"1px solid #000"});
		$("#searchs")[0].placeholder="";

	});
//	$("#searchs").blur(function(){
//		$("#logo").css({display:"block"})
//		$("#search2").find("i").css({display:"block"});
//		$("#tip").css({display:"block"})
//		$("#search2").find("form").css({margin:"0 20px"});
//		$("#search2").find("input").css({backgroundPosition:"1px 2px",marginRight:"10px",paddingBottom:"0px"})
//		$("#search2").find("a").css({display:"none",position:"static", top: "0px",right: "0px"});
//		$("#searchs").css({width:"22px",borderRadius:"50%",border:"0",borderBottom:"0",paddingLeft:"0px"});
//		$("#searchs")[0].placeholder="";
//	});

//window滑动的时候
//判断什么时候楼梯出现
//滚动事件
$(window).scroll(function(){
	//楼梯
	var p=0; //  每个版块初始化值
	var arr=["header-top","F2","F3","F4","F5"];  //把所有版块的class名放在数组中
	var lis=$("#stars").find("ul").find("li") //返回所有的li
	lis.click(function(){
		var q=$(this).index();//获取点击时li的下标
		p=document.getElementById(arr[q]).offsetTop; //获取当前版块的offsetTop  ，版块到页面最顶端的距离
//		console.log(p);
		$("body").stop().animate({"scrollTop":p+"px"},400)
	});
	
	
	var bodyObj=document.body.scrollTop||document.documentElement.scrollTop;
//	console.log(bodyObj);
	if(bodyObj>=100){
		$("#stars").css({opacity:"1",transition:"all 2s"});
	}else if(bodyObj==0){
		$("#stars").css({opacity:"0",transition:"all 2s"});
	}
	
	
})


$(window).scroll(function(){
	//时尚社区隐藏
	var bodyObj=document.body.scrollTop||document.documentElement.scrollTop;
	let hm=$("#header-mid")[0].offsetTop;
//	console.log(hm);
    if(bodyObj==hm){
    	$("#header-up").css({position:"fixed",top:"0",left:"0"});
    	$("#header-mid").css({display:"none"});
    	$("#nav").css({position:"fixed",top:'$("#header-up").offsetHeight',left:"0"});
    }
})


