$(document).ready(function(){
	
	//$("#filmes tr").addClass("impar");
	//$("#filmes tr:odd").addClass("impar");
	//$("#filmes tr:nth-child(3)").addClass("impar");
	//$("#filmes tr:nth-child(odd)").addClass("impar");
	//$("#filmes tr:nth-child(2n)").addClass("impar");
	//$("#filmes tr:nth-child(2n+1)").addClass("impar");
	$("#filmes tr:nth-child(4n-1)").addClass("impar");
	$("#filmes tr:nth-child(4n)").addClass("impar");
	
});