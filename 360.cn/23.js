{{each list as item index}}
  {{if item&&index<=3 }}
    <div class="rush-item hover-item">
      <a href="{{item.id | itemHref}}" class="rush-item-img" title="{{item.title}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}_img" data-monitor-resource>
        <img src="{{item.picture.url | betterImg}}" alt="{{item.title}}"/>
      </a>
      <div class="rush-item-info">
        <a href="{{item.id | itemHref}}" class="name" title="{{item.title}}" data-monitor="home_Floor{{floorIndex}}_item{{index}}_title" data-monitor-resource>
          {{item.title}}
        </a>
        <p class="price">
          <span class="cur-price">¥{{item.promotionalPrice}}</span>
          {{if item.vipPrice && item.vipPrice<item.promotionalPrice}}
            <em class="vip-price">¥{{item.vipPrice}}</em>
          {{else}}
            {{if item.promotionalPrice!=item.price}}
            <span class="old-price">¥{{item.price}}</span>
            {{/if}}
          {{/if}}
        </p>
      </div>
      <div class="btns-box">

        {{if item.soldOut==1 && status=='STARTED' }}
          <a href="{{item.id | itemHref}}" class="btn-rush btn-rush-no" data-monitor="home_Floor{{floorIndex}}_item{{index}}_btn" data-monitor-resource>
            已抢光
          </a>
        {{else}}
          <a href="{{item.id | itemHref}}" class="btn-rush" data-monitor="home_Floor{{floorIndex}}_item{{index}}_btn" data-monitor-resource>
            {{item.button.text || '马上抢'}}
          </a>
        {{/if}}

        {{if status == 'PREHEAT' && item.progress && item.progress.total_restrict && item.progress.total_restrict!=='0'}}
          <span class="extra-tips">
          限量{{item.progress.total_restrict}}件
          </span>
        {{else if item.soldOut==0 && item.progress && !item.progress.hidden}}
          <span class="progress"><b style="width:{{item.progress.value}}%"></b title="进度{{item.progress.value}}%"></span>
          <span class="extra-tips">
          {{item.progress.value}}%
          </span>
        {{else}}
          <span class="extra-tips">
          {{item.progress.text}}
          </span>
        {{/if}}
      </div>
    </div>
  {{/if}}
  {{/each}}