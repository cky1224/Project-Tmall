$(function(){
	
var arr=[];
var n;
var timer;
var k=0;
var flag=false;

console.log($('h4').offset().top);
	$('.welfare-item').click(function(){
		if(flag){
			alert('请先完成当前转盘！');
			return;
		}
		$('.childrenbox .row-item').removeClass('now');
		k=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.welfare-item-childrenbox>div').eq($(this).index()).addClass('current').siblings().removeClass('current');
	});
	var num=0;
	$('.prize-list').append($('.prize-list').html());
	var top=$('.prize-list').offset().top;
	function prizebanner(){
		num++;		
		
		if(Math.ceil($('.prize-list').offset().top)==parseInt(top-$('.prize-list').height()/2)){
			$('.prize-list').css('top',0);
			num=1;
		}
		$('.prize-list').animate({top:-30*num-num+'px'},2000);
	}
	setInterval(prizebanner,3000);
function scroll(){
	n=arr.splice(0,1);
	$('.childrenbox .row-item').eq(n).addClass('now').siblings().removeClass('now');
	if(n==5+9*k){
		$('.childrenbox .row-item').eq(2+9*k).removeClass('now');
	}
	if(n==8+9*k){
		$('.childrenbox .row-item').eq(5+9*k).removeClass('now');
	}
	if(n==3+9*k){
		$('.childrenbox .row-item').eq(6+9*k).removeClass('now');
	}
	if(n==0+9*k){
		$('.childrenbox .row-item').eq(3+9*k).removeClass('now');
	}

//	console.log(k);
	if(arr.length==0){
		arr=[0+9*k,1+9*k,2+9*k,5+9*k,8+9*k,7+9*k,6+9*k,3+9*k];
	}
	
}
$('.game-begin').click(function(){
	clearInterval(timer);
	flag=true;
	timer=setInterval(scroll,20);
	$('.childrenbox .row-item').eq(0).addClass('now');
	$('.game-begin').hide();
	$('.game-stop').show();
})
   
$('.game-stop').click(function(){	

	setTimeout(function(){
		clearInterval(timer);
		timer=setInterval(scroll,35);
		setTimeout(function(){
			clearInterval(timer);
			timer=setInterval(scroll,55);
			setTimeout(function(){			
				clearInterval(timer);
				timer=setInterval(scroll,70);
				setTimeout(function(){
					clearInterval(timer);
					timer=setInterval(scroll,100);
					setTimeout(function(){
						clearInterval(timer);
						timer=setInterval(scroll,200)
						setTimeout(function(){
							clearInterval(timer);
							timer=setInterval(scroll,300);
							setTimeout(function(){
								$('.game-begin').show();
								$('.game-stop').hide();
								flag=false;
								clearInterval(timer);
							},500);
						},500);
					},500);
				},500);
			},500)
		},500);
	},500);
	
})
;
$(window).scroll(function(event){
//	console.log(Math.ceil($('.prize-list').offset().top));
	
	if($(window).scrollTop()>250){
		$('.backtop').addClass('show');
		$('.welfare').addClass('scroll');
		$('.classificationNav').addClass('scroll');
		$('.fresh-fruit-left-side-navigator').addClass('show');

	}
	else{
		$('.welfare').removeClass('scroll');
		$('.classificationNav').removeClass('scroll');
		$('.fresh-fruit-left-side-navigator').removeClass('show');
	}
});
});
