$(document).ready(function(){
	$("input").click(function(){
		$("h1").remove();
		$("li").empty();
		$("ul").unwrap();
	});
	
	$("ul").append("<li>Dentro e na última posição</li>");
	$("ul").prepend("<li>Dentro e na primeira posição</li>");
	$("ul").before("<h1>Fora e antes do elemento</h1>");
	$("ul").after("<h1>Fora e depois do elemento</h1>");
	$("ul").wrap("<p></p>");
});


