    $(function () {
        $('.image_list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 1500,
            asNavFor: '.nav_list'
        });
        $('.nav_list').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.image_list',
            dots: false,
            autoplay: true,
            autoplaySpeed: 1500,
            centerMode: false,
            focusOnSelect: true,
        });
    });
