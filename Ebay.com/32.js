!function(){"use strict";var e=document.querySelectorAll(".srp-grid.srp-results .s-item__details"),t=100;function i(e){var i=null;return function(){var n=arguments;clearTimeout(i),i=setTimeout(function(){e&&e.apply(null,n)},t)}}function n(){var t=e[0].offsetWidth;[].forEach.call(e,function(e){var i=e.getElementsByClassName("s-item__detail--primary"),n=e.getElementsByClassName("s-item__detail--secondary");if(i&&n)for(var r=0,a=i.length;r<a;r++){var o=i[r],s=n[r];if((o&&o.offsetWidth||0)+(s&&s.offsetWidth||0)>t){var l=s.querySelector("[data-has-widget=true]"),u=s;l&&(l.setAttribute("data-no-init",""),u=l),u.innerHTML="&#8203;"}}})}"undefined"!=typeof module&&void 0!==module.exports?module.exports={debounce:i,defaultDebounceMs:t}:e.length&&(n(),window.addEventListener("resize",i(n),!1))}();