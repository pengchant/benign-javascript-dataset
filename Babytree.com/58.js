
            function do_communuty_survey(id,type,vote_id){
                if(typeof(check_user_login)=="function" && typeof(login)=="boolean"){
                    check_user_login("comment",function(){do_survey(id,type,vote_id)});
                    return false;
                }
            }
            