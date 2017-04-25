$(document).ready(function(){
	$("input").click(function(){
		
		//alert($("p").html());
		//$("p").html("Conheca o brasil")
		//$("p").html("<h1>Conheça o brasil</h1>")
		
		//$("textarea").text("Conheça o brasil");
		//alert($("textarea").text());
		//$("textarea").text($("p").html());
		
		//alert($("textarea").val());
		//$("p").html($("textarea").val());
		
		//$("textarea").replaceWith("<p>Conheça o brasil</p>");
		$("textarea").replaceWith($("textarea").val());
		
	});
});


