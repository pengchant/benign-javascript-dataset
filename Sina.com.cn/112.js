
<% _.each(newsList, function(news){ %>
	<div class="news-item">
		<h2><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>
		<div class="c clearfix">
			<div class="info clearfix">
				<div class="time"><%= news.time %></div>
				<div class="action">
				<% if(news.hideComment){ %>                                          
				<% } else { %>
					<a href="http://comment5.news.sina.com.cn/comment/skin/default.html?style=0&channel=<%= news.ext4.split(":")[0] %>&newsid=<%= news.ext4.split(":")[1] %>" target="_blank" data-ID="<%= news.ext4 %>">评论</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
<% }); %>
