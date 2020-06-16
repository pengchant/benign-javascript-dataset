
    (function () {
        function HotBottomLittleNav () {
            this.init();
        }
        var proto = HotBottomLittleNav.prototype;

        proto.init = function () {
            this.cookieName = 'hot-bottom-little-nav-close';
            this.id = 'hotbottom_littlenav'
            this.container = hao360.g(this.id);
            this.closeBtn = hao360.g('hot-bottom-little-nav__btn--close');
            if (this.needHide()) return this.close();
            if (this.closeBtn) this.listenCloseBehavior();
        };

        proto.needHide = function () {
            var ua = navigator.userAgent;
            var match = ua.match(/MSIE (\d*.\d*)/);
            return (match && match.length && parseFloat(match[1]) < 7) || !this.expired();
        };

        proto.listenCloseBehavior = function () {
            var self = this;
            this.closeBtn.onclick = function (e) {
                self.close();
                self.setClosedCookie();
                return false;
            };
        };

        proto.close = function () {
            this.container.parentNode.removeChild(this.container);
        };

        proto.setClosedCookie = function () {
            var cookieName = this.cookieName;
            var oneDay = 1000 * 3600 * 24;
            LogHub.behavior(this.id, 'close');
            qboot.cookie.set(cookieName, 1, {expires: oneDay});
        };

        proto.expired = function () {
            var cookieName = this.cookieName;
            return !qboot.cookie.get(cookieName);
        };

        new HotBottomLittleNav();
    })();
