import confetti from "canvas-confetti";
import { checkEndGame, checkWinnerFrom } from "./check";
import { TURNS } from "../constants";
import { saveGameToStorage } from "./storage/storage";

export function updateBoard(
  board,
  setBoard,
  turn,
  setTurn,
  winner,
  setWinner,
  index
) {
  if (board[index] || winner) return;

  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);

  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn);

  saveGameToStorage({
    board: newBoard,
    turn: newTurn,
  });

  const newWinner = checkWinnerFrom(newBoard);

  if (newWinner) {
    confetti();
    setWinner(newWinner);
  } else if (checkEndGame(newBoard)) {
    setWinner(false);
  }
}
