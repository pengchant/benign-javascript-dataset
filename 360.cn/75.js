
(function(){
	var cookieName = 'new2020',
		oldCookie = qboot.cookie.get(cookieName);

	if(oldCookie === '2'){
		LogHub && LogHub.behavior('cube', 'return-new2019');
		return;
	}
})();
