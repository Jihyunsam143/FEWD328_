$(document).ready(function(){
	$('.overlay-1').on('click', function(){
		$(this).addClass('hide');
		$('.overlay-2').removeClass('hide');

	});

	$('.overlay-2').on('click', function(){
		$(this).addClass('hide');
		$('.overlay-1').removeClass('hide');

	});
})
