var numMoves = 0;

//ADD - localStorage tracks wins for X player and O player

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

function checkWin () {

}

$(function(){
	console.log('document ready');
	$('td').click(function() {
		var $thisCell = $(this).closest('td');
		
		checkCell($thisCell);

		//ADD - Check for win condition
		if (numMoves >= 5) {
			checkWin();
		}

		//ADD - Cat's game if numMoves >= 9 (8?)

		//ADD - Scroll to bottom on cat's game or win
	});

	// - Reset button fills cells with ' ', reverts color to white, removes class 'checked'
	$('button').click(function() {
		$('td').text(' ').removeClass('checked').css('background', 'white');
		numMoves = 0;
	});
});