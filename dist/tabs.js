$(document).on('ready', start);
	function start(){

$("nav div").on('click', function(e){
	console.log("hello")
	var $target = $(e.target);
	var targetName = $target.attr('class');
	$("section").hide();
	$("#"+ targetName).show();
})

}


// $(‘NAV’).ON(‘CLICK”,FUNTION(E){
// 	VAR $TARGET = $(E.TARGET):
// 	VAR TARGETname = $TARGET.ATTR(‘HREF’);
// $('main section').hide();
// $(targetname).show();
// })