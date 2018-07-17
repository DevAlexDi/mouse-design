$(document).ready(function () {
    $('.admin_page nav .opening .admin_menu_link').click(function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('opened')) {
            $('.admin_page nav .opening').removeClass('opened');
            $(this).parent().addClass('opened');
        }
        else {
            $(this).parent().removeClass('opened');
        }
    });

    $('.photos-abs-wrapp').css({
        'max-height': $('.rel-wr-photoos').width()+'px'
    });

    $(window).resize(function(){
        $('.photos-abs-wrapp').css({
            'max-height': $('.rel-wr-photoos').width()+'px'
        });
    });

    $('.event_videos_slider').slick({
        dots: false,
        arrows: true,
        speed: 200

    });

    $('.support_answers .answer_head').click(function() {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('opened');
    });

    $('.answer_file span').click(function() {
        $(this).parent().find('#answer_attach_file').click();
    });

    $('.mes_text_wrap span').click(function() {
        $(this).parent().find('#mes_attach_file').click();
    });
});