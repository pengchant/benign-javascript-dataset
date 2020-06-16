
var urlMapping = {"/profile" : "my_profile", "/meeting" : "my_meetings", "/recording" : "my_recordings", "/join" : "join_meeting", "/j" : "join_meeting",
"/signup" : "signup_newuser", "/forgot_password" : "forgot_password", "/billing" : "account_billing", "/webinar/list" : "my_webinar"};
window.zESettings = {webWidget: {}};
window.zESettings.webWidget.chat = {};
window.zESettings.webWidget.chat.connectOnPageLoad=false;
window.adaSettings = {
adaReadyCallback: function (props) {
if (props.isRolledOut === false) {
setTimeout(function(){
try {
document.getElementById('ada-embed').style.display = 'none';
document.querySelector('.ada-embed-button-container').style.display = 'none';
} catch (error) {}
window.zESettings.webWidget.chat.suppress = true;
zE(function() {
zE.setLocale('en-us');
if (urlMapping['\/']){
zE.setHelpCenterSuggestions({ labels: [urlMapping['\/']] });
} else {
var execUrl = /\/j\/(\d+)(\?\w+=[^ ]*)?/ig.exec('\/');
if (execUrl && execUrl.length){
zE.setHelpCenterSuggestions({ labels: ['join_meeting'] });
}
}
});
});
} else {
zE('webWidget', 'hide');
}
},
authCallback: function(callback) {
var isIE = false;
if (isIE) {
$.ajax({
type: "GET",
url: "/zendesk/chat_jwt",
dataType: 'text',
success: function(response) {
callback(response);
}
});
} else {
fetch("/zendesk/chat_jwt").then(function(res) {
res.text().then(function(jwt){
callback(jwt);
});
});
}
},
hideMask: true,
crossWindowPersistence: {enabled: true,domain: ".zoom.us"},
styles: "*{font-size: 14px !important;}",
language: "en",
metaFields: {
support_chat: false,
group: "support",
country: "cn"
}
}
