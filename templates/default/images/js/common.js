layui.use(['carousel', 'form', 'layer'], function() {
    var carousel = layui.carousel,
        form = layui.form,
        layer = layui.layer;

    form.verify({
        user_name: function(value) {
            if (value.length < 5) {
                return 'Your name needs at least five characters';
            }
        },
        user_email: [/(^$)|^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Incorrect mailbox format'],
        user_content: function(value) {
            if (value.length < 5) {
                return 'Your content needs at least five characters';
            }
        },
        user_name_chs: function(value) {
            if (value.length < 2) {
                return '至少填写2个文字';
            }
        },
        user_email_chs: [/(^$)|^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, '邮箱格式不正确'],
        user_content_chs: function(value) {
            if (value.length < 2) {
                return '留言内容太短了';
            }
        }
    });
    form.on('submit(submit_msg)', function(data) {
        var _loading = layer.load(2);
        $.ajax({
            type: "post",
            url: "subscibe.ashx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                name: data.field.user_name,
                email: data.field.user_email,
                content: data.field.user_content
            }),
            success: function(data) {
                layer.close(_loading);
                data = JSON.parse(data);
                console.log(data);
                console.log(data.code);
                console.log(data.msg);
                layer.msg(data.msg);
                if (data.code == 1000) {
                    $('.layui-input').val('');
                }
            }
        });
        return false;
    });
    $(function() {
        $('body').addClass('body-open');
        top_box_pos();
        var $nav_submit = $('.nav-submit');
        $('.nav-submit').hover(function() {
            $('.global-nav-submit').stop();
            $('.global-nav-submit').fadeIn();
            $nav_submit.attr('style', 'background:#343434')
        }, function() {
            $('.global-nav-submit').stop();
            $('.global-nav-submit').fadeOut();
            $nav_submit.attr('style', '')
        });
        $('.global-nav-submit').hover(function() {
            $('.global-nav-submit').stop();
            $('.global-nav-submit').fadeIn();
            $nav_submit.attr('style', 'background:#343434')
        }, function() {
            $('.global-nav-submit').stop();
            $('.global-nav-submit').fadeOut();
            $nav_submit.attr('style', '')
        });

        var $nav_qrcode = $('.nav-qrcode');
        $('.nav-qrcode').hover(function() {
            $('.global-nav-qrcode').stop();
            $('.global-nav-qrcode').fadeIn();
            $nav_qrcode.attr('style', 'background:#343434')
        }, function() {
            $('.global-nav-qrcode').stop();
            $('.global-nav-qrcode').fadeOut();
            $nav_qrcode.attr('style', '')
        });
        $('.global-nav-qrcode').hover(function() {
            $('.global-nav-qrcode').stop();
            $('.global-nav-qrcode').fadeIn();
            $nav_qrcode.attr('style', 'background:#343434')
        }, function() {
            $('.global-nav-qrcode').stop();
            $('.global-nav-qrcode').fadeOut();
            $nav_qrcode.attr('style', '')
        });
        $('.nav-up').click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
        });

        $('.btn_search').click(function() {
            var key = $('.search_key').val();

            if (key != '') {
                window.location.replace('search_result.aspx?key=' + key);
            }
        });
    });
    $(window).resize(function() {
        top_box_pos();
    });

    function top_box_pos() {
        var viewW = $(window).width();
        var contentW = $('.top-box').width();
        if (contentW >= 1900) {
            var marginL = (viewW - contentW) / 2;
            $('.top-box').attr('style', 'left:' + marginL + 'px');
        } else {
            $('.top-box').attr('style', '');
        }
    };

});