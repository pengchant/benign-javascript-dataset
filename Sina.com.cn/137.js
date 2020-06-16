
var iAdTimerID=0;function trigerAD(){iAdTimerID=setTimeout(startAD,10);}
function startAD(){clearTimeout(iAdTimerID);var oFunAD=aryADSeq.shift();if(oFunAD!=null){eval(oFunAD.sFuncName);if(!oFunAD.bWaitTriger){iAdTimerID=setTimeout(startAD,oFunAD.lDelay);}}}
try{var haveFullScreen=false;try{haveFullScreen=SYfullscreen;}catch(e){}
if(haveFullScreen){iAdTimerID=setTimeout(startAD,6000);}else{startAD();}}catch(e){}
