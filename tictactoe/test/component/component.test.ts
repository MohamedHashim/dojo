import {startNewGame } from "../../src/tictactoe";

describe("It should be possible to start a new game", () => {
  it("And when this is done, an empty game board returned", () => {
    const newGame = startNewGame();
    
    expect(newGame.board).toBeDefined();
  });
});