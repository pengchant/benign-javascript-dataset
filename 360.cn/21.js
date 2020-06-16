<div class="mod-floor">
    <div class="floor-title">
      <span class="title">{{title}}</span>
      {{if moreUrl}}
      <a href="{{moreUrl}}" class="more-lnk" data-monitor="home_Floor{{floorIndex}}_more" data-monitor-resource>全部 >></a>
      {{/if}}
    </div>
    <div class="floor-body mod-img_admod_{{showType}}">
      <div class="floor-box clearfix">
        {{each data.list as item index}}
        <a href="{{item.url}}" class="imd-admod-item hover-item {{if index%showType == showType-1}}line-end{{/if}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}" data-monitor-resource>
          <img src="{{item.pic | betterImg}}" alt="{{item.title}}" title="{{item.title}}"/>
        </a>
        {{/each}}
      </div>
    </div>
  </div>