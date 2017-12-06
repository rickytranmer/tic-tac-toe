$(function(){
	console.log('document ready');
	$('td').click(function(){
		console.log($(this).closest('td'));
		$(this).html("O");
	});
});