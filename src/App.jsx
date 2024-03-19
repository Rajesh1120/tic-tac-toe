//imports

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "../winning-combinations";

//


function App() {
  const intialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];
//To Restart the Match 
function handleRestart(){
  setGameBoard(intialGameBoard)
  setSelected([])
  setHasWinner();
  setActivePlayer("X")
}
//Using useState
  const [activePlayer,setActivePlayer]=useState("X");
  const [selected,setSelected]=useState([]);
  const [hasWinner,setHasWinner]=useState();
  //intialize the 2d array to gameboard
  const [gameBoard,setGameBoard]=useState(intialGameBoard)
  // changing the player name 
  const [hasChangePlayerName,setHasChangePlayerName]=useState(
    {
      X:"Player 1",
      O:"Player 2"
    }
  )
//winning combinametions 
function handleWinCombinations(selected){
  for(const combinations of WINNING_COMBINATIONS){
    // comparing row,column in gameboard and wincombinations ....combinanations = one object in winning_combinaations
    const firstSymbol=selected[combinations[0].row][combinations[0].column]
    const secondSymbol=selected[combinations[1].row][combinations[1].column]
    const thirdSymbol=selected[combinations[2].row][combinations[2].column]
    if (firstSymbol && firstSymbol===secondSymbol && firstSymbol===thirdSymbol){
      //winner
      setHasWinner(hasChangePlayerName[firstSymbol]);
    }
  }
}
//if draw
  const hasDraw=selected.length===9;

  function handlerSelectBoard(){
    setActivePlayer((curactivePlayer) => curactivePlayer === "X" ? "O" : "X")
  }
  //change the name of the players 
  function onChangeName(symbol,name){
    setHasChangePlayerName((prevName)=>{
     return { ...prevName,
      [symbol]:name }
    })
  }
  // list of turns 
  function handleListofSelected(rowIndex,colIndex){
    setSelected((prevSelected)=>{
      const updatedSelected=[{square :{row: rowIndex, col: colIndex} , player:activePlayer}, ...prevSelected]
    return updatedSelected;
    });
  }
 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
                intialName="Player 1" 
                symbol="X"  
                isActive={activePlayer === "X"}
                onChangeName={onChangeName}/>
          <Player 
                intialName="Player 2" 
                symbol="O" 
                isActive={activePlayer === "O"}
                onChangeName={onChangeName}/>
        </ol>
        {  (hasWinner|| hasDraw) &&  < GameOver winner = { hasWinner}  onSelectRestart={handleRestart}/>}
        <GameBoard onSelectBoard={handlerSelectBoard} 
              onSelectedListofSelected={handleListofSelected} 
              activePlayerSymbol={activePlayer}
              handleWinCombinations={handleWinCombinations}
              gameBoard={gameBoard}
              setGameBoard={setGameBoard}
             />
      </div>
      <Log selected={selected} />
    </main>
  )
}

export default App
