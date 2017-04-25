$(document).ready(function(){
	$("input").click(function(){
		
		//alert($("img").css("width"));
		//alert($("img").css("height"));
		
		/*$("img").css({
			width:"300px",
			background: "#00FF00",
			border:"30px solid #B22222"
		});*/
		
		//alert($("img").hasClass("imagem"));
	
		//POSITION
		alert($("img").position().topo);
		alert($("img").position().left);
		alert($("img").offset().topo);
		alert($("img").offset().left);
		
	});
});


