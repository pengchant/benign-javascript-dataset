
    $(document).ready(function () {
        $("#hospital_list select[name='prov']").change(function(){
            var local_id = parseInt($(this).val())+1;
            $.get(base_url+local_id,function(data){
                $("#hospital_list select[name='hospital_id']").empty();
                if(data['status']=='success'){
                    for(var ind in data['data']){
                        $("#hospital_list select[name='hospital_id']").append("<option value='"+data['data'][ind][0]+"'>"+data['data'][ind][1]+"</option>");
                    }
                }
            }, 'json');
        });
        var base_url = '/community/discuz_ajax.php?action=get_hospital_list&location_id=';
        $("#hospital_list select[name='locid']").change(function(){
            $("#hospital_list select[name='hospital_id']").empty();
            $.get(base_url+$(this).val(),function(data){
                if(data['status']=='success'){
                    for(var ind in data['data']){
                        $("#hospital_list select[name='hospital_id']").append("<option value='"+data['data'][ind][0]+"'>"+data['data'][ind][1]+"</option>");
                    }
                }
            }, 'json');
        });
    });
    $("#hospital_jump").click(function(){
            window.location = "/community/hospital"+$("#nav-hospital-select").val()+"/";
    });
    $("#location_jump").click(function(){
            window.location = "/difang/redirect_by_location.php?location_id="+$("#loc_group").val();
    });
	//首屏JS写在此位置
	