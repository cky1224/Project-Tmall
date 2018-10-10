$(function(){
	
var sale;
var one_allprice;
var allprice=0;
	$('.sale-add').click(function(){
//		console.log($(this).parent().parents('.Car-product-content').index()-1);
//		console.log($('.inputwrap').length);

		var no=$(this).parents('.Car-product-content').index()-1;
		var oneprice=parseFloat($('.product-unit-price').eq(no).html());
		console.log(oneprice);
		sale=$('.inputwrap').eq(no).children('.product-unit-sale-input.num').val();
		sale++;
		one_allprice=sale*oneprice;
		$('.product-unit-all-price').eq(no).html(one_allprice.toFixed(2));
		
		var newinput=$('<input type="text" value="'+
						+sale+
						'"class="product-unit-sale-input add-new num"/>'
						);
		
		$('.inputwrap').eq(no).append(newinput);
		$('.inputwrap').eq(no).children('.add-old').animate({top:-28+'px'},);

		$('.inputwrap').eq(no).children('.sub-old').animate({top:-28+'px'},);
		$(newinput).animate({top:0+'px'},);
		$('.inputwrap').eq(no).children('.add-new').attr('class','product-unit-sale-input add-old num');
		setTimeout(function(){
		$('.inputwrap').eq(no).children('.product-unit-sale-input.num').eq(0).remove();
		},250);
		for(var i = 0;i<$('.product-unit-all-price').length;i++){
			var one_allprice_i=parseFloat($('.product-unit-all-price').eq(i).html());
			allprice=allprice+ one_allprice_i;
		}
		$('.Car-all-count-span').html(allprice.toFixed(2));
		allprice=0;
		
	})
	$('.sale-sub').click(function(){

		var no=$(this).parent().parents('.Car-product-content').index()-1;
		var oneprice=parseFloat($('.product-unit-price').eq(no).html());
		sale=$('.inputwrap').eq(no).children('.product-unit-sale-input.num').val();
		sale--;
			if(sale<0){
		sale=0;
	}
		one_allprice=sale*oneprice;
		$('.product-unit-all-price').eq(no).html(one_allprice.toFixed(2));
		var newinput=$('<input type="text" value="'+sale+'" class="product-unit-sale-input sub-new num"/>');
		
		$('.inputwrap').eq(no).append(newinput);
		$('.inputwrap').eq(no).children('.add-old').animate({top:28+'px'},200);
		
		$('.inputwrap').eq(no).children('.sub-old').animate({top:28+'px'},200);
		$(newinput).animate({top:0+'px'},200);
		setTimeout(function(){
			$('.inputwrap').eq(no).children('.product-unit-sale-input.num').eq(0).remove();
		},250);
		$('.inputwrap').eq(no).children('.sub-new').attr('class','product-unit-sale-input sub-old num');
		for(var i = 0;i<$('.product-unit-all-price').length;i++){
			var one_allprice_i=parseFloat($('.product-unit-all-price').eq(i).html());
			allprice=allprice+ one_allprice_i;
		}
		$('.Car-all-count-span').html(allprice.toFixed(2));
		allprice=0;		
	

		
		
		
	})
	//删除宝贝
	$('.product-handle .product-del').click(function(){
		var no=$(this).parents('.Car-product-content').index()-1;
		
		
		$('.Car-product-content').eq(no).slideUp(700,function(){
		$('.Car-product-content').eq(no).remove();
		console.log(no);
		for(var i = 0;i<$('.product-unit-all-price').length;i++){
			var one_allprice_i=parseFloat($('.product-unit-all-price').eq(i).html());
			allprice=allprice+ one_allprice_i;
			$('.Car-all-count-span').html(allprice.toFixed(2));
			
		}
		allprice=0;
		});
		
//		
	})
	//选择框
	$('label.all-product').click(function(){
		$('label.all-product').toggleClass('chose');
		$('label.unit-checkbox').toggleClass('chose');
		
		$('.all-del').addClass('chose');
		$('.all-del').css('cursor','pointer');
	})
	//可toggleclass，也可用hasclass判断，
		$('label.unit-checkbox').click(function(){
		if($(this).hasClass('chose')){
			$(this).removeClass('chose');
			
		}
		else{
			$(this).addClass('chose');
			$('.all-del').addClass('chose');
			$('.all-del').css('cursor','pointer');
		}
	})
	$('.all-del').click(function(){
		$('label.unit-checkbox.chose').parents('.Car-product-content').remove();
		for(var i = 0;i<$('.product-unit-all-price').length;i++){
			var one_allprice_i=parseFloat($('.product-unit-all-price').eq(i).html());
			allprice=allprice+ one_allprice_i;
			$('.Car-all-count-span').html(allprice.toFixed(2));
			
		}
		allprice=0;
	})
	
	
	
	
//	切换热销产品
	$('.hot-product>ul>li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$('.hot-product-content').removeClass('current');
		$('.hot-product-content').eq($(this).index()).addClass('current');
		
	})
	
})

