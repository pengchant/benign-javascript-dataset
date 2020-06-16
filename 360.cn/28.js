<div class="mod-floor">
    <div class="floor-title">
      <span class="title">{{title}}</span>
      {{if moreUrl}}
      <a href="{{moreUrl}}" class="more-lnk" data-monitor="home_Floor{{id}_more" data-monitor-resource>全部 >></a>
      {{/if}}
    </div>
    <div class="floor-body mod-video_list">
      <div class="floor-box clearfix">
        {{each data.list as item index}}
        <div class="video-item hover-item {{if index%3 == 2}}line-end{{/if}}" data-id="{{item.id}}">
          <div class="item-video">
            <div class="video-box"
            data-src="{{item.video}}"
            data-url="{{if item.url}}{{item.url}}{{else}}{{item.itemId | itemHref}}{{/if}}"
            data-title="{{item.title}}"
            data-monitor="home_Floor{{floorIndex}}_item{{index}}_video"
            >
              <img src="{{item.pic | betterImg}}" alt="item.title" title="{{item.title}}"/>
              <i class="index-icon icon-play"></i>
            </div>
            <!-- <p class="video-info">
              <i class="index-icon icon-love {{if !item.isFavod}}empty{{/if}}"></i>
              {{item.favoNum || 0}}
              <i class="index-icon icon-eye"></i>
              {{item.viewNum || 0}}
            </p> -->
          </div>
          <div class="item-info">
            <a href="{{if item.url}}{{item.url}}{{else}}{{item.itemId | itemHref}}{{/if}}" class="name" title="{{item.title}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}_title" data-monitor-resource>{{item.title}}</a>
            <p class="desc" title="{{item.desc}}">{{item.desc}}</p>
            <p class="price"><span class="cur-price">¥{{item.currentPrice}}</span></p>
            <a href="{{if item.url}}{{item.url}}{{else}}{{item.itemId | itemHref}}{{/if}}" class="btn-main" data-monitor="home_Floor{{floorIndex}}_item{{index}}_btn" data-monitor-resource>立即购买</a>
          </div>
        </div>
        {{/each}}
      </div>
    </div>
  </div>