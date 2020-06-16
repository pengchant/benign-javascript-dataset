
	var SENTRY_CONFIG = window.SENTRY_CONFIG || {}
	try{
		window.Raven && Raven.config(
			SENTRY_CONFIG.dsn,
			_.extend({}, SENTRY_CONFIG, { release: "xsunkeysunx@20200611120759" })
		).install()
	} catch (e) {}
