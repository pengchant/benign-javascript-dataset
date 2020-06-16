<div class="category-level-box grid-mod clearfix">
      {{each secondary as itemLv2 indexLv2}}
      <div class="level-2-box">
        <a
          href="{{itemLv2.url}}"
          class="level-2-item" title="{{itemLv2.name}}"
          {{if itemLv2.style}}style="color:{{itemLv2.style}}"{{/if}}
        data-monitor="category_level_item"
        data-monitor-params="{{nameL1}}_{{itemLv2.name}}"
        data-monitor-resource>
        {{if itemLv2.pic}}
        <img src="{{itemLv2.pic | betterImg}}" alt=""/>
        {{/if}}
        {{itemLv2.name}}
        {{if itemLv2.tag}}
        <i class="index-icon">{{itemLv2.tag}}</i>
        {{/if}}
        </a>
      </div>
      {{/each}}
    </div>