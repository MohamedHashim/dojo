import { describe } from "node:test";
import { isCellOccupied, isValidCell, newBoard, placeSign } from "../../src/tictactoe";
import { gameBoardInProgress } from "../doubles/double";

describe("Tic Tac Toe game", () => {
  describe("When we set up the game, the game..", () => {
    it("should have 3 columns and 3 rows, filled with empty strings", () => {
      const board = newBoard();
      expect(board.length).toEqual(3);
      expect(board[0].length).toEqual(3);
      board.forEach((row) => {
        row.forEach((cell) => {
          expect(cell).toEqual("");
        });
      });
    });
  });
  
  // unit tests to check the cell validation
  describe("Placing a sign in a cell feature", () => {
    describe("You have to place a sign in an existing cell", () => {
      it("should throw an error if the cell does not exist", () => {
        const row = 2
        const column = 7
        expect(isValidCell(row, column)).toBe(false);
      });
      it("should return true if the cell exists", () => {
        const row = 2
        const column = 0
        expect(isValidCell(row, column)).toBe(true);
      });
    });

  // unit tests to check if the cell is availbe or occupied
    describe("when a bot place a sign in a cell then We check if it is", () => {
      it("empty", () => {
        const board = newBoard();
        const row = 1
        const column = 0
        expect(isCellOccupied(board, row, column)).toBe(false);
      });
      it("occupied", () => {
        const board = gameBoardInProgress;
        const row = 2
        const column = 2
        expect(isCellOccupied(board, row, column)).toBe(true);
      });
    });

    // unit tests for placing a sign function
    describe("Placing a sign", () => {
      it("in column 0 and row 0 should return the updated board", () => {
        const board = newBoard()
        const row = 0
        const column = 0
        const bot1 = 1
        const updatedBoard = placeSign(board, row, column, bot1);
        expect(updatedBoard).toBeDefined();
        expect(updatedBoard[0][0]).toEqual("X");
      });
      it("in the last column should return the updated board", () => {
        const board = newBoard();
        const row = 1
        const column = 1
        const bot2 = 2
        const updatedBoard = placeSign(board, row, column, bot2);
        expect(updatedBoard).toBeDefined();
        expect(updatedBoard[1][1]).toEqual("O");
      });
    });
  });
});