
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 80){
//             $('.header').addClass('sticky');  
//         }else{
//             $('.header').removeClass('sticky');  
//         }
//     })
// });


$(document).ready(function(){

    // $('.member').on('click',function(){
    //     $(this).siblings().removeClass('active-img');
    //     $(this).addClass('active-img');
    // })


    // $('.item').on('click',function(){
    //     $(this).siblings().removeClass('active-item');
    //     $(this).addClass('active-item');
    // })

    $(window).scroll(function(){
        if (this.scrollY>200){
            $('#header').addClass('header-fixed')
            $('#introduce').css('paddingTop','120px')
        }
        else{
            $('#header').removeClass('header-fixed')
            $('#introduce').css('paddingTop','0')
        }
    })

    //Mobile Menu
    $('.mobile-menu').hide()
    // $('.btn-bar').hide()
    $('.model').hide()
    $('.btn-bar').click(function(){
        let id_menu = $(this).children('a').attr('href');
        $('.mobile-menu').fadeIn()
        $('.model').fadeIn()
        $(id_menu).fadeIn()
        return false
    })
    $('.btn-close').click(function(){
        let id_btn = $(this).children('a').attr('href');
        $('.mobile-menu').hide()
        $('.model').hide()
        $(id_btn).fadeIn()
    })

    $('.menu-inner').click(function(){
        $('.menu-inner').removeClass('active')
        $(this).addClass('active')
        menuIsSelected = $(this).text()
    })

    $('.menu-inner').hover(function(){
        let menu = $(this).text()
        $('.menu-inner').each(function(){
            if ($(this).text()!=menuIsSelected && $(this).text()!=menu)
                $(this).css('opacity','0.4')
        })
        }, function(){
            $('.menu-inner').css('opacity','0.8')
        }
    )




    // Text Run
    var typed = new Typed(".typing", {
        strings: ["Pupil.","Interns.","Web Developer.","Freelancer."],
        typeSpeed :100,
        backSpeed :60,
        loop :true

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

        $('.nav-client').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
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

    if($(".btn-up").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-up").show()
			} else {
				$(".btn-up").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}	
});