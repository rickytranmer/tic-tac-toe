var numMoves = 0;

//ADD - localStorage tracks wins for X player and O player

// - Fill selected cell (if not already checked)
function checkCell ($clickedCell) {
	if ((numMoves % 2 == 0) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("X").addClass('checked xX').css('background', 'pink');
		numMoves++;
		console.log('move: ' + numMoves + '-X');
	} else if ((numMoves % 2 == 1) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("O").addClass('checked oO').css('background', 'lightBlue');
		numMoves++;
		console.log('move: ' + numMoves + '-O');
	}
}

function checkWin () {
	//ADD - Check for win condition
	var $checksX = $('.xX');
	var $checksO = $('.oO');
	console.log($checksX);
	console.log($checksO);

	//------- X -------
	var $row1X = $('td.xX.row1');
	var $row2X = $('.xX.row2');
	var $row3X = $('.xX.row3');
	var $column1X = $('.xX.column3');
	var $column3X = $('.xX.column3');
	var $column3X = $('.xX.column3');
	var $diagLX = $('.xX.diagL');
	var $diagRX = $('.xX.diagR');
	
	console.log(' -Xs on row1');
	console.log($row1X);
	console.log(' -Xs on diagL');
	console.log($diagLX);

	//------- O -------
	var $row1O = $('.oO.row1');
	var $row2O = $('.oO.row2');
	var $row3O = $('.oO.row3');
	var $column1O = $('.oO.column3');
	var $column3O = $('.oO.column3');
	var $column3O = $('.oO.column3');
	var $diagLO = $('.oO.diagL');
	var $diagRO = $('.oO.diagR');
}

$(function(){
	console.log('document ready');
	//ADD - On mouseover, show whether X or O is next
	//ADD - On mouseout, revert back to previous state

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
		$('td').text(' ').removeClass('checked xX oO').css('background', 'white');
		numMoves = 0;
	});
});