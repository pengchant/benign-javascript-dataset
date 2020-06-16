
	<div class="left"><img class="pic" src="${img}" alt="${name}"></div>
	<div class="right">
		<p class="name">${name}<span class="${star}" title="${stardesc}"></span></p>
		<p class="adress">${address}</p>
        
		<p class="comment">
            {{if (dpcount>0)}}
            {{if (score==0)}}
            <span>暂无评分</span>
            {{else}}
            <span class="score">${score}</span>/5分&nbsp;&nbsp;${dpscore}%用户推荐&nbsp;&nbsp;源自${dpcount}位住客点评
            {{/if}}
            {{else}}
            暂无点评
            {{/if}}
        </p> 
    </div>
