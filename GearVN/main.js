$(document).ready(function(){
    $('.PC-hot-category').slick({
        slidesToShow: 5, //số phần tử hiển thị
        //slidesToScroll: 3, //số phần tử bị dịch chuyển trong 1 lần
        autoplay: true,
        autoplaySpeed: 2000,
        Infinity: true,
        // draggable: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 1114,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    });
  });