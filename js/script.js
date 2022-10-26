//menu
$(".subMenuBg").hide();
$(".menuWrap>ul>li").hover(function(){
    $(this).children(".submenu").stop().slideDown(400);
    $(".subMenuBg::after").stop().slideDown();
    $(".subMenuBg").show();
},function(){
    $(".subMenuBg,.menuWrap .submenu").stop().hide();
})

//swiper-slide
var swiper = new Swiper(".mainSlide", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".noticeSlide", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//slick-slide
$('.slick-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite : true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots : true,
    // prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
	// nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
  });