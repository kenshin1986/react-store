jQuery('document').ready(function($){
	// var menuBtn = $('.menu-icon'),
	//     menu = $('.navigation ul'),
	// 	boton = $('.btn.expand');
	// menuBtn.click(function() {
	// 	if(menu.hasClass('show')){
	// 		menu.removeClass('show');
	// 	}else{
	// 		menu.addClass('show');
	// 	}
	
	// 	if(boton.hasClass('expand')){
	// 		boton.removeClass('expand');
	// 	}else{
	// 		boton.addClass('expand');
	// 	}
			
	// });

	var pushbar =   new Pushbar({
		blur:true,
		overlay:true,
	  });
	  var intervalo = setTimeout(function() {
		pushbar.open('pushbar-newsletter');	
	  }, 5000);
	//open a pushbar
	
	//close all pushbars
	//pushbar.close();	

});