# Thick tac toe

The game is played between two players where each player gets to select a box per turn. Any player who successfully selects three boxes in a row (on any direction) wins the game.
If neither of the players can do this, the game will be a draw.

### Approach to problem

1.First of all, we need to create the game board, 3 rows and 3 columns
2.create a main container and put the boxes insideinside the board
3.give each box a unique **ID**
4.We have two players, so we create ( **'X'** and **'O'** ) to toggle between the two
5.Each player gets to choose an empty slot per turn it has to be an empty available box only...

6.**Game Logic:** if there is no winner (No consecutive 3 boxes selected by any players) result is draw and game restarts.
If there is a winner, will be announced, and the winner gets a score.

### Cool tech used

images etc
fonts

### Lessons you learnt doing the project

importance of planning

### Future features

keep a scoreboard
