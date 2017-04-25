$(document).ready(function(){
	$("div span").css("background-color","yellow"); //Seletor descendente
	$("li > ul").css("color","red"); //Seletor filhos do elemento
	$("#Item1_1 + li").css("color","blue"); //Seletor irmão(1) do elemento
	$("#Item1_1 ~ li").css("color","blue"); //Seletor irmãos(N) do elemento
});