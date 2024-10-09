export type Board = Array<number>[][];

export function newBoard(): Board {
    return []
}

export function startNewGame(): { board: String } {
  return { board: "board" };
}