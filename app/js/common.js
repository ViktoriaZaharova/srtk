$(".news-slider").slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M14.5 1L1 14.5L14.5 28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.5 28L15 14.5L1.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 1070,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.gallery-clients-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M14.5 1L1 14.5L14.5 28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.5 28L15 14.5L1.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.article-gallery__slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M14.5 1L1 14.5L14.5 28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.5 28L15 14.5L1.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.product-slider-max').slick({
    slidesToShow: 1,
    asNavFor: '.product-slider-min',
    fade: true,
    arrows: false,
});

$(".product-slider-min").slick({
    slidesToShow: 4,
    asNavFor: '.product-slider-max',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M14.5 1L1 14.5L14.5 28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.5 28L15 14.5L1.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

// mobile menu
$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeToggle();
});

// активная ссылка меню
$('.menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('current');
    }
});

$('.home-menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active');
    }
});
// end

// load hidden block
$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.news-box:hidden').slice(0, 5).css('display', 'flex');

    var onBlock = $('.news-box:hidden').length;
    if (onBlock <= 0) {
        $('.btn-load').hide();
    }
});

$('.btn-load-card').on('click', function (e) {
    e.preventDefault();
    $('.category-col:hidden').slice(0, 12).fadeIn();

    var onBlock = $('.category-col:hidden').length;
    if (onBlock <= 0) {
        $('.btn-load-card').hide();
    }
});

// input mask
$('input[name="when-issued"]').mask('99.99.9999');

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$('input[name="phone"]').click(function(){
    $(this).setCursorPosition(4);
}).mask("+7 (999) 999 - 99 - 99");
$('input[name="phone"]').mask("+7 (999) 999 - 99 - 99");

// clone block
if ($(".registration-product").length){
    $('.registration-product').clone().appendTo('.mobile-registration');
}

// tab
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end
