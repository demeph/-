;
$(document).ready(function () {
	$('.menu').click(function(){
		var menu = $('.header_list');
		$(this).toggleClass('active');
		if (menu.is(':visible')){
			menu.slideUp();
		}else{
			menu.slideDown();
		}
	})

})


