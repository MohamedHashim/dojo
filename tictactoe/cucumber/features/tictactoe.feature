Feature: Tic Tac Toe

Scenario: Start a new game
	When the play function is invoked to start a new game
	Then an empty game board is returned

Scenario: bots can place a sign
	Given a new game was started
	When the place a sign function is invoked in the column 0 and row 0
	Then the function returns the board with a sign in the column 0 and row 0
	And the opposite sign played by the other bot in a column