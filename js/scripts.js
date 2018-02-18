$(document).ready(function () {
    
    //страница signUp-2.html
   $('.label-wr').mousedown(function(){
       $(this).addClass('scaled');
       //alert('ok');
   });
    $('.label-wr').mouseup(function(){
       $(this).removeClass('scaled');
   });
    //страница signUp-2.html
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //страница shows.html
    
    var hu = $(".current-slider").ionRangeSlider({
        min: 0,
        max: 300,
        from: 150,
        type: "single",
        hide_min_max: true,
        postfix: " km",
        grid: false,
        grid_num: 5,
        onChange: function(){
           
        }
    });
    $('.slider-modal-wr').slick({
            dots: false,
            arrows: true,
              infinite: true,
              slidesToShow: 1

        });
    //открытие модалки
//    $('.description').click(function(){
//        $('#modal-slider').modal('show');
//    });
    
    //страница shows.html
    
    
    
    
    
    
    
    
    
    
    
    

});
