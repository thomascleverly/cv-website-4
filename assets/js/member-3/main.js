
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.header').addClass('sticky');  
        }else{
            $('.header').removeClass('sticky');  
        }
    })
});

$(document).ready(function(){
    $('.member').on('click',function(){
        $(this).siblings().removeClass('active-img');
        $(this).addClass('active-img');
    })


    $('.item').on('click',function(){
        $(this).siblings().removeClass('active-item');
        $(this).addClass('active-item');
    })

    $('.skils').hide();
    $('.row-education').fadeIn();
    $('.resumelist').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        // Show 
        let id_tab = $(this).children('a').attr('href');
        // alert(id_tab);
        $('.row-education').hide();
        $('.skils').hide();
        $(id_tab).fadeIn();
        return false;
    })

    $('.premium').hide();
    $('.standard').hide();
    $('.basic').fadeIn();
    $('.pricinglist').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        // Show 
        let id_tab = $(this).children('a').attr('href');
        $('.premium').hide();
        $('.standard').hide();
        $('.basic').hide();
        $(id_tab).fadeIn();
        return false;
    })
})
