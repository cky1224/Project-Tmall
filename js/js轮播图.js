var ocMTurn = document.getElementsByClassName("cMTurn")[0];
var oUl = ocMTurn.getElementsByTagName('ul')[0];
// var aLi = document.getElementsByClassName("ulNumber")[0].getElementsByTagName("li");
var oBtnLeft = document.getElementsByClassName("toLeft")[0];
var oBtnRight = document.getElementsByClassName("toRight")[0];

var timer=null;
var num=0;

number.children[0].style.backgroundColor='orange';

//自动轮播
function imgMove(){
	clearInterval(timer);
	timer=setInterval(function(){
		num++;
		if(num>8){
			num=0;
		}
		oUl.style.left=-num*750+'px';
		for (var i = 0; i < number.children.length; i++) {
			number.children[i].style.backgroundColor='';
		}
		number.children[num].style.background='orange';
	},2000)
}
imgMove();

//圆形导航
for (var i = 0; i < number.children.length; i++) {
	number.children[i].ex=i;
 
	number.children[i].onmouseenter=function(){
		clearInterval(timer);
		num=this.ex;
		for (var j = 0; j < number.children.length; j++) {
			number.children[j].style.background='';
		}
		this.style.background="orange";
		oUl.style.left=-num*750+'px';
	};
	number.children[i].onmouseleave=function(){
		imgMove();
	};
};

//向右滑动
oBtnRight.onclick=function(){
	clearInterval(timer);
	num++;
	if (num>8) {
		num=0;
	}
	oUl.style.left=-num*750+'px';
	for (var i = 0; i < number.children.length; i++) {
		number.children[i].style.backgroundColor='';
	}
	number.children[num].style.background='orange';
}

//向左滑动
oBtnLeft.onclick=function(){
	clearInterval(timer);
	num--;
	if (num<0) {
		num=8;
	}
	oUl.style.left=-num*750+'px';
	for (var i = 0; i < number.children.length; i++) {
		number.children[i].style.backgroundColor='';
	}
	number.children[num].style.background='orange';
}

//鼠标移上去不动
ocMTurn.onmouseenter=function(){
	clearInterval(timer);
};
ocMTurn.onmouseleave=function(){
	imgMove();
};
