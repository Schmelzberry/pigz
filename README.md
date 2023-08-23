Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.

If the player rolls any other number, it is added to their turn total and the player's turn continues.

If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

-player object will have keys for score and name, turn(boolean)

-do we need a game object?

-it will be a large sum function, using a for or forEach loop to view each number, and then will add 2-6 to the players total or switch to other player's turn after resetting player's total if a 1 is rolled.

-It will need to create a random number between 1-6, if it's between 2 and 6 it will be added to a running total. If it's a 1, the running total is set to 0 and the turn ends OR the player plays it safe.

Describe: Player()
Test 1: It will create an instance of an object with 3 key properties.
Code: let player1 = new Player(name, score, turn)
Expected Output: player1 {name:"" , score:"", turn:""}