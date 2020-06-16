
    function search(obj){
        if(document.getElementById('search').value != ""){
            //$(obj).closest("form")[0].submit();
            $("#search").blur();
            location.href = "/search/index.aspx?keywords=" + $("#search").val();
        }
    }
    function entersearch(obj){
        var event = window.event || arguments.callee.caller.arguments[0];
        if (event.keyCode == 13)
        {
            if(document.getElementById('search').value != ""){
                //$(obj).closest("form")[0].submit();
                $("#search").blur();
                location.href = "/search/index.aspx?keywords=" + $("#search").val();
            }
        }
    }
