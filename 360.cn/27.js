<div class="mod-floor">
    {{if data}}
    <a
      href="{{data.url}}"
      class="floor-body mod-banner_img"
      style="
      background-image:url({{data.pic | betterImg}});
      {{if data.height}}height: {{data.height}}px;{{/if}}
      "
      title="{{data.title}}"
      data-monitor="home_admod"
      data-monitor-params="{{floorIndex}}"
      data-monitor-resource
    >
    {{/if}}
    </a>
  </div>