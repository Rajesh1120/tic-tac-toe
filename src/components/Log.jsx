export default function Log({ selected }){
    
    return(
         <ol id="log"> 
            {selected.map((block)=>
                <li key={`${block.square.row}${block.square.col}`}>
                    {block.player} selected ({block.square.row}, {block.square.col})
                </li>
            )}
        </ol>
    )
}