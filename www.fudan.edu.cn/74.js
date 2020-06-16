
    <div class="pagination-holder clearfix light-theme simple-pagination">
        <ul class="pagination">
            {{if prev != pageindex}}
            <li><a href="javascript:void(0)" data-page="${prev}" class="page-link">Prev</a></li>
            {{/if}}

            {{each prevs}}
            <li><a href="javascript:void(0)" data-page="${$value}" class="page-link">${$value}</a></li>
            {{/each}}
            {{if showPrev}}
            <li><span class="ellipse clickable">…</span></li>
            {{/if}}

            {{each pages}}
            {{if $value == pageindex}}
            <li class="active"><span class="current">${$value}</span></li>
            {{else}}
            <li><a href="javascript:void(0)" data-page="${$value}" class="page-link">${$value}</a></li>
            {{/if}}
            {{/each}}

            {{if showNext}}
            <li><span class="ellipse clickable">…</span></li>
            {{/if}}
            {{each nexts}}
            <li><a href="javascript:void(0)" data-page="${$value}" class="page-link">${$value}</a></li>
            {{/each}}

            {{if next != pageindex}}
            <li><a href="javascript:void(0)" data-page="${next}" class="page-link">Next</a></li>
            {{/if}}
        </ul>
    </div>
