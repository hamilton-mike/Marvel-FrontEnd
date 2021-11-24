import React from 'react'
import { useState } from 'react'

const SearchFrom = props => {
    const init = {
        title: ''
    };

    const [userInput, setUserInput] = useState(init);

    const handleChange = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
        console.log(userInput);
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.post(userInput)
        console.log(userInput);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Name</label>
            <input name="title" id="title" onChange={handleChange} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchFrom
