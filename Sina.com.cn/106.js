
(function(){
var i;
var j=0;
for (i in hotNewsData.data)
{
	if(j>=10) {break;}

	var hn_title=hotNewsData.data[i]["short_title"];
	if(hn_title == undefined) {hn_title=hotNewsData.data[i]["title"];}

	var hn_url=hotNewsData.data[i]["url"];
	var hn_fulltitle = hn_title;
	hn_title = hn_title.substr2(0,36);
	document.write('<li><a href="'+hn_url+'" target="_blank" title="'+hn_fulltitle+'">'+hn_title+'</a></li>');
	j++;
}
})();
