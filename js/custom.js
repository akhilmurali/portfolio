$(function(){
    console.log('Jquery Initialized');
    $(window).resize(function(){
        if($(window).width() <= 700){
            //Mobile:
            console.log('Mobile');
            $('.w-100').removeClass('.m-t-40');
        }
    });
});