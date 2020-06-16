
    <div class="item-list">
      <ul>
      {{#each item}}
        {{#if xindex<5}}
        <li class="J_ItemHover">
         <div class="ipic">
           <a href="{{item_url}}" target="_blank"><img src="{{item_pic}}_180x180xz.jpg" /></a>
         </div>
         <div class="open overlay">
           <p class="title">
             <a href="{{item_url}}" target="_blank" title="{{item_title}}">{{item_title}}</a>
           </p>
           <span class="g_price g_price-highlight">
             <span>&yen;</span><strong>{{item_current_price}}</strong>
           </span>
         </div>
       </li>
       {{/if}}
      {{/each}}
      </ul>
    </div>
