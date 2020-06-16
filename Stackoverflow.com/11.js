
      //informer
      (function(f,i,c){var a=decodeURIComponent,e="",l="",o="||",g=";;",h="split",b="length",j="indexOf",k=0,n="localStorage",m="_ccmdt";f[c]=f[c]||{};function d(q){var p;if(f[n]){return f[n][q]||""}else{p=i.cookie.match(q+"=([^;]*)");return(p&&p[1])||""}}f[c].us={};e=a(d(m))[h](o);k=e[b];if(k>0){while(k--){l=e[k][h]("=");if(l[b]>1){if(l[1][j](g)>-1){f[c].us[l[0]]=l[1][h](g);f[c].us[l[0]].pop()}else{f[c].us[l[0]]=l[1]}}}}})(window,document,"_ml");

      //tag
      (function () {
        _ml = window._ml || {};
        _ml.eid = '50190';
        _ml.informer = {
          callback: function (gaSet,gaSend) { //call back when profile is loaded
            if (typeof digitalData != 'undefined' && !_ml.isEmptyObj(_ml.us)) {
              var dlObj = {
                'CompanyRevenue': _ml.us.cr,
                'CompanySize': _ml.us.cs,
                'CompanyDomain': _ml.us.dm,
                'CompanyInstall': (_ml.us.ins && _ml.us.ins.length > 0) ? _ml.us.ins[0] : '',
                'FunctionalArea': (_ml.us.fa && _ml.us.fa.length > 0) ? _ml.us.fa[0] : '',
                'Profession': (_ml.us.pg && _ml.us.pg.length > 0) ? _ml.us.pg[0] : '',
                'Seniority': _ml.us.sn,
                'DecisionMaker': _ml.us.dcm,
                'Education': _ml.us.edu
              };

              var updatedBomoraData = Object.assign(digitalData.user[0].profile[0].attributes.bombora, dlObj);
              digitalData.user[0].profile[0].attributes.bombora = updatedBomoraData;
              digitalData.page.pageInfo.mlTopic = _ml.us.tp;
              digitalData.page.pageInfo.mlCategory = _ml.us.pc;
            }
          },
          enable: true
        };
        var s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');
        mltag.type = 'text/javascript'; mltag.async = true;
        mltag.src = 'https://ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();
        s.parentNode.insertBefore(mltag, s);
      })();
    