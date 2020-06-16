{{each list as item index}}
    <a
      class="slider-film"
      style="display:none;background-image: url('{{item.pic | betterImg}}');"
      href="{{item.url}}"
      title="{{item.title}}"
      data-monitor="home_banner"
      data-monitor-params="{{index}}"
      data-monitor-resource
    ></a>
    {{/each}}