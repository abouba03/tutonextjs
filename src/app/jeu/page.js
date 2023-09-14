"use client"
import React, { useState } from 'react'


const jeu = () => {
    const [number,setNumber] = useState(0)
    
    return (
        <div>{number}</div>
  )
}

export default jeu