
function check_user_login(type, callback_func, redirect_url, action, speTitle,  options){
    if (login==true) {
        callback_func();
    }
    else {
        if (!redirect_url) {
            redirect_url = window.location.href; 
        }
        reg_show_popup(type, callback_func, (action || 'login'), speTitle, redirect_url, options);
    }
}
