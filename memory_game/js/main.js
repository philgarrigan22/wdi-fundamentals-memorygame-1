console.log("Up and running!");

var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
    id: 0
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
    id: 1
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
    id: 2
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
    id: 3
  }
];

cardsInPlay = [];




var checkForMatch = () => {

  console.log(cardsInPlay);

  if (cardsInPlay.length == 2) {
    if (cardsInPlay[0].key != cardsInPlay[1].key) {
      if (cardsInPlay[0].id == cardsInPlay[1].id) {
        alert("Match");
        return true;
      } else {
        return false;
      }
    }
  }

  if (cardsInPlay.length >= 2) {
    clearCards();
    return false;
  }


};

var flipCard = (e) => {
  var id = e.getAttribute("data-id");
  var card = {
    id: cards[id].cardImage,
    key: id
  };

  cardsInPlay.push(card);
  checkForMatch();

  // if (!checkForMatch()) {
  //       e.setAttribute("src", "images/back.png");
  // }

  if (e.getAttribute("src") === "images/back.png") {
    e.setAttribute("src", cards[e.getAttribute("data-id")].cardImage);
  } else {
    e.setAttribute("src", "images/back.png");
  }

};

var clearCards = () => {
  cardsInPlay = [];
}

var flipAll = () => {
  var children = document.getElementById("game-board").childNodes;
  for (var i = 0; i < children.length; i++) {
    children[i].setAttribute("src", "images/back.png")
  }
  clearCards();
  console.log(cardsInPlay);
}

var createBoard = () => {

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard.bind(this, cardElement));
    document.getElementById("game-board").appendChild(cardElement);
    console.log(cardElement);
  }

  for (var i = 4; i < cards.length + 4; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i - 4);
    cardElement.addEventListener("click", flipCard.bind(this, cardElement));
    document.getElementById("game-board").appendChild(cardElement);
    console.log(cardElement);
  }

  document.getElementById("reset-button").addEventListener("click", flipAll);
};




createBoard();
//
// flipCard(cards[0]);
// flipCard(cards[0]);
