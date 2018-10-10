$(function(){
	var num=0;//num为轮播图的张数
	var timer=null;
	
	//自动轮播
	function imgMove(){
		clearInterval(timer);
		timer=setInterval(function(){
			num++;
			// console.log(num);
			if(num>9){
				num=1;
				$('.imgTurnUl').css('left', '0');
			}
			$(".imgTurnUl").animate({left:-(750*num)+'px'});
			if (num>8){
				$(".ulNumber").children().eq(0).addClass('liCurrent').siblings().removeClass('liCurrent');
			}else{
				$(".ulNumber").children().eq(num).addClass('liCurrent').siblings().removeClass('liCurrent');
			}
		},2000);
	}
	imgMove();


	//向左滚动
	$(".toLeft").click(function(){
		// alert(1);
		clearInterval(timer);
		num--;
		if(num<0){
			num=8;
			$('.imgTurnUl').css('left', '-6750px');
		}
		$(".imgTurnUl").stop().animate({left:-(750*num)+'px'},500);
		if (num<0){
			$(".ulNumber").children().eq(8).addClass('liCurrent').siblings().removeClass('liCurrent');
		}else{
			$(".ulNumber").children().eq(num).addClass('liCurrent').siblings().removeClass('liCurrent');
		}
	});

	
	//向右滚动
	$(".toRight").click(function(){
		clearInterval(timer);
		num++;
		if(num>9){
			num=1;
			$('.imgTurnUl').css('left', '0');
		}
		$(".imgTurnUl").stop().animate({left:-(750*num)+'px'},500);
		if (num>8){
			$(".ulNumber").children().eq(0).addClass('liCurrent').siblings().removeClass('liCurrent');
		}else{
			$(".ulNumber").children().eq(num).addClass('liCurrent').siblings().removeClass('liCurrent');
		}
	});


	//鼠标移入移出 
	$(".cMTurn").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		imgMove();
	});


	//圆形导航条li
	var aLi = $(".ulNumber").children();

	aLi.mouseenter(function(){
		clearInterval(timer);
		num = $(this).index();
		$(this).addClass('liCurrent').siblings().removeClass('liCurrent');
		$('.imgTurnUl').css('left',-750*num+'px');
	});
	aLi.mouseleave(function() {
		imgMove();
	});
})
	
	
	
	

	


