import Player from "./components/Player";
import Log from "./components/log";
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combination";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

const App = () => {
  //const [activePlayer, setActivePrayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectedSquare = (rowIndex, colIndex) => {
    //setActivePrayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      console.log(gameTurns);

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

        <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
