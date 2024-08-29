import Player from './components/Player';

const App = () => {
  
  return ( <main>
    <div id="game-container">
      <ol id="players">
       <Player initialName="Player 1" symbol="X" />
       <Player initialName="Player 2" symbol="O" />
      </ol>

      GameBoard
    </div>

    Log
  </main>
   )
}

export default App
