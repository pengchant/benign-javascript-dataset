{{if !list.length }}
<!-- empty-box -->
<div class="empty-box empty-box-small">
  <div class="empty-box-txt">暂无优惠券</div>
  <div class="empty-box-img"><img src="https://p1.ssl.qhimg.com/t0194d5057ab538db7d.png"/></div>
</div>
<!-- // empty-box -->
{{else}}
  {{each coupons as item}}
  <div class="coupon-list">
    <!-- 未登录时取消标题 -->
    {{if item.title && item.list.length > 0 }}
    <div class="coupon-list-title">{{item.title}}</div>
    {{/if}}
    {{if !item.list.length && item.emptyTxt }}
    <div class="empty-box empty-box-default">
      <div class="empty-box-img"><img src="https://p1.ssl.qhimg.com/t0194d5057ab538db7d.png"/></div>
      <div class="empty-box-txt">{{item.emptyTxt}}</div>
    </div>
    {{/if}}
    {{each item.list as val}}
    <div class="coupon-item g-coupon-item {{ val.status == 2 ? 'c-item-received':'' }} {{ val.status == 3 ? 'c-item-out':'' }}">
      <a href="javascript:;" class="coupon-item-right js-coupon-get" data-url="{{val.takeUrl}}" data-channel="{{val.channel}}" data-monitor="detail_receive_coupons" data-index="{{val.index}}">
        {{if val.status == 1}}
        <b>立即领取</b>
        {{/if}}
      </a>
      <div class="coupon-item-content">
        <div class="c-item-label">商品券</div>
        <div class="coupon-item-price">
          <p class="coupon-item-num"><b>¥</b>{{val.reduce}}</p>
          {{if val.limit}}<p class="coupon-item-desc">{{if val.limit == 0}}无门槛{{else}}满{{val.limit}}可用{{/if}}</p>{{/if}}
        </div>
        <p class="coupon-item-intro" title="{{ val.descList && val.descList.join('\n') }}">
          {{if val.tag=='NEWUSER'}}
          <span class="c-item-tag">新人</span>
          {{else if val.tag=='VIP'}}
          <span class="c-item-tag c-item-tag-vip">黑金</span>
          {{/if}}
          {{val.descList && val.descList.join(' ')}}
        </p>
        <p class="coupon-item-time">{{val.startTime}}-{{val.endTime}}</p>
      </div>
    </div>
    {{/each}}
  </div>
  {{/each}}
{{/if}}