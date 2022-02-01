// TIC TAC TOE

// 1/first we need the game board,which can be made of 9 collective boxes, possibly divided into three vertical columns and three horizental rows.
// So we will create a main body for the board with the desired height and width and the inside the board, we are going to create the individual boxes, which can be put into different sections or divisions if needed to

// 2/Each box would be given a unique ID so it can be accessed easily through querySelector.

// 3/We have two players,therefore we need two deifferent choices ( X and O) to be assigned to player one and player two.

// 4/Each player gets to choose an empty slot per turn,which can be achieved through addEventListener method,and has to be an empty available box only...
// When player selects the box, it will turn into X or O depending on which player did the selection

// 5/Players are to be asked to make a valid choice when click the wrong slot (e.g. an already selected one)
// If any player clicks an invalid box, the game should not go on until they make a correct selection (If player one clicks a used box the choice should stay X an player one still making a choice )

// 6/The players choice is to be toggled between 'X' and 'O' after each valid choice, for the next player to play the game.

// 7/Game Logic : if there is no winner (No consecutive 3 boxes selected by any players) the players won't get any score, and the game will restart.
// If there is a winner (either of the playes: three consecutive X's or O's are selected by a player) then we have a winner which will be announced, and the winner gets a score.
