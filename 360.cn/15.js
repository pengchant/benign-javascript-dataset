{{each list as item index}}
    <li class="category-item" data-index={{index}}>
      <a class="category-itemlv1" {{if item.url}}href="{{item.url}}"{{/if}} data-monitor="category_level_tab" data-monitor-params="{{item.name}}">
      <span class="left-item">
        {{if item.pic}}
        <img src="{{item.pic | betterImg}}" alt="" class="left-icon" />
        {{/if}}
        {{item.name}}
      </span>
      </a>
      <div class="right-wrapper clearfix">
      </div>
    </li>
    {{/each}}