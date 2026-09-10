import React, { useState, useEffect } from 'react';

function Counter() {
    const [initial, setInitial] = useState(0);

    const increaseInitial = () => {
        setInitial(initial + 1);
    };

    const decreaseInitial = () => {
        setInitial(initial - 1);
    };

    // Runs on only every rendering because of the empty dependency[]
    useEffect(()=>{
        console.log("useEffect1");
        
    });
    
    // Runs on only first rendering 
        useEffect(()=>{
        console.log("useEffect2");
        
    },[]);
    
    // Runs on first rendering + dependency change [initial]

        useEffect(()=>{
        console.log("useEffect3");
        
    }, [initial]);

    return (
        <>
        {console.log("Rendering")}
            <h2>Counter: {initial}</h2>
            <button onClick={increaseInitial}>Increase</button>
            <button onClick={decreaseInitial}>Decrease</button>
        </>
    );
}

export default Counter;