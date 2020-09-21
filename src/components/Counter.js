import React, { useState } from "react";


export default function Counter(){

    const [number,setNumber] = useState(0);

    return (
        <div>
            <button onClick={()=>{setNumber(number+1)}}>Plus one</button>
            <div>{number}</div>
        </div>
    )
}