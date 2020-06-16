
        <% if(data.length){ %>
        <% for(var i=0;i<data.length;i++) { %>
            <div class="hot-spot-area">
                <div class="hot-spot-title"><%=data[i].title%></div>
                <ul class="text-list text-list-dbl">
                    <% for(var j = 0;j<data[i].result.length;j++) { %>
                        <li>
                            <span class="list-title">
                                <a href="<%=data[i].result[j].url%>" refcode="tlrd20140417" target="_blank"><%=data[i].result[j].title%></a>
                            </span>
                        </li>
                    <% } %>
                </ul>
            </div>
        <% } %>
        <% }else{ %>
                <div class="no-hot-spot">暂无这个年龄段宝宝的资料</div>
        <% } %>
    