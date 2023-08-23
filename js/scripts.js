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
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// should this be a prototype that references the turn boolean, and executes the dice roll according the value?

Player.prototype.DiceRoll = function () {
  if (!this.turn) {
    return false
  }

  let diceRolled = diceRoll();

  if (diceRolled !== 1 ) {
    this.currentRunTotal += diceRolled;
  } else {
    this.currentRunTotal = 0;
    this.turn = false;
  }

}


// UI Logic // 
function handleEverything() {
  const rollP1Button = document.querySelector("button#rollp1");
  const holdP1Button = document.querySelector("button#holdp1");

  const rollP2Button = document.querySelector("button#rollp2");
  const holdP2Button = document.querySelector("button#holdp2");

  rollP1Button.addEventListener("click", handleP1DiceRoll);
  
//   holdP1Button.addEventListener("click", handleP1HoldTurn);

//   rollP2Button.addEventListener("click", handleP2DiceRoll);
//   holdP2Button.addEventListener("click", handleP22HoldTurn);
}

window.addEventListener("load", handleEverything);