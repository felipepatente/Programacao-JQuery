$(document).ready(function(){
	$("input").click(function(){
		
		var img = $("<img/>", {
			src:"Aula11.png",
			title:"Banco de Dados",
			click:function(){
				alert("Faço Banco de Dados");
			}
		});
		
		var ul = $("<ul/>").append($("<li/>").append("Programa de Interface Web"));
		var p = $("<p/>").append("<h1>Titulo</h1>Terra dos programadores profissioais, amadores e etc...");
		
		$("body")
		.append(img)
		.append(ul)
		.append(p);
		
	});
});


