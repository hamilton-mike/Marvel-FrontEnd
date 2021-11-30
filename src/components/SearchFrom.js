import React from 'react'
import { useState } from 'react'

const Form = props => {
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
        <div>hi</div>
    )
}

export default Form
