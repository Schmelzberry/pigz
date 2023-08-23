Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.

If the player rolls any other number, it is added to their turn total and the player's turn continues.

If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

-player object will have keys for score and name, turn(boolean)

-do we need a game object?

-it will be a large sum function, using a for or forEach loop to view each number, and then will add 2-6 to the players total or switch to other player's turn after resetting player's total if a 1 is rolled.

-It will need to create a random number between 1-6, if it's between 2 and 6 it will be added to a running total. If it's a 1, the running total is set to 0 and the turn ends OR the player plays it safe.


Player:
Total Score
Current Total

Hit me (current total)
Hold? (current total + total score)

if (hit me)
  if (player.turn === true)
    if (diceRoll !== 1)
      diceRoll + current total
    else
      curren total = 0


if its your turn, roll the dice

is it 1? 
  end current turn
  set player.turn = false
is it greater than 1? 
  add to currentRunTotal

want to hold?
  add currentRunTotal to totalScore
  end current turn
  set player.turn = false


## Tests

##### **Describe:** Player()

```javascript
Test 1: "It will create an instance of an object with 3 key properties."
Code: let player1 = new Player(name, score, turn)
Expected Output: Player {name: undefined , totalScore: undefined, turn: undefined}

Test 2: "It will create an instance of an object with 3 key-value pair properties."
Code: let player1 = new Player("Name", 0, true)
Expected Output: Player {name: "Name" , totalScore: 0, turn: true}

Test 3: "It will create an instance of an object with 3 key-value pair properties, with parameters for player name and turn."
Code: let player1 = new Player("Name", true)
Expected Output: Player {name: "Name" , totalScore: 0, turn: true}
```

##### **Describe:** Player.prototype.updateScore()

```javascript
Test 1: "It returns the current Player score value."
Code:
  let player1 = new Player("Name", true);
  player1.updateScore();
Expected Output:  0

Test 2: "It adds to the current player score value."
Code:
  let player1 = new Player("Name", true);
  player1.updateScore(5);
Expected Output:  5

Test 3: "It subtracts from the current player score value."
Code:
  let player1 = new Player("Name", true);
  player1.updateScore(5);
Expected Output:  -5

```
##### **Describe:** diceRoll()


```javascript
Test 1:"it will create a number passed in as an argument"
Code:  diceRoll(1);
Expected Output: 1;

Test 2: "it will create a random number"
Code:  diceRoll();
Expected Output: 0.007444121;

Test 3: "it will create a random number up to 6"
Code: diceRoll()
Expected Output: 3 ...

Test 4: "It will create a random number between 1 and 6."
Code: diceRoll()
Expected Output: 1 ...

```

##### **Describe:** currentPlayer()


```javascript
Test 1: "it should return this.turn value from player object"
Code: let player1 = new Player("Name", true);
currentTurn(player1);
Expected Output: true

Test 2: "determine if its the player's turn"
Code: let player1 = new Player("Name", true);
currentTurn(player1);
Expected Output: true 

