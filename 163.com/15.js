
                    <div class="cm_smallimg">
                        <a href="<%=localPic.url%>" class="photo">
                            <%if(localPic.pic != ""){%>
                                <img ne-lazy="effect: fadeIn;tabIndex:1" data-original="<%=localPic.pic%>?imageView&thumbnail=185y116&quality=85">
                            <%}else{%>
                                <img ne-lazy="effect: fadeIn;tabIndex:1" data-original="'http://static.ws.126.net/img09/space.gif'">
                            <%}%>
                        </a>
                        <span class="bg"></span>
                        <h3>
                            <a href="<%=localPic.url%>"><%=localPic.title%></a>
                        </h3>
                    </div>
                