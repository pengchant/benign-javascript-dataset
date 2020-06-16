{{each tabs}}
    <a
      href="{{$value.url}}"
      class="nav-item"
      data-monitor="category_nav"
      data-monitor-params="{{$value.text}}"
      data-monitor-resource
    >{{$value.text}}</a>
    {{/each}}