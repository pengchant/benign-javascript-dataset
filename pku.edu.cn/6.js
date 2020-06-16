
    function randomsort(a, b) {
        return Math.random()>.5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }
    $('#abab .list .item').hide();
    function setdataL(){
        $('#abab .list').each(function(index){
            var _that = $(this);
            var _lists = _that.find('.item');
            var total = _lists.size();
            var newArr = [];
            _lists.each(function(index){
                if(total > 7){
                    if($(this).is(':hidden')){
                        newArr.push(index);
                    }
                }else{
                    newArr.push(index);
                }
            })
            newArr.sort(randomsort);
            _lists.hide();
            var aaa = [];
            for(var i=0; i<4; i++){
                var last = newArr.pop();
                aaa.push(last);
                var _item = _lists.eq(last);
                if(_item.find('.img').data('src')){
                    _item.find('.img').css({'background-image':'url(' + _item.find('.img').data('src') + ')'});
                    _item.find('.img').removeAttr('data-src');
                }
                _item.show();
            }
        })
    }
    setdataL();
    // setInterval('setdataL()', 6000);
