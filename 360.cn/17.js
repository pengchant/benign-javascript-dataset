<div class="category-level-box line-mod">
      {{each secondary as itemLv2 indexLv2}}
      <div class="level-2-box">
        <a
          href="{{itemLv2.url}}"
          class="level-2-item" title="{{itemLv2.name}}"
          data-monitor="home_Category_1l{{indexL1}}_2l{{indexLv2}}"
          data-monitor-resource>{{itemLv2.name}}</a>
        <div class="level-3-list">
          {{each itemLv2.item as itemLv3 indexLv3}}
          <a href="{{itemLv3.url}}" title="{{itemLv3.name}}"
             class="level-3-item" {{if itemLv3.style}}style="color:{{itemLv3.style}}"{{/if}}
          data-monitor="category_level_item"
          data-monitor-params="{{nameL1}}_{{itemLv2.name}}_{{itemLv3.name}}"
          data-monitor-resource>
          {{if itemLv3.pic}}
          <img src="{{itemLv3.pic | betterImg}}" alt="" class="left-icon" />
          {{/if}}
          {{itemLv3.name}}
          {{if itemLv3.tag}}
          <i class="index-icon">{{itemLv3.tag}}</i>
          {{/if}}
          </a>
          {{/each}}
        </div>
      </div>
      {{/each}}
    </div>