{{each coupons as val}}
<li class="g-coupon-item
     {{if val.type === 'POSTAGE'}}c-item-postage{{else if val.type === 'REDEEM'}}c-item-redeem{{/if}}
     {{if val.used == 2}}c-item-used{{/if}}
    ">
  <div class="c-item-wrapper">
    <i class="c-item-bg"></i>
    <i class="c-item-content-bg"></i>
    <div class="c-item-label">
      {{if val.type === 'POSTAGE'}}运费券{{else if val.type === 'REDEEM'}}兑换券{{else}}商品券{{/if}}
    </div>
    <div class="c-item-left">
      <div class="center-body">
        {{if val.pic}}
        <div class="c-item-img">
          <img src="{{val.pic}}"/>
        </div>
        {{else}}
        <div class="c-item-num {{if val.reduce}}c-item-num-{{val.reduce.length > 8?8:val.reduce.length}}{{/if}}">
          <i>￥</i><strong>{{val.reduce}}</strong>
        </div>
        {{if val.limit}}
        <div class="c-item-desc">{{if val.limit == 0}}无门槛{{else}}满{{val.limit}}可用{{/if}}</div>
        {{/if}}
        {{/if}}
      </div>
    </div>
    <div class="c-item-content">
      <p class="c-item-intro" title="{{ val.descList && val.descList.join('\n') }}">
        {{if val.tag=='NEWUSER'}}
        <span class="c-item-tag">新人专享</span>
        {{else if val.tag=='VIP'}}
        <span class="c-item-tag c-item-tag-vip">黑金专享</span>
        {{/if}}
        {{if val.descList && val.descList.length > 0}}{{val.descList[0]}}{{/if}}
      </p>
      <p class="c-item-time">{{val.startTime}}-{{val.endTime}}</p>
      <a href="javascript:;" class="c-item-oper js-coupon-use"
         data-url="{{val.linkUrl}}" data-id="{{val.id}}" data-channel="{{val.channel}}" data-monitor="coupon_item_use" data-monitor-resource>
        <span class="c-item-btn">去使用</span>
      </a>
    </div>
    {{if val.descList && val.descList.length > 0 }}
    <div class="c-item-btn-open-oper js-coupon-open">
      <div class="c-item-btn-open"><i class="c-item-btn-open-arrow"></i></div>
    </div>
    {{/if}}
  </div>
  <div class="c-item-extra">
    <ul>
      {{each val.descList as item }}
      <li>{{item}}</li>
      {{/each}}
    </ul>
  </div>
</li>
{{/each}}