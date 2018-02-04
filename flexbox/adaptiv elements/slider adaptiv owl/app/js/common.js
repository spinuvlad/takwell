

//Pentru menu garmoshka
$(function(){
	$('.menuToggle').on('click', function(){
			$('.menu').slideToggle(300, function(){
				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}
			});
	});

//https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
	});

});

