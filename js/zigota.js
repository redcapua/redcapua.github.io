(function($){
	'use strict';

	$(document).ready(function(){

/*
		console.log( "ready!" );
*/
	
		$('#fullpage').fullpage({

				menu: '#navigationBar',

				afterSlideLoad: function(aL, i, sA, sI) {
				// console.log(aL);
				// console.log(i);
				// console.log(sA);
				// console.log(sI);
				},

				afterLoad: function(anchorLink, index) {
					if(anchorLink !== 'frame1'){
						$('.navigationBar').removeClass('-hidden');
					}
					else {
						$('.navigationBar').addClass('-hidden');
					}
				},

			
		});

		$('#moreinfo').click(function(ev){

			console.log( "frame_2 clicked" );

			ev.preventDefault();
			if ((window.mobileDetection.any())) {
				
				$('html, body').animate({
					scrollTop: $('.frame_2').offset().top
				}, 500);
			} else {
				$.fn.fullpage.moveTo(2);
			}
		});
		
		
		$(function() {
		window.mobileDetection = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
			}
		};

		if ((window.mobileDetection.any())) {
			$.fn.fullpage.setResponsive(true);
			$.fn.fullpage.destroy('all');
			$('.scheme-item').addClass('animated');
		}
			
		});

		$('.portfolioslider').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 20000,
			  dots: true			  
		});

	
		$(".portfolioitem a").click(function(e){
				e.preventDefault();
				var slideIndex = $(".portfolioslider a").index($(this));
				
				slideIndex = slideIndex - 3;
				
				if (slideIndex < 0){
					slideIndex = 0;					
				}
				
				console.log('slide index = ' + slideIndex);
				
				var slider = $('.portfolioslider');
				slider[0].slick.slickGoTo(parseInt(slideIndex));
				
		});
	
		$('.portfolioslider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.tabs-content').removeClass('active').eq(nextSlide).addClass('active');
		});
		
		$('.cvhistoryslider').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 20000,
			  dots: true			  
		});

	
		$(".cvhistoryitem a").click(function(e){
				e.preventDefault();
				var slideIndex = $(".cvhistoryslider a").index($(this));
				
				slideIndex = slideIndex - 3;
				
				if (slideIndex < 0){
					slideIndex = 0;					
				}
				
				console.log('slide index = ' + slideIndex);
				
				var slider = $('.cvhistoryslider');
				slider[0].slick.slickGoTo(parseInt(slideIndex));
				
		});
	
		$('.cvhistoryslider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.cv-content').removeClass('active').eq(nextSlide).addClass('active');
		});


		$('.clientlistslider').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 20000,
			  dots: true			  
		});

	
		$(".clientlistitem a").click(function(e){
				e.preventDefault();
				var slideIndex = $(".clientlistslider a").index($(this));
				
				slideIndex = slideIndex - 3;
				
				if (slideIndex < 0){
					slideIndex = 0;					
				}
				
				console.log('slide index = ' + slideIndex);
				
				var slider = $('.clientlistslider');
				slider[0].slick.slickGoTo(parseInt(slideIndex));
				
		});
	
		$('.clientlistslider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.cl-content').removeClass('active').eq(nextSlide).addClass('active');
		});

		
		$('.opensourceslider').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 20000,
			  dots: true			  
		});

	
		$(".opensourceitem a").click(function(e){
				e.preventDefault();
				var slideIndex = $(".opensourceslider a").index($(this));
				
				slideIndex = slideIndex - 3;
				
				if (slideIndex < 0){
					slideIndex = 0;					
				}
				
				console.log('slide index = ' + slideIndex);
				
				var slider = $('.opensourceslider');
				slider[0].slick.slickGoTo(parseInt(slideIndex));
				
		});
	
		$('.opensourceslider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.osp-content').removeClass('active').eq(nextSlide).addClass('active');
		});
		
		
	});
	
	
})(jQuery);