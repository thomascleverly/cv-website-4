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

        // Scroll
        if (this.scrollY>4020){
            $('.menu-inner').removeClass('active')
            $('.menu-inner').each(function(){
                if ($(this).text()=='Pricing')
                    $(this).addClass('active')
            })
        }
        else if (this.scrollY>3250){
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
        $('.clients-infor').hide()
        $(`.${clientsMenuIsSelected.toLowerCase()}`).fadeIn()
    })

    // Pricing Menu
    let pricingMenuIsSelected = 'Standard'
    $('.pricing-single-list').hide()
    $(`.${pricingMenuIsSelected.toLowerCase()}`).fadeIn()
    $('.pricing-menu').click(function(){
        $('.pricing-menu').removeClass('active')
        $(this).addClass('active')
        pricingMenuIsSelected = $(this).text()
        $('.pricing-single-list').hide()
        $(`.${pricingMenuIsSelected.toLowerCase()}`).fadeIn()
    })
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



let textWrapper = document.querySelector('.intro-job');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
.add({
    targets: '.intro-job .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
}).add({
    targets: '.intro-job',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
}).add({
    targets: '.intro-job',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});





