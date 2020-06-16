
                <li <%if(__i == 0){%>class="first"<%}%> ne-class="{{live.liveStatus == 1 ?'living':''}}">
                    <a href="http://live.163.com/room/<%=live.roomId%>.html">
                        <em><%=live._label%></em>
                        <span><%=live.roomName%></span>
                    </a>
                </li>
            