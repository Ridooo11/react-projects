import { TURNS } from "../constants";
import { resetGameStorage } from "./storage/storage";

export function resetGame(setBoard, setTurn, setWinner) {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);

  resetGameStorage();
}
