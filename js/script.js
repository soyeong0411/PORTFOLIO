
$(".subMenuBg").hide();
$(".menuWrap>ul>li").hover(function(){
    $(this).children(".submenu").stop().slideDown(400);
    $(".subMenuBg::after").stop().slideDown();
    $(".subMenuBg").show();
},function(){
    $(".subMenuBg,.menuWrap .submenu").stop().hide();
})