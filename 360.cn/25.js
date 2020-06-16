{{each list as item index}}
  {{if item && 2>index}}
  <div class="tuan-item hover-item">
    <a href="{{item.itemId | itemHref}}" class="tuan-img-box" title="{{item.title}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}_img" data-monitor-resource>
      <img src="{{item.pic | betterImg}}" alt="{{item.title}}" />
      <span class="item-qrcode" data-qrcode="{{item.itemId | itemHref}}"></span>
    </a>
    <div class="tuan-item-info">
      <p class="top-label">
        <i class="index-icon icon-tuan"></i>
        <span class="top-label-text">{{item.label}}</span>
      </p>
      <a href="{{item.itemId | itemHref}}" class="name" title="{{item.title}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}_title" data-monitor-resource>{{item.title}}</a>
      <p class="desc" title="{{item.desc}}">{{item.desc}}</p>
      {{if item.goingList && item.goingList.length}}
      <div class="going-list">
        <span class="going-text">正在开团</span>
        {{each item.goingList as gItem gIndex}}
        {{if gItem.user_icon&&9>gIndex }}
        <img src="{{gItem.user_icon | betterImg:{width:32} }}" title="{{gItem.user_name}}" alt="" class="going-img"/>
        {{/if}}
        {{/each}}
      </div>
      {{/if}}
    </div>
    <div class="tuan-btns-box clearfix">
      <a class="btn btn-left">
        <p class="top-text">APP拼团价</p>
        <p class="price">¥{{item.tuanPrice}}</p>
      </a>
      <a href="{{item.itemId | itemHref}}" class="btn btn-right" data-monitor="home_Floor{{floorIndex}}_item{{index}}_btnright" data-monitor-resource>
        <p class="top-text">PC价</p>
        <p class="price">¥{{item.originPrice}}</p>
      </a>
    </div>
  </div>
  {{/if}}
  {{/each}}