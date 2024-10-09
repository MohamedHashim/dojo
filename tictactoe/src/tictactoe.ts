import { log } from "console";

export const bot1 = "X";
export const bot2 = "O";
export const empty = "";
type BotSign = typeof bot1 | typeof bot2;
export type Cell = typeof empty | typeof bot1 | typeof bot2;
export type Board = Cell[][];

enum Status {
    InProgress = "IN_PROGRESS",
    FirstBotWon = "BOT1_WON",
    SecondBotWon = "BOT2_WON",
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

export function makeMove( board: Board): { board: Board; status: Status } {
    let status = Status.InProgress
    const firstBot = 1;
    const secondBot = 2;
    let updatedBoard = board
    while(status == Status.InProgress){
    let generatedCell = generateRandomCell()
    updatedBoard = placeSign(updatedBoard, generatedCell.row, generatedCell.column, firstBot)
    console.log("Player " + bot1 + ":\n")
    console.log(updatedBoard.map(row => row.join(',')).join('\n'));
    status = checkForVictory(updatedBoard, bot1)
    if(status== Status.InProgress){
        generatedCell = generateRandomCell()
        updatedBoard = placeSign( updatedBoard, generatedCell.row, generatedCell.column, secondBot);
        console.log("Player " + bot2 + ":\n")
        console.log(updatedBoard.map(row => row.join(',')).join('\n'));
        status = checkForVictory(updatedBoard, bot2)
    } 
     if (status== Status.FirstBotWon||status== Status.SecondBotWon|| status== Status.Draw) 
        break
    }
    return {board: updatedBoard, status: status };
}

export function checkForVictory(board: Board, sign: BotSign):  Status{
    let updatedStatus = Status.InProgress
    if(checkForHorizontalVictory(board, sign) || checkForVerticalVictory(board, sign) || checkForDiagonalVictory(board,sign)){
        if(sign == bot1)
            updatedStatus = Status.FirstBotWon
        else
        updatedStatus= Status.SecondBotWon
    }
    return updatedStatus
}

export function checkForHorizontalVictory(board: Board, sign: BotSign): boolean {
    for (let row = 0; row < board.length; row += 1) {
      if (board[row][0] === sign && board[row][1] === sign && board[row][2] === sign) {
        return true;
      }
    }
    return false;
  }

export function checkForVerticalVictory(board: Board, sign: BotSign): boolean {
    for (let col = 0; col < board[0].length; col += 1) {
      if (board[0][col] === sign && board[1][col] === sign && board[2][col] === sign) {
        return true;
      }
    }
    return false;
  }

export function checkForDiagonalVictory(board: Board, sign: BotSign): boolean {
    if (board[0][0] === sign && board[1][1] === sign && board[2][2] === sign) {
      return true;
    }
  
    if (board[0][2] === sign && board[1][1] === sign && board[2][0] === sign) {
      return true;
    }
  
    return false;
  }

function play(){
    const result = makeMove(newBoard())
    console.log(result.status)
  }

play()