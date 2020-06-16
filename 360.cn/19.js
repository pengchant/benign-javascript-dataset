<div class="brand-list clearfix">
      {{each brand as item index}}
      {{if item && index<=9 }}
      <a
        href="{{item.url}}"
        class="brand-item"
        data-monitor="category_level_adcate"
        data-monitor-params="{{nameL1}}_brand{{index}}"
        data-monitor-resource>
        {{if item.pic}}
        <img src="{{item.pic | betterImg}}" alt="" class="brand-img"/>
        {{/if}}
      </a>
      {{/if}}
      {{/each}}
    </div>