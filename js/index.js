// course throwing-list

$(".course-bullets-el-button").on("click", function () {
    let oncl = document.querySelectorAll(".course-bullets-el-button:hover");
    let listItem = $(".course-bullets-el-button:hover");
    let onclnum = $( ".course-bullets-el-button" ).index( listItem ) + 1;

    if (!$(oncl).hasClass("course-bullets-el-button--onclick")) {
        $(oncl).addClass("course-bullets-el-button--onclick");
        $(".course-bullets-el-descs--" + onclnum).show("1000");
    }
    else {
        $(oncl).removeClass("course-bullets-el-button--onclick");
        $(".course-bullets-el-descs--" + onclnum).hide("1000");
    }
});

// reviews-slider

$('.reviews-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<div class="reviews-slider__arrowPrev"><img src="img/reviews/arrow-left.svg" alt="" class="reviews-slider__arrowPrev--img"></div>',
    nextArrow: '<div class="reviews-slider__arrowNext"><img src="img/reviews/arrow-right.svg" alt="" class="reviews-slider__arrowNext--img"></div>',
    dotsClass: 'reviews-slider__dots'
});

// rewiews-slider arrow and dots normalize

$('.reviews-slider__dots').on('click', function() {
    let thisLi = $('.slick-active');
    if ($(thisLi).attr('id') == 'slick-slide05') {
        $('.reviews-slider__dots').addClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide03') {
        $('.reviews-slider__dots').addClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide04') {
        $('.reviews-slider__dots').addClass("reviews-slider--up4");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up4");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up4");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
    }
    else {
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
});
$('.reviews-slider__arrowPrev').on('click', function() {
    let thisLi = $('.slick-active');
    if ($(thisLi).attr('id') == 'slick-slide05') {
        $('.reviews-slider__dots').addClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide03') {
        $('.reviews-slider__dots').addClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide04') {
        $('.reviews-slider__dots').addClass("reviews-slider--up4");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up4");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up4");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
    }
    else {
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
});
$('.reviews-slider__arrowNext').on('click', function() {
    let thisLi = $('.slick-active');
    if ($(thisLi).attr('id') == 'slick-slide05') {
        $('.reviews-slider__dots').addClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide03') {
        $('.reviews-slider__dots').addClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
    else if ($(thisLi).attr('id') == 'slick-slide04') {
        $('.reviews-slider__dots').addClass("reviews-slider--up4");
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");

        $('.reviews-slider__arrowPrev').addClass("reviews-slider__arrowPrev--up4");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");

        $('.reviews-slider__arrowNext').addClass("reviews-slider__arrowNext--up4");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
    }
    else {
        $('.reviews-slider__dots').removeClass("reviews-slider--down");
        $('.reviews-slider__dots').removeClass("reviews-slider--up3");
        $('.reviews-slider__dots').removeClass("reviews-slider--up4");

        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--down");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up3");
        $('.reviews-slider__arrowPrev').removeClass("reviews-slider__arrowPrev--up4");

        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--down");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up3");
        $('.reviews-slider__arrowNext').removeClass("reviews-slider__arrowNext--up4");
    }
});

// questions throwing-list

$(".questions-bullets-el-title__button").on("click", function () {
    let oncl = document.querySelectorAll(".questions-bullets-el-title__button:hover");
    let listItem = $(".questions-bullets-el-title__button:hover");
    let onclnum = $( ".questions-bullets-el-title__button" ).index( listItem ) + 1;

    if (!$(oncl).hasClass("questions-bullets-el-title__button--onclick")) {
        $(oncl).addClass("questions-bullets-el-title__button--onclick");
        $(".questions-bullets-el-desc--" + onclnum).show("1000");
    }
    else {
        $(oncl).removeClass("questions-bullets-el-title__button--onclick");
        $(".questions-bullets-el-desc--" + onclnum).hide("1000");
    }
});

