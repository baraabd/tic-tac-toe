const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} won!</p>
      <p>
        <button>Restart!</button>
      </p>
    </div>
  );
};
export default GameOver;
