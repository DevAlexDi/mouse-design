$(document).ready(function () {
    $('.admin_page nav .opening .admin_menu_link').click(function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('opened')) {
            $('.admin_page nav .opening.opened .admin_menu_link').removeClass('active');
            $('.admin_page nav .opening').removeClass('opened');
            $(this).parent().addClass('opened');
            $(this).addClass('active');
        }
        else {
            $(this).parent().removeClass('opened');
            $(this).removeClass('active');
        }
    });
});