var numMoves = 0;

$(function(){
	console.log('document ready');
	$('td').click(function(){
		// - Select clicked cell, deny if already checked
		console.log($(this).closest('td'));
		if ((numMoves % 2 == 0) && (!($(this).closest('td').hasClass('checked')))) {
			$(this).html("X").addClass('checked').css('background', 'pink');
			numMoves++;
		} else if ((numMoves % 2 == 1) && (!($(this).closest('td').hasClass('checked')))) {
			$(this).html("O").addClass('checked').css('background', 'lightBlue');
			numMoves++;
		}


		//ADD - Check for win condition
	});
});