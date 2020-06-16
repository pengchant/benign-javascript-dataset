<div class="cart-list">
      {{each itemList as item index}}
      <div class="cart-item" data-id="{{item.item_id}}">
        <a
          href="/shop/item?item_id={{item.item_id}}"
          class="cart-item-info-box clearfix"
          title="{{item.title}}"
          data-monitor="public_top_cart_item{{index}}"
          data-monitor_resource>
          <img class="item-img" src="{{item.img_index}}" alt="">
          <div class="name">{{item.title}}</div>
          <div class="price">
            ¥{{item.price_sale}}
            <br>
            x{{item.count}}
          </div>
        </a>
        <div class="index-icon icon-close" title="删除"></div>
      </div>
      {{/each}}
    </div>
    <div class="cart-bottom-bar">
      <div class="cart-price-line">
        共<em class="red">{{total_num}}</em>件商品 总计<em class="red">¥{{total_price_text}}</em>
      </div>
      <a href="/shop/shopcart" class="btn-buy" data-monitor="public_top_cart" data-monitor_resource>马上抢</a>
    </div>