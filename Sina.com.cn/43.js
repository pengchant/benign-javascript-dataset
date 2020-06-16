
/* 手机、数码板块随机默认呈现 */
jsLoader({
	name: 'shm',
	callback: function() {
		
		var selected = Math.random()>0.5?'tech_digi_tab':'tech_mobi_tab';
		SHM.app.tab.switchByEle(SHM.dom.byId(selected));
	}
});
