
    <div class="cm_smallimg_list clearfix zhiye-pic">
        <%bowlder.each(ad.pic,function(a){%>
            <div class="cm_smallimg">
                <a href="<%=a.url%>" class="photo">
                    <img src="<%=a.img%>?imageView&thumbnail=140x88&quality=85" width="140" height="88" alt="<%=a.title%>"/>
                </a>
                <h3>
                    <a href="<%=a.url%>"><%=a.title.replace(/“/g,'"')%></a>
                </h3>
            </div>
        <%})%> 
    </div>
    <ul class="cm_ul_round_r cm_ul_line zhiye-article">
        <%bowlder.each(ad.article,function(a){%>
            <li><a href="<%=a.url%>"><%=a.title.replace(/“/g,'"')%></a></li>
        <%})%> 
    </ul>
