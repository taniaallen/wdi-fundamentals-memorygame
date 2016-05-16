var cardOne = "queen";

var cardTwo = "queen";

var cardThree = "king";
 
var cardFour = "king";

/* Commenting out if statement per Unit 10.7 assignment insructions.

if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
*/



var boardDiv = document.getElementById('game-board');


var createBoard = function() {
	for (var i = 0; i < 4; i++) {
		var newDiv = document.createElement('div');
	    newDiv.className = 'card';
	    boardDiv.appendChild(newDiv);
	};
}

createBoard();