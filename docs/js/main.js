$(function () {

	$(".photo__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:
			'<button class="slick-btn slick-prev"><img src="./images/slider/arrows/arrow-left.svg" alt="prew"></button>',
		nextArrow:
			'<button class="slick-btn slick-next"><img src="./images/slider/arrows/arrow-right.svg" alt="next"></button>',
		responsive: [
			{
				breakpoint: 360,
				settings: {
					arrows: false,
					autoplay: true,
				},
			},
		],
	});

   $(".menu__btn").on('click', function name() {
      $(".menu__list").slideToggle()
   })
});
