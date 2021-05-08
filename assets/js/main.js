$(document).ready(function() {
    // js banner start
    $('#banner__carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        loop: true,
        autoplay: true,
        nav: true,
        responsive: {
            480: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 1,
            }
        }
    });
    // js banner end
    // js book highlights start
    $('#book__highlights').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 6
                }
            }
        })
        // js book highlights end
});