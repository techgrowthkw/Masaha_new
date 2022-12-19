// Mega Menu
$(document).ready(function() {
    // Products
    $('.toggleProducts').on('click', function () {
        $(".products-menu-wrapper").toggleClass('active');
        $(".services-menu-wrapper, .location-menu-wrapper").removeClass("active");
        $("header").toggleClass("mega-products").removeClass("mega-services").removeClass("mega-locations");

        $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $("header, .products-menu-wrapper").removeClass("active");
                $("header").removeClass("mega-products");
            };
        });
    });
    // Services
    $('.toggleServices').on('click', function () {
        $(".services-menu-wrapper").toggleClass('active');
        $(".products-menu-wrapper, .location-menu-wrapper").removeClass("active");
        $("header").toggleClass("mega-services").removeClass("mega-products").removeClass("mega-locations");

        $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $(".services-menu-wrapper").removeClass("active");
                $("header").removeClass("mega-services");
            };
        });
    });
    // Locations
    $(".toggle-location").on('click', function () {
        $(".location-menu-wrapper").toggleClass("active");
        $(".products-menu-wrapper, .services-menu-wrapper").removeClass("active");
        $("header").toggleClass("mega-locations").removeClass("mega-products").removeClass("mega-services");
        $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $(".location-menu-wrapper").removeClass("active");
                $("header").removeClass("mega-locations");
            };
        });
        $(".close-location").on('click', function () {
            $(".location-menu-wrapper").removeClass("active");
            $("header").removeClass("mega-locations");
        })
    })
});
// Location
$(document).ready(function() {
    $("#ksa").on('click', function () {
        $(".countries-list li a").removeClass("active")
        $(this).addClass("active");
        $(".location-country, .location-country > div").removeClass("active");
        $(".location-global").empty();
        $(".location-country, .location-ksa").addClass("active");
    })
    $("#oman").on('click', function () {
        $(".countries-list li a").removeClass("active")
        $(this).addClass("active");
        $(".location-country, .location-country > div").removeClass("active");
        $(".location-global").empty();
        $(".location-country, .location-oman").addClass("active");
    })
    $("#egypt").on('click', function () {
        $(".countries-list li a").removeClass("active")
        $(this).addClass("active");
        $(".location-country, .location-country > div").removeClass("active");
        $(".location-global").empty();
        $(".location-country, .location-egypt").addClass("active");
    })
    $("#germany").on('click', function () {
        $(".countries-list li a").removeClass("active")
        $(this).addClass("active");
        $(".location-country, .location-country > div").removeClass("active");
        $(".location-global").empty();
        $(".location-country, .location-germany").addClass("active");
    })
});
// Side Menu
$(document).ready(function() {
    $(".toggle-menu").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".toggle-menu, .side-wrapper").toggleClass("active");
    });
    $('body,html').click(function(e){
        $('.side-wrapper').removeClass('active');
    });
});
// Search
$(document).ready(function() {
    $(".search-group .form-control,.search-group .btn-primary").on('click', function () {
        $(".search-wrapper").addClass("active")
        $(".hero-content, .hero-footer-wrapper").removeClass("category-active")

        $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $(".search-wrapper").removeClass("active")
            };
        });
    })
    $(".search-wrapper .close-search").on('click', function () {
        $(".search-wrapper").removeClass("active")
    })
    // Toggle rent,buy,spare parts
    $(".search-group .input-group-prepend button").on('click', function () {
        $(".search-group .input-group-prepend button").removeClass("active")
        $(this).toggleClass("active")
    })
});
// Chat
$(document).ready(function() {
    $(".btn-chat").on('click', function () {
        $(".chat-wrapper").addClass("active");
        $(this).removeClass("active");
    })
    $(".close-chat").on('click', function () {
        $(".chat-wrapper").removeClass("active");
        $(".btn-chat").addClass("active");

    })
    $(window).on('scroll', function() {
        $(".btn-chat").addClass("active");
        if($(window).scrollTop() + $(window).height() > ($(document).height() - 100) ) {
            //you are at bottom
            $(".btn-chat").removeClass("active");
        }

    });
});
// Owl
$(document).ready(function() {
    $('.owl-carousel.products-slider').owlCarousel({
        items: 4,
        loop: false,
        dots: false,
        nav:true,
        navText: ["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"] ,
        margin: 10,
        autoWidth:true,
    });
    $('.owl-carousel.equipment-slider').owlCarousel({
        loop: true,
        dots: false,
        nav:true,
        navText: ["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"] ,
        margin: 20,
        center: true,
        autoWidth: true,
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth: false,
                items:1,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            },
            1600:{
                items:5,
            }
        }
    });
    $('.owl-carousel.partners-slider').owlCarousel({
        loop: true,
        dots: false,
        nav:false,
        margin: 60,
        responsive:{
            0:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5,
            }
        },
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
    $('.owl-carousel.project-gallery-slider').owlCarousel({
        loop: true,
        dots: true,
        nav:false,
        center: true,
        margin: 50,
        autoWidth: true,
        responsiveClass: false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
})
// To top


//ToTop scroller button
$(document).ready(function(){
    let toTop = $('#back-to-top');
    if ('toTop'.length) {
        let scrollTrigger = 150, // px
            backToTop = function () {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    toTop.addClass('show');
                } else {
                    toTop.removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        toTop.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});
// Tooltip
$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
// WOW =====================
$(document).ready(function(){
    wow = new WOW
    (
        {
            boxClass: 'wow',            // default
            animateClass: 'animated',   // default
            offset: 1,                  // default
            mobile: false,               // default
            live: true                  // default
        }
    );
    wow.init()
});
// Map
function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(29.079721, 48.087246);
    var mapOptions = { center: myCenter, zoom: 18 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}
