(function ($) {
    "use strict";

    //slider
    let sliderOne = new Swiper('.ot-slider-active', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            prevEl: '.ot-prev',
            nextEl: '.ot-next',
        }
    });

})(jQuery);