
    window.__bl ={};
    window._blReport=function(e,t){window.__bl&&(__bl.api?__bl[e].apply(__bl,t):(__bl.pipe=__bl.pipe||[],__bl.pipe.push([e].concat(t))))},window.addEventListener("error",function(e){_blReport("error",[e.error,e])}),window.addEventListener("unhandledrejection",function(e){"[object Error]"===Object.prototype.toString.call(e.reason)&&_blReport("error",[e.reason])});
