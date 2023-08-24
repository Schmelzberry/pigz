// BUSINESS LOGIC //

// BUSINESS LOGIC for Player
function Player(name, turn) {
  this.name = name;
  this.totalScore = 0;
  this.currentRunTotal = 0;
  this.turn = turn;
  this.win = false;
}

// returns Player object's name value
Player.prototype.getPlayerName = function() {
  return this.name;
}

// update scores by pushing number param into the this.totalScore
// if the player's score hits 100 or above, set win flag to true
Player.prototype.updateScore = function(number) {
  this.totalScore += number;
  if  (this.totalScore >= 10) { 
      this.win = true;
  }
}

// returns Player object's win value, initially set to false
Player.prototype.isWinner = function () {
  return this.win
}

// check boolean value of turn to see who the current player is
Player.prototype.currentPlayer = function () {
  return this.turn;
}

// references the turn boolean, and executes the dice roll according the value
Player.prototype.rollTheDice = function () {
  if (!this.turn) {
    return false
  }

  let diceRolled = diceRoll();

  if (diceRolled !== 1 ) {
    this.currentRunTotal += diceRolled;
  } else {
    this.currentRunTotal = 0;
  }
  return diceRolled;
} 

// holdTurn updates player total score with player's current run total
Player.prototype.holdTurn = function() {
  if (!this.turn) {
    return false;
  }
  this.updateScore(this.currentRunTotal);
  this.currentRunTotal = 0;
}

// switchTurn updates Player object's current turn value to true if false, or to false if true
Player.prototype.switchTurn = function () {
  switch (this.turn) {
    case (true):
      this.turn = false;
      break;
    case (false):
      this.turn = true;
      break;
  }
}

// resets Player object's score values to 0
Player.prototype.resetPlayer = function () {
  this.totalScore = 0;
  this.currentRunTotal = 0;
  this.win = false;
}

// BUSINESS LOGIC for game mechanics

// -------------
// REFACTOR: Construct Game object to hold Player objects, and create prototype methods
// to replace each function that runs our game mechanics
// -------------

// create and return a random number between 1-6
function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(6);
  let random = Math.floor(Math.random() * (max - min + 1) + min)
  return random;
}

// taking both player objects as parameters, reset each player's score values to 0
function resetPlayers(playerOne, playerTwo) {
  playerOne.resetPlayer();
  playerTwo.resetPlayer();
}

// taking both player objects as parameters, switch the turn value for each player 
function switchCurrentPlayer (playerOne, playerTwo) {
  playerOne.switchTurn();
  playerTwo.switchTurn();
}

// taking both player objects as parameters, checks to see whose turn it currently is, 
// then rolls the dice for that player
function rollDatDice (playerOne, playerTwo) {
  let diceRoll = 0;
  // REFACTOR redundant code
  if (playerOne.currentPlayer()) {  
    diceRoll = playerOne.rollTheDice();
    if (diceRoll === 1) {
      switchCurrentPlayer(playerOne, playerTwo);
    }
  } else if (playerTwo.currentPlayer()) {
    diceRoll = playerTwo.rollTheDice();
    if (diceRoll === 1) {
      switchCurrentPlayer(playerOne, playerTwo);
    }
  }

  return diceRoll;

}

// check the win flag for each player, 
// if one player is declared a winner, 
// return that player's name
// otherwise return null
function ifPlayerWins(playerOne, playerTwo) {
  if (playerOne.isWinner()) {
    let winner = playerOne.getPlayerName();
    displayWinner(winner);
  } else if (playerTwo.isWinner()) {
    let winner = playerTwo.getPlayerName();
    displayWinner(winner);
  }
}

// taking both player objects as parameters, checks to see whose turn it currently is,
// then updates their score before switching player turns
function holdDatTurn (playerOne, playerTwo) {
  if (playerOne.currentPlayer()) {
    playerOne.holdTurn();
    switchCurrentPlayer(playerOne, playerTwo);
  } else if (playerTwo.currentPlayer()) {
    playerTwo.holdTurn();
    switchCurrentPlayer(playerOne, playerTwo);
  }

  ifPlayerWins(playerOne, playerTwo);

}

// ************
// * UI LOGIC *
// ************

// -------------
// REFACTOR: 
// * create a single eventListener for all three buttons,
// incorporate branching dependent on which button is clicked
// * create form for users to input player names, apply user names
// to each Player name property for display
// -------------
function handleEverything() {

  const playerOne = new Player("Player One", true);
  const playerTwo = new Player("Player Two", false);

  const rollButton = document.querySelector("button#roll");
  const holdButton = document.querySelector("button#hold");
  const newButton = document.querySelector("button#new");

  // hold button handler
  holdButton.addEventListener("click", function() {
    
    holdDatTurn(playerOne, playerTwo);
    displayResults(playerOne, playerTwo);

  });

  // roll button handler
  rollButton.addEventListener("click", function () {
    
    const diceRoll = rollDatDice(playerOne, playerTwo);
    // displayDiceRoll(diceRoll); // create function to display dice roll values real time
    displayResults(playerOne, playerTwo);

  });

  // new button event handler
  newButton.addEventListener("click", function() {

    resetPlayers(playerOne, playerTwo);
    displayResults(playerOne, playerTwo);
    // hide button and win-banner
    newButton.setAttribute("class", "hidden");
    document.querySelector("h2#winner-flag").setAttribute("class", "hidden");

  })

}

// function for displaying results
function displayResults(playerOneObject, playerTwoObject) {

  const p1Current = document.getElementById("p1-current-run-total");
  const p2Current = document.getElementById("p2-current-run-total");

  const p1Total = document.getElementById("p1-total-score");
  const p2Total = document.getElementById("p2-total-score");

  p1Total.innerText = null;
  p1Current.innerText = null;
  p2Total.innerText = null;
  p2Current.innerText = null;

  p1Total.append(playerOneObject.totalScore); // **** CREATE PROTOTYPE METHODS
  p1Current.append(playerOneObject.currentRunTotal);

  p2Total.append(playerTwoObject.totalScore);
  p2Current.append(playerTwoObject.currentRunTotal);

}

// receiving player name, append name to winner banner,
// as well as reveal new game button and winner banner
function displayWinner(winner) {
  document.querySelector("span#winner-name").innerText = null;

  document.querySelector("button#new").removeAttribute("class");
  document.querySelector("h2#winner-flag").removeAttribute("class");
  document.querySelector("span#winner-name").append(winner);
}

// event listener for window, calls handleEverything function
window.addEventListener("load", handleEverything);