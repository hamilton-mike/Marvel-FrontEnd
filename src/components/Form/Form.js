import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Wrapper, Form } from './FormStyles'


const SearchForm = (props) => {
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
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <input name="title" id="title" onChange={handleChange}  placeholder="Name"/>
                <div style={{margin: '1em' }}>
                    <FaSearch style={{ cursor: 'pointer' }}/>
                </div>
            </Form>
        </Wrapper>
    )
}

export default SearchForm
