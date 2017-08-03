// Side Nav

$(".button-collapse").sideNav({
    menuWidth: 270
});

// Paralax
$('.parallax').parallax();

// Carrusel
 $('.carousel.carousel-slider').carousel({fullWidth: true});

// Slider 

$('.slider').slider({
    height: 480
});

$('.carousel').carousel();

// Top Menu Fixed
var altura = $('.efecto-menu').offset().top;
$(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
        $('.efecto-menu').addClass('menu-fixed');
    } else {
        $('.efecto-menu').removeClass('menu-fixed');
    }
});
// Subir al inicio 
$('.inicio').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.inicio').slideDown(300);
		} else {
			$('.inicio').slideDown(300);
		}
});

// Scroll Nav Fixed
$(function(){
     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return false;
            }
       }
   });

});