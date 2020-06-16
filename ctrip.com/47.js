
        function ItemFloat() {
            if (document.getElementById('classifylist').style.display == '') {
                document.getElementById('classifylist').style.display = 'none';
                document.getElementById('i_arrow').className = 'classify-down';
            } else {
                document.getElementById('classifylist').style.display = '';
                document.getElementById('i_arrow').className = 'classify-up';
            }
        } 
    