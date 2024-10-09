import { describe } from "node:test";
import { newBoard } from "../../src/tictactoe";

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
});