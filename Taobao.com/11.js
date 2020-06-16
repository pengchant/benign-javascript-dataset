
//mode:render
window.define && define('@page/data',[], function(require, exports, module) {
  var page = {
    pageId:'178835',
    theme:'',
    backgroundColor:'',
    charset:'utf-8',
    title:'淘宝足迹',
    spmA:'a1z2k',
    spmB:'11010449',
    keyword:'',
    description:'',
    hostname:'',
    env:'production',
    deviceType:'pc'
  };
  var modules = [];
  //block nav data
  try{ modules = modules.concat(window.__tms_block_datas__.nav.modules); }catch(e){};

  
    
      
         
        modules.push({
          id:"931860",
          name:"foot-search-pc",
          attrs:[][0] || {},
          engine:"tce",
          fullName:'upx/tb-mod/foot-search-pc',
          data:[{"moduleinfo":{},"txts":[{"data_para":{"tce_vid":"0","tce_sid":2378680,"env":"online"},"tms_type":"jsonp","data_type":"tceonline"}],"countinfo":{"txts":{"length_pc":1,"length":1}}}][0] || {}
        });
        
      
    
  
    
      
         
        modules.push({
          id:"931864",
          name:"act-201712-my-footmark-pc",
          attrs:[][0] || {},
          engine:"tce",
          fullName:'upx/tb-mod/act-201712-my-footmark-pc',
          data:[{"moduleinfo":{}}][0] || {}
        });
        
      
    
  

  //block footer data
  try{ modules = modules.concat(window.__tms_block_datas__.footer.modules); }catch(e){};
  module.exports = {
    page: page,
    modules: modules
  };
});
