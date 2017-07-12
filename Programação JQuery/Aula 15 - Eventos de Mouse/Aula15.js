$(document).ready(function(){
	$("input").click(function(){
		//$("p").text("Click").css("color","blue"); 
	}).dblclick(function(){
		//$("p").text("Click Duplo").css("color","blue"); 
	}).mouseover(function(){
		//$("p").text("Mouse Over").css("color","blue"); 
	}).mouseout(function(){
		//$("p").text("Mouse out").css("color","black"); 
	}).mouseup(function(){
		$("p").text("Mouseup").css("color","pink"); 
	}).mousedown(function(){
		$("p").text("Mousedown").css("color","red"); 
	});
});


