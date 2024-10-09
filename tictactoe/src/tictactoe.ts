export const bot1 = "X";
export const bot2 = "O";
export const empty = "";
type BotSign = typeof bot1 | typeof bot2;
export type Cell = typeof empty | typeof bot1 | typeof bot2;
export type Board = Cell[][];

enum Status {
    InProgress = "IN_PROGRESS",
    PlayerWon = "BOT1_WON",
    BotWon = "BOT2_WON",
    Draw = "DRAW",
  }

  
export function newBoard(): Board {
    const rows = 3
    const cols = 3
    return Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(empty))}

export function startNewGame(): { board: Board } {
  return { board: newBoard() }
}

export function isValidCell(row: number, column: number): boolean{
    return row >= 0 && row < 3 && column >= 0 && column < 3
}

export function isCellOccupied(board: Board, row: number, column: number): boolean{
    return board[row][column] != empty
}

export function generateRandomCell(): { row: number, column: number } {
    const maxIndex = 2
  
    const row = Math.floor(Math.random() * (maxIndex + 1))
    const column = Math.floor(Math.random() * (maxIndex + 1))
  
    return { row, column };
  }

export function placeSign(board: Board, row: number, column: number, bot: number): Board{
    const cell = bot === 1 ? bot1 : bot2;
    const updatedBoard = board;
    if(isValidCell(row, column) && !isCellOccupied(updatedBoard, row, column)){
        updatedBoard[row][column] = cell;
      }
    return updatedBoard;
}

export function makeMove( board: Board): { board: Board; status: String } {
    let status = Status.InProgress
    const bot1 = 1;
    const bot2 = 2;
    let firstBotCell= generateRandomCell()
    const updatedBoardAfterFirstBotMove = placeSign(board, firstBotCell.row, firstBotCell.column, bot1)
    // TODO check for victory
    let secondBotCell= generateRandomCell()
    const updatedBoardAfterSecondBotMove = placeSign( updatedBoardAfterFirstBotMove, secondBotCell.row, secondBotCell.column, bot2 );
    return {board: updatedBoardAfterSecondBotMove, status: status };
}