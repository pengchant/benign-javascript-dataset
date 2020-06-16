/* version: 1.1.7 */
window.NotificationClient = (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/* global XMLHttpRequest */
/* Provides read, update and create operations */
var ERROR = 'Error';
var GET = 'GET';

var NotificationRequest = function () {
    function NotificationRequest(config) {
        classCallCheck(this, NotificationRequest);

        this._config = config;
    }

    /**
    * _getRequestUrl
    * Parses the request url, appends any path, and generates the params
    * @param {object} requestConfig - Configs for the request - Object required
    * @return {string} request url
    */


    createClass(NotificationRequest, [{
        key: '_getRequestUrl',
        value: function _getRequestUrl(requestConfig) {
            // providing an override for request based URL udpate
            var url = requestConfig.url || this._config.service.url;
            var isRMP = requestConfig.isRMP || this._config.service.isRMP;
            if (!url) {
                return;
            }

            var temp = url.split('?');
            var urlParts = {
                path: temp[0],
                queryParams: temp[1] ? temp[1].split('&') : []
            };

            // determine existing matrix params
            temp = urlParts.path.split(';');
            urlParts.path = temp[0];
            urlParts.matrixParams = temp.slice(1);

            var queryParams = requestConfig.queryParams,
                matrixParams = requestConfig.matrixParams;

            // add additional matrix params

            if (matrixParams && !isRMP) {
                Object.keys(matrixParams).forEach(function (key) {
                    urlParts.matrixParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(matrixParams[key] || ''));
                });
            }

            // add additional query params
            if (queryParams) {
                Object.keys(queryParams).forEach(function (key) {
                    urlParts.queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key] || ''));
                });
            }

            // construct the final url
            var requestUrl = urlParts.path;
            if (urlParts.matrixParams.length) {
                requestUrl += ';' + urlParts.matrixParams.join(';');
            }
            if (urlParts.queryParams.length) {
                requestUrl += '?' + urlParts.queryParams.join('&');
            }

            return requestUrl;
        }

        /**
        * _getRequestBody
        * Stringifies the request body
        * @param {object} body - The body object
        * @return {string} stringified body
        */

    }, {
        key: '_getRequestBody',
        value: function _getRequestBody(body) {
            return body && JSON.stringify(body) || '';
        }

        /**
        * _parseRequestResult
        * Parses the api response
        * @param {object} response - The response object
        * @return {object} response
        */

    }, {
        key: '_parseRequestResult',
        value: function _parseRequestResult(response) {
            var isRMP = this._config.service.isRMP;
            if (typeof response === 'string') {
                try {
                    response = JSON.parse(response);
                } catch (e) {
                    response = {};
                }
            }
            response = response || {};
            return {
                css: isRMP ? response.assets && response.assets.css : response.css,
                count: isRMP ? response.data && response.data.count : response.count,
                markup: response.html,
                newCount: isRMP ? response.data && response.data.newCount : response.newCount
            };
        }

        /**
        * read
        * Makes the read call
        * @param {object} requestConfig - The requestConfig object
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: 'read',
        value: function read(requestConfig, callback) {
            this._attemptRequest(GET, requestConfig, callback);
        }

        /**
        * update
        * Makes the update call
        * @param {object} requestConfig - The requestConfig object
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: 'update',
        value: function update(requestConfig, callback) {
            this._attemptRequest('PUT', requestConfig, callback);
        }

        /**
        * create
        * Makes the create call
        * @param {object} requestConfig - The requestConfig object
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: 'create',
        value: function create(requestConfig, callback) {
            this._attemptRequest('POST', requestConfig, callback);
        }

        /**
        * _attemptRequest
        * Attempts the XHR call
        * @param {string} method - GET or POST method
        * @param {object} requestConfig - The requestConfig object
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: '_attemptRequest',
        value: function _attemptRequest(method, requestConfig, callback) {
            var attemptCount = this._config.service.attemptCount;
            if (!requestConfig) {
                requestConfig = {};
            }

            var url = this._getRequestUrl(requestConfig);
            var requestBody = this._getRequestBody(requestConfig.body);
            var requestParams = {
                body: requestBody,
                method: method,
                url: url
            };
            this._sendRequest(requestParams, attemptCount, callback);
        }

        /**
        * _sendRequest
        * Attempts the XHR for specified number of times in case of error
        * @param {object} requestParams - The requestParams object
        * @param {number} attemptCount - GET or POST method
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: '_sendRequest',
        value: function _sendRequest(requestParams, attemptCount, callback) {
            var self = this;
            requestParams = requestParams || {};
            var serviceConfig = self._config.service;
            var attemptDelay = serviceConfig.attemptDelay * 1000;
            var _requestParams = requestParams,
                url = _requestParams.url,
                body = _requestParams.body;


            var request = new XMLHttpRequest();

            request.open(requestParams.method, url);
            request.responseType = serviceConfig.responseType;
            request.timeout = serviceConfig.timeout;

            var handleRequestError = function handleRequestError() {
                if (attemptCount > 0) {
                    attemptCount--;
                    setTimeout(function () {
                        self._sendRequest(requestParams, attemptCount, callback);
                    }, attemptDelay);
                } else {
                    callback && callback(new Error(ERROR + ': ' + request.status + ' ' + request.statusText), null);
                }
            };

            request.onload = function requestOnLoad() {
                if (request.status === 200) {
                    var response = self._parseRequestResult(request.response || request.responseText);
                    callback && callback(null, response, requestParams);
                } else {
                    handleRequestError();
                }
            };

            request.onerror = handleRequestError;

            // Make the appropriate call
            if (requestParams.method === GET) {
                request.send();
            } else {
                request.send(body);
            }
        }
    }]);
    return NotificationRequest;
}();

var SPACE = ' ';

/**
* addClass
* Adds class to given node, if not already added
* @param {object} node current DOM element
* @param {string} className - the class to be added
* @return {void}
*/
function addClass(node, className) {
    if (node && !hasClass(node, className)) {
        var desiredClasses = node.className + SPACE + className;
        node.className = desiredClasses;
    }
}

/**
* hasClass
* Checks if given node has specified className
* @param {object} node current DOM element
* @param {string} className - className
* @return {boolean} whether node has the specified class
*/
function hasClass(node, className) {
    var classes = node && node.className && node.className.split(SPACE);
    return !!classes && classes.indexOf(className) !== -1;
}

/**
* removeClass
* Removes class from given node
* @param {object} node current DOM element
* @param {string} className - className
* @return {void}
*/
function removeClass(node, className) {
    if (!node) {
        return;
    }
    var classes = node.className && node.className.split(SPACE);
    if (!classes) {
        return;
    }
    var index = classes.indexOf(className);
    if (index >= 0) {
        classes.splice(index, 1);
    }
    node.className = classes.join(SPACE);
}

/**
* objectAssign
* Updates existing and adds new keys - mutates the orig object (shallow)
* @param {object} orig Original object
* @param {object} updates Updated object
* @return {void}
*/
function objectAssign(orig, updates) {
    if (!orig) {
        return;
    }

    if (!updates) {
        return orig;
    }

    for (var key in updates) {
        if (updates.hasOwnProperty(key)) {
            orig[key] = updates[key];
        }
    }
}

var NotificationStore = function () {
    function NotificationStore(config, request) {
        classCallCheck(this, NotificationStore);

        var self = this;
        self._config = config;
        self._markup = '';
        self._newCount;
        self._count;
        self._request = request;
    }

    /**
    * _replaceAllNotifications
    * Renews the notification array
    * @param {array} response service reponse
    * @return {void}
    */


    createClass(NotificationStore, [{
        key: '_replaceAllNotifications',
        value: function _replaceAllNotifications(response) {
            // since we refresh the panel everytime
            this._markup = response.markup || '';
            this._newCount = response.newCount && parseInt(response.newCount, 10) || 0;
            this._count = response.count && parseInt(response.count, 10) || 0;
        }

        /**
        * resetCount
        * Reset the new count to 0
        * @return {void}
        */

    }, {
        key: 'resetNewCount',
        value: function resetNewCount() {
            // make a reset call if any
            if (this._newCount !== 0 && this._config.service.resetUrl) {
                var requestConfig = {
                    url: this._config.service.resetUrl
                };
                this._request.read(requestConfig, function handleUnReadReset(err, response) {
                    if (err) {
                        return;
                    }
                });
            }
            this._newCount = 0;
        }

        /**
        * _requestNotifications
        * Makes a request to the api, renews the notification store is data is returned
        * @param {object} requestOverride - matrix params to over ride the reqeust
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: '_requestNotifications',
        value: function _requestNotifications(requestOverride, callback) {
            var self = this;
            var panelConfig = self._config.panel;
            var matrixParams = {
                count: panelConfig.maxCount,
                imageTag: panelConfig.imageTag
            };
            if (!requestOverride) {
                requestOverride = {};
            }
            objectAssign(matrixParams, requestOverride.matrixParams);
            var requestConfig = {
                matrixParams: matrixParams
            };

            var _updateStore = function _updateStore(err, response) {
                if (!err && response) {
                    self._replaceAllNotifications(response);
                }
                response = response || {};
                callback && callback(err, response);
            };
            self._request.read(requestConfig, _updateStore);
        }

        /**
        * getNotifications
        * Returns the specified number or batch size notifications, or less (for collapsed panel)
        * @return {object} notification markup and count
        */

    }, {
        key: 'getNotifications',
        value: function getNotifications() {
            return {
                count: this._count,
                markup: this._markup,
                newCount: this._newCount
            };
        }

        /**
        * fetchNotifications
        * Makes the API call to get notification data
        * @param {object} requestOverride - matrix params to over ride the reqeust
        * @param {Function} callback - The callback function
        * @return {void}        
        */

    }, {
        key: 'fetchNotifications',
        value: function fetchNotifications(requestOverride, callback) {
            this._requestNotifications(requestOverride, callback);
        }
    }]);
    return NotificationStore;
}();

var constants = {
    panelLoading: 'yns-panel-loading',
    panelNodeId: 'yns-panel',
    panelNodeClass: 'yns-panel',
    panelHideElement: 'yns-hide',
    panelError: 'yns-panel-error',
    panelPaddingBtm: 'yns-panel-padding-btm'
};

var panelTemplate = '<div class="yns-panel-header{hideHeaderClass}">' + '<span class="yns-panel-header-title">' + '{headerMsg}' + '</span>' + '</div>' + '<div class="yns-panel-data">' + '<ul class="yns-notifications {paddingClass}">' + '{promoMarkup}' + '{notifMarkup}' + '</ul>' + '</div>' + '<div class="yns-panel-footer-action {hideClass}">' + '<a class="yns-navigate-center" ' + 'href="{notifCenterLink}" ' + 'data-ylk="sec:hd;subsec:notifications-viewall;slk:{notificationCenterNavMsg};"' + '>' + '{notificationCenterNavMsg}' + '</a>' + '</div>';

var panelEmptyTemplate = '<li class="yns-container yns-empty">' + '<div class="yns-content">' + '{emptyPanelMsg}' + '</div>' + '</li>';

var panelErrorTemplate = '<div class="yns-panel-error">' + '<span> {errorMsg} </span>' + '</div>';

var panelParentTemplate = '<div class="yns-panel" id="yns-panel"></div>';

var notifOnboardPromoTemplate = '<li class="yns-container yns-promo">' + '<div class="yns-link">' + '<img class="yns-img" src="https://s.yimg.com/cv/apiv2/notifications/default-notif-img.png-168x168.png" />' + '<div class="yns-content">' + '<span class="yns-promo-title yns-title">' + '{notifOnboardMsg}' + '</span>' + '<span class="yns-promo-button">' + '<button class="yns-promo-ctr js-push-subscribe" ' + 'data-subscription-topic="{subscriptionTopic}" ' + 'data-ylk="sec:hd;subsec:notifications-promo;slk:Notify Me;" ' + 'data-subscription-ylk="sec:hd;subsec:notifications-promo;" ' + '>' + '{notifOnboardBtnLabel}' + '</button>' + '</span>' + '</div>' + '</div>' + '</li>';

/* global document, window */

var EXPANDED_PANEL = 'expanded_panel';
var ERROR_PANEL = 'error_panel';

var NotificationView = function () {
    function NotificationView(config, store) {
        classCallCheck(this, NotificationView);

        var self = this;
        self._config = config;
        self._panelNode = null;
        self._store = store;
    }

    /**
    * _renderPanel
    * Renders the notification panel
    * @param {string} template - Notification panel template
    * @param {object} panelData - Notification panel data
    * @return {object} notification panel display markup
    */


    createClass(NotificationView, [{
        key: '_generatePanelMarkup',
        value: function _generatePanelMarkup(template, panelData) {
            var config = this._config;
            var isNotifPermissionGranted = void 0;
            var isClientPromoEligible = void 0;
            if (typeof window !== 'undefined') {
                isNotifPermissionGranted = window.Notification && window.Notification.permission === 'granted';
                isClientPromoEligible = hasClass(document.body, config.promos.eligibleBodyClass);
            }
            var shouldShowNotifOnboardPromo = config.promos.enableNotifOnboard && !isNotifPermissionGranted && isClientPromoEligible;
            var promoMarkup = shouldShowNotifOnboardPromo ? notifOnboardPromoTemplate : '';
            if (promoMarkup) {
                promoMarkup = promoMarkup.replace('{notifOnboardBtnLabel}', config.promos.notifOnboardBtnLabel).replace('{notifOnboardMsg}', config.promos.notifOnboardMsg).replace('{subscriptionTopic}', config.promos.subscriptionTopic);
            }
            var hasAdditionalNotifs = panelData.newCount > config.panel.maxCount;
            var newCount = hasAdditionalNotifs ? panelData.newCount : '';
            var notifCenterPath = config.panel.notificationCenterPath;
            var notifCenterLinkClass = notifCenterPath ? '' : constants.panelHideElement;
            var panelHeaderDisplayClass = config.panel.headerMsg ? '' : ' ' + constants.panelHideElement;
            var paddingClass = notifCenterPath ? constants.panelPaddingBtm : '';
            var notifMarkup = void 0;
            if (panelData.count) {
                notifMarkup = panelData.markup;
            } else {
                var panelEmptyMarkup = panelEmptyTemplate;
                notifMarkup = panelEmptyMarkup.replace('{emptyPanelMsg}', config.panel.emptyPanelMsg);
            }

            template = template.replace('{notifMarkup}', notifMarkup).replace('{promoMarkup}', promoMarkup).replace('{hideClass}', notifCenterLinkClass).replace('{notifCenterLink}', notifCenterPath).replace('{paddingClass}', paddingClass).replace('{headerMsg}', config.panel.headerMsg).replace('{hideHeaderClass}', panelHeaderDisplayClass).replace(/{notificationCenterNavMsg}/g, config.panel.notificationCenterNavMsg).replace(/{newCount}/g, newCount);

            return template;
        }

        /**
        * render
        * Renders the panel based on type - collapsed, expanded, toast
        * @param {string} templateType - template type to be used
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: 'render',
        value: function render(templateType, callback) {
            var self = this;
            if (!self._panelNode) {
                callback && callback(new Error('No panel parent'));
                return;
            }

            var template = void 0;
            var parent = self._panelNode;
            var panelMarkup = void 0;
            var panelData = void 0;

            switch (templateType) {
                case EXPANDED_PANEL:
                    template = panelTemplate || '';
                    panelData = self._store.getNotifications();
                    panelMarkup = self._generatePanelMarkup(template, panelData);
                    parent.innerHTML = panelMarkup;
                    break;
                case ERROR_PANEL:
                    template = panelErrorTemplate || '';
                    panelMarkup = template.replace('{errorMsg}', self._config.panel.errorMsg);
                    parent.innerHTML = panelMarkup;
                    break;
                default:
                    break;
            }
            callback && callback();
        }

        /**
        * createPanelParentNode
        * Create the panel DOM structure
        * @param {object} panelParentNode - Panel's parent node - from consumer
        * @return {void}
        */

    }, {
        key: 'createPanelParentNode',
        value: function createPanelParentNode(panelParentNode) {
            if (!panelParentNode) {
                return;
            }

            panelParentNode.innerHTML = panelParentTemplate;
            // Store the panel node
            this._panelNode = document.getElementById(constants.panelNodeId);
        }

        /**
        * updateBadgeNode
        * Updates the badge node if needed
        * @param {object} badgeNode  badge HTML node
        * @return {void}
        */

    }, {
        key: 'updateBadgeNode',
        value: function updateBadgeNode(badgeNode) {
            if (badgeNode) {
                var _store$getNotificatio = this._store.getNotifications(),
                    newCount = _store$getNotificatio.newCount;

                var maxBadgeCount = this._config.badge.maxCount;
                if (newCount) {
                    var badgeCount = newCount > maxBadgeCount ? maxBadgeCount + '+' : newCount;
                    badgeNode.innerHTML = badgeCount;
                } else {
                    badgeNode.innerHTML = '';
                }
            }
        }

        /**
        * addStyles
        * Add panel css returned by service to page once
        * @param {object} styles css style blob
        * @return {void}
        */

    }, {
        key: 'addStyles',
        value: function addStyles(styles) {
            if (styles) {
                if (typeof window !== 'undefined') {
                    var styleTag = document.getElementById(this._config.panel.styleTagId);
                    if (!styleTag) {
                        styleTag = document.createElement('style');
                        styleTag.type = 'text/css';
                        styleTag.id = this._config.panel.styleTagId;
                        styleTag.innerText = styles;
                        document.head.appendChild(styleTag);
                    }
                }
            }
        }
    }]);
    return NotificationView;
}();

/* global document */
/* Updates the notification store when needed
 Controls the notification view */

var EXPANDED_PANEL$1 = 'expanded_panel';
var ERROR_PANEL$1 = 'error_panel';

var PanelController = function () {
    function PanelController(config, store, view) {
        classCallCheck(this, PanelController);

        var self = this;
        self._store = store;
        self._view = view;
        self._config = config;
        var panelConfig = self._config.panel;
        self._panelParentNode = document.querySelector(panelConfig.parentSelector);
        self._badgeNode = self._config.badge.selector && document.querySelector(self._config.badge.selector);
        self._indicatorNode = panelConfig.indicatorSelector && document.querySelector(panelConfig.indicatorSelector);
    }

    /**
    * createPanelParentNode
    * Creates the base node for panel
    * @return {void}
    */


    createClass(PanelController, [{
        key: 'createPanelParentNode',
        value: function createPanelParentNode() {
            this._view.createPanelParentNode(this._panelParentNode);
            this._notifPanelNode = document.getElementById(constants.panelNodeId);
        }

        /**
        * refreshPanelNode
        * Shows the expanded panel - fetches data from store, calls view to render, attached delegates
        * @param {object} requestOverride - matrix params to over ride the reqeust
        * @param {Function} callback - The callback function
        * @return {void}
        */

    }, {
        key: 'refreshPanelNode',
        value: function refreshPanelNode(requestOverride, callback) {
            var self = this;

            addClass(self._notifPanelNode, constants.panelLoading);

            self._store.fetchNotifications(requestOverride, function handleExpandedFetch(err, response) {
                if (err) {
                    if (!self._notifPanelNode.innerHTML) {
                        self._view.render(ERROR_PANEL$1);
                        addClass(self._notifPanelNode, constants.panelLoading);
                    }
                } else {
                    self._view.render(EXPANDED_PANEL$1);
                    self._view.updateBadgeNode(self._badgeNode);
                    self._showBadge();
                    self._showIndicator();
                    self._view.addStyles(response.css);
                }
                removeClass(self._notifPanelNode, constants.panelLoading);

                callback && callback(err, response);
            });
        }

        /**
        * resetBadge
        * Reset the badge count
        * @return {void}
        */

    }, {
        key: 'resetBadge',
        value: function resetBadge() {
            var self = this;
            self._store.resetNewCount();
            self._view.updateBadgeNode(self._badgeNode);
            addClass(self._badgeNode, self._config.badge.hideClass);
        }

        /**
        * _showIndicator
        * Add class to indicator node
        * @return {void}
        */

    }, {
        key: '_showIndicator',
        value: function _showIndicator() {
            if (!this._indicatorNode) {
                return;
            }

            var _store$getNotificatio = this._store.getNotifications(),
                newCount = _store$getNotificatio.newCount;

            if (newCount) {
                addClass(this._indicatorNode, this._config.panel.indicatorClass);
            } else {
                removeClass(this._indicatorNode, this._config.panel.indicatorClass);
            }
        }

        /**
        * _showBadge
        * Show/hide the badge count
        * @return {void}
        */

    }, {
        key: '_showBadge',
        value: function _showBadge() {
            var self = this;

            var _self$_store$getNotif = self._store.getNotifications(),
                newCount = _self$_store$getNotif.newCount;

            if (newCount) {
                removeClass(self._badgeNode, self._config.badge.hideClass);
            } else {
                addClass(self._badgeNode, self._config.badge.hideClass);
            }
        }
    }]);
    return PanelController;
}();

var config = {
    promos: {
        eligibleBodyClass: 'display-push-promos',
        enableNotifOnboard: true,
        notifOnboardBtnLabel: 'Notify Me',
        notifOnboardMsg: 'Get Notifications for Your Favorite Topics',
        subscriptionTopic: 'gondor_homerun_news'
    },
    badge: {
        hideClass: '',
        maxCount: 5,
        selector: ''
    },
    panel: {
        emptyPanelMsg: 'You have no new notifications.',
        errorMsg: '',
        headerMsg: 'Notifications',
        imageTag: 'img:40x40|2|80',
        indicatorClass: 'yns-indicator',
        indicatorSelector: null,
        maxCount: 6,
        notificationCenterNavMsg: 'View all {newCount} notifications',
        notificationCenterPath: '',
        styleTagId: 'notificationStyles',
        parentSelector: null // required
    },
    service: {
        attemptCount: 2,
        attemptDelay: 1,
        url: null, // required
        resetUrl: null,
        isRMP: false,
        responseType: 'json',
        timeout: 1500
    }
};

var Main = function () {
    function Main(config$$1) {
        classCallCheck(this, Main);

        var self = this;
        self.config = self._parseConfig(config$$1);

        var validConfigs = self._validateRequiredConfigs();
        // silently return if required configs are missing
        if (!validConfigs) {
            return;
        }

        self._request = new NotificationRequest(self.config);
        self._store = new NotificationStore(self.config, self._request);
        self._view = new NotificationView(self.config, self._store);

        self._panelController = new PanelController(self.config, self._store, self._view);
        self._panelController.createPanelParentNode();

        // Once all the internal modules are init, create helper method reference.
        self._assignHelperMethods();
    }

    /**
    * _parseConfig
    * Parses the provided config and updates default. The configs are expected to be max one level deep
    * @param {object} config - The config object
    * @return {object} request configuration
    */


    createClass(Main, [{
        key: '_parseConfig',
        value: function _parseConfig(config$$1) {
            var defaultConfig = {};
            objectAssign(defaultConfig, config);

            for (var key in defaultConfig) {
                if (defaultConfig.hasOwnProperty(key)) {
                    var orig = defaultConfig[key];
                    var extn = config$$1[key];
                    if ((typeof orig === 'undefined' ? 'undefined' : _typeof(orig)) === 'object') {
                        objectAssign(orig, extn);
                    } else {
                        defaultConfig[key] = config$$1[key];
                    }
                }
            }
            return defaultConfig;
        }

        /**
        * _validateRequiredConfigs
        * Validates if required configs are being passed by consumer
        * @return {boolean} validity of configs
        */

    }, {
        key: '_validateRequiredConfigs',
        value: function _validateRequiredConfigs() {
            var _config = this.config;

            return !!(_config.panel.parentSelector && _config.service.url);
        }

        /**
        * _assignHelperMethods
        * This function creates helper methods that refer to internal functions, binds correct context
        * @return {void}
        */

    }, {
        key: '_assignHelperMethods',
        value: function _assignHelperMethods() {
            var self = this;
            self.helpers = {
                refreshPanelNode: self._panelController.refreshPanelNode.bind(self._panelController),
                resetBadge: self._panelController.resetBadge.bind(self._panelController),
                resetIndicator: function resetIndicator() {
                    removeClass(self._panelController._indicatorNode, self.config.panel.indicatorClass);
                }
            };
        }
    }]);
    return Main;
}();

return Main;

}());
//# sourceMappingURL=notificationClient.min.js.map
!function(){var a,o,i,n="lnct";function t(e,n){var t=this;t.config=e||{},t.accordion=o.querySelector(e.accordionSelector),t.countBadge=o.querySelector(e.countBadgeSelector),t.notificationButton=o.querySelector(e.notificationButtonSelector),t.profileButton=o.querySelector(e.profileButtonSelector),t.notificationClient=n,t.visibilityMetaTag="",a.wafer&&a.wafer.ready(function(){t.visibilityMetaTag=a.wafer.features.visibilityMeta.hidden||""});function i(e){t.visibilityMetaTag&&o[t.visibilityMetaTag]||t.refreshPanel.call(t,e)}t.attachEventListeners(),i(t.handleBackgroundRefresh),e.pollingInterval&&setInterval(i,1e3*e.pollingInterval,t.handleBackgroundRefresh)}function e(){if(a.NotificationClient){var e=new window.NotificationClient(i);e&&e.helpers&&new t(i.adapter,e)}}function r(e,n,t){a=e,o=n,i=t||{"adapter":{"accordionSelector":"#profile-notification-accordion","countBadgeSelector":"#header-notification-badge","initializeImmediately":false,"lang":"en-US","loadInHpViewer":true,"notificationButtonSelector":"#header-notification-button","pollingInterval":300,"profileButtonSelector":"#header-profile-button","rapidModuleId":"applet_p_50000372","region":"US"},"badge":{"hideClass":"D(n)","selector":"#header-notification-badge"},"panel":{"emptyPanelMsg":"You have no new notifications.","errorMsg":"Please check back later.","headerMsg":"Notifications","indicatorSelector":"#header-notification-indicator","maxCount":6,"notificationCenterNavMsg":"","notificationCenterPath":"/","parentSelector":"#header-notification-panel"},"promos":{"eligibleBodyClass":"display-push-promos","enableNotifOnboard":true,"notifOnboardBtnLabel":"Notify Me","notifOnboardMsg":"Get Notifications for Your Favorite Topics","subscriptionTopic":"gondor_homerun_news"},"service":{"url":"/tdv2_fp/api/resource/NotificationHistory.getHistory"}}}t.prototype={attachEventListeners:function(){var e=this;e.profileButton&&e.profileButton.addEventListener("click",function(){e.refreshPanel.call(e)}),e.accordion&&e.accordion.addEventListener("click",function(){e.handlePanelOpen.call(e)}),e.notificationButton&&(e.notificationButton.addEventListener("mouseenter",function(){e.handlePanelOpen.call(e)}),e.notificationButton.addEventListener("focus",function(){e.handlePanelOpen.call(e)}))},getConsumptionTime:function(){return a.localStorage&&a.localStorage.getItem(n)},handleBackgroundRefresh:function(e,n){var t=this,i=a.YAHOO&&a.YAHOO.i13n&&a.YAHOO.i13n.rapidInstance||a.rapidInstance;if(i&&t.countBadge&&t.countBadge.className.indexOf("D(n)")<0){var o={_links:[{cat:t.countBadge.innerText,elm:"btn",slk:"notification",subsec:"notification-badge"}],sec:"hd"};i.beaconLinkViews([o],0,{pp:{usergenf:0}})}},handlePanelOpen:function(){var e=this,n=a.YAHOO&&a.YAHOO.i13n&&a.YAHOO.i13n.rapidInstance||a.rapidInstance;e.stampConsumptionTime(),e.notificationClient.helpers.resetBadge(),e.notificationClient.helpers.resetIndicator(),n&&n.isModuleTracked(e.config.rapidModuleId)&&n.refreshModule(e.config.rapidModuleId)},stampConsumptionTime:function(){var e=""+Math.floor((new Date).getTime()/1e3);return a.localStorage&&a.localStorage.setItem(n,e),e},refreshPanel:function(t){var i=this,e=i.getConsumptionTime()||i.stampConsumptionTime(),n=i.config.region,o=i.config.lang,a=i.config.loadInHpViewer,r={lastUpdate:e};n&&o&&(r.lang=o,r.region=n),a&&(r.loadInHpViewer=a),i.notificationClient.helpers.refreshPanelNode({matrixParams:r},function(e,n){t&&t.call(i,e,n)})}},"undefined"!=typeof module?(module.exports.NotificationClientAdapter=t,module.exports.defineGlobals=r,module.exports.initNotificationClient=e):(r(window,document),i.adapter&&i.adapter.initializeImmediately?e():o.addEventListener("DOMContentLoaded",e))}();