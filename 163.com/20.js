
                <div class="experts_row">
                    <a href="<%=rmd.expertPageLink%>" class="photo">
                        <img src="<%=rmd.expertInfo.avatar%>?imageView&thumbnail=40y40"></img>
                    </a>
                    <div class="info">
                        <h5>
                            <a href="<%=rmd.expertPageLink%>" class="name"><%=rmd.expertInfo.nickname%></a>
                        </h5>
                        <p> 
                            <label><%=rmd.expertInfo.slogan%></label><span><%=rmd.expertInfo.maxWin%>连红</span>
                        </p>
                    </div>
                    <div class="shooting">
                        <em><%=Math.round(rmd.expertInfo.hitRate*100)%>%</em>
                        命中率
                    </div>
                </div>
                <%if(rmd.title){%>
                <p class="plan">
                    <a href="<%=rmd.threadPageLink%>">
                        <em>方案</em><%=rmd.title%>
                    </a>
                </p>
                <%}%>
                <div class="vs_hd rmd_vs_hd <%if(rmd.matchInfo.lotteryCategoryId == 2){%>basketball_vs<%}%>">
                    <a href="<%=rmd.matchPageLink%>">
                        <i></i>
                        <span><%=rmd.matchInfo.leagueMatchName%></span>
                        <%if(rmd.matchInfo.lotteryCategoryId == 1){%>
                        <em>
                        <%=rmd.matchInfo.homeName%> vs <%=rmd.matchInfo.guestName%>
                        </em>
                        <%}else{%>
                        <em>
                        <%=rmd.matchInfo.guestName%> vs <%=rmd.matchInfo.homeName%>
                        </em>
                        <%}%>
                    </a>
                </div>
                