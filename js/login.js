$(function(){
	var bdDiv=document.getElementsByClassName('bd');
	var quickBtn=document.getElementsByClassName('quick_login')[0];
	var comBtn=document.getElementsByClassName('accountnum_login')[0];
	quickBtn.onclick=function(){
			bdDiv[0].classList.remove('current');
			bdDiv[1].classList.add('current');
			
	}
	comBtn.onclick=function(){
			bdDiv[1].classList.remove('current');
			bdDiv[0].classList.add('current');
			
	}
	
	pwdLogin.onclick=function(){
			bdDiv[1].classList.remove('current');
			bdDiv[0].classList.add('current');
	}
	$('#loginForm')		

})
