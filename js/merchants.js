var timer=null;
var num=0;
var num1=0;
timer=setInterval(Move,5);

function Move(){
	num+=0.2;
	num1+=0.2;
	if(num>1351){
		num=0;
	}
	$('.bandOl1').css({'left':-num+'px'});
	
	if(num1>1544){
		num1=0;
	}
	$('.bandOl2').css({'left':-num1-100+'px'});
}

$('.bandOl1,.bandOl2').hover(function(){
	clearInterval(timer);
},function(){
	timer=setInterval(Move,5);
});

// 动态的纸片
$('.TImg').mousemove(function(e){
	var e = event || window.event;
	var x=e.clientX;
	var y=e.clientY;
	// console.log(y-280)
	// console.log('x='+(x-320)/100);
	// console.log('y='+(y-280)/100);
	$('.TImg').css('transform', 'perspective(6.5rem) rotate3d('+(x-320)/100+', '+(y-280)/100+', 0, 2deg)');
});

// 导航条
if ($(this).scrollTop()>20) {
	$('header').addClass('fix');		
}else {
	$('header').removeClass('fix');
};
$(window).scroll(function(){
	if ($(this).scrollTop()>20) {
		$('header').addClass('fix');		
	}else {
		$('header').removeClass('fix');
	};
});


//动态效果 
if ($(window).scrollTop()>=0) {
	$('div.topTMALL img.myJoin').removeClass('myJoin');
	$('img.jionImg').removeClass('jionMyImg');
	setTimeout(function(){
		$('div.topTMALL img.joinTImg').addClass('currentJ');
		$('img.jionImg').addClass('currentJ');
	},2000);
	
	// $('div.redLeft>p').removeClass('redD');
	// $('div.redMiddle>span.redD,div.redMiddle>p.redD').removeClass('redD');
	// $('div.redRight>p.redD,div.redRight>span.redD').removeClass('redD');
}
var timer;
var redNum=148083;
if ($(window).scrollTop()>=20) {
	$('div.redLeft>p').removeClass('redD');
	$('div.redMiddle>span.redD,div.redMiddle>p.redD').removeClass('redD');
	$('div.redRight>p.redD,div.redRight>span.redD').removeClass('redD');

	setInterval(function(){
		if (redNum<150000) {
			redNum+=9;
			$('.redRight>span').html(redNum);	
		}
	},1);
}
//	无缝滚动
if ($(window).scrollTop()>400) {
	$('div.mybandOl').removeClass('mybandOl');
};

//	蓝色渐变大块
if ($(window).scrollTop()>800) {
	$('div.myWel1').removeClass('myWel1');
	setTimeout(function(){
		$('div.myWel2').removeClass('myWel2');			
	},300);
	setTimeout(function(){
		$('div.myWel3').removeClass('myWel3');			
	},600);
};
if ($(window).scrollTop()>900) {
	setTimeout(function(){
		$('div.myWel4').removeClass('myWel4');			
	},700);
};
if ($(window).scrollTop()>1600) {
	$('div.myDynamic1').removeClass('myDynamic1');			
};


//滚动下的效果：
$(window).scroll(function(){
	if ($(window).scrollTop()>=20) {
		console.log(redNum)
		$('div.redLeft>p').removeClass('redD');
		$('div.redMiddle>span.redD,div.redMiddle>p.redD').removeClass('redD');
		$('div.redRight>p.redD,div.redRight>span.redD').removeClass('redD');

		setInterval(function(){
			if (redNum<150000) {
				redNum+=9;
				$('.redRight>span').html(redNum);	
			}
		},100);
	}

//	无缝滚动
	if ($(window).scrollTop()>400) {
		$('div.mybandOl').removeClass('mybandOl');
	};
	
//	蓝色渐变大块
	if ($(window).scrollTop()>800) {
		$('div.myWel1').removeClass('myWel1');
		setTimeout(function(){
			$('div.myWel2').removeClass('myWel2');			
		},300);
		setTimeout(function(){
			$('div.myWel3').removeClass('myWel3');			
		},600);
	};
	if ($(window).scrollTop()>900) {
		setTimeout(function(){
			$('div.myWel4').removeClass('myWel4');			
		},700);
	};
	if ($(window).scrollTop()>1600) {
		$('div.myDynamic1').removeClass('myDynamic1');			
	};
})


// 红色的块


// setInterval(function(){
// 	if (redNum<150000) {
// 		redNum+=9;
// 		$('.redRight>span').html(redNum);	
// 	}
// },1);
