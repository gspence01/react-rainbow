import React, { useState } from 'react'

export default function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        //preventing default behavior of submit (page resetting)
        e.preventDefault()

        //addColor will be available in props
        props.addColor(input)

        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                onChange={(e)=>setInput(e.target.value)} />
                <button type = 'submit'>Submit!</button>
            </form>
        </div>
    )
}