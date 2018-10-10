$('.collectNav>li').hover(function(){
	if(!$(this).children('ul').length) return;
	
	$(this).children('a').addClass('current');

	$(this).children('ul').show();
	$(this).children().children('span').css('color','#ff4400');
	$('.triangle').css('color','');
},function(){
	$(this).children('ul').hide();
	$(this).children('a').removeClass('current');
	$(this).children().children('span').css('color','');	
})


$('.collectNav>li>ul').children().hover(function(){
	$(this).addClass('currentLi').siblings().removeClass('currentLi');
},function(){
	$(this).removeClass('currentLi');
})


$('.head-store-collect').hover(function(){
	$(this).css('background-color','rgba(0,0,0,0.1)');
},function(){
	$(this).css('background-color','');
})


$('.li-first').hover(function(){
	$(this).children('.intoStore').stop().show();
	$(this).children('.searchSame').stop().show();
	$('.intoStore').hover(function(){
		$(this).css('background-color','#FF4400');
	},function(){
		$(this).css('background-color','');
	})
	$('.searchSame').hover(function(){
		$(this).css('background-color','#FF4400');
	},function(){
		$(this).css('background-color','');
	})
	$(this).children('.delete').css('display','inline-block');
},function(){
	$(this).children('.intoStore').stop().hide();
	$(this).children('.searchSame').stop().hide();
	$(this).children('.delete').css('display','none');	
})





var ht=true;
var pi=true;
$('.mulManage').click(function(){
	ht=!ht;
	if(!ht){
		$(this).css({'color':'#ff4400','border': '1px solid #ff4400'});                         
		$(this).html('取消管理');
		$('.btnAfter').show();
	}
	else{
		$(this).html('批量管理');
		$(this).css({'color':'','border':''});
		$('.btnAfter').hide();
	}
	
	$('.pic').click(function(){
		pi=!pi;
		if(!pi){
			
		}
		else{
			
		}
	})
})	


//全选
//var pro=true;
$('.btnAfter input').click(function(){
//	pro=!pro;
	if($(this).prop('checked')){
//		$(this).prop('checked');
		$('.delete').hide();
		$('.triangleLar').show();
		$('.true').show();
		$('.triangleLar').css('border-top', '30px solid #ff4400');
		$('.imgLar').css('border','1px solid #ff4400');
		$('.icon').show();

		$('.icon').click(function(){
			$(this).hide();
			$(this).parent().siblings('.triangleLar').hide();
			$(this).parent().siblings('.delete').show();
			$(this).parent().siblings('.pic').children('.imgLar').css('border','none');
		});
	}
	else{
//		$(this).prop('unchecked');
		$('.triangleLar').css('border-top', '');
		$('.imgLar').css('border','');
		$('.delete').show();
		$('.triangleLar').hide();
		$('.true').hide();
	};
})


 $('.hotConLi').hover(function(){
 	$(this).css('border','1px solid #ff4400');
 	$(this).children('.left-top').hide();
 	$(this).children('.pic-bottom').children('li').eq(3).css('background-color','#FF4400');
 	$(this).children('.pic-bottom').children('li').eq(3).children('a').css('color','#fff');
 },function(){
 	$(this).css('border','');
 	$(this).children('.left-top').show();
 	$(this).children('.pic-bottom').children('li').eq(3).css('background-color','');
 	$(this).children('.pic-bottom').children('li').eq(3).children('a').css('color','');
 })
 
var width; // 滚动宽度
var index=0; // 下标
var len;  // 偏移的次数
var timer; 
var imgScroll; // 滚动函数

width = $('.hotContent .a:first').width(); // 获取图片li标签的宽度
len = $('.hotContent .a').length; // 图片的个数


// 自动轮播功能，使用定时器
function go(){
	timer=setInterval(function(){
		imgScroll(index);
		index++;
		if(index==len) index=0;
	},1500)
}
go();

$('.change-ol li').mouseover(function(){ // 鼠标事件，移动到对应的小图标就滚动到哪）
	index=$('.change-ol>li').index(this); // 获取图标的序列号
	imgScroll(index); // 带参数执行滚动函数
})



// 鼠标移入，停止轮播;鼠标移出，开始轮播
$('.hotContent .a').hover(function(){
	clearInterval(timer)
},function(){
	go();
})


// 点击右移
$('.changeRight').mouseup(function(){ //鼠标释放时执行
	index+=1;
	if(index==len) index=0;
	imgScroll(index);
})

// 点击左移
$('.changeLeft').mouseup(function(){
	index-=1;
	if(index==-1) index=len-1;
	imgScroll(index);
})


$('.changeLeft').hover(function(){
	$(this).children('svg').css('color','#ff4400');
})

function imgScroll(index){  //带参数滚动函数
	$('.hotContent').css('left',-width*index+'px');
	$('.change-ol li').eq(index).addClass('current1').siblings('li').removeClass('current1');
}

// 移入点击左键时暂停
$('.changeRight, .changeLeft').hover(function(){
	clearInterval(timer);
},function(){
	go();
})



$('.guessContent').children('li').hover(function(){
	$(this).css('border','1px solid #ff4400');
},function(){
	$(this).css('border','');
})

//底部轮播
$('.olTwo').children('li').hover(function(){
	$(this).css('background-color','#ff6600').siblings().css('background-color','#c7c7c7');
})
var num=0;
setInterval(function(){
	$('.groomLeft>ul').css('left',-740*num+'px');
	$('.olTwo').children('li').eq(num).css('background-color','#ff6600').siblings().css('background-color','#c7c7c7');
	num++;
	if(num==2) num=0;
},2000)


//全选删除
$('.delLi').click(function(){
	for (var i=0;i<$('.li-first').length;i++) {
		if($('.triangleLar').eq(i).css('display')=='block'){
			$('.triangleLar').eq(i).parent().remove();
			i--;
		}
	};
	$('.btnAfter input').prop('checked',false);
	
	if($('.li-first').length==0){
		$('.sec-baby').html("<li class='currentLi'>您还没有收藏宝贝！</li>");
	};
	
});


//单个删除
$('.delete').click(function(){
	$(this).parent().remove();
	if($('.li-first').length==0){
		$('.sec-baby').html("<li class='currentLi'>您还没有收藏宝贝！</li>");
	};
})

