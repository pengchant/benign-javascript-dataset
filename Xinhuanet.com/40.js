
$(function () {
    layer = {};
    layer.opendiv = function(){
        $('.zbfd span').click(function(){
            $('.lnm').show();
            $('.lnpx').show();
			document.documentElement.style.overflow='hidden';
			
        });
		 $('.nav .sud .zl').click(function(){
            $('.wqjz').show();
            $('.lnpx').show();
			document.documentElement.style.overflow='hidden';
			
        });
		 $('.bit04').click(function(){
            $('.sssm').show();
            $('.lnpx').show();
			document.documentElement.style.overflow='hidden';
			
        });
		
		
    };
    layer.closediv = function(){
        $('.gbx').click(function(){
            $('.lnm').hide();
			$('.wqjz').hide();
			$('.sssm').hide();
            $('.lnpx').hide();
			document.documentElement.style.overflow='';
        });
    };
    
    layer.run = function () {
        this.closediv();
        this.opendiv();

    };
    layer.run();
});
