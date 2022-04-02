$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY>200){
            $('#header').addClass('header-fixed')
            $('#introduce').css('paddingTop','120px')
        }
        else{
            $('#header').removeClass('header-fixed')
            $('#introduce').css('paddingTop','0')
        }

        if (this.scrollY>3200){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Clients')
                    $(this).addClass('active')
            })
        }
        else if (this.scrollY>700){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Resume')
                    $(this).addClass('active')
            })
        }
        else{
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Home')
                    $(this).addClass('active')
            })
        }
        // if (this.scrollY>1000){
        //     $('.menu-inner').removeClass('active')
        //     $('.menu-inner').each(function(){
        //         if ($(this).text()=='Clients')
        //             $(this).addClass('active')
        //     })
        // }
    })

    // Header Menu
    let menuIsSelected = 'Home'
    $('.menu-inner').click(function(){
        $('.menu-inner').removeClass('active')
        $(this).addClass('active')
        menuIsSelected = $(this).text()
    })

    $('.menu-inner').hover(function(){
        let menu = $(this).text()
        $('.menu-inner').each(function(){
            if ($(this).text()!=menuIsSelected && $(this).text()!=menu)
                $(this).css('opacity','0.6')
        })
        }, function(){
            $('.menu-inner').css('opacity','1')
        }
    )

    // Resume Menu
    let resumeMenuIsSelected = 'Education'
    $('.resume-list').hide()
    $(`.${resumeMenuIsSelected.toLowerCase()}`).fadeIn()
    $('.resume-menu').click(function(){
        $('.resume-menu').removeClass('active')
        $(this).addClass('active')
        resumeMenuIsSelected = $(this).text()
        console.log(resumeMenuIsSelected)
        $('.resume-list').hide()
        if (resumeMenuIsSelected=='Professional Skills')
            $('.proskills').fadeIn()
        else
            $(`.${resumeMenuIsSelected.toLowerCase()}`).fadeIn()
    })

    $('.resume-menu').hover(function(){
        $(this).addClass('active')
        }, function(){
            $('.resume-menu').each(function(){
                if ($(this).text()!=resumeMenuIsSelected)
                    $(this).removeClass('active')
            })
        }
    )

    // Clients Menu
    let clientsMenuIsSelected = 'HTML'
    $('.clients-infor').hide()
    $(`.${clientsMenuIsSelected.toLowerCase()}`).fadeIn()
    $('.clients-menu').click(function(){
        $('.clients-menu').removeClass('active')
        $(this).addClass('active')
        clientsMenuIsSelected = $(this).text()
        console.log(clientsMenuIsSelected)
        $('.clients-infor').hide()
        if (clientsMenuIsSelected=='Professional Skills')
            $('.proskills').fadeIn()
        else
            $(`.${clientsMenuIsSelected.toLowerCase()}`).fadeIn()
    })
    // $('.clients-menu').hover(function(){
    //     $(this).addClass('active')
    //     }, function(){
    //         $('.clients-menu').each(function(){
    //             if ($(this).text()!=clientsMenuIsSelected)
    //                 $(this).removeClass('active')
    //         })
    //     }
    // )
})

let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = $(".tes-slider")
  var y = $(".tes-radio-btn")
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  $(x).hide()
  $(y).removeClass('active')
  $(x[slideIndex-1]).fadeIn()
  $(y[slideIndex-1]).addClass('tes-radio-btn active') 
}

function btnShowDivs(n) {
    var i;
    var x = $(".tes-slider")
    var y = $(".tes-radio-btn")
    $(x).hide()
    $(y).removeClass('active')
    $(x[n]).fadeIn()
    $(y[n]).addClass('tes-radio-btn active') 
}






