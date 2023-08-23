// Business Logic //
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


Player.prototype.currentPlayer = function () {
  return this.turn;
}

// create a random number between 1-6
function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(6);
  let random = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(random);
  return random;
 
}

// should this be a prototype that references the turn boolean, and executes the dice roll according the value?
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
  
} 

// holdTurn updates player total score with player's current run total
Player.prototype.holdTurn = function() {
  if (!this.turn) {
    return false;
  }
  this.totalScore += this.currentRunTotal;
  this.currentRunTotal = 0;
}

Player.prototype.playerNotTurn = function () {
  this.turn = false;
}

Player.prototype.playerIsTurn = function () {
  this.turn = true;
}

function handleRollButton(playerOne, playerTwo) {
  
  console.log(playerOne, playerTwo);

  if (playerOne.turn) {
    playerOne.diceRoll();
    console.log("It works?");
  } else {
    console.log("Something is wrong.");
  }

}

//
function handleEverything() {

  const playerOne = new Player("One", true);
  const playerTwo = new Player("Two", false);

  const rollButton = document.querySelector("button#rollp1");
  const holdButton = document.querySelector("button#holdp1");

  // hold button handler -- possible refactor to loop???
  holdButton.addEventListener("click", function() {
    if (playerOne.turn) {
      playerOne.holdTurn();
      playerOne.playerNotTurn();
      playerTwo.playerIsTurn();
    } else if (playerTwo.turn) {
      playerTwo.holdTurn();
      playerTwo.playerNotTurn();
      playerOne.playerIsTurn();
    }

    displayResults(playerOne, playerTwo);

  });

  // roll button handler
  rollButton.addEventListener("click", function() {

    if (playerOne.turn) {
      playerOne.rollTheDice();
    } else if (playerTwo.turn) {
      playerTwo.rollTheDice();
    }

    console.log(playerOne, playerTwo);

    displayResults(playerOne, playerTwo);

  });
}

// UI Logic // 
window.addEventListener("load", handleEverything);

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