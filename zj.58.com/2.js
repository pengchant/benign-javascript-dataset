
      window.wbAsyncInit = function wbAsyncInit(CL) {
        CL.invoke('footer');
        CL.invoke('topbar', {
          aroundCity: true,
          weather: true,
          appQR: false,
          homepageLink: false,
          size: ''
        });
      };
    