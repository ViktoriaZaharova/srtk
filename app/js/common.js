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

// mobile menu
$('.btn-close').click(function (){
   $('.mobile-menu').fadeOut();
});

$('.btn-burger').click(function (){
    $('.mobile-menu').fadeToggle();
});