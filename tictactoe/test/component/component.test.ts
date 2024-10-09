import {Board, makeMove, startNewGame } from "../../src/tictactoe";

describe("When start a new game", () => {
  it("It should return an empty 3*3 board", () => {
    const newGame = startNewGame();
    
    // Check if game return board of array type
    expect(newGame.board).toBeDefined();
    expect(Array.isArray(newGame.board)).toBe(true);
    
    // Check if it's an array of arrays
    expect(newGame.board.every(Array.isArray)).toBe(true);
    // Check if the board has 3 rows
    expect(newGame.board.length).toBe(3);
    
    // Check if every cell is of type Cell
    expect(newGame.board.every(row => 
      row.every(cell => ['X', 'O', ''].includes(cell))
    )).toBe(true);
    
    // Type assertion to check if the type is correct
    const boardType: Board = newGame.board;
    expect(boardType).toBe(newGame.board);
  });
});

describe("Bots can place a sign feature", () => {
  it("Making a move entails palcing the first bot sign and executing a move for the other bot.", () => {
    const newGame = startNewGame();
    const row = 0;
    const column = 0;
    const updatedGame = makeMove(newGame.board, row, column);
    expect(updatedGame).toBeDefined();
    expect(updatedGame.board.some((row) => row.includes("X"))).toBe(true);
    expect(updatedGame.board.some((row) => row.includes(""))).toBe(true);
    expect(updatedGame.status).toBe("IN_PROGRESS");
  });
});