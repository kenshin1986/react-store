jQuery('document').ready(function($){
	var menuBtn = $('.menu-icon'),
	    menu = $('.navigation ul'),
		boton = $('.btn.expand');
	menuBtn.click(function() {
		if(menu.hasClass('show')){
			menu.removeClass('show');
		}else{
			menu.addClass('show');
		}
	
		if(boton.hasClass('expand')){
			boton.removeClass('expand');
		}else{
			boton.addClass('expand');
		}
			
	});
});