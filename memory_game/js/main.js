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

var flipCard = (cardId) => {
  cardsInPlay.push(cardId);
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("match founds");
  }
  console.log("user flipped " + cardId);
};

flipCard(cards[0]);
flipCard(cards[0]);
