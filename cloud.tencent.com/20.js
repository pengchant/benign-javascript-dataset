
try {
	for(var key in localStorage) {
		if (localStorage.hasOwnProperty(key) && !!~key.indexOf('qcact/js')) {
			localStorage.removeItem(key)
		}
	}
} catch (e) {}
