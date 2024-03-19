export default function GameOver({ winner , onSelectRestart }){ 
    
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} Won !</p>}
            {!winner && <p>It&apos;s Draw</p>}
            <p>
                <button onClick={()=>onSelectRestart()}>Rematch</button>
            </p>
        </div>
    )
}