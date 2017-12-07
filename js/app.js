var numMoves = 0;

function checkCell ($clickedCell) {
	if ((numMoves % 2 == 0) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("X").addClass('checked').css('background', 'pink');
		numMoves++;
	} else if ((numMoves % 2 == 1) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("O").addClass('checked').css('background', 'lightBlue');
		numMoves++;
	}
}

$(function(){
	console.log('document ready');
	$('td').click(function(){
		// - Select clicked cell, deny if already checked
		console.log($(this).closest('td'));
		
		checkCell($(this).closest('td'));

		//ADD - Cat's game if numMoves >= 9 (8?)

		//ADD - Check for win condition
	});
});