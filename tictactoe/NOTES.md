# Introduction

Tic-Tac_Toe is a very exicting game.

# Task
The game consists of a grid (3 columns and 3rows) and two bots that take turns to mark their signs in the free cells. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of three of one's own sign and show the updated board with every move.

Your task is to implement the game between the two bots, showing the updated board, and return the status of the game, "BOT 1 WON", "BOT 2 WON", "DRAW", "IN_PROGRESS".

# Rules
If a bot successfully has 3 signs horizontally, vertically or diagonally then you should return "BOT n WON” where n is the current bot either 1 or 2.

If the both bots couldn't achieve the victory through horizontally, vertically or diagonally and there are no available cells anymore then you should return "DRAW”

If the both bots couldn't achieve the victory through horizontally, vertically or diagonally and there are available cells then you should return "IN_PROGRESS"

If a bot attempts to place a sign in a cell that is occupied then you should return ”Cell is occupied!” and the next move must be taken by the same bot.

If a bot attempts to place a sign in a cell that is out of the board bounderies then you should return ”Cell is out of bounderies!” and the next move must be taken by the same bot.

Any other move then you should return Bot n :” where n is the current bot either 1 or 2 and the updated board.
 
Bot 1 starts the game every time and alternates with bot 2.

# Backlog

✅ As a bot, I want a board that contains 3 columns and 3 rows, so strat the game
    -- ✅ Implement the component test for starting a game
    -- ✅ Implement the unit test for starting a game
    -- ✅ Make the unit tests get success
    -- ✅ Make the component test get success
    
🍅 Creat a component: bot place a sign in X column and X row
     -- 🍅 Implement the component test for placing a sign
     -- 🍅 Create unit for checking if it's a valid cell
         -- 🍅 column 4 && row 0 --> false
         -- 🍅 column 0 && row 0 --> true
     -- 🍅 Create unit for place a sign 
         -- 🍅 available cell --> board with the updated sign
         -- 🍅 occupied cell --> show it's occupied message and keep the bot turn
     -- 🍅 Make the unit tests get success
     -- 🍅 Make the component test get success

🍅 Horizontal victory senario, which is any bot has 3 connected own signs Horizontally  

🍅 Vertical victory senario, which is any bot has 3 connected own signs Vertically  

🍅 Diagonal victory senario, which is any bot has 3 connected own signs Diagonally  

🍅 Draw senario, when there is no bots won the game

🍅 Edge senarios, when bot play out of the bounderies or on the occupied cell

🍅 Horizontal victory senario, which is any bot has 3 connected own signs Horizontally  

🍅 Vertical victory senario, which is any bot has 3 connected own signs Vertically  

🍅 Diagonal victory senario, which is any bot has 3 connected own signs Diagonally  

🍅 Draw senario, when there is no bots won the game

🍅 Edge senarios, when bot play out of the bounderies or on the occupied cell



## Notes 
    ✅ Update the cucumber features with first feature