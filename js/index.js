// navbar glow

$(document).scroll(function () {
    if ($(document).width() < 700)
        return false;

    if ($(document).scrollTop() < 700){
        $(".navbar__section").empty();
        $(".navbar__section").append("01");
    }

});
$(document).scroll(function () {
    if ($(document).width() < 700)
        return false;

    if ($(document).scrollTop() > 700){
        $(".nav-02").addClass("navbar-glow");
        $(".navbar__section").empty();
        $(".navbar__section").append("02");
    }
    else
        $(".nav-02").removeClass("navbar-glow");

});
$(document).scroll(function () {
    if ($(document).width() < 1700)
        return false;

    if ($(document).scrollTop() > 1700) {
        $(".nav-03").addClass("navbar-glow");
        $(".navbar__section").empty();
        $(".navbar__section").append("03");
    }
    else
        $(".nav-03").removeClass("navbar-glow");

});
$(document).scroll(function () {
    if ($(document).width() < 700)
        return false;

    if ($(document).scrollTop() > 2900){
        $(".nav-04").addClass("navbar-glow");
        $(".navbar__section").empty();
        $(".navbar__section").append("04");

    }
    else
        $(".nav-04").removeClass("navbar-glow");

});
$(document).scroll(function () {
    if ($(document).width() < 700)
        return false;

    if ($(document).scrollTop() > 3900) {
        $(".nav-05").addClass("navbar-glow");
        $(".navbar__section--end").addClass("navbar-glow--end");
        $(".navbar__section").empty();
        $(".navbar__section").append("05");

    }
    else{
        $(".nav-05").removeClass("navbar-glow");
        $(".navbar__section--end").removeClass("navbar-glow--end");
    }
});

// navbar scroll

$('.navbar-section-1').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
});
$('.navbar-section-2').on('click', function() {
    $("html, body").animate({
        scrollTop: 701
    }, "slow");
});
$('.navbar-section-3').on('click', function() {
    $("html, body").animate({
        scrollTop: 1701
    }, "slow");
});
$('.navbar-section-4').on('click', function() {
    $("html, body").animate({
        scrollTop: 2901
    }, "slow");
});
$('.navbar-section-5').on('click', function() {
    $("html, body").animate({
        scrollTop: 3901
    }, "slow");
});

// onclick button

$(".free-sign-up-button--content").on("click", function () {
    var formname = $(".free-sign-up-button--content__text").attr('data-formname');
    $('.form__input--formname').attr('value', formname);
    $('.form__input--formname').val(formname);

    $(".free-sign-up-button--content").addClass("onclick-button--free");
    $(".form__input").addClass("form--free");
    $(".form__input").removeClass("form--consultation");
    $(".form-opacity").removeClass("form--hidden");

    setTimeout(function() {
		$(".free-sign-up-button--content").removeClass("onclick-button--free");
	}, 1500);
});
$(".consultation-free-ask-button").on("click", function () {
    $(".consultation-free-ask-button--content").addClass("onclick-button--tlg");
    // $(".form").removeClass("form--hidden");

    setTimeout(function() {
		$(".consultation-free-ask-button--content").removeClass("onclick-button--tlg");
	}, 1500);
});
$(".consultation-free-sign-up-button").on("click", function () {
    var formname = $(".consultation-free-sign-up-button--content__text").attr('data-formname');
    $('.form__input--formname').attr('value', formname);
    $('.form__input--formname').val(formname);

    $(".consultation-free-sign-up-button--content").addClass("onclick-button--const");
    $(".form__input").addClass("form--consultation");
    $(".form__input").removeClass("form--free");
    
    $(".form-opacity").removeClass("form--hidden");

    setTimeout(function() {
		$(".consultation-free-sign-up-button--content").removeClass("onclick-button--const");
	}, 1500);
});
$(".form__close-button").on("click", function () {
    // $(".form").addClass("form--hidden");
    $(".form-opacity").addClass("form--hidden");
});

// slick slider

$('.cases-slider').slick({
    infinite: false,
    prevArrow: '<div class="arrowPrev"></div>',
    nextArrow: '<div class="arrowNext"></div>',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});


























// $(".arrow-prev").on("click", function() {
//     var slideToOpacity = [...document.querySelectorAll('.cases-slider-slide[aria-hidden="false"]')][2];
//     $(slideToOpacity).addClass("opacity-slide");
// });
// $(".arrow-next").on("click", function() {
//     var slideToOpacity = [...document.querySelectorAll('.cases-slider-slide[aria-hidden="false"]')][2];
//     $(slideToOpacity).addClass("opacity-slide");
// });