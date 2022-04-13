$(document).ready(function(){
    $('.eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    $('.submit-btn').click(function(){
        if ($("#userName").val().length==0 || $("#email").val().length==0 || $("#password").val().length==0){
            $(".checkEmail").text('You must fill all the gap.')
        }
        else if (emailRegex.test($('#email').val())==false){
            $(".checkEmail").text('Invalid email.')
        }
        else if($("#password").val()!=$("#confirmPassword").val()){
            $(".checkEmail").text('Confirm password incorrect.')
        }
        else{
            alert('Sign up success.')
            $(".submit-btn").attr('href','./admin-signin.html')
        }
    })
});