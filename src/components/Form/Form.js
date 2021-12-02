import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Wrapper, Form, SearchGrid, Cards, Card, FormDiv } from './FormStyles'
import axios from 'axios'



const SearchForm = () => {
    const init = {
        name: 'thanos'
    };

    const [userInput, setUserInput] = useState(init);
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const ext = 'portrait_incredible.jpg';
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;

    const handleChange = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    const marvelCall = async input => {
        try {
            const search = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${userInput.name}&ts=1&apikey=${privateKey}&hash=${hash}`);
            const results = search.data.data.results
            setRes(results)
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        marvelCall(userInput)
    }

    useEffect(() => {
        marvelCall()
    }, [])

    return (
        <SearchGrid>
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <input name="name" id="name" onChange={handleChange}  placeholder="Name"/>
                    <FormDiv style={{margin: '1em' }}>
                        <FaSearch style={{ cursor: 'pointer' }} onClick={handleSubmit} />
                    </FormDiv>
                </Form>
            </Wrapper>
            <Cards>
                {res.map(x => (
                    <Card key={x.id}>
                        <p>{x.name}</p>
                        <img src={`${x.thumbnail.path}/${ext}`} alt={x.name} />
                    </Card>
                ))}
            </Cards>
        </SearchGrid>
    )
}

export default SearchForm
