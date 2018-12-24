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

var checkForMatch = () => {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("match founds");
  }

  if (cardsInPlay.length >=  2) {
    cardsInPlay = [];
  }
};

var flipCard = (e) => {
  cardsInPlay.push(e);



  checkForMatch();
};

var createBoard = () => {
  for (var i = 0; i < cards.length; i++){
    cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard.bind(this, cardElement));
    document.getElementById("game-board").appendChild(cardElement);
    console.log(cardElement);
  }
};




createBoard();
//
// flipCard(cards[0]);
// flipCard(cards[0]);
