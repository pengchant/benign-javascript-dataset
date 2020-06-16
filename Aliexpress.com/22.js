
$('.studio-group').each(function() {
    var groupId = $(this).attr('id');
    if (groupId) {
        $(this).attr('data-spm', groupId);
    }
});

if(window.isIpadApp){
    $('.site-footer').hide();
    $('.footer-copywrite').hide();
}