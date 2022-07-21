$(document).ready(function () {
    if ($('.slick__slider').length) {
        $('.slick__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
        });

    }
    // $('.slick__slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    // });
    if ($('.owl-carousel').length) {
        $(".owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            center: true,
            items: 3,
            lazyLoad: true
        });
    }

    if ($('.swiper').length) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 400,
            spaceBetween: 100,
            autoplay: {
                delay: 5000,
            },
            freeMode: true,
        });
    }

    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        disableScrolling: true,
        fixedNavigation: true,
    });

    $('#zoom').on('click', function () {
        if ($('.slider__item'.length )) {
            $('.slider__item > a > img').toggleClass('imgZoom')
        }

        if ($('.swiper-slide'.length )) {
            $('.swiper-slide > a > img').toggleClass('imgZoom')
        }


        $('.imgZoom').mooZoom({

            // <a href="https://www.jqueryscript.net/tags.php?/Magnifying Glass/">Magnifying Glass</a> options
            zoom: {
                width: 600,
                height: 600,
                zIndex: 600,
            },

            // Overlay options
            overlay: {
                opacity: 0.65,
                zIndex: 500,
                backgroundColor: '#ffffff',
                fade: false,
            },

            // Options for the magnified image
            detail: {
                opacity: 1,
                zIndex: 600,
                margin: {
                    top: 0,
                    left: 0,
                },
                fade: false,
            },

            // duration of animation in ms
            animationDuration: 1000,

        });
    });


});
