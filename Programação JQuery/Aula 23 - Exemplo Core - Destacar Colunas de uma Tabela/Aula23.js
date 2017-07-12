$(document).ready(function(){
	
	$("#filmes tr:odd").addClass("impar");
	
	$("#filmes thead tr td")
	.not("td:first-child")
	.prepend("<span>+</span>")
	.css("cursor","pointer");
	$("#filmes thead tr td").each(function(i){
		var n = i - 1;
		$(this).click(function(){
			$("td").removeClass("destaque");
			$(this)
			.parents("thead")
			.siblings("tbody")
			.children("tr").each(function(){
				$(this).children("td:eq("+ n +")")
				.addClass("destaque");
			});
		});
	});
});