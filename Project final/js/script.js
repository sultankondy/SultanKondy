$(function(){
		var header = $('#navbar'),
			introH = $('#intro').innerHeight();
			scrollOffset = $(window).scrollTop();

		check(scrollOffset)

	$(window).on('scroll', function () {
		scrollOffset = $(this).scrollTop();

		check(scrollOffset)
		
	})

	function check(scrollOffset) {
		if (scrollOffset>=introH) {
			header.addClass('fixed');
		} else{
			header.removeClass('fixed');
		}
	}

	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();
		var elementId = $(this).data('scroll'),
			blockOffset = $(elementId).offset().top;

		$('html, body').animate({
			scrollTop: blockOffset
		}, 700) 
	})
});