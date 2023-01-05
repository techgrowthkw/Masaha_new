// Mega Menu
$(document).ready(function() {
    // Products
    $('.toggleProducts').on('click', function () {
        $(".toggleServices, .toggle-location").removeClass("active")
        $(this).toggleClass("active")
        $(".products-menu-wrapper").toggleClass('active');
        $(".services-menu-wrapper, .location-menu-wrapper").removeClass("active");
        $("header").toggleClass("mega-products").removeClass("mega-services").removeClass("mega-locations");

        $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $("header, .products-menu-wrapper").removeClass("active");
                $("header").removeClass("mega-products");
                $(".toggleProducts, .toggleServices, .toggle-location").removeClass("active")

            };
        });
    });
    // Services
    $('.toggleServices').on('click', function () {
        $(".toggleProducts, .toggle-location").removeClass("active")
        $(this).toggleClass("active")
        $(".services-menu-wrapper").toggleClass('active');
        $(".products-menu-wrapper, .location-menu-wrapper").removeClass("active");
        $("header").toggleClass("mega-services").removeClass("mega-products").removeClass("mega-locations");

        $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $(".services-menu-wrapper").removeClass("active");
                $("header").removeClass("mega-services");
                $(".toggleProducts, .toggleServices, .toggle-location").removeClass("active")
            };
        });
    });
    // Locations
    $(".toggle-location").on('click', function () {
        $(".toggleServices, .toggleProducts").removeClass("active")
        $(this).toggleClass("active")
        $(".location-menu-wrapper").toggleClass("active");
        $(".products-menu-wrapper, .services-menu-wrapper").removeClass("active");
        $("header").toggleClass("mega-locations").removeClass("mega-products").removeClass("mega-services");
        $(document).on('keyup', function(e) {
            if (e.key == "Escape") {
                $(".location-menu-wrapper").removeClass("active");
                $("header").removeClass("mega-locations");
                $(".toggleProducts, .toggleServices, .toggle-location").removeClass("active")
            };
        });
        $(".close-location").on('click', function () {
            $(".location-menu-wrapper").removeClass("active");
            $("header").removeClass("mega-locations");
            $(".toggleProducts, .toggleServices, .toggle-location").removeClass("active")
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
// Brands
$(document).ready( function() {
    // Isotope Filter

    /*var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.brands-filter').on( 'click', '.btn', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });*/
    $(".brands-filter .btn").click(function () {
        $(".brands-filter .btn").removeClass("active");
        $(this).addClass("active");
    })
})
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

// Listen for click on toggle checkbox
$(document).ready(function(){
    var hasCheck = function(el) {
        var _parent = $(el).closest('.checkbox-container'),
            _result = 0;
        $(_parent).find('.checkbox-container .checkbox-single input:checkbox').each(function(in2,el2) {
            if ($(el2).is(':checked')) _result++;
        })
        if (_result>0) return false;
        return true;
    };

    $('.checkbox-container .checkbox-all input:checkbox').change(function(e){
        e.preventDefault();
        var _self = $(this);

        if (_self.is(':checked')) {
            _self.closest('.checkbox-container').find('.checkbox-single input:checkbox').prop('checked', true);
            _self.closest('.checkbox-container').find('.collapse').collapse('show')
        } else {
            _self.closest('.checkbox-container').find('.checkbox-single input:checkbox').prop('checked', false);
            _self.closest('.checkbox-container').find('.collapse').collapse('hide')
        }
    })

    $('.checkbox-single input:checkbox').change(function(e){
        e.preventDefault();
        var _self = $(this);
        if (_self.is(':checked')) {
            _self.closest('.checkbox-container').find('.checkbox-all input:checkbox').prop('checked', true);
        } else {
            /*if ($('.checkbox-single input:checkbox').not(':checked').length ==  $('.checkbox-single input:checkbox').length) {
                $('.checkbox-single input:checkbox').closest('.checkbox-container').find('.checkbox-all input:checkbox').prop('checked', false);
            }*/
        }
    })
})

// Next & prev tabs
$(document).ready(function() {
    $('.btnPrevious').on('click',function(){
        const nextTabLinkEl = $('.nav-tabs .active').closest('li').next('li').find('button')[0];
        const nextTab = new bootstrap.Tab(nextTabLinkEl);
        nextTab.show();
    });

    $('.btnNext').on('click',function(){
        const prevTabLinkEl = $('.nav-tabs .active').closest('li').prev('li').find('button')[0];
        const prevTab = new bootstrap.Tab(prevTabLinkEl);
        prevTab.show();
    });
});
/*
//Preloader
var preloader = $('#preLoader');
$(window).on('load', function() {
    var preloaderFadeOutTime = 3000;

    function hidePreloader() {
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});*/
