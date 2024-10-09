export const bot1 = "X";
export const bot2 = "O";
export const empty = "";
type BotSign = typeof bot1 | typeof bot2;
export type Cell = typeof empty | typeof bot1 | typeof bot2;
export type Board = Cell[][];

export function newBoard(): Board {
    const rows = 3;
    const cols = 3;
    return Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(empty));}

export function startNewGame(): { board: Board } {
    return { board: newBoard() };
}

export function isValidCell(row: number, column: number): boolean{
    return false
}

export function makeMove( board: Board, row: number, column: number): { board: Board; status: String } {
    return {board: newBoard(), status: ""}
    }