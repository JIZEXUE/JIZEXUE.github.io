

$(document).ready( function() {

	/*----------------------------/
	/* CAROUSEL
	/*---------------------------*/

	if($('.slick-carousel').length > 0) {
		$('.recent-works.slick-carousel .portfolio-container').slick({
			dots: true,
			slidesToShow: 3,
			cssEase: 'ease-in',
			prevArrow: '<button type="button" data-role="none" class="btn slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="btn slick-next">Next</button>',
			responsive: [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('.testimonial.slick-carousel .testimonial-container').slick({
			speed: 500,
			fade: true,
			prevArrow: '<button type="button" data-role="none" class="btn slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="btn slick-next">Next</button>',
		});

		$('#carousel-hero .carousel-inner').slick({
			speed: 800,
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 2500,
			prevArrow: '<button type="button" data-role="none" class="carousel-control left slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="carousel-control right slick-next">Next</button>',
		});
	}
	

	/*----------------------------/
	/* PARALLAX
	/*---------------------------*/

	if($('.parallax').length > 0) {
		$('.parallax').stellar();
	}


	/*----------------------------/
	/* PORTFOLIO ISOTOPE INIT
	/*---------------------------*/

	if($('.portfolio-isotope').length > 0) {
		$(window).load(function() {
			$container = $('.portfolio-isotope');

			var $isoObj = $container.isotope({
				itemSelector: '.portfolio-item',
				layoutMode: 'fitRows'
			});

			$container.parent().height($container.height());

			$('.portfolio-item-filters a').click( function(e) {
				e.preventDefault();

				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector
				});

				$container.parent().height($container.height());

				$('.portfolio-item-filters a').removeClass('active');
				$(this).addClass('active');
			});
		});
	}

	if($('.media-carousel').length > 0) {
		$('.media-carousel').slick({
			dots: true,
			prevArrow: '<button type="button" data-role="none" class="btn slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="btn slick-next">Next</button>'
		});
	}


	/*----------------------------/
	/* BLOG
	/*---------------------------*/

	if($('.featured-video').length > 0) {
		$('.featured-video').fitVids();
	}


	/*-----------------------------------/
	/* MISC
	/*----------------------------------*/

	// fix portfolio item
	$('.portfolio-item').on('click', function() {
		// do nothing, somehow this triggering portfolio overlay on mobile Safari
	});

	// indicate mobile browser
	var ua = navigator.userAgent,
	isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

	if (isMobileWebkit) {
		$('html').addClass('mobile');
	}

});

