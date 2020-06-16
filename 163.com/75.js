
                        <li>
                            <span ne-class="status status_<%=match.matchstat%> status_<%=match.status%>"><%=match.matchstate%></span>
                            <span class="time_box"><%=match.date%></span>
                            
                            <span class="vs_box">
                            <%if(pageName =='nba'){%>
                                <span class="vs_txt left_vs">
                                    <a href="<%=match.awayLinkUrl%>" target="_blank"><%=match.away || match.awayCn%></a>
                                </span>
                                <span class="team_logo">
                                    <a href="<%=match.awayLinkUrl%>" target="_blank">
                                        <img src="<%=match.awayLogoUrl%>">
                                    </a>
                                </span>
                                <span class="vs_txt middle_vs"><%=match.pk%></span>
                                <span class="team_logo">
                                    <a href="<%=match.homeLinkUrl%>" target="_blank">
                                        <img src="<%=match.homeLogoUrl%>">
                                    </a>                                    
                                </span>
                                <span class="vs_txt right_vs">
                                    <a href="<%=match.homeLinkUrl%>" target="_blank"><%=match.home || match.homeCn%></a>  
                                </span>
                            <%}else {%>
                                <span class="vs_txt left_vs">
                                    <a href="<%=match.homeLinkUrl%>" target="_blank"><%=match.home || match.homeCn%></a>
                                </span>
                                <span class="team_logo">
                                    <a href="<%=match.homeLinkUrl%>" target="_blank">
                                        <img src="<%=match.homeLogoUrl%>">
                                    </a>
                                </span>
                                <span class="vs_txt middle_vs"><%=match.pk%></span>
                                <span class="team_logo">
                                    <a href="<%=match.awayLinkUrl%>" target="_blank">
                                        <img src="<%=match.awayLogoUrl%>">
                                    </a>
                                </span>
                                <span class="vs_txt right_vs">
                                    <a href="<%=match.awayLinkUrl%>" target="_blank"><%=match.away || match.awayCn%></a>
                                </span>
                            <%}%>
                            </span>
                            <span class="links_box">
                                <a href="{{match.links[__i].link}}" class="vs_link" target="_blank" ne-repeat={{match.links}}>{{match.linkNames[__i].linkName}}</a>
                            </span>
                        </li>  
                    