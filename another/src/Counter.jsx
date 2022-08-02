import React from 'react'


const Counter=()=>{
    let count=0;
    const handleIncrement=() =>{
        count++;
    };
    return(
        <div>
            <p>The counter is: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button>Decrement</button>
        </div>
    )
}

export default Counter;