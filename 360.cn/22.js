<div class="mod-floor">
    <div class="floor-title mod-time_rush">
      <span class="title index-icon icon-time-rush"></span>
      <span class="title-extra js_title long-margin-right"></span>
      <span class="title-extra js_cd_prev"></span>
      <span class="countdown-box" style="display:none;">
        <em class="countdown-time">--</em>
        :
        <em class="countdown-time">--</em>
        :
        <em class="countdown-time">--</em>
      </span>
    </div>
    <div class="floor-body mod-time_rush">
      <div class="floor-box clearfix">
        {{if data.poster}}
        <a href="{{data.poster.url}}" class="big-rush-img hover-item" data-monitor="home_Floor{{floorIndex}}_poster" data-monitor-resource>
          <img src="{{data.poster.pic | betterImg}}" alt="{{data.poster.title}}" title="{{data.poster.title}}"/>
        </a>
        {{/if}}
        <div class="floor-item-box clearfix"></div>
      </div>
    </div>
  </div>