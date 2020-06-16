window.byted_acrawler && window.byted_acrawler.init({
    aid: 24,
    dfp: true,
    intercept: true, // 开启拦截器后，所有符合下面列表条件的 url 都会自动加上 _signature 参数
    // SDK 会拦截所有使用 XMLHTTPRequest 发送的请求，包括第三方库发出的，所以请严格设置 enablePathList
    enablePathList: [
      '/c/ugc/video/publish/'
    ],
    urlRewriteRules: [
      ['/c/ugc/video/publish/', '/toutiao/c/ugc/video/publish/']
    ]
  })