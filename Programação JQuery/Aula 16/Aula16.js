$(document).ready(function(){
	/*
	$(":text").keyup(function(){
		$("div").text($(this).val());
	}).focus(function(){
		$(this).css("background","red");
		$("div").text("Focus");
	}).blur(function(){
		$(this).css("background","black");
		$("div").text("Blur");
	});
	*/
	
	/*
	// Validação de formulários
	$("form").submit(function(){
		if($(":text").val() == "XTI"){
			return true;
		}
		return false;
	});
	*/
	
	/*
	$(":text").keypress(function(){
		$("div").text($(this).val());
	});
	
	$(":text").keydow(function(){
		$("div").text($(this).val());
	});
	*/
	
	$("textarea").select(function(){
		$("div").text("Selecionou" + sele);
	});
});
