jQuery(function($) {

    console.log("jQuery start");

$(document).ready(function(){
    $('.brand_container').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
	arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }]
    });

    $('.banner_2_bg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
	arrows: false,
        autoplaySpeed: 2000,
    });
	
	
});
	
})
