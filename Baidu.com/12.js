
            window.alogObjectConfig = {
                product: '104',
                page: 'page-video-index2-new',
                speed: {
                    sample: '0.1'
                },
                monkey: {
                    sample: '0.1'
                },
                exception: {
                    sample: '0.1'
                },
                feature: {
                    sample: '0.1'
                },
                csp: {
                    sample: '0.1',
                    'default-src': [
                        {match: '*bae.baidu.com', target: 'Accept,Warn'},
                        {match: '*.baidu.com,*.bdstatic.com,*.bdimg.com,localhost,*.hao123.com,*.hao123img.com', target: 'Accept'},
                        {match: /^(127|172|192|10)(\.\d+){3}$/, target: 'Accept'},
                        {match: '*', target: 'Accept,Warn'}
                    ]
                }
            };
        