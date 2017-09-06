window.onload=function(){
	var price=parseFloat($("#price").find("p").html());
//	console.log(price);
	var option=$("#select1").find("select").find("option");
		console.log(option.length)
		


		
//	console.log(option);
	var num=parseInt($("#select1").find("select").find("option").html());
//	console.log(num);
//  $("select1").find("select").change(function(){
//  	for(var i=1;i<num.length;i++){
//	    var money=price*num;
//	    console.log(money);
//	    }
//  });
console.log($("#str").val());
var num=$("#str").val();

	console.log($("#aaaa")[0]);
	$("#aaaa").change(function(){
		alert("1");
		
	})
}


