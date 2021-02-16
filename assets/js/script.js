$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items:1,
	    margin:20,
	    autoHeight:false,
	    loop: true,
	    margin: 10,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,
	    dots: true
	});

	new WOW().init();
});