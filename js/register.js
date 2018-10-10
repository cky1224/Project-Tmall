/**********************验证手机号码*****************************/
var mobileIpu = document.v1Form.mobile;
var aMobileNum = document.getElementsByClassName('mobile')[0];
var aMobileSel = document.getElementsByClassName('mobileSel')[0];
var aMobileSelUl = document.getElementsByClassName('mobileSelUl')[0];

aMobileNum.onclick=function(){
	aMobileSel.style.display = 'block';
	for (var i = 0; i < aMobileSelUl.children.length; i++) {
		aMobileSelUl.children[i].onclick=function(e){
			area.innerHTML=this.children[0].innerHTML;
			numHead.innerHTML=this.children[1].innerHTML;
			for (var j = 0; j < aMobileSelUl.children.length; j++) {
				aMobileSelUl.children[j].className = '';
			}
			this.className='currentLi';
			this.parentNode.parentNode.style.display = 'none';	
			e.stopPropagation();
		}
	}
}

mobileIpu.onblur=function(){
	if (mobileIpu.value=='') {
		mobSpan.style.color='red';
		mobSpan.innerHTML='请输入你的手机号码！';
		mobileIpu.style.border='1px solid red';
	}else{
		mobSpan.innerHTML='下一步！';
		mobSpan.style.color='#6bc827';
		mobileIpu.style.border='1px solid #dedede';
	}
}
mobileIpu.onfocus=function(){
	mobileIpu.style.border='1px solid rgb(56,121,217)';
}

document.v1Form.onsubmit=function(e){
	var flag = true;

	if (mobileIpu.value=='') {
		mobSpan.innerHTML='请重新你的手机号码';
		mobileIpu.style.border='1px solid red';
		flag=false;
	}

	if (!flag) {
		e.preventDefault();
	}else{
		$('.reg').eq(1).css('display','block').siblings('.reg').css('display','none');	
		$('.navResUl>li').eq(1).addClass('currentRes').siblings('.navResUl>li').removeClass('currentRes');
		return false;
	}
}

/**********************验证进度条*****************************/
var oDragBotm = document.getElementsByClassName("dragBottom")[0];
var oDragTop = oDragBotm.children[0];
var oProgress = oDragBotm.children[1];
//最终位置
var endProX = 0;

oDragTop.onmousedown=function(e){
	var e = event || window.event;

	//获取鼠标刚点击时的初始位置
	var oFixPos = e.clientX - oDragTop.offsetLeft;
	
	if (endProX!=oDragBotm.offsetWidth - oDragTop.offsetWidth){
		document.onmousemove=function(e){

			// 获取移动的位置
			var e = event || window.event;
			var x = e.clientX - oFixPos;

			//判断边界值
			if (x<0) {
				x=0;
			}else if (x>oDragBotm.offsetWidth - oDragTop.offsetWidth) {
				x = oDragBotm.offsetWidth - oDragTop.offsetWidth;
			}

			oDragTop.style.transition='';
			oProgress.style.transition='';
			oDragTop.style.left = x + 'px';
			oProgress.style.width = x +'px';
			
			endProX = x ;
			// 计算拖动百分比
			var per = x/(oDragBotm.offsetWidth - oDragTop.offsetWidth)*100+'%';
			// console.log(per);
			return false;
		}
	}

	document.onmouseup = function(){
		this.onmousemove=null;
		if (endProX!=oDragBotm.offsetWidth - oDragTop.offsetWidth) {
			oDragTop.style.left = 0 + 'px';
			oProgress.style.width = 0 +'px';
			oDragTop.style.transition='all 1s';
			oProgress.style.transition='all 1s';
		}else{
			// oDragBotm.innerHTML='验证成功';
			getNext.style.backgroundColor='#ff0036';
		}

	}
}

/**********************小蜜蜂*****************************/
var oBee = document.getElementsByClassName("bee")[0];
var oBeeP = oBee.getElementsByTagName("p");
var oSweepBig = document.getElementsByClassName("sweepBig")[0];
var oSweepSmall = document.getElementsByClassName("sweepSmall")[0];
var oLoginSmall = document.getElementsByClassName("loginSmall")[0];

function moveBee(){
	oSweepSmall.style.display='block';
	oLoginSmall.style.display='none';
	if (oSweepBig.style.display=='block') {
		oBee.style.backgroundColor='';
		oBeeP[0].style.color='#b7b7b7';
		oBeeP[1].style.color='#b7b7b7';
		oSweepBig.style.display='none';
	}else{
		oBee.style.backgroundColor='#f7931e';
		oBeeP[0].style.color='#fff';
		oBeeP[1].style.color='#fff';
		oSweepBig.style.display='block';
	}

	sweepImg.onclick=function(){
		oSweepSmall.style.display='block';
		oLoginSmall.style.display='none';
		
	}
	comImg.onclick=function(){
		oLoginSmall.style.display='block';
		oSweepSmall.style.display='none';		
	}
}
/**********************小蜜蜂移动*****************************/
var oBeeT = document.getElementsByClassName("beeT")[0];
var oBeeTop = document.getElementsByClassName("beeTop")[0];
var oSection = document.getElementsByTagName("section")[0];
var oBeeClose = document.getElementsByClassName("beeClose")[0];


var flag1;
//var color1=true;
oBeeTop.onmousedown=oBee.onmousedown=function(e){
	var e =event || window.event;
	var oFixBeePosX = e.clientX - oBeeT.offsetLeft;
	var oFixBeePosY = e.clientY - oBeeT.offsetTop;
	var oFixBeePosX1 = e.clientX - oBee.offsetLeft;
	var oFixBeePosY1 = e.clientY - oBee.offsetTop;
	
	if(oBee.children[0].children[0].style.color=='rgb(255, 255, 255)'){
//		console.log(1)
		oBee.children[0].children[0].style.color='rgb(239, 90, 19)';
//		color1=false;
	}else{
//		console.log(2)
		oBee.children[0].children[0].style.color='rgb(255, 255, 255)';
		console.log(oBee.children[0].children[0].style.color);	
//		color1=true;
	};
	flag1=true;

	document.onmousemove=function(e){
		var e = event || window.event;
		var x = e.clientX - oFixBeePosX;
		var y = e.clientY - oFixBeePosY;
		var x1 = e.clientX - oFixBeePosX1;
		var y1 = e.clientY - oFixBeePosY1;
		
		flag1=false;
		
		if (x<0) {
			x=0;
		}else if (x>oSection.offsetWidth-oBeeT.offsetWidth){
			x=oSection.offsetWidth-oBeeT.offsetWidth;
		};
		if (y<46) {
			y=46;
		}else if (y>oSection.offsetHeight-oBeeT.offsetHeight){
			y=oSection.offsetHeight-oBeeT.offsetHeight;
		};

		if (x1<0) {
			x1=0;
		}else if (x1>oSection.offsetWidth-oBee.offsetWidth){
			x1=oSection.offsetWidth-oBee.offsetWidth;
		};
		if (y1<46) {
			y1=46;
		}else if (y1>oSection.offsetHeight-oBee.offsetHeight){
			y1=oSection.offsetHeight-oBee.offsetHeight;
		};

		oBeeT.style.left=x+'px';
		oBee.style.left=x1+'px';
		oBeeT.style.top=y+'px';
		oBee.style.top=y1+'px';
		
		if(oBee.children[0].children[0].style.color=='rgb(255, 255, 255)'){
			oBee.children[0].children[0].style.color='rgb(255, 255, 255)'
		}else{
			oBee.children[0].children[0].style.color='rgb(239, 90, 19)';
			console.log(oBee.children[0].children[0].style.color);	
		};
		
		return false;
	}

	document.onmouseup=function(e){
		this.onmousemove=null;	
		if(flag1){
			moveBee();
		}
		flag1=false;
		e.stopPropagation();
	}

	var endXX;

	oBeeClose.onmousedown=function(e){//相同的事件来阻止冒泡。
		oBee.style.display='block';
		endXX=oBee.style.left = oBeeT.offsetLeft+'px';
		oBee.style.top = oBeeT.offsetTop+'px';
		oBeeT.style.display='none';

		e.stopPropagation();
	}
}

// 同意协议
var oAgrument = document.getElementsByClassName("agrument")[0];
agree.onclick=function(){
	oAgrument.style.display='none';
}


// 填写帐号信息
document.v2Form.onsubmit=function(e){
	var flag = true;

	if (!flag) {
		e.preventDefault();
	}else{
		$('.reg').eq(2).css('display','block').siblings('.reg').css('display','none');	
		$('.navResUl>li').eq(2).addClass('currentRes').siblings('.navResUl>li').removeClass('currentRes');
		return false;
	}
}
