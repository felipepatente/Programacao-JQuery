$(document).ready(function(){
	/*
	$(":text").keyup(function (e){
		$("#msg").text($(this).val())
		.css("color","white");
	});
	*/
	
	/*
	// Faz a mesma coisa que a de cima
	$(":text").bind("keyup", function (e){
		$("#msg").text($(this).val())
		.css("color","white");
	});
	*/
	
	// Faz a mesma coisa que os 2 de cima
	function msg(e){
		$("#msg").text($(this).val())
		.css("color","white");
	}
	
	/*
	Essas linhas de codigo da o mesmo resultado
	$(":text").keyup(msg).focus(msg).blur(msg);
	$(":text").bind("keyup focus blur",msg);
	*/
	
	/*
	$(":text").bind("keyup focus blur",msg);
	$(":button").bind("click", function(){
		$(":text").unbind("keyup", msg);
		
		$(":text").val("Texto Incluindo via JQuery");
		$(":text").trigger("focus");
	});
	*/
	
	//$(":text").bind("keyup focus blur", msg);
	$("fieldset").delegate(":text","keyup",msg);
	
	$(":button").bind("click", function(){
		$("fieldset").prepend("Outro: <input type='text' name='outro'/>");
	});
	
	
});
