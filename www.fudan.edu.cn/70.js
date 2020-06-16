
    function search1(obj){
        if(document.getElementById('search1').value != ""){
            //$(obj).closest("form")[0].submit();
            $("#search1").blur();
            location.href = "/search/index.aspx?keywords=" + $("#search1").val();
        }
    }
    function entersearch1(obj){
        var event = window.event || arguments.callee.caller.arguments[0];
        if (event.keyCode == 13)
        {
            if(document.getElementById('search1').value != ""){
                //$(obj).closest("form")[0].submit();
                $("#search1").blur();
                location.href = "/search/index.aspx?keywords=" + $("#search1").val();
            }
        }
    }
