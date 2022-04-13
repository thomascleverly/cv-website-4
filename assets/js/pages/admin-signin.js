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
let userName = ['admin@tlu.edu.vn', 'huyen@tlu.edu.vn', 'duong@tlu.edu.vn']
let password = ['admin', 'admin', 'admin'] 
function handleSubmit() {
    if($('#userName').val().length === 0 && $('#passWord').val().length === 0) {
        $("#text_when_empty").html('*Vui lòng nhập')
    }
    else {
        let check = 0;
        for (var i=0;i<userName.length;i++){
            if ($('#userName').val()==userName[i] && $('#passWord').val()==password[i])
                check = 1
        }
        $("#text_when_empty").html('')
        if(check==0) {
            $("#not_found_account").html("*Tài khoản hoặc mật khẩu sai")
        }
        else {
            $(".submit-btn").attr('href','./admin.html')
        }
    } 
}