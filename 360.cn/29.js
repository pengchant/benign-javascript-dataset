<div class="mod-floor">
    <div class="floor-title">
      <span class="title">{{title}}</span>
      {{if moreUrl}}
      <a href="{{moreUrl}}" class="more-lnk" data-monitor="home_Floor{{floorIndex}}_more" data-monitor-resource>全部 >></a>
      {{/if}}
    </div>
    <div class="floor-body mod-article_list">
      <div class="floor-box clearfix">
        {{each data.list as item index}}
        <a href="{{item.url}}" class="article-item hover-item {{if index%4 == 3}}line-end{{/if}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}" data-monitor-resource>
          <div class="article-img">
            <img src="{{item.pic | betterImg}}" alt="{{item.title}}" title="{{item.title}}"/>
          </div>
          <div class="article-info">
            <p class="name" title="{{item.title}}">
              {{item.title}}
            </p>
            <p class="desc" title="{{item.desc}}">
              {{item.desc}}
            </p>
            <p class="publish-info">
              {{if item.author}}
              <span class="author-name" title="{{item.author}}">
                {{item.author}}
              </span>
              {{/if}}
              {{if item.publishTime}}
              <span class="publish-time" title="{{item.publishTime | formatDate}}">
                {{item.publishTime | publishTime}}
              </span>
              {{/if}}
            </p>
          </div>
        </a>
        {{/each}}
      </div>
    </div>
  </div>