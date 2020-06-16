
                    <%if(__i%6==0){%>
                         <%if(__i==0){%>
                            <ul class="cm_ul_round">
                        <%}else{%>
                            </ul>
                            <ul class="cm_ul_round">
                        <%}%>
                        <li class="cm_fb">
                           <%if(localNews.url != '' && localNews.title != ''){%>
                           <a href="<%=localNews.url%>"><%=localNews.title%></a>
                           <%}%>
                           <%if(localNews.url2 != '' && localNews.title2 != ''){%>
                           <a href="<%=localNews.url2%>"><%=localNews.title2%></a>
                           <%}%>
                        </li>
                    <%}else{%>
                        <li class="">
                           <%if(localNews.url != '' && localNews.title != ''){%>
                           <a href="<%=localNews.url%>"><%=localNews.title%></a>
                           <%}%>
                           <%if(localNews.url2 != '' && localNews.title2 != ''){%>
                           <a href="<%=localNews.url2%>"><%=localNews.title2%></a>
                           <%}%>
                        </li>
                    <%}%>
            