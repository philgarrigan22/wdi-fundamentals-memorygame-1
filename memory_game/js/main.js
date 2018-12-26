console.log("Up and running!");


var cardsInPlay = [];
var cards = [{
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png",
    id: 0
  },

  {
    rank: "Queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png",
    id: 1
  },

  {
    rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png",
    id: 2
  },

  {
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png",
    id: 3
  }
];





var checkForMatch = () => {

  console.log(cardsInPlay);

  if (cardsInPlay.length < 2) {
    console.log("null");
    return null;
  }

  // if cards have the same key but are not the same card, return true
  if (cardsInPlay.length == 2) {
    if (cardsInPlay[0].key == cardsInPlay[1].key && cardsInPlay[0].card != cardsInPlay[1].card) {
      clearCards();
      console.log("true");
      return true;
    } else {
      clearCards();
      console.log("false");
      return false;
    }
  }



  // // clears card array if its 2 or more
  // if (cardsInPlay.length > 1) {
  //   clearCards();
  //   return false;
  // }
  //

};

var flipCard = (e) => {
  var data_id = e.getAttribute("data-id");
  var data_card = e.getAttribute("data-card");
  var card = {
    id: cards[data_id].cardImage,
    key: data_id,
    card: data_card,
    rank: cards[data_id].rank,
    suit: cards[data_id].suit,
    htmlElement: e
  };

  cardsInPlay.push(card);

  // flips cards
  if (e.getAttribute("src") === "images/back.png") {
    e.setAttribute("src", cards[e.getAttribute("data-id")].cardImage);
  } else {
    e.setAttribute("src", "images/back.png");
  }

  if (checkForMatch()) {
    gameText(card, true);
  } else {
    gameText(card, false);
  }

  // if (!checkForMatch()) {
  //   gameText(card, false);
  // }

};

var clearCards = () => {
  // clears the cardsInPlay array

  cardsInPlay = [];
}

var flipAll = () => {
  // Flips all cards to img back

  var children = document.getElementById("game-board").childNodes;
  for (var i = 0; i < children.length; i++) {
    children[i].setAttribute("src", "images/back.png")
  }
  clearCards();
  console.log(cardsInPlay);
}

var gameText = (e, bool, arraySize = cardsInPlay.length) => {
  // outputs text about matches
  // if (arraySize == 2) {
    var gameTextElement = document.createElement("h2");
    var t;
    if (bool) {
      t = document.createTextNode("Match found: " + e.rank + " of " + e.suit);
    } else if (!bool) {
      t = document.createTextNode("Match not found");
    }
    gameTextElement.appendChild(t);
    document.getElementById("game-text").appendChild(gameTextElement);
  }
// }

var createBoard = () => {
  // Creates the game board by adding cards as children to reset button id

  //  makes cards 0-3
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.setAttribute("data-card", i);
    cardElement.addEventListener("click", flipCard.bind(this, cardElement));
    document.getElementById("game-board").appendChild(cardElement);
    // console.log(cardElement);
  }

  // makes cards 4-7
  for (var i = 4; i < cards.length + 4; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i - 4);
    cardElement.setAttribute("data-card", i);
    cardElement.addEventListener("click", flipCard.bind(this, cardElement));
    document.getElementById("game-board").appendChild(cardElement);
    // console.log(cardElement);
  }

  document.getElementById("reset-button").addEventListener("click", flipAll);
  // adds reset button with




};




createBoard();
