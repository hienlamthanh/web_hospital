import owlCarousel from 'owl.carousel'


$(document).ready(function() {
    $(".homepage__banner-items").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        items: 1,
        navText: ["<img class='img-fluid' src='./assets/img/homepage/slide-banner/prev-button.svg'>", "<img class='img-fluid' src='./assets/img/homepage/slide-banner/next-button.svg'>"],
    })

    $(".homepage__doctor-items").owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            575: {
                items: 2,
                margin: 30,
            },
            767: {
                items: 3,
                margin: 20,
            },
            1024: {
                items: 4,
                margin: 10,
            }
        }
    })

    $(".homepage__mailbox-items").owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },

            767: {
                items: 2,
                margin: 25,
            },

        }
    })
});