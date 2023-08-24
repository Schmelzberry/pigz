// BUSINESS LOGIC //

// BUSINESS LOGIC for Player
function Player(name, turn) {
  this.name = name;
  this.totalScore = 0;
  this.currentRunTotal = 0;
  this.turn = turn;
}

// update scores by pushing number param into the this.totalScore
Player.prototype.updateScore = function(number) {
  this.totalScore += number;
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
    his.currentRunTotal += diceRolled;
  } else {
    this.currentRunTotal = 0;
  }
  
} 

// holdTurn updates player total score with player's current run total
Player.prototype.holdTurn = function() {
  if (!this.turn) {
    return false;
  }
  this.totalScore += this.currentRunTotal;
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
}

// BUSINESS LOGIC for game mechanics

// -------------
// REFACTOR: Construct Game object to hold Player objects, and create prototype methods
// to replace each function that runs our game mechanics
// -------------

// create a random number between 1-6
function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(6);
  let random = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(random);
  return random;
}

// taking both player objects as parameters, reset each player score values to 0
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
  if (playerOne.currentPlayer()) {  
      playerOne.rollTheDice();
    } else if (playerTwo.currentPlayer()) {
      playerTwo.rollTheDice();
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
}

// ************
// * UI LOGIC *
// ************
function handleEverything() {

  const playerOne = new Player("One", true);
  const playerTwo = new Player("Two", false);

  const rollButton = document.querySelector("button#roll");
  const holdButton = document.querySelector("button#hold");
  const newButton = document.querySelector("button#new");

  // hold button handler -- possible refactor to loop???
  holdButton.addEventListener("click", function() {
    
    holdDatTurn(playerOne, playerTwo);
    displayResults(playerOne, playerTwo);

  });

  // roll button handler
  rollButton.addEventListener("click", function () {
    
    rollDatDice(playerOne, playerTwo);
    displayResults(playerOne, playerTwo);

  });

  // new button event handler
  newButton.addEventListener("click", function() {

    resetPlayers(playerOne, playerTwo);
    newButton.setAttribute("class", "hidden");

  })

}

// event listener for window, calls handleEverything function
window.addEventListener("load", handleEverything);

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

  p1Total.append(playerOneObject.totalScore);
  p1Current.append(playerOneObject.currentRunTotal);

  p2Total.append(playerTwoObject.totalScore);
  p2Current.append(playerTwoObject.currentRunTotal);

}