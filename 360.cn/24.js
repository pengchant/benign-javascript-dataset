<div class="mod-floor">
    <div class="floor-title">
      <span class="title">{{title}}</span>
      {{if moreUrl}}
      <a href="{{moreUrl}}" class="more-lnk" data-monitor="home_Floor{{floorIndex}}_more" data-monitor-resource>全部 >></a>
      {{/if}}
    </div>
    <div class="floor-body mod-tuan">
      <div class="floor-box clearfix">
        {{if data.poster}}
        <a href="{{data.poster.url}}" class="right-img-box hover-item" data-monitor="home_Floor{{floorIndex}}_poster" data-monitor-resource>
          <img src="{{data.poster.pic | betterImg}}" alt="{{data.poster.title}}" title="{{data.poster.title}}"/>
        </a>
        {{/if}}
        <div class="floor-item-box clearfix">
        </div>
      </div>
    </div>
  </div>