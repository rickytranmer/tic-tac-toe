var numMoves = 0;

//ADD - localStorage tracks wins for X player and O player

// - Fill selected cell (if not already checked)
function checkCell ($clickedCell) {
	if ((numMoves % 2 == 0) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("X").addClass('checked xX');
		numMoves++;
		console.log('move: ' + numMoves + '-X');
	} else if ((numMoves % 2 == 1) && (!($clickedCell.hasClass('checked')))) {
		$clickedCell.html("O").addClass('checked oO');
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
	var $column2X = $('.xX.column2');
	var $column3X = $('.xX.column3');
	var $diagLX = $('.xX.diagL');
	var $diagRX = $('.xX.diagR');

	//test values
	console.log(' -Xs on row1');
	console.log($row1X);
	console.log(' -Xs on column3');
	console.log($column3X);
	console.log(' -Os on diagL');
	console.log($diagLO);

	if (($row1X.length==3) || ($row2X.length==3) || ($row3X.length==3) || ($column1X.length==3) || ($column2X.length==3) || ($column3X.length==3) || ($diagLX.length==3) || ($diagRX.length==3)) {
		setTimeout(function() { alert('X wins!') }, 140);
		$(window).scrollTop($(document).height());
		// $('.diagL.diagR').text('X' + )
	}

	//------- O -------
	var $row1O = $('.oO.row1');
	var $row2O = $('.oO.row2');
	var $row3O = $('.oO.row3');
	var $column1O = $('.oO.column3');
	var $column2O = $('.oO.column2');
	var $column3O = $('.oO.column3');
	var $diagLO = $('.oO.diagL');
	var $diagRO = $('.oO.diagR');

	if (($row1O.length==3) || ($row2O.length==3) || ($row3O.length==3) || ($column1O.length==3) || ($column2O.length==3) || ($column3O.length==3) || ($diagLO.length==3) || ($diagRO.length==3)) {
		setTimeout(function() { alert('O wins!') }, 14);
		$(window).scrollTop($(document).height());
	}
}

$(function(){
	console.log('document ready');
	$(window).scrollTop(0);
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
		$('td').text(' ').removeClass('checked xX oO');
		$(document).scrollTop(0);
		numMoves = 0;
	});
});