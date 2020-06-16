
function my_alert(text,callback) {
    $('#myalert').show();
    $('#myalert .myalert div').html(text);

    $('#my_ok').click( function() {
        $('#myalert').hide();

        if (typeof(callback) == 'function') {
            callback();
            return false;
        }
    });
}

function myalert_hide(){
    $('#myalert').hide();
}
