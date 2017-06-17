$(document).ready(function($){
// Input mask for phone field
$("#phoneForm").inputmask("+3 8(099) 999-99-99");
//validation

//submit
$("#form").submit(function(event){
	$(".navigation:eq(0)").removeClass("navigation-actual");
	$(".navigation:eq(1)").addClass("navigation-actual");
	$("#content").load("shipping.html");
	event.preventDefault();
})

});
