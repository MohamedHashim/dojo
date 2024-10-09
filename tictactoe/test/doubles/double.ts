import { Board } from "../../src/tictactoe";

// Empty Tic-Tac-Toe Board
export const emptyTicTacToeBoard: Board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]
// Board with some moves, Player 1's turn next
export const gameBoardInProgress: Board = [
  ["X", "O", "X"],
  ["O", "X", ""],
  ["", "", "O"],
];