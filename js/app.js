var numMoves = 0;


$(function(){
	console.log('document ready');
	$('td').click(function(){
		console.log($(this).closest('td'));
		if ((numMoves % 2 == 0) && (!($(this).closest('td').hasClass('checked')))) {
			$(this).html("X").addClass('checked');
			numMoves++;
		} else if ((numMoves % 2 == 1) && (!($(this).closest('td').hasClass('checked')))) {
			$(this).html("O").addClass('checked');
			numMoves++;
		}
	});
});