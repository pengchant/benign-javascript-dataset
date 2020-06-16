
        //全登陆不允许iframe嵌入
        if (window.top !== window.self) {
            window.top.location = window.location;
        }

                window.enableWwSsoPluginLogin = true;
            