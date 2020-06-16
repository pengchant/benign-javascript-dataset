
  <a href="{$data.url}" class="bg"></a>
  <button class="close">关闭</button>
  <span class="ad">广告</span>
  <ul class="navs">
    {for (var i = 0; i < $data.list.length; i++)}
    <li class="item{i+1}">
      <a href="{$data.list[i].url}">
        <img src="{$data.list[i].image}" alt="">
      </a>
    </li>
    {/for}
  </ul>   
