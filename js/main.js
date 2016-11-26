$(document).ready(function(){
	var mainUrl = "http://192.168.50.14/arduino";
	var ledUrl = "/digital/13/";

	$('#on').click(function(){
		$.get(mainUrl+ledUrl+'1', function(response){
			console.log(response);
		});
	});

	$('#off').click(function(){
		$.get(mainUrl+ledUrl+'0', function(response){
			console.log(response);
		});
	});

	// $.get(url1, function (response){
	// 	var statusHTML = '<ul class = "bulleted">';
	// 	$.each(response, function (index, employee){
	// 		if (employee.inoffice === true)
	// 		{
	// 			statusHTML += '<li class="in">';
	// 		}
	// 		else 
	// 		{
	// 			statusHTML += '<li class="out">';
	// 		}
	// 		statusHTML += employee.name + '</li>';
	// 	});
	// 	statusHTML += '</ul>';
	// 	$('#employeeList').html(statusHTML);
	// }).fail(function(jqXHR){
	// 	console.log(jqXHR);
	// 	$('#employeeList').html(jqXHR.statusText);
	// });

});


function toggleLed($param)
{

}