import Player from "./components/Player";
import Log from "./components/log";
import { useState } from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [activePlayer, setActivePrayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectedSquare = (rowIndex, colIndex) => {
    setActivePrayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns; 
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard
          onSelectSquare={handleSelectedSquare}
          turns={gameTurns}
        />
      </div>

      <Log turns={gameTurns}/>
    </main>
  );
};

export default App;
