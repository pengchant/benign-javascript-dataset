
    <div class="shop-list">
      <a href="javascript:void(0);" title="上一组" class="prev"  hidefocus="true"><i class="jiantou">&#xe63c;</i></a>
      <div class="shop-list-cont">
        <ul class="J_shopListCont">
       {{#each shop}}
          <li class="J_LiMouse J_spm_tab_mousedown"><img src="{{shop_img}}" width="90" height="90" /></li>
       {{/each}}
        </ul>
      </div>
      <a href="javascript:void(0);" title="下一组" class="next"><i class="jiantou">&#xe629;</i></a>
    </div>

    <div class="shop-items">
       {{#each shop}}
      <dl class="shop-item">
        <dt>
          <h3><a href="{{shop_url}}" target="_blank" title="{{shop_title}}">{{shop_title}}</a></h3>
          <div class="shop-msg">
            <p class="title">店铺信息</p>
          {{#if shop_feedback}}
            <p class="sub-msg">好评度: <b>{{shop_feedback}}</b> 好评</p>
          {{/if}}
          {{#if shop_collection}}
            <p class="sub-msg">收藏: <b>{{shop_collection}}</b> 人收藏</p>
          {{/if}}
          {{#if shop_new_item_num}}
            <p class="sub-msg">上新数: <b>{{shop_new_item_num}}</b>件</p>
          {{/if}}
          </div>
        </dt>
        <dd>

        </dd>
      </dl>
       {{/each}}
    </div>

