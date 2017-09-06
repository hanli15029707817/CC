//函数功能：添加cookie
//参数：键：key
//      值：value
//      daycount:天数
//返回值：
function addCookie(key,value,daycount){
    var myDate=new Date();
    myDate.setDate(myDate.getDate()+daycount);
    document.cookie=key+"="+value+"; expires="+myDate.toGMTString();
}

//函数功能：获取cookie
//参数：key
//返回值：有值则返回值；没有则返回""
function getCookie(key){
    var str=document.cookie;
    var arr=str.split("; ");
    var index=-1;
    for(var i=0;i<arr.length;i++){
        if(arr[i].indexOf(key+"=")==0){
              index=i;
              break;
        }
    }
    if(index==-1){
        return "";
    }else{
        return arr[index].substring(key.length+1);
    }
}

//函数的功能：删除cookie
//参数：
//返回值：
function romoveCookie(key){
	addCookie(key,"",-1);
}