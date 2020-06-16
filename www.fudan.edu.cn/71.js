
    function search2(obj){
        if(document.getElementById('search2').value != ""){
            //$(obj).closest("form")[0].submit();
            $("#search2").blur();
            location.href = "/search/index.aspx?keywords=" + $("#search2").val();
        }
    }
    function entersearch2(obj){
        var event = window.event || arguments.callee.caller.arguments[0];
        if (event.keyCode == 13)
        {
            if(document.getElementById('search2').value != ""){
                //$(obj).closest("form")[0].submit();
                $("#search2").blur();
                location.href = "/search/index.aspx?keywords=" + $("#search2").val();
            }
        }
    }
