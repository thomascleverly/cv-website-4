
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

$(document).ready(function() {

    $('#contact_email').blur(function() {
        var input=$(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email=re.test(input.val());
        if ($('#contact_email').val()==""){
            $('.error_email').hide()
        }
        else if (is_email)
            $('.error_email').hide();
        else{
            $('.error_email').text('invalid email address')
            $('.error_email').fadeIn()
        }
        if(is_email){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });


    $('#contact_submit').click(function(){
        $('.textField').each(function(){
            if ($(this).val()==""){
                let x = $(this).attr('name').toLowerCase()
                console.log(x)
                $(`.error_${x}`).text(`${$(this).attr('name')} is required.`)
                $(`.error_${x}`).fadeIn()
            }
            else if ($(this).attr('name')!='Email'){
                let x = $(this).attr('name').toLowerCase()
                $(`.error_${x}`).hide()
            }
        })
    })
});