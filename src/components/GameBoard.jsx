
export default function GameBoard({ gameBoard,setGameBoard,onSelectBoard ,onSelectedListofSelected ,activePlayerSymbol,handleWinCombinations}){
    function handleSquareBoard(rowIndex,colIndex){
        onSelectedListofSelected(rowIndex,colIndex);
        setGameBoard((prevGameBoard)=>{
        const updatedBoard=[...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
        handleWinCombinations(updatedBoard);
        return updatedBoard;
    })
    onSelectBoard();
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>handleSquareBoard(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}