
	try {
		for(var key in localStorage) {
			if (localStorage.hasOwnProperty(key) && key.indexOf('qcmain/js') === 0) {
				localStorage.removeItem(key);
			}
		}
	} catch (e) {}
