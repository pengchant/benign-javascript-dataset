
                    <li class="clearfix experts_li_<%=__i%>" ne-class="{{__i == 3 ? 'experts_last' : ''}}">
                        <a href="<%=experts.url%>" class="photo">
                            <img src="<%=experts.avatar%>?imageView&thumbnail=40y40"></img>
                        </a>
                        <div class="info">
                            <a class="all_link" href="<%=experts.url%>">查看推荐</a>
                            <h5>
                                <a href="<%=experts.url%>" class="name"><%=experts.nickname%></a>
                            </h5>
                            <p> 
                                <span><%=Math.round(experts.hitRate*100)%>%命中</span><span class="lianhong"><%=experts.maxWin%>连红</span>
                            </p>
                        </div>
                    </li>
                    