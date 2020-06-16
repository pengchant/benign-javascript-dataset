{{each list as item index}}
  {{if item.elevatorShow}}
  <a href="javascript:;" class="elevator-item {{if item.elevatorImportant}}s-important{{/if}}" data-index="{{index}}">
    <div class="elevator-item-text">
      {{item.elevatorName}}
    </div>
  </a>
  {{/if}}
{{/each}}