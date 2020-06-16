
function confirmSignUp(){
if (window.confirmSignUpVueInstance) {
$('#confirmSignUpDialog .is-access-user').hide();
confirmSignUpVueInstance.$data.isAccessUser = false;
}
var signupNeedCaptcha = false;
signupNeedCaptcha = true;
var dialog = $('#confirmSignUpDialog');
var confirm_email = $('#confirm_email');
var email_content = $("#confirm_email_content");
var emailAddr = arguments[0];
var yesFun = arguments[1];
var w = $(window);
if(arguments.length === 3){
var position = arguments[2].offset();
var top = position.top-w.scrollTop();
top = top<20?20:top;
var left = position.left-25-w.scrollLeft();
left = left<20?20:left;
var newPosition = [top, left];
}
var bYes = false;
confirm_email.val(emailAddr);
email_content.text(emailAddr);
$('.edit').unbind('click').delegate("", "click", function () {
email_content.hide();
$(this).hide();
confirm_email.removeAttr("readonly").show().focus();
});
confirm_email.unbind('blur').delegate('', 'blur', function(){
if (dialog.validate().element(confirm_email)) {
confirm_email.attr("readonly", true).hide();
email_content.text(confirm_email.val()).show();
$('.edit').show();
} else {
confirm_email.removeAttr("readonly").focus();
$('.edit').hide();
}
});
$.modal(dialog, $.extend({}, SB.MODAL_DEFAULTS, {
overlayId: 'confirm-overlay',
containerId: 'confirm-container',
position: newPosition,
persist: true,
onShow: function(dialogModal){
captcha.refresh();
confirm_email.css({visibility: "visible"});
dialogModal.data.find('button.yes').unbind('click').bind('click', function(){
bYes = true;
var validEmail = dialog.validate().element(confirm_email);
if (!validEmail) {
return;
} else if (signupNeedCaptcha && !captcha.isInvisible() && !dialog.validate().element($("input[name='captcha-text']"))) {
return;
}
var email = confirm_email.val();
if (signupNeedCaptcha && captcha.isInvisible() && !captcha.getValue()){
captcha.executeReCaptcha(function (){
$.modal.close();
if ($("#iframe-wrap").length) {
showKrTermsIframe();
return;
}
$('.btn-home.submit').trigger('focus');
yesFun(email, captcha.getValue());
});
} else {
$.modal.close();
if ($("#iframe-wrap").length) {
showKrTermsIframe();
return;
}
$('.btn-home.submit').trigger('focus');
yesFun(email, captcha.getValue());
}
});
}
}));
}
function showKrTermsIframe() {
$("#iframe-wrap").show()
$("body").css({
"overflow": "hidden"
});
}
