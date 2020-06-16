
            <%if(ad.adlist && ad.adlist.length > 0){%>
                <div ne-role="tab-body" class="tab_panel tab_ad_pannel">
                    <div class="cm_smallimg_list clearfix">
                        <%bowlder.each(ad.piclist,function(a){%>
                            <div class="cm_smallimg">
                                <a href="<%=a.link%>" class="photo">
                                    <img src="<%=a.imgsrc%>?imageView&thumbnail=140y88&quality=85" width="140" height="88" alt="<%=a.title%>"/>
                                </a>
                                <h3>
                                    <a href="<%=a.link%>"><%=a.title%></a>
                                </h3>
                            </div>
                        <%})%> 
                    </div>
                    <ul class="cm_ul_round_r cm_ul_line">
                        <script type="text/template" ne-repeat="ad in modadlist">
                        <%bowlder.each(ad.adlist,function(a){%>
                            <li><a href="<%=a.link%>"><%=a.title%></a></li>
                        <%})%> 
                    </ul>
                    <a href="http://gb.corp.163.com/gb/legal.html" class="ad_hover_href"></a>
                </div>
            <%}%>
        