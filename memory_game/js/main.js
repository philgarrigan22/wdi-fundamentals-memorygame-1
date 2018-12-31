console.log("Up and running!");

var flipHandler;
var cardElement;
var cardsInPlay = [];
var matched = [];
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
var animation = [
  { transform: "rotateY(0deg)" },
  { transform: "rotateY(180deg)" }
];
var options = {
  duration: 500,
  iterations: 1,
  delay: 100
};






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
  var cardOne; // first card flipped in the cardsInPlay array
  var cardTwo; // second card flipped in the cardsInPlay array
  var data_id = e.getAttribute("data-id");
  var data_card = e.getAttribute("data-card");
  var id = e.getAttribute("id");
  var card = {
    // object that contains all relevant data
    img: cards[data_id].cardImage,
    key: data_id,
    card: data_card,
    rank: cards[data_id].rank,
    suit: cards[data_id].suit,
    id: id,
    htmlElement: e
  };



  if (matched.length >= 2) {
  // flips over prev cards that were not match
    var matchOne = document.getElementById(matched[0].id)
    var matchTwo = document.getElementById(matched[1].id)
    animation =[
      { transform: "rotateY(0deg)" },
      { transform: "rotateY(180deg)" }
    ];
    options = {
      duration: 250,
      iterations: 1,
    };
    if (matched[0].id == matched[1].id){
      animation =[
        { transform: "rotateY(0deg)" },
        { transform: "rotateY(360deg)" }
      ];
      options = {
        duration: 500,
        iterations: 1,
      };
    }

    matchOne.setAttribute("src", "images/back.png");
    matchOne.animate(animation, options);
    matchTwo.setAttribute("src", "images/back.png");
    matchTwo.animate(animation, options);
    matched = [];
  }

  cardsInPlay.push(card);


  // flips cards
  e.classList.toggle("is-flipped");

  console.log(cardsInPlay);

  if (cardsInPlay.length == 2) {
    cardOne = document.getElementById(cardsInPlay[0].id)
    cardTwo = document.getElementById(cardsInPlay[1].id)
  }

  if (e.getAttribute("src") === "images/back.png") {
    e.setAttribute("src", cards[card.key].cardImage);
  }

  if (checkForMatch() && cardsInPlay.length == 2) {
    // if it is a match, remove event listeners by replacing with a clone with no event listener

    animation = [
      { transform: "rotateY(0deg)" },
      { transform: "rotateY(360deg)" }
    ];
    options = {
      duration: 500,
      iterations: 1,
    };

    var matchOne = cardOne.cloneNode(true);
    var matchTwo = cardTwo.cloneNode(true);

    cardOne.parentNode.replaceChild(matchOne, cardOne);
    cardTwo.parentNode.replaceChild(matchTwo, cardTwo);

    matchTwo.animate(animation, options);

    gameText(card, true);

  } else if (!checkForMatch() && cardsInPlay.length == 2) {
    //  if its not a match, do nothing to cards and do text

    matched = cardsInPlay

    gameText(card, false);

  }

  if (checkForMatch() == false && cardsInPlay.length == 1) {
    // outputs matching if only 1 card in cardsInPlay array
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
  // Actually it resets the entire board by deleting everything and putting it back

  clearText();

  var parent = document.getElementById("game-board");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  createBoard();
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
    if (cardsInPlay[0].id == cardsInPlay[1].id){
      t = document.createTextNode(cardsInPlay[0].rank + " of " + cardsInPlay[0].suit + " cannot match itself");
    }

  }

  if (cardsInPlay.length == 1) {
    t = document.createTextNode("Matching...");
  }

  gameTextElement.appendChild(t);
  document.getElementById("game-text").appendChild(gameTextElement);
}

var createCard = (i, diff = 0) => {
  cardElement = document.createElement("img");
  cardElement.setAttribute("src", "images/back.png");
  cardElement.setAttribute("data-id", i - diff);
  cardElement.setAttribute("data-card", i);
  cardElement.setAttribute("id", "card-" + i);
  cardElement.setAttribute("class", "card");
  cardElement.animate(animation, options);
  cardElement.addEventListener("click", flipCard.bind(this, cardElement));
  document.getElementById("game-board").appendChild(cardElement);
}


var createBoard = () => {
  // Creates the game board by adding cards as children to reset button id

  //  makes cards 0-3
  for (var i = 0; i < cards.length; i++) {
    createCard(i);
  }

  // makes cards 4-7
  for (var i = 4; i < cards.length + 4; i++) {
    createCard(i, 4);
  }

  document.getElementById("reset-button").addEventListener("click", flipAll);
  // adds reset button with
};




createBoard();
