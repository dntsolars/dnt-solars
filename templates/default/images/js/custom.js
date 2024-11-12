function goTop() {
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 100)
            $(".gotop").fadeIn(350).css("display", "block");
        else
            $(".gotop").fadeOut(350).css("display", "none");
    });
    $(".gotop").click(function(e) {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
};

$(document).ready(function() {
    //底部固定区域占位
    if ($(".fixed-bottom").is(":visible")) {
        $("#wrapper").css("paddingBottom", $(".fixed-bottom").height());
    } else {}
    //返回顶部
    goTop();
    //内容加载后的运动效果
    dataAnimate();
});