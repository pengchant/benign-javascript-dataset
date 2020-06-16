<div class="mod-floor">
    <div class="floor-title">
      <span class="title">{{title}}</span>
      {{if moreUrl}}
      <a href="{{moreUrl}}" class="more-lnk" data-monitor="home_Floor{{floorIndex}}_more" data-monitor-resource>全部 >></a>
      {{/if}}
    </div>
    <div class="floor-body mod-product_list_{{showType}}">
      <div class="floor-box clearfix">
        {{if data.poster}}
        <a href="{{data.poster.url}}" class="head-img-item hover-item" data-monitor="home_Floor{{floorIndex}}_poster" data-monitor-resource>
          <img src="{{data.poster.pic | betterImg}}" alt="{{data.poster.title}}" title="{{data.poster.title}}"/>
        </a>
        {{/if}}
        {{each data.list as item index}}
        <a href="{{item.itemId | itemHref}}" class="product-item hover-item {{if index%4 == 1}}line-end{{/if}}" title="{{item.title}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}" data-monitor-resource>
          {{if item.label}}
            {{if item.labelType=='1'}}
            <div class="top-label label-orange">{{item.label}}</div>
            {{else if item.labelType=='2'}}
            <div class="top-label label-black">{{item.label}}</div>
            {{else}}
            <div class="top-label">{{item.label}}</div>
            {{/if}}
          {{else}}
            <div class="top-label"></div>
          {{/if}}
          <div class="item-img">
            <img src="{{item.pic | betterImg}}" alt="{{item.title}}" />
          </div>
          <p class="name">{{item.title}}</p>
          <p class="desc" title="{{item.desc}}">{{item.desc}}</p>
          <p class="price">

            <span class="cur-price">¥{{item.currentPrice}}</span>
            {{if item.vipPrice && item.vipPrice<item.currentPrice}}
              <em class="vip-price">¥{{item.vipPrice}}</em>
            {{else}}
              {{if item.originPrice&&item.originPrice!=item.currentPrice}}
              <span class="old-price">¥{{item.originPrice}}</span>
              {{/if}}
            {{/if}}
          </p>
        </a>
        {{/each}}
      </div>
    </div>
  </div>