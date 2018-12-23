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
};

var flipCard = function(e) {
  console.log(e.getAttribute("data-id"));
  console.log(this);
  if (e.getAttribute("src") === "images/back.png") {
    e.setAttribute("src", cards[e.getAttribute("data-id")].cardImage);
  } else {
    e.setAttribute("src", "images/back.png");
  }
};



var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener('click', () => flipCard(cardElement));
    document.getElementById("game-board").appendChild(cardElement);
  }
};









createBoard();
