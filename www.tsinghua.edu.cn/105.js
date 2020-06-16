
    function _nl_ys_check(){
        
        var keyword = document.getElementById('showkeycode268274').value;
        if(keyword==null||keyword==""){
            alert("请输入你要检索的内容！");
            return false;
        }
        if(window.toFF==1)
        {
            document.getElementById("lucenenewssearchkey268274").value = Simplized(keyword );
        }else
        {
            document.getElementById("lucenenewssearchkey268274").value = keyword;            
        }
        var  base64 = new Base64();
        document.getElementById("lucenenewssearchkey268274").value = base64.encode(document.getElementById("lucenenewssearchkey268274").value);
        new VsbFormFunc().disableAutoEnable(document.getElementById("showkeycode268274"));
        return true;
    } 
