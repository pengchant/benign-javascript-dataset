
      try {
        var sessionid = document.cookie.match(/.* ?sessionid=([^;]*)/);
        var ____json4fe = {
          catentry: [{dispid: '0', name: '', listname: 'city'}],
          locallist: [{dispid: '645', name: '镇江', listname: 'zj'}],
          start: (new Date()).getTime(),
          version: 'A',
          modules: 'homepage',
          pageType: 0,
          platForm: -1,
          param: '',
          sid: ('' + (new Date()).getTime() + Math.random()).replace('.', ''),
          infoid: 0,
          userid: 0,
          sessionid: sessionid == null ? '' : sessionid[1],
          isbiz: false,
          slotIds: '1,2,3',
          req_version: '1.0.0'
        }
      } catch (e) {
      }
      ;
    