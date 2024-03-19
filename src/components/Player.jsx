import { useState } from "react";
 

export default function Player({ onChangeName,intialName,symbol,isActive}){
    const [playerName,setPlayerName]=useState(intialName);
    const [isEiditing, setIsEiditing]=useState(false);
    
    function handlerEidting(){
        setIsEiditing((editing) => !editing)
        if(isEiditing){
            onChangeName(symbol,playerName)
        }
    }
    function handlerChange(e){
        setPlayerName(e.target.value)
    }
    return(
        <> 
        <li className={isActive ? "active" : undefined}>
            <span className="player">
            {isEiditing  ? <input type="text" value={playerName} onChange={handlerChange} required/>:<span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handlerEidting()}>{!isEiditing? "Edit":"Save"}</button>
        </li>
        
        </>
    )
}