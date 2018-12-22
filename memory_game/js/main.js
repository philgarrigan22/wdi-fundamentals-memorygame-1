console.log("Up and running!");

var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

cardsInPlay = [];


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
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit)

}

flipCard(0);

flipCard(2);
