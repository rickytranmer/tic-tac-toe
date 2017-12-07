var numMoves = 0;


// - Fill selected cell (if not already checked)
function checkCell ($clickedCell) {
	if ((numMoves % 2 == 0) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("X").addClass('checked').css('background', 'pink');
		numMoves++;
		console.log('move: ' + numMoves + '-X');
	} else if ((numMoves % 2 == 1) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("O").addClass('checked').css('background', 'lightBlue');
		numMoves++;
		console.log('move: ' + numMoves + '-O');
	}
}

$(function(){
	console.log('document ready');
	$('td').click(function(){
		console.log($(this).closest('td'));
		
		checkCell($(this).closest('td'));

		//ADD - Cat's game if numMoves >= 9 (8?)

		//ADD - Check for win condition
	});

	//ADD - Reset button
});