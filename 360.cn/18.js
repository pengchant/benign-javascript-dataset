<div class="img-catead-box">
      <div class="big-img-list">
        {{each spread as item index}}
        {{if item && index<=2 }}
        {{if item.pic}}
        <a
          href="{{item.url}}"
          class="big-img-box"
          data-monitor="category_level_adcate"
          data-monitor-params="{{nameL1}}_adcate{{index}}"
          data-monitor-resource>
          <img src="{{item.pic | betterImg}}" alt="" class="big-img"/>
        </a>
        {{/if}}
        {{/if}}
        {{/each}}
      </div>
    </div>