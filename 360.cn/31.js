{{each list as item index}}
  <a
    class="feed-item hover-item {{if index%5 == 4}}line-end{{/if}}"
    href="{{item.itemId | itemHref}}"
    title="{{item.title}}"
    data-monitor="home_FloorFeed_item{{item.itemId}}"
    data-monitor-resource
    >
    <div class="item-img">
      <img data-img="{{item.img}}" alt="" />
    </div>
    <p class="name">{{item.title}}</p>
    <p class="price">
      <span class="cur-price">¥{{item.price}}</span>
      {{if item.vipPrice && item.vipPrice<item.price}}
        <em class="vip-price">¥{{item.vipPrice}}</em>
      {{/if}}
    </p>
    <p class="label-line">
      {{if item.tagString && item.tagString!='拼团'}}
      <span class="label">{{item.tagString}}</span>
      {{/if}}
    </p>
  </a>
  {{/each}}