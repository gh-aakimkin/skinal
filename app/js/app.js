document.addEventListener("DOMContentLoaded", function() {

	$('.menu-button').click(function() {
		$('.menu').stop().slideToggle();
	});

	$('.menu').click(function(e){
		e.stopPropagation();
	});
	
});
