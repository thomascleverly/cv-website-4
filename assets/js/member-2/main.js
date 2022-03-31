 $(document).ready(function(){
     $(".resume-menu").click(function(){
         $('.resume-menu').removeClass("active");
       $(this).addClass("active");
     });
    // $(".tabAwesome").click(function(){
    //     $('.tabAwesome').removeClass("active"); // tương tự cái dưới
    //   $(this).addClass("active");
    //   console.log(this.id)
      
    //   $(`.listTab .row`).addClass("d-none"); 
    //   $(`.${this.id}`).removeClass('d-none')
    //     });
    

  // $('.premium').hide();
  // $('.standard').hide();
  // $('.basic').fadeIn();
  // $('.pricinglist').on('click',function(){
  //     $(this).siblings().removeClass('active');
  //     $(this).addClass('active');

  //     // Show 
  //     let id_tab = $(this).children('a').attr('href');
  //     $('.premium').hide();
  //     $('.standard').hide();
  //     $('.basic').hide();
  //     $(id_tab).fadeIn();
  //     return false;
  // })
});