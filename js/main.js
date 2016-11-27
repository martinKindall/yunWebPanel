$(document).ready(function(){
	var mainUrl = "http://192.168.50.14/arduino";
	var onOffLedUrl = "/digital/8/";
	var pwmLedUrl = "/analog/11/";
	var textUrl = "/lcd/";

	$('#on').click(function(){
		getRequest(mainUrl+onOffLedUrl+'1');
	});

	$('#off').click(function(){
		getRequest(mainUrl+onOffLedUrl+'0');
	});

	$('#slider').bind("touchend", function(){
		getRequest(mainUrl+pwmLedUrl+$(this).val());
	});

	$('#enviar').click(function(){
		getRequest(mainUrl+textUrl+$("#texto").val()+"/");
	});
});

function getRequest(url)
{
	$.get(url, function(response){
		console.log(response);
		$("#console").text(response);
	});
}