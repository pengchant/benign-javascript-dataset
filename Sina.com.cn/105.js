
/* 汉字截取 */
String.prototype.substr2=function(a,b){
 var s = this.replace(/([^\x00-\xff])/g,"\x00$1");
 return(s.length<b)?this:s.substring(a,b).replace(/\x00/g,'');
}
