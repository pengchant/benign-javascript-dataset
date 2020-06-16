
            <div class="row">
                <a class="contrast_vs" href="javascript:;" target="_self" ne-click="openMatchLink('<%=pre.matchInfo.matchPageLink%>');">
                    <%if(pre.matchInfo.lotteryCategoryId == 1){%>
                        <label class="l_name"><%=pre.matchInfo.homeName%></label>
                        <span class="qicon"><img src="<%=pre.matchInfo.homeIcon%>?imageView&thumbnail=30y30"/></span>
                        <%if(pre.matchInfo.matchStatus == 3){%>
                            <em class="score"><%=pre.matchInfo.homeScore%>:<%=pre.matchInfo.guestScore%></em>
                        <%}else{%>
                            <em class="vs">VS</em>
                        <%}%>
                        <span class="qicon"><img src="<%=pre.matchInfo.guestIcon%>?imageView&thumbnail=30y30"/></span>
                        <label class="r_name"><%=pre.matchInfo.guestName%></label>
                    <%}else{%>
                        <label class="l_name"><%=pre.matchInfo.guestName%></label>
                        <span class="qicon"><img src="<%=pre.matchInfo.guestIcon%>?imageView&thumbnail=30y30"/></span>
                        <%if(pre.matchInfo.matchStatus == 3){%>
                            <em class="score"><%=pre.matchInfo.guestScore%>:<%=pre.matchInfo.homeScore%></em>
                        <%}else{%>
                            <em class="vs">VS</em>
                        <%}%>
                        <span class="qicon"><img src="<%=pre.matchInfo.homeIcon%>?imageView&thumbnail=30y30"/></span>
                        <label class="r_name"><%=pre.matchInfo.homeName%></label>
                    <%}%>
                </a>
                <div class="list">
                    <ul>
                    <%if(pre.threadList){%>
                    <%bowlder.each(pre.threadList,function(t){%>
                        <li>
                            <a href="<%=t.expert.expertPageLink%>" class="expertimg">
                                <img src="<%=t.expert.avatar%>?imageView&thumbnail=28y28">
                                <span><%=t.expert.nickname%></span>
                            </a>
                            <span class="line"></span>
                            <a href="<%=t.threadPageLink%>" class="threadtitle"><%=t.threadTitle%></a>
                        </li>
                    <%})%> 
                    <%}%>
                    </ul>
                    <i></i>
                </div>
            </div>
            