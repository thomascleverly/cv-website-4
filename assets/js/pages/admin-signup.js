$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});
function handleSubmit() {
    if($('#userName').val().length === 0 && $('#passWord').val().length === 0) {
        $("#text_when_empty").html('*Vui lòng nhập')
    }
    else {
        $("#text_when_empty").html('')
        if($('#userName').val() !== 'admin@tlu.edu.vn' || $('#passWord').val() !=='admin' ) {
            $("#not_found_account").html("*Tài khoản hoặc mật khẩu sai")
        }
        else {
            $(".submit-btn").attr('href','./admin.html')
        }
    } 
}