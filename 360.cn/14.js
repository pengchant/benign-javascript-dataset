{{each suggests as item index}}
    <a
      href="{{item.url}}"
      class="suggest-item"
      data-monitor="search_hot_words"
      data-monitor-params="{{index}}"
      data-monitor-resource
    >{{item.text}}</a>
    {{/each}}