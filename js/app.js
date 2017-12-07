var numMoves = 0;
var row1 = 0;
var row2 = 0;
var row3 = 0;
var column1 = 0;
var column2 = 0;
var column3 = 0;
var diagTopLeft = 0;
var diagTopRight = 0;

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

$(function(){
	console.log('document ready');
	$('td').click(function(){
		console.log($(this).closest('td'));
		
		checkCell($(this).closest('td'));

		//ADD - Add/subtract to/from correlating row/column/diag

		//ADD - Cat's game if numMoves >= 9 (8?)

		//ADD - Check for win condition
	});

	//ADD - Reset button fills cells with ' ', reverts color to white, removes class 'checked'
});