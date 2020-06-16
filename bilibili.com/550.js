window.reportMsgObj = {};
    window.reportConfig = {
      sample: 1,
      scrollTracker: false,
      msgObjects: 'reportMsgObj',
    };

    let reportScript = document.createElement('script');
    reportScript.src = '//s1.hdslb.com/bfs/seed/log/report/log-reporter.js';
    document.getElementsByTagName('body')[0].appendChild(reportScript);