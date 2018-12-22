console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);

cards = [cardOne, cardTwo, cardThree, cardFour];
cardsInPlay = [];
//
// cardsInPlay.push(cardOne);
// console.log(cardsInPlay);
// cardsInPlay.push(cardTwo);
// console.log(cardsInPlay);

var checkForMatch = function() {
  if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Try again!");
    }
  }
}


var flipCard = function(cardId) {
  checkForMatch();
  console.log("User flipped " + cards[cardId])

}

flipCard(0);

flipCard(2);
