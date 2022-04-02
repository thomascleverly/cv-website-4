 window.addEventListener('scroll', event => {
    if (window.scrollY>200){
        document.querySelector('#header').className = 'header-fixed';
        document.querySelector('#introduce').style.paddingTop = '120px';
    }
    else{
        document.querySelector('#header').className = '';
        document.querySelector('#introduce').style.paddingTop = '0';
    }
});

var menusInner = document.querySelectorAll('.menu-inner')
var pageIsSelecting = 'Home'
menusInner.forEach(item => {
    item.addEventListener('click', event => {
        item.style.color = '#ff014f'
        pageIsSelecting = item.textContent
        menusInner.forEach(element => {
            if (element.textContent != item.textContent)
                element.style.color = '#3C3E31'
        })
    })
})


$(document).ready(function(){


  $('.item').on('click',function(){
      $(this).siblings().removeClass('active-item');
      $(this).addClass('active-item');
  })

  $('.skills').hide();
  $('.row-education').fadeIn();
  $('.resumelist').on('click',function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      // Show 
      let id_tab = $(this).children('a').attr('href');
      $('.row-education').hide();
      $('.skills').hide();
      $(id_tab).fadeIn();
      return false;
  })



//Pricing
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
