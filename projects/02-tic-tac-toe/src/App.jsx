import { useState } from "react";
import { TURNS } from "./constants.js";
import { updateBoard } from "./logic/update.js";
import { resetGame } from "./logic/reset.js";
import { WinnerModal } from "./components/WinnerModal";
import { Square } from "./components/Square";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={() => resetGame(setBoard, setTurn, setWinner)}>
        Reset
      </button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={() =>
                updateBoard(
                  board,
                  setBoard,
                  turn,
                  setTurn,
                  winner,
                  setWinner,
                  index
                )
              }
            >
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal
        resetGame={() => resetGame(setBoard, setTurn, setWinner)}
        winner={winner}
      />
    </main>
  );
}

export default App;
