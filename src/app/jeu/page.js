"use client"
import React, { useState, useEffect } from 'react'


const jeu = () => {
    const [number,setNumber] = useState(0);

    useEffect(() => {
        alert("Le number a changer")
    }, [])

    const increment = () =>{
        setNumber(number+1)
        
    }

    const decrement = () => {
        setNumber(number-1)
        
    }
    return (
        <>
            <div>{number}</div>
            <button onClick={() => increment()}>Incremente</button>
            <button onClick={() => decrement()}>Decrement</button>
        </>
        
  )
}

export default jeu