document.addEventListener("DOMContentLoaded", function() {

	$('.menu-button').click(function() {
		$('.menu').stop().slideToggle();
	});
	$(document).keyup(function(e){
		if (e.keyCode == 27){
		$('.menu').slideUp();
		}
	}).click(function(){
		$('.menu').slideUp();
	});
	$('.navbar').click(function(e){
		e.stopPropagation();
	});
	
});
