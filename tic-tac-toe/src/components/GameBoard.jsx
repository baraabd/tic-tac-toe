import { useState } from "react";
const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initalGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard].map(innerArray => [...innerArray]);
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        })
    }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playersSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playersSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
