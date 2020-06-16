
        var isSessionStorageAvailable = (function() {
            try {
                return !!window['sessionStorage'];
            } catch (e) {
                return false;
            }
        })();

        if (!false || (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true') || 'NewUserView' === 'SignoutUserView') {
            document.body.style.display = "block";
        }
    