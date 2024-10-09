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