//导航栏
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




//更多市场
$('.moreMark').hover(function(){
	$('.wrap').slideDown();
},function(){
	
	$('.wrap').hide();	
})
$('.wrap').children('.first').hover(function(){
	$(this).css('background-color','#f5f5f5').siblings().css('background-color','');
})


//爱心旋转  所有分类
$('.collectNav>li>ul').children().hover(function(){
	$(this).addClass('currentLi').siblings().removeClass('currentLi');
},function(){
	$(this).removeClass('currentLi');
})
$('.ChinaLand-bottom').children('li').click(function(){
	var cl=$(this).html();
	$('.CL').html(cl);
})
$('.classicAll').hover(function(e){
	$(this).children('span').eq(1).addClass('tranRotate');
	$('.classicAll-bottom').show();
//	e.preventDefault();
//	return false;
},function(){
	$(this).children('span').eq(1).removeClass('tranRotate');
	$('.classicAll-bottom').hide();	
})



$('.classicAll-bottom').children('li').hover(function(){
	$(this).css('background-color','#000').siblings().css('background-color','');
	$(this).children('a').css('color','white').siblings().css('color','');
},function(){
	$(this).css('background-color','');	
	$(this).children('a').css('color','')
})





//放大镜特效
$('.listImg').children('li').hover(function(){
	$(this).addClass('borderCurrent').siblings().removeClass('borderCurrent')
	var i=$(this).index()+1;
	console.log('src1')
	$('.pic img').attr('src','../img/0'+i+'.jpg');
	$('.lar-pic img').attr('src','../img/00'+i+'.jpg');
})


var shadeWidth = $('.mask').width(),//阴影的宽度
	shadeHeight = $('.mask').height(),//阴影的高度
	middleWidth = $('.pic').width(),//容器的宽度
	middleHeight = $('.pic').height(),//容器的高度
	bigWidth = $('.lar-pic').width(),//放大图片盒子的宽度
	bigHeight = $('.lar-pic').height(),//放大图片盒子的高度
	rateX = bigWidth / shadeWidth,//放大区和遮罩层的宽度比例
	rateY = bigHeight / shadeHeight;//放大区和遮罩层的高度比例

$('.pic').hover(function(){
	$('.mask').show();
	$('.lar-pic').show();
},function(){
	$('.mask').hide();
	$('.lar-pic').hide();
})


$('.pic').mousemove(function(e){//当鼠标移动时，阴影和放大区图片进行移动
	//记录下光标距离页面的距离
	var x = e.pageX,
		y = e.pageY;
 
	//设置遮罩层的位置
	$('.mask').offset({
		top: y-shadeHeight/2,
		left: x-shadeWidth/2
	});		
 
	//获取遮罩层相对父元素的位置
	var cur = $('.mask').position(),
		_top = cur.top,
		_left = cur.left,
		hdiffer = middleHeight - shadeHeight,
		wdiffer = middleWidth - shadeWidth;
 
	if (_top < 0) _top = 0;
	else if (_top > hdiffer) _top = hdiffer;
	if (_left < 0) _left = 0;
	else if (_left > wdiffer) _left =wdiffer;
 
	//判断完成后设置遮罩层的范围
	$('.mask').css({
		'top': _top,
		'left': _left
	});

	//设置放大区图片移动
	$('.lar-pic>img').css({
		'top': - rateY*_top,
		'left': - rateX*_left
	});
});


//颜色分类
$('.black').click(function(){
	$(this).css('border','2px solid #ff4400');
	$('.grey').css('border','none');
})
$('.grey').click(function(){
	$(this).css('border','2px solid #ff4400');
	$('.black').css('border','none');
})





//加入购物车	
	var n1=Number($('.n').html());
	if(n1!==0){
		$('.decrease').css('color','black')
	}else{
		$('.decrease').css('color','')
	}	
$('.increase').click(function(){
	var n1=Number($('.n').val());
	$('.n').val(n1+1);
})
$('.decrease').click(function(){	
	var n1=Number($('.n').val());
	if(n1==0){
		$(this).css('cursor','not-allowed');
	}else{
		$(this).css('cursor','pointer');
		$('.n').val(n1-1);
	}	
})
