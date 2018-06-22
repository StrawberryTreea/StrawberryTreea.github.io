function xs2(){
		document.getElementById("box2").style.display="block";
//		alert($(this).attr("id"));
}
function yc2(){
		document.getElementById("box2").style.display="none";
}
function xs3(){
		document.getElementById("box3").style.display="block";
}
function yc3(){
		document.getElementById("box3").style.display="none";
}
function xs4(){
		document.getElementById("box4").style.display="block";
}
function yc4(){
		document.getElementById("box4").style.display="none";
}
function xs1(){
	document.getElementById("box").style.display="none";
	document.getElementById("dl").style.display="none";
}
function login1(){
	document.getElementById("box").style.display="block";
	document.getElementById("dl").style.display="block";
}
function  search(){
	window.open("search.html");
}

//zhuce.html
function xieyi1(){
	var t = document.getElementById("protol");
	var s = document.getElementById("protollg");
	s.disabled=!t.checked;
	if(s.disabled==!true){
		s.style.backgroundColor="deepskyblue";
		s.style.color="white";
	}else{
		s.style.backgroundColor="dimgray";
		s.style.color="darkgrey";
	}
}
//zhuce.html
function progdj(){
	window.location.href='index.html';
}
//
window.onload=function(){
	 var wrap=document.getElementById('wrap'),
	 pic=document.getElementById('pic').getElementsByTagName("li"),
	 list=document.getElementById('list').getElementsByTagName('li'),
	 index=0,
	 timer=null;

	 // 定义并调用自动播放函数
	 timer = setInterval(autoPlay, 2000);
	
	 // 鼠标划过整个容器时停止自动播放
	 wrap.onmouseover = function () {
		 clearInterval(timer);
	 }
	
	 // 鼠标离开整个容器时继续播放至下一张
	 wrap.onmouseout = function () {
		 timer = setInterval(autoPlay, 2000);
	 }
	 // 遍历所有数字导航实现划过切换至对应的图片
	 for (var i = 0; i < list.length; i++) {
		 list[i].onmouseover = function () {
			 clearInterval(timer);
			 index = this.innerText - 1;
			 changePic(index);
		 };
	 };
	
	 function autoPlay () {
		 if (++index >= pic.length) index = 0;
		 changePic(index);
	 }
	
	 // 定义图片切换函数
	 function changePic (curIndex) {
		 for (var i = 0; i < pic.length; ++i) {
			 pic[i].style.display = "none";
			 list[i].className = "";
		 }
		 pic[curIndex].style.display = "block";
		 list[curIndex].className = "on";
	 }
}

function gogoods(){
	window.open("goods.html");
}

//
//function gowuche(){
//	window.open("shopcar.html","","height=500,width=400,left=600,top=200,menubar=yes,location=no,resizable=no,status=no,titlebar=no,scrollbars=no");
//}
function gowuche(){
	window.open("shopcar.html","","menubar=yes,location=no,resizable=no,status=no,titlebar=no,scrollbars=no");
}



//shopcar.html
function jisuan(jiage,zt){
	var xz=document.getElementById("jiner");
	var jiner=Number(xz.value);
//	alert(zt);
    if(zt){
    	jiner=jiner+jiage;
    }else{
    	jiner=jiner-jiage;
    }
    xz.value=jiner;
}
//shopcar.html

//search.html
function te(){
	var end = document.getElementById("end");
    var ar = document.getElementsByName("all");
	if(end.checked==true){
//		 alert("yes");
	     for (var i=0; i<ar.length; i++)
	     {
	         ar[i].checked=true;
	     }
	     }else{
//	     alert("no");
	     for (var i=0; i<ar.length; i++)
	     {
	         ar[i].checked=false;
	     }
    }
}
function te2(){
	var end = document.getElementById("end2");
    var ar = document.getElementsByName("all2");
	if(end.checked==true){
//		 alert("yes");
	     for (var i=0; i<ar.length; i++)
	     {
	         ar[i].checked=true;
	     }
	     }else{
//	     alert("no");
	     for (var i=0; i<ar.length; i++)
	     {
	         ar[i].checked=false;
	     }
    }
}
function te3(){
	var end = document.getElementById("end3");
    var ar = document.getElementsByName("all3");
	if(end.checked==true){
//		 alert("yes");
	     for (var i=0; i<ar.length; i++)
	     {
	         ar[i].checked=true;
	     }
	     }else{
//	     alert("no");
	     for (var i=0; i<ar.length; i++)
	     {
	         ar[i].checked=false;
	     }
    }
}
//search.html