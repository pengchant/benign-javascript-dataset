
<div class="scroll-news">
	<div class="scroll-news-wrap" id="snsScrollNews">
		<% _.each(sns, function(news, index){ %>
			<div class="news-item first-news-item">
				<h2><a href="<%= news.url %>" target="_blank" suda-uatrack="key=newsworld_index_2014&value=news_link_3"><%= news.title %></a></h2>
				<div class="c clearfix">
					<div class="txt">
						<div class="info clearfix">
							<div class="time"><%= news.time %></div>
							<div class="action"><a href="http://comment5.news.sina.com.cn/comment/skin/default.html?style=0&channel=<%= news.commentid.split(":")[0] %>&newsid=<%= news.commentid.split(":")[1] %>" target="_blank" data-ID="<%= news.commentid %>" suda-uatrack="key=newsworld_index_2014&value=news_link_3">评论</a>
							</div>
						</div>
                        <% if(news.uids){ %>
                        <div class="wb"><% _.each(news._show_uids, function(uid){ %>
                            <a href="http://weibo.com/u/<%= uid %>" target="_target" data-ID="<%= uid %>"><%= uid %></a>
                            <% }); %><%= news.uids.length > 3 ? "等" + news.uids.length + "人" : ""  %>也关注
                        </div>
                        <% } else if(news.top_num) {%>
                        <div class="wb"><%= news.top_num %>人分享过</div>
                        <% } %>
					</div>
				</div>
			</div>
		<% }); %>
	</div>
	<div class="scroll-news-page"><span class="step" id="snsScrollNewsStep"></span><span class="step-prev" suda-uatrack="key=newsworld_index_2014&value=left"><a id="snsScrollNewsPrev" href="javascript:;">prev</a></span><span class="step-next" suda-uatrack="key=newsworld_index_2014&value=right"><a id="snsScrollNewsNext" href="javascript:;">next</a></span></div>
</div>
