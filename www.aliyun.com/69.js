
    if (window.innerWidth < 768) {
      var meta = document.querySelector('meta[name="viewport"]');
      meta.content = 'width=375px,user-scalable=no,viewport-fit=cover';
      document.querySelector('head').append(meta);
    }
  