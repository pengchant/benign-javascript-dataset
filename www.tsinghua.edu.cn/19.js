
    function _nl_ys_check(){
        
        var keyword = document.getElementById('showkeycode189113').value;
        if(keyword==null||keyword==""){
            alert("请输入你要检索的内容！");
            return false;
        }
        if(window.toFF==1)
        {
            document.getElementById("lucenenewssearchkey189113").value = Simplized(keyword );
        }else
        {
            document.getElementById("lucenenewssearchkey189113").value = keyword;            
        }
        var  base64 = new Base64();
        document.getElementById("lucenenewssearchkey189113").value = base64.encode(document.getElementById("lucenenewssearchkey189113").value);
        new VsbFormFunc().disableAutoEnable(document.getElementById("showkeycode189113"));
        return true;
    } 
