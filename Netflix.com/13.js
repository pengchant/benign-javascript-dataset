
if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        if (registrations) {
            registrations.forEach(function (registration) {
                registration.unregister().catch(function () {});
            });
        }
    }).catch(function () {});
}
