/* RESOURCE JQUERY BY beli9at.com */

// animated
function actAnimate(x) {
    $('#'+x+"Box").addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass(x + ' animated');
    });
};

var appSource = {
    preLoader: function(){
        // page preloader
        var imageSources = [];
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });

        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    windowScroll: function(){
        // window scroll
        $('.chevron-up').hide();
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $(".header-img-avatar img").css({"width":"80px","box-shadow":"0 0 10px #ccc"});
                $("header").css({"background":"rgba(4, 4, 4, 0.85)","box-shadow":"0 1px 4px #000"});
            }

            if ($(this).scrollTop() > 500) {
                $('.chevron-up').css("top","42px");
                $('.chevron-up').fadeIn('slow');
            }

            if($(this).scrollTop() < 100) {
                $(".header-img-avatar img").css({"width":"100px","box-shadow":"0 0 10px #000"});
                $("header").css({"background":"rgba(0, 0, 0,0.40)","box-shadow":"none"});
                $('.chevron-up').fadeOut('slow');
            }
        });
    },

    scrollUp: function(){
        // click scroll to top
        $('.chevron-up').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

    socialBoxHide: function(){
        // hide socialBox
        $('#socialBoxHide').click(function(){
            $('#socialBox').addClass('slideOutRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('#socialBoxShow').show();
            });
        });
    },

    socialBoxShow: function(){
        // show socialBox
        $('#socialBoxShow').click(function(){
            $(this).hide();
            $('#socialBox').removeClass().addClass('slideInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            // $(this).removeClass();
            });
        });
    },

    thumbAnimated: function(){
        // box thumbnail animate
        $(".thumbnail").each(function(){
            var anim = $(this).attr("data-animate");
            $(this).mouseover(function(e){
                e.preventDefault();
                var anim = $(this).attr("data-animate");
                actAnimate(anim);
                return false;
            });

            $(this).mouseout(function(){
                return false;
            });
        });
    }
};        

$(document).ready(function(){
    appSource.preLoader();
    appSource.windowScroll();
    appSource.scrollUp();
    appSource.socialBoxHide();
    appSource.socialBoxShow();
    appSource.thumbAnimated();
});