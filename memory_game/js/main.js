console.log("Up and running!");


var cardElement;
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

  if (cardsInPlay.length < 2) {
    // console.log("false");
    return false;
  }

  // if cards have the same key but are not the same card, return true
  if (cardsInPlay.length == 2) {
    if (cardsInPlay[0].key == cardsInPlay[1].key && cardsInPlay[0].card != cardsInPlay[1].card) {
      // console.log("true");
      return true;
    } else {
      // console.log("false");
      return false;
    }
  }

};

var flipCard = (e) => {


  var data_id = e.getAttribute("data-id");
  var data_card = e.getAttribute("data-card");
  var id = e.getAttribute("id");
  var card = {
    img: cards[data_id].cardImage,
    key: data_id,
    card: data_card,
    rank: cards[data_id].rank,
    suit: cards[data_id].suit,
    id: id,
    htmlElement: e
  };

  console.log("Card flipped: " + card.rank + " of " + card.suit);

  // console.log(card);

  cardsInPlay.push(card);


  // flips cards
  e.classList.toggle("is-flipped");

  console.log(cardsInPlay);


  if (e.getAttribute("src") === "images/back.png") {
    e.setAttribute("src", cards[e.getAttribute("data-id")].cardImage);
  } else {
    e.setAttribute("src", "images/back.png");
  }

  if (checkForMatch() && cardsInPlay.length == 2) {
    // if it is a match, remove event listeners

    cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");

    document.getElementById(cardsInPlay[0].id).removeEventListener("click", flipCard);
    document.getElementById(cardsInPlay[1].id).removeEventListener("click", flipCard);

    gameText(card, true);

    console.log("Match");

  } else if (!checkForMatch() && cardsInPlay.length == 2) {
    //  if its not a match, flip both cards
    //
    // document.getElementById(cardsInPlay[0].id).toggle("is-flipped");
    // document.getElementById(cardsInPlay[1].id).toggle("is-flipped");

    document.getElementById(cardsInPlay[0].id).setAttribute("src", "images/back.png");
    document.getElementById(cardsInPlay[1].id).setAttribute("src", "images/back.png");

    gameText(card, false);

  }

  if (checkForMatch() == false && cardsInPlay.length == 1) {
    gameText(card, false);
  }


  if (cardsInPlay.length >= 2) {
    clearCards();
  }

};

var clearCards = () => {
  // clears the cardsInPlay array

  cardsInPlay = [];


}

var clearText = () => {
  // clears text about game
  var parent = document.getElementById("game-text");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

var flipAll = () => {
  // Flips all cards to img back and removes is-flipped class

  var children = document.getElementById("game-board").childNodes;
  for (var i = 0; i < children.length; i++) {
    children[i].setAttribute("src", "images/back.png");
    children[i].classList.remove("is-flipped");
  }

  clearCards();
  clearText();
  // console.log(cardsInPlay);
}

var gameText = (e, bool) => {
  // outputs text about matches

  clearText();
  var gameTextElement = document.createElement("h2");
  var t;

  if (bool) {
    t = document.createTextNode("Match found: " + e.rank + " of " + e.suit);
  } else if (!bool && cardsInPlay.length == 2) {
    t = document.createTextNode(cardsInPlay[0].rank + " of " + cardsInPlay[0].suit + " does not match " + cardsInPlay[1].rank + " of " + cardsInPlay[1].suit);
  }

  if (cardsInPlay.length == 1) {
    t = document.createTextNode("Matching...");
  }



  gameTextElement.appendChild(t);
  document.getElementById("game-text").appendChild(gameTextElement);
}


var createBoard = () => {
  // Creates the game board by adding cards as children to reset button id

  //  makes cards 0-3

  for (var i = 0; i < cards.length; i++) {
    cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.setAttribute("data-card", i);
    cardElement.setAttribute("id", "card-" + i);
    cardElement.setAttribute("class", "card");
    cardElement.addEventListener("click", flipCard.bind(this, cardElement));
    document.getElementById("game-board").appendChild(cardElement);
    // console.log(cardElement);
  }

  // makes cards 4-7
  for (var i = 4; i < cards.length + 4; i++) {
    cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i - 4);
    cardElement.setAttribute("data-card", i);
    cardElement.setAttribute("id", "card-" + i);
    cardElement.setAttribute("class", "card");
    cardElement.addEventListener("click", flipCard.bind(this, cardElement));
    document.getElementById("game-board").appendChild(cardElement);
    // console.log(cardElement);
  }

  document.getElementById("reset-button").addEventListener("click", flipAll);
  // adds reset button with
};




createBoard();
