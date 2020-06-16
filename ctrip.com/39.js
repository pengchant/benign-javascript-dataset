
        //延迟渲染, 减少首屏可用的等待时间
        !function () {
            var lazyRenderContainer = document.getElementById('lazyRenderContainer');
            var skeleton;
            if (lazyRenderContainer) {
                skeleton = lazyRenderContainer.innerHTML;
                skeleton = skeleton.replace(/^\s*<!--\s*/, '').replace(/\s*-->\s*$/, '');
                lazyRenderContainer.innerHTML = skeleton;
            }
        } ();
    