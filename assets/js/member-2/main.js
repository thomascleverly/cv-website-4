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
    
  });