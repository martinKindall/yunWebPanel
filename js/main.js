$(document).ready(function(){
	var mainUrl = "http://192.168.50.14/arduino";
	var onOffLedUrl = "/digital/8/";
	var pwmLedUrl = "/analog/11/";
	var textUrl = "/lcd/";

	$('#on').click(function(){
		$.get(mainUrl+onOffLedUrl+'1', function(response){
			console.log(response);
			$("#console").text(response);
		});
	});

	$('#off').click(function(){
		$.get(mainUrl+onOffLedUrl+'0', function(response){
			console.log(response);
			$("#console").text(response);
		});
	});

	$('#slider').bind("touchend", function(){
		$.get(mainUrl+pwmLedUrl+$(this).val(), function(response){
			console.log(response);
			$("#console").text(response);
		});
	});

	$('#enviar').click(function(){
		// $.get(mainUrl+textUrl+$("#texto").val(), function(response){
		// 	console.log(response);
		// 	$("#console").text(response);
		// });
		console.log($("#texto").val());
	});
});