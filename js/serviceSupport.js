//头部
$('.ulTitle>li>a').hover(function(){
	$(this).addClass('current');
	$(this).parent('li').siblings().children('a').removeClass('current');
})




//第一个轮播图
var loopFirst=0;
var timer1;

$('.loopBox').hover(function(){
	clearInterval(timer1);
},function(){
	timer1=setInterval(function(){
		$('.loop').css('left',-1920*loopFirst+'px');
		$('.loopBox ol').children().eq(loopFirst).addClass('first-ol-li').siblings().removeClass('first-ol-li');
		loopFirst++;
		if(loopFirst==5) loopFirst=0;
	},1500);
});


timer1=setInterval(function(){
	$('.loop').css('left',-1920*loopFirst+'px');
	$('.loopBox ol').children().eq(loopFirst).addClass('first-ol-li').siblings().removeClass('first-ol-li');
	loopFirst++;
	if(loopFirst==5) loopFirst=0;	
},1500);

$('.loopBox ol').children().hover(function(){
	loopFirst=$(this).index();
	$(this).addClass('first-ol-li').siblings().removeClass('first-ol-li');
	$('.loop').css('left',-1920*loopFirst+'px');
});

//第二个轮播
var timer2;
var num=0;
var n=1;
function Move(){
	if(n<4){
		n++;
		num+=1;
	}else{
		n=1;
		num=0;
	}
	$('.BigWrap1 .groomUl').stop().animate({'left':-num*315+'px'},1000);
	$('.BigWrap1 .groomUl>li').eq(n).addClass('currentLi').siblings().removeClass('currentLi');
	$('.BigWrap1 .ol-list>li').eq(n-1).addClass('current-ol-li').siblings().removeClass('current-ol-li');
}
timer2=setInterval(Move,3000);
$('.BigWrap1 .ol-list>li').hover(function(){
	clearInterval(timer2);
	$(this).addClass('current-ol-li').siblings().removeClass('current-ol-li');
	num=$(this).index();
	n=num+1;
	$('.BigWrap1 .groomUl').stop().animate({'left':-num*315+'px'},1000);
	$('.BigWrap1 .groomUl>li').eq(n).addClass('currentLi').siblings().removeClass('currentLi');
},function(){
	timer2=setInterval(Move,3000);
});



//第三个轮播
var timer3;
var num3=0;
var n3=1;
function Move2(){	
	if(n3<4){
		n3++;
		num3+=1;
	}else{
		n3=1;
		num3=0;
	}
	$('.BigWrap2 .groomUl').stop().animate({'left':-num3*315+'px'},1000);
	$('.BigWrap2 .groomUl>li').eq(n3).addClass('currentLi').siblings().removeClass('currentLi');
	$('.BigWrap2 .ol-list>li').eq(n3-1).addClass('current-ol-li').siblings().removeClass('current-ol-li');
}
timer3=setInterval(Move2,3000);
$('.BigWrap2 .ol-list>li').hover(function(){
	clearInterval(timer3);
	$(this).addClass('current-ol-li').siblings().removeClass('current-ol-li');
	num3=$(this).index();
	n3=num3+1;
	$('.BigWrap2 .groomUl').stop().animate({'left':-num3*315+'px'},1000);
	$('.BigWrap2 .groomUl>li').eq(n3).addClass('currentLi').siblings().removeClass('currentLi');
},function(){
	timer3=setInterval(Move2,3000);
});
