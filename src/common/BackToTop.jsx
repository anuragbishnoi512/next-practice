"use client"
import React, { useState } from 'react'

const BackToTop = () => {
    const [value, setValue] = useState(0)
    const backToTopHandle = () => {
        window.scrollTo({})
    }
    return (
        <div className = 'border-black border-2 text-black p-4'>
            <button onClick={backToTopHandle} >Back to Top</button>
        </div >
    )
}

export default BackToTop