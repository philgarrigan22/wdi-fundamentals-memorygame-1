console.log("Up and running!");

var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

console.log("User flipped " + cardOne);

cards = [cardOne, cardTwo, cardThree, cardFour];
cardsInPlay = [];

cardsInPlay.push(cardOne);
console.log(cardsInPlay);
cardsInPlay.push(cardTwo);
console.log(cardsInPlay);

if (cardsInPlay.length == 2){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else {
    alert("Try again!");
  }
}
