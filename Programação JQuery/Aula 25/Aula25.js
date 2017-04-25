$(document).ready(function(){
		
	$("tbody tr:not(.sub)").hide();
	$(".sub th").prepend("<img src='mais.jpg'>");
	
	$("img").click(function(){
		if($(this).attr("src") == "menos.jpg"){
			$(this).attr("src","mais.jpg")
			.parents().siblings("tr").hide();
		}else{
			$(this).attr("src","menos.jpg")
			.parents().siblings("tr").show();
		}
	});
	
});