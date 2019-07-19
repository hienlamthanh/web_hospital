window.onscroll = function() {
    check_Fixed_Slide_Menu()
};

$(document).ready(function() {
    padding_body();
});

var banner = document.querySelector('.header__banner');
var header = document.querySelector('.header');
var navbar = document.querySelector('.header__bottom');

var hHeaderBanner = $('.header__banner').outerHeight();
var hHeaderBottom = $('.header__bottom').outerHeight();
var hHeader = $('.header').outerHeight();
var hHeaderTop = hHeader - hHeaderBottom;
var scrWidth = screen.width;
var previousTop = 0,
    currentTop = 0;

var paddingTop1 = hHeader - hHeaderBanner;

function check_Fixed_Slide_Menu() {
    var currentTop = $(window).scrollTop();
    myFunction(currentTop);
    previousTop = currentTop;
}

function padding_body() {
    document.body.style.paddingTop = hHeader + "px";

    // ****Load khi gửi Folder 'dist'
    // if (scrWidth > 991) {
    //     document.body.style.paddingTop = paddingTop1 + "px";
    // } else {
    //     document.body.style.paddingTop = hHeader + "px";
    // }
}


function myFunction(currentTop) {
    if (scrWidth > 991) {
        if (currentTop - previousTop > 0) {
            navbar.classList.add("top-fixed");
            header.style.transform = "translateY(-" + hHeaderTop + "px)";
        } else {
            navbar.classList.remove("top-fixed");
            header.style.transform = "translateY(0px)";
        }
    } else {
        if (currentTop - previousTop > 0) {
            header.classList.add("top-fixed");
            header.style.transform = "translateY(-" + hHeaderBanner + "px)";
        } else {
            header.classList.remove("top-fixed");
            header.style.transform = "translateY(0px)";
        }
    }
}