
$(document).ready(function () {
    var owl = $('.owl-seven');

    owl.owlCarousel({
        loop: true,
        margin: 10,

        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            },
            900: {
                items: 2
            }
        }
    });
    $('.owl-sample').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

});

$(window).load(function () {
    $('#loading').hide();

});