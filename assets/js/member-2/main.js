window.addEventListener("scroll", (event) => {
  if (window.scrollY > 200) {
    document.querySelector("#header").className = "header-fixed";
    document.querySelector("#introduce").style.paddingTop = "120px";
  } else {
    document.querySelector("#header").className = "";
    document.querySelector("#introduce").style.paddingTop = "0";
  }
});

var menusInner = document.querySelectorAll(".menu-inner");
var pageIsSelecting = "Home";
menusInner.forEach((item) => {
  item.addEventListener("click", (event) => {
    item.style.color = "#ff014f";
    pageIsSelecting = item.textContent;
    menusInner.forEach((element) => {
      if (element.textContent != item.textContent)
        element.style.color = "#3C3E31";
    });
  });
});

$(document).ready(function () {
  $(".item").on("click", function () {
    $(this).siblings().removeClass("active-item");
    $(this).addClass("active-item");
  });

  $(".skills").hide();
  $(".row-education").fadeIn();
  $(".resumelist").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    // Show
    let id_tab = $(this).children("a").attr("href");
    $(".row-education").hide();
    $(".skills").hide();
    $(id_tab).fadeIn();
    return false;
  });
//   Clients
  $(".nav-item").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  //Pricing
  $(".premium").hide();
  $(".standard").hide();
  $(".basic").fadeIn();
  $(".pricinglist").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    // Show
    let id_tab = $(this).children("a").attr("href");
    $(".premium").hide();
    $(".standard").hide();
    $(".basic").hide();
    $(id_tab).fadeIn();
    return false;
  });
});
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



$('.skils').hide();
$('.row-education').fadeIn();
$('.resumelist').on('click',function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');

  // Show 
  let id_tab = $(this).children('a').attr('href');
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