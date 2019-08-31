$(document).ready(function(){

    setInterval(function() 
    {
        $('.icon').addClass('jump');
        setTimeout(function(){
            $('.icon').removeClass('jump');
        }, 1000);
        
    },6000);
});