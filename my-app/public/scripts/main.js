/*===================================
Author       : Bestwebcreator.
Template Name: Shopwise - eCommerce Bootstrap 4 HTML Template
Version      : 1.2
===================================*/

/*===================================*
PAGE JS
*===================================*/

(function($) {
	'use strict';
	
	/*===================================*
	01. LOADING JS
	/*===================================*/
	function carousel_slider() {
		$('.carousel_slider').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots: $carousel.data("dots"),
				loop: $carousel.data("loop"),
				items: $carousel.data("items"),
				margin: $carousel.data("margin"),
				mouseDrag: $carousel.data("mouse-drag"),
				touchDrag: $carousel.data("touch-drag"),
				autoHeight: $carousel.data("autoheight"),
				center: $carousel.data("center"),
				nav: $carousel.data("nav"),
				rewind: $carousel.data("rewind"),
				navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
				autoplay: $carousel.data("autoplay"),
				animateIn: $carousel.data("animate-in"),
				animateOut: $carousel.data("animate-out"),
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				smartSpeed: $carousel.data("smart-speed"),
				responsive: $carousel.data("responsive")
			});
		});
	}

	function slick_slider() {
		$('.slick_slider').each(function () {
			var $slick_carousel = $(this);
			$slick_carousel.slick({
				arrows: $slick_carousel.data("arrows"),
				dots: $slick_carousel.data("dots"),
				infinite: $slick_carousel.data("infinite"),
				centerMode: $slick_carousel.data("center-mode"),
				vertical: $slick_carousel.data("vertical"),
				fade: $slick_carousel.data("fade"),
				cssEase: $slick_carousel.data("css-ease"),
				autoplay: $slick_carousel.data("autoplay"),
				verticalSwiping: $slick_carousel.data("vertical-swiping"),
				autoplaySpeed: $slick_carousel.data("autoplay-speed"),
				speed: $slick_carousel.data("speed"),
				pauseOnHover: $slick_carousel.data("pause-on-hover"),
				draggable: $slick_carousel.data("draggable"),
				slidesToShow: $slick_carousel.data("slides-to-show"),
				slidesToScroll: $slick_carousel.data("slides-to-scroll"),
				asNavFor: $slick_carousel.data("as-nav-for"),
				focusOnSelect: $slick_carousel.data("focus-on-select"),
				responsive: $slick_carousel.data("responsive")
			});
		});
	}


	$(document).ready(function () {
		carousel_slider();
		slick_slider();
	});
	
	
})(jQuery);