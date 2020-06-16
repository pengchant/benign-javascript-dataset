
  // 搜索模块的版本号
  window.suggestModuleVersion = '6.3.1';
  KISSY.config({
    combine: true,
    packages: [{
      name: 'kg',
      base:  '//g.alicdn.com/kg/',
      ignorePackageNameInUri: true,
      combine: true
    },{
      name: 'p',
      base: '//g.alicdn.com/tbh/backup/1.0.2',
      combine: false,
      debug: true
    }],
    modules: {
      combobox: {
        alias: ['kg/combobox/0.0.2/index']
      },
      'mini-login': {
        alias: ['kg/mini-login/6.3.7/index']
      },
      xtemplate: {
        alias: ['kg/xtemplate/4.3.0/index']
      },
      'attr-anim': {
        alias: ['kg/attr-anim/6.0.3/index']
      }
    }
  });
