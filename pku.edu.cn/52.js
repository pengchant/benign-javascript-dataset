
var inputs = jQuery("#opac-search-field, #summon-search-field, #eresource-search-field, #ejournal-search-field");
inputs.blur(
	function(){
	action_input=this,
	text=jQuery(this).val();
	inputs.each(
	function(){
		if(this==action_input)
		return true;
		jQuery(this).val(text)});
	});

