$(document).ready(function(){
	
	$("#filmes tr:odd").addClass("impar");
	
	$("#filmes tr:odd").hover(
		function(){
			$(this).addClass("destaque");
		},
		function(){
			$(this).removeClass("destaque");
		}
	);
});