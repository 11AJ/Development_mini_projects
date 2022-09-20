$('document').ready(function(){
    $('.squarebutton').click(function(){
        $('.conte1').slideToggle();
        $('.conte2').slideUp();
        $('.conte3').slideUp();
    })
    
    $('.squarebutton2').click(function(){
        $('.conte2').slideToggle();
        $('.conte1').slideUp();
        $('.conte3').slideUp();
    })

    $('.squarebutton3').click(function(){
        $('.conte3').slideToggle();
        $('.conte2').slideUp();
        $('.conte1').slideUp();
    })
})