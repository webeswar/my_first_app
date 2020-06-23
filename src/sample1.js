import React,{useState} from 'react';

let Sample1=()=>{
    const [count, changeCount]=useState(0);
   let decrement =()=>{
        changeCount(count-1)
    } 
     return (
         <div style={{border:"1px solid blue", padding:"1%", textAlign:"center" }} >
           <h2> Hook Concept</h2>
            <h2> { count } </h2>
            <button onClick={decrement}>Decrement</button>
         </div>
     )
}

export default Sample1;