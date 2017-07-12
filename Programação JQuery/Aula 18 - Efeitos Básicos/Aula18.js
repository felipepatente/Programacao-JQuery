$(document).ready(function(){
	/*
	$("input:eq(0)").click(function(){
		$("div").hide();
	});
	*/
	
	/*	
	$("input:eq(0)").click(function(){
		$("div").hide("slow");
	});	
	*/
	
	/*
	$("input:eq(0)").click(function(){
		$("div").hide("fast");
	});
	*/
	
	$("input:eq(0)").click(function(){
		$("div").hide(3000);
	});
		
	$("input:eq(1)").click(function(){
		$("div").show("1000");
	});
	
	$("input:eq(2)").click(function(){
		$("div").toggle();
	});	
	
});
