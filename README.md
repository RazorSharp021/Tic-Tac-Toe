# Thick tac toe
The game is played between two players where each player gets to select a box per turn. Any player who successfully selects three boxes in a row (on any direction) wins the game.
If neither of the players can do this, the game will be a draw.

### Approach to prolem

1.First of all, we need to create the game board, which is made of **9** collective boxes, all attached together to form three columns and three rows.
Therefore we need a main body for the board with the desired height and width and inside the board, we are going to create the individual boxes.
Each individual box would be given a unique **ID** so it can be accessed easily through querySelector.

2.We have two players,therefore we need two deifferent choices ( **'X'** and **'O'** ) to be assigned to player one and player two.
Each player gets to choose an empty slot per turn,which can be achieved through addEventListener method,and has to be an empty available box only...
When player selects the box, it will now be the next players turn, and the choice would turn into **'X'** or **'O'**.

3.We need to assign an array of choices for each player that contains the **ID** of selected boxes.
Each time a player selects a box, the id would get **pushed** into the array.
We also need to assign an array, containing the **ID** of the boxes with winning condition.

4.Players are to be asked to make a valid choice when click the wrong slot (*e.g.* an already selected one)
If any player clicks an invalid box, the game should not go on until they make a correct selection (*e.g.* player one clicks a used box the choice should stay **'X'** an player one still making a choice )

5.The players choice is to be toggled between **'X'** and **'O'** after each valid choice, for the next player to play the game.

6.**Game Logic:** if there is no winner (No consecutive 3 boxes selected by any players) the players won't get any score, and the game will restart.
If there is a winner (either of the playes get to choose three consecutive **'X'** or **'O'**) then we have a winner which will be announced, and the winner gets a score.
We need to program a loop to compare the possible winning condition array with each of the players choices array to achieve this.


### Cool tech used
images etc
fonts

### Lessons you learnt doing the project
importance of planning

### Future features
keep a scoreboard

