
const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelectSquare, turns}) => {
    let gameBoard = initalGameBoard;

    console.log(onSelectSquare)
    console.log(turns)

    for ( const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square; 

        gameBoard[row][col] = player;
    }

    console.log(gameBoard);

    /* const [gameBoard, setGameBoard] = useState(initalGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard].map(innerArray => [...innerArray]);
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    } */
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playersSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={ () => onSelectSquare(rowIndex, colIndex)}>{playersSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
