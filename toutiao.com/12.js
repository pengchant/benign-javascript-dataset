document.getElementsByTagName('body')[0].addEventListener('click', function(e) {
    var target = e.target,
        ga_event,
        ga_category,
        ga_label,
        ga_value;
    while(target && target.nodeName.toUpperCase() !== 'BODY') {
      ga_event = target.getAttribute('ga_event');
      ga_category = target.getAttribute('ga_category') || '/';
      ga_label = target.getAttribute('ga_label') || '';
      ga_value = target.getAttribute('ga_value') || 1;

      ga_event && window.ttAnalysis && ttAnalysis.send('event', { ev: ga_event });
      target = target.parentNode;
    }
  });