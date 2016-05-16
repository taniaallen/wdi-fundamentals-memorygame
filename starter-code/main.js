var cardOne = "queen";

var cardTwo = "queen";

var cardThree = "king";
 
var cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];




/* Commenting out if statement per Unit 10.7 assignment insructions.

if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
*/



var boardDiv = document.getElementById('game-board');


var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var newDiv = document.createElement('div');
	    newDiv.className = 'card';
	    boardDiv.appendChild(newDiv);
	    cardElement.setAttribute('data-card', cards[i]);
	    cardElement.innerHTML = '<img src="Clubs 12.png" alt="King of Clubs" />';addEventListener('click', isTwoCards);
	};
}

function isMatch() {
	if(cardsInPlay[0].key === cardsInPlay[1].key) {

	}
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

}

createBoard();