//class="tab active" ABCDE FGHJ标签
//citytab //城市块标签hide
$(function(){
	var hcities=document.getElementsByClassName('hcities');
	var arrArea=[
		['东城区','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','场频去','大兴区','怀柔区','频台去','密云区','延庆区'],
		['黄浦区','徐汇区','长宁区','静安区','提托区','虹口区','杨浦区','民兴趣','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['黄浦区','徐汇区','长宁区','静安区','提托区','虹口区','杨浦区','民兴趣','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['浦东新区','金山区','松江区','青浦区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['浦东新区','金山区','松江区','青浦区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],		
		['黄浦区','徐汇区','长宁区']
		
	]
	
	for(var k=0;k<hcities.length;k++){
		var num=0;
		hcities[k].setAttribute('index',k);
		hcities[k].onclick=function(){	
			for(var z=0;z<hide_city.length;z++){
				hide_city[z].innerHTML='';
				hide_city[z].style.display='none';
			}	
			for(var i =0;i<arrArea.length;i++){				
					if(this.getAttribute('index')==i){					
							for(var j =0;j<arrArea[i].length;j++){							
								if(this.getAttribute('index')<Math.ceil(arrArea.length/2)){									
									hide_city[0].style.display='block';
									hide_city[1].style.display='none';
									hide_one.innerHTML+='<a href="#">'+arrArea[i][j]+'</a >';
								}
								else{
									hide_city[1].style.display='block';
									hide_city[0].style.display='none';
									hide_two.innerHTML+='<a href="#">'+arrArea[i][j]+'</a >';
								}
							}						
						}				
					}
				}	
			}
	
	var arrA=[
			['汶川县','汶川县','汶川县'],
			['迎江区','迎江区','迎江区'],
			['海州区','海州区','海州区'],
			['开始看','上课'],
			['冒险','散打王'],
			['呜呜呜','上无法课'],
			['官方看','上顶非'],
			['人范围','上尔特瑞'],
			['冒规划是个','散较大'],
			['呜呜人','上无'],
			['顶非党','上 '],
			['顶非党看','上 ','可视电话'],
	];
	
	var arrB=[
		['东城区','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','场频去','大兴区','怀柔区','频台去','密云区','延庆区'],
		['黄浦区','徐汇区','长宁区','静安区','提托区','虹口区','杨浦区','民兴趣','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['朝阳区','朝阳区','朝阳区','朝阳区','朝阳区'],
		['西城区','西城区','西城区','西城区'],
		['丰台区','丰台区','丰台区','丰台区'],
		['石景山区','石景山区','石景山区','石景山区','石景山区'],
		['海淀区','海淀区','海淀区','海淀区','海淀区'],
		['门头沟区','门头沟区','门头沟区','门头沟区'],
		['房山区','房山区','房山区','房山区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['通州区','通州区','通州区','通州区'],		
		['黄浦区','徐汇区','长宁区'],
		['顺义区','顺义区','顺义区','顺义区','顺义区'],
		['场频去','场频去','场频去'],
		['大兴区','大兴区','大兴区','大兴区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['怀柔区','频台去',],
		['浦东新区','金山区','松江区','青浦区','奉贤区'],
		['浦东新区','金山区','松江区','青浦区'],
		['浦东新区','金山区','松江区'],
		['浦东新区'],
		['浦东新区','金山区'],
		

	]

var arrC=[
		['东城区','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','场频去','大兴区','怀柔区','频台去','密云区','延庆区'],
		['黄浦区','徐汇区','长宁区','静安区','提托区','虹口区','杨浦区','民兴趣','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['朝阳区','朝阳区','朝阳区','朝阳区','朝阳区'],
		['西城区','西城区','西城区','西城区'],
		['丰台区','丰台区','丰台区','丰台区'],
		['石景山区','石景山区','石景山区','石景山区','石景山区'],
		['海淀区','海淀区','海淀区','海淀区','海淀区'],
		['门头沟区','门头沟区','门头沟区','门头沟区'],
		['房山区','房山区','房山区','房山区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['通州区','通州区','通州区','通州区'],		
		['黄浦区','徐汇区','长宁区'],
		['顺义区','顺义区','顺义区','顺义区','顺义区'],
		['场频去','场频去','场频去'],
		['大兴区','大兴区','大兴区','大兴区'],
		['浦东新区','金山区','松江区','青浦区','奉贤区','崇明区'],
		['怀柔区','频台去',],
		['浦东新区','金山区','松江区','青浦区','奉贤区'],
		['浦东新区','金山区','松江区','青浦区'],
		['浦东新区','金山区','松江区'],
		['浦东新区'],
		['浦东新区','金山区'],
		

	]
function city(cities,letter,arr){
		for(var k=0;k<cities.children.length;k++){		
		cities.children[k].index=k;
		cities.children[k].onclick=function(){
				for(var z=0;z<hide_city.length;z++){
				hide_city[z].innerHTML='';
				hide_city[z].style.display='none';
			}		
		for(var i =0;i<arr.length;i++){				
				if(this.index==i){						
						for(var j =0;j<arr[i].length;j++){								
							if(this.index<6){								
								letter[0].style.display='block';									
								letter[0].innerHTML+='<a href="#">'+arr[i][j]+'</a >';
							}
							else if(this.index>=6&&this.index<=12){
								letter[1].style.display='block';									
								letter[1].innerHTML+='<a href="#">'+arr[i][j]+'</a >';
							}
							else if(this.index>12&&this.index<=18){
								letter[2].style.display='block';									
								letter[2].innerHTML+='<a href="#">'+arr[i][j]+'</a >';
							}
							else{
								letter[3].style.display='block';									
								letter[3].innerHTML+='<a href="#">'+arr[i][j]+'</a >';
						}					
					}						
				}			
			}
		}			
	}
}	
	
var hide_city=document.getElementsByClassName('hide_city');

//A
var Acities=document.getElementsByClassName('Acities')[0];
var A=document.getElementsByClassName('A');
city(Acities,A,arrA);
//B
var Bcities=document.getElementsByClassName('Bcities')[0];
var B=document.getElementsByClassName('B');
city(Bcities,B,arrB);
//C
var Ccities=document.getElementsByClassName('Ccities')[0];
var C=document.getElementsByClassName('C');
city(Ccities,C,arrC);

//城市的tab栏
	var abcTab=document.getElementsByClassName('tab');
	var cityTab=document.getElementsByClassName('citytab');
	for(var i = 0;i < abcTab.length; i++){	
		abcTab[i].onmouseenter=function(){
			for(var j=0;j<abcTab.length;++j){
					if(abcTab[j]==this){
						cityTab[j].classList.remove('hide');
						abcTab[j].classList.add('active');

					}
					else{
						cityTab[j].classList.add('hide');
						abcTab[j].classList.remove('active');
					}
				}
			
		}
		
	}
	
	
//阻止a默认事件
 $('.details .logo').click(function(e){
 	e.preventDefault();
 	$('.superbigBox').show();
 	$('.loginWindows').show(800);
 	var H=$(document).scroll().height();
 	console.log(22);
 	$('.superbigBox').height(H);
 })
$('.lw_top_head_close').click(function(){
	$('.superbigBox').hide();
 	$('.loginWindows').hide();
})


//右侧栏
$('.itemhover').hover(function(){
	
	$(this).children('.aside-hiddnbox').stop().fadeIn(500);
	$(this).children('.aside-hiddnbox').stop().animate({left:'-90px',opacity:1},300);
	
},function(){
	
	$(this).children('.aside-hiddnbox').stop().animate({left:'-150px',opacity:1},300);
	$(this).children('.aside-hiddnbox').fadeOut(500);
})
$('.handle-item.one>.itemhover').click(function(){
	
		$('.right-aside').addClass('open');

	
	$('.aside-content-wrapper').eq($(this).index()).stop().slideDown(500).siblings().slideUp(1500);
	$('.aside-content-wrapper').eq($(this).index()).removeClass('scale').siblings().addClass('scale');
	$('.aside-content-wrapper').eq($(this).index()).addClass('indexmax').siblings().removeClass('indexmax')
})

//切换右侧栏

//关闭右侧栏
			$('.xiangyou').click(function(){
				$('.right-aside').removeClass('open');
			})
//加入购物车
			var timer;	
			var arr=[];
			
			var num;
			var acount=0;
			var price;
			var aproduct_price=0;
			var imgurl;
			var number1;
			var sale;
			var count=0;
$('.addCart').click(function(){
	$('p#logo').css('display','none');
	$('.dowmlist').css('display','block');
	var m=$(this).parent().parent().parent().eq(-1).index();//宝贝索引值
//	console.log(m);
	var i=arr.indexOf(m);
				var event=window.event;
				imgurl=$(this).parent().parent().children('img').attr('src');
				
				product_price=$(this).siblings('.a_price').html();
				var newdiv=document.createElement('div');
				
				if(i==-1){//每个产品框都有对应的index值
					 //当产品框的index在arr不存在，则indexof=-1
			
				arr.push(m);
				console.log(arr);
				var newp=$('<p class="priceList-p"></p>');
//				$(newp).attr('class',$(this).parent().index()-1+'p');
				$(newp).append(
								'<img src='+imgurl+'>'+
								'<span class="left"></span>'+
								'<input type="text" class="number" value="1"/>'+
								'<span class="rigth"></span>'+
								'<i>￥<i class="dowmlist_price">'+product_price+'</i></i>'+
								'<strong class="del"></strong>'
							);
				$('.priceList').append(newp);
				
				var pricelength=$('.priceList .dowmlist_price').length;
				
				for(var j=0;j<pricelength;j++){
					var aprice= parseFloat($('.dowmlist_price').eq(j).html());
					acount=acount+aprice;
				}
					$('.sMoney strong').html(acount.toFixed(2));
					acount=0;
				
				$('.rigth').eq(i).click(function(e){
				$(this).parent().children('.left').css('cursor','pointer');
				$(this).parent().children('.left').removeClass('ban');
				var n=$(this).parent().index();//+号父级p的index
				var thisPrice=$('.a_price').eq(arr[n]).html();
				
				sale= parseInt($('.priceList p').eq(n).children('.number').val());			
				++sale;			
				$('.priceList p').eq(n).children('.number').val(sale);
				count=sale*thisPrice;			
				$('.priceList .dowmlist_price').eq(n).html(count.toFixed(2))
				var pricelength=$('.priceList .dowmlist_price').length;				
				for(var j=0;j<pricelength;j++){
					var aprice= parseFloat($('.dowmlist_price').eq(j).html());
					acount=acount+aprice;
				}
				$('.sMoney strong').html(acount.toFixed(2));
				acount=0;	
				e.stopPropagation();
				
			});
			
			$('.left').eq(i).click(function(e){ 
				
				var n=$(this).parent().index();
				var thisPrice=$('.a_price').eq(arr[n]).html();
				sale= parseInt($('.priceList p').eq(n).children('.number').val());
				--sale;
				if(sale<=0){
					sale=0;
					$(this).addClass('ban');
					$(this).css({'cursor':'not-allowed'});
				}
				
					
				
				$('.priceList p').eq(n).children('.number').val(sale);
				count=sale*thisPrice;			
				$('.priceList .dowmlist_price').eq(n).html(count.toFixed(2))
				var pricelength=$('.priceList .dowmlist_price').length;							
				for(var j=0;j<pricelength;j++){
					var aprice= parseFloat($('.dowmlist_price').eq(j).html());
					acount=acount+aprice;
				}
				$('.sMoney strong').html(acount.toFixed(2));
				acount=0;
				
				});	
				//删除宝贝	
				
				$('.del').eq(i).click(function(){
					var n=$(this).parent().index();
					var oneprice=parseFloat($(this).parent().children('i').children('.dowmlist_price').html());
					var sMoney=parseFloat($('.sMoney strong').html());
					
									
					arr.splice(n,1);
					$(this).parent().remove();	
					$('.sMoney strong').html((sMoney-oneprice).toFixed(2));
					console.log(arr);

					
				
				})
			}
			else{
				var i=arr.indexOf(m);//产品框在arr的位置，也就是说在加入购物车的位置             	
				sale=$('.number').eq(i).val();			
				++sale;
				count=sale*product_price;
				$('.number').eq(i).val(sale);
				$('.priceList .dowmlist_price').eq(i).html(count.toFixed(2))
				var pricelength=$('.priceList .dowmlist_price').length;
				
				for(var j=0;j<pricelength;j++){
					var aprice= parseFloat($('.dowmlist_price').eq(j).html());
					acount=acount+aprice;
				}
				$('.sMoney strong').html(acount.toFixed(2));
				acount=0;
//					acount=parseFloat(acount)+parseFloat(aprice);		
			}



//动画移动
				var dowmlistX=Math.ceil($('.welfare').offset().left);
				var dowmlistY=Math.ceil($('.welfare').offset().top);
				newdiv.style.left=event.pageX-20+'px';//创建的div与鼠标的坐标一样
				newdiv.style.top=event.pageY-17+'px';//
				newdiv.style.background='url('+imgurl+')no-repeat';
				newdiv.style.backgroundSize='100% 100%';
				newdiv.style.width='40px';
				newdiv.style.height='35px';
				newdiv.style.zIndex=99999999999;
				newdiv.style.border='2px solid #bf0000';
				newdiv.style.position='absolute';//使创建出来的div能够移动
				var opac=100;
				$('body').append(newdiv);					
				timer=setInterval(function(){
					//购物车头部X-创建的divX=div移动的横距离
					speedX=(dowmlistX+150-newdiv.offsetLeft)/20;
					//减7是为了使移动过去结束时和购物车头部能够吻合
					speedY=(dowmlistY-7-newdiv.offsetTop)/20;
					speedX>0?speedX=Math.ceil(speedX):speedX=Math.floor(speedX);
					speedY>0?speedY=Math.ceil(speedY):speedY=Math.floor(speedY);
					newdiv.style.left=newdiv.offsetLeft+speedX+'px';			
					newdiv.style.top=newdiv.offsetTop+speedY+'px';
//					console.log(newdiv.style.left);
					if(newdiv.style.left==dowmlistX+150+'px'){//当创建的div移动到目标值(也就是说移动到购物车头部)
						opac=(opac-1);
						
						newdiv.style.opacity=opac/100;
						
						if(newdiv.style.opacity<=0){
							$(newdiv).hide();
							$('.details').slideDown(600);
							$('.money').addClass('now');
//							$('.money').animate({width:250+'px'},80);
						}
				}
					
				},10);
			
//				setTimeout(function(){
//				clearInterval(timer);
//			},3000);
			
			
			
				
			
})
//$('.money .details').mouseenter(function(){
//	
//					$('.money').addClass('now');
//					$(this).stop().slideDown(600);
//
//		});
var timer1;
var timer2;
$('.money').mouseenter(function(e){
					clearTimeout(timer1);
					$('.money').addClass('now');
					timer1=setTimeout(function(){
						$('.money').children('.details').slideDown(600);
					},400);
					


		});
		
$('.money').mouseleave(function(e){
	clearTimeout(timer2);
	clearTimeout(timer1);
	$('.details').slideUp(400);
					timer2=setTimeout(function(){
						$('.money').removeClass('now');
					},600);
})

//滚动显示购物车栏

$(window).scroll(function(event){
	
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
$('.backtop').click(function(event) {
				
				$('html,body').animate({'scrollTop':'0px'},1000)
			});

})

	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
