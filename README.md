# _Pig Dice_

#### By _**Jake Elsberry & Joey Palchak**_

#### _A webpage application allowing two users to play a game of Pig Dice against each other._

## Technologies Used

* JavaScript
* HTML
* CSS

## Description

This is a webpage application that allows two users to play a simple game of _Pig Dice_ against each other. The application gameplay follows the commonly followed rules of _Pig Dice_:

Each turn, beginning with Player One, a player repeatedly rolls a die until either a 1 is rolled, or the player decides to "hold" their turn:
  * If the player rolls a 1, they score 0 points, and it automatically becomes the next player's turn.
  * If the player rolls any number other than a 1, that number is added to their current running total and the player can continue to roll the die.
  * If a player chooses to "hold" instead of continue rolling, their current running total is added to their total game score, and it becomes the next player's turn.

The first player to reach a total game score of 100 or more points wins, at which point a "New Game" button appears which allows the users to reset their scores and begin a fresh game.

## Setup/Installation Requirements

1. Copy the **[URL](https://github.com/jfpalchak/pig-dice.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
```bash
git clone https://github.com/jfpalchak/pig-dice.git
```
5. Navigate to the top level of the newly cloned directory.
6. Open index.html in your browser to view and navigate the webpage.

## Tests

##### **Describe:** Player()

```javascript
Test 1: "It will create an instance of an object with 3 key properties."
Code: 
  let player1 = new Player(name, score, turn)
Expected Output: 
  Player {name: undefined , totalScore: undefined, turn: undefined}

Test 2: "It will create an instance of an object with 3 key-value pair properties."
Code: 
  let player1 = new Player("Name", 0, true)
Expected Output: 
  Player {name: "Name" , totalScore: 0, turn: true}

Test 3: "It will create an instance of an object with 3 key-value pair properties, with parameters for player name and turn (represented by a boolean)."
Code: 
  let player1 = new Player("Name", true)
Expected Output: 
  Player {name: "Name" , totalScore: 0, turn: true}

Test 4: "It will create an instance of an object with 5 key-value pair properties, with parameters for player name and turn (represented by a boolean)."
Code: 
  let player1 = new Player("Name", true)
Expected Output: 
  Player {name: "Name" , totalScore: 0, currentRunTotal: 0, turn: true, win: false}

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

...

Test 3: "It should set the Player object's win flag (which is initially set to false) to true if their totalScore reaches a value of 100 or greater."
Code:
  let player1 = new Player("Name", true);
  player1.updateScore(5);
  player.win;
Expected Output: true

```

##### **Describe:** Player.prototype.currentPlayer()

```javascript
Test 1: "It should return the Player object's turn value."
Code: 
  let player1 = new Player("Name", true);
  player1.currentPlayer();
Expected Output: true

```

##### **Describe:** Player.prototype.currentPlayer()

```javascript
Test 1: 
Code: 

Expected Output: 

```

##### **Describe:** Player.prototype.isWinner()

##### **Describe:** Player.prototype.rollTheDice()

##### **Describe:** Player.prototype.holdTurn()

##### **Describe:** Player.prototype.switchTurn()

##### **Describe:** Player.prototype.resetPlayer()

##### **Describe:** resetPlayers()

##### **Describe:** switchCurrentPlayer()

##### **Describe:** rollDatDice()

##### **Describe:** holdDatTurn()

##### **Describe:** diceRoll()

```javascript
Test 1:"It will return a number passed in as an argument."
Code:  diceRoll(1);
Expected Output: 1;

Test 2: "It will return a random number."
Code:  diceRoll();
Expected Output: 0.007444121;

Test 3: "It will return a random number up to 6."
Code: diceRoll()
Expected Output: 3 ...

Test 4: "It will return a random number between 1 and 6."
Code: diceRoll()
Expected Output: 1 ...

```

## Known Bugs

* 

## License

MIT License

Copyright (c) 8/23/2023 Jake Elsberry & Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.