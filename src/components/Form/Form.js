import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Form, SearchGrid, Cards, Card, FormDiv } from './FormStyles'
import axios from 'axios'

const SearchForm = () => {
    const init = {
        name: 'thanos'
    };

    const [userInput, setUserInput] = useState(init);
    const [res, setRes] = useState([]);
    const [teams, setTeams] = useState([])
    const [id, setId] = useState([])
    const ext = 'portrait_incredible.jpg';
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;

    const handleChange = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    const marvelCall = async () => {
        try {
            const search = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${userInput.name}&ts=1&apikey=${privateKey}&hash=${hash}`);
            const results = search.data.data.results
            setRes(results)
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        marvelCall(userInput)
    }

    const send = heroObj => {
        toBackend(heroObj)
    }

    const toBackend = async data => {
        try {
            const mongo = await axios.post('http://localhost:9000/heros', {
                name: data.name,
                description: data.description,
                team: id
            })
        } catch (error) {
            console.error(error);
        }
    }

    const fromBackend = async () => {
        try {
            const get = await axios('http://localhost:9000/team')
            setTeams(get.data)
        } catch (error) {
            console.error(error);
        }
    }

    const filterByName = async name => {
        try {
            const get = await axios('http://localhost:9000/team')
            const teamName = get.data.filter(team => team.title === name);
            const teamId = teamName['0']._id;
            setId(teamId)
        } catch (error) {
            console.error(error);
        }
    }

    /* const getHeroModel = async () => {
        try {
            const get = await axios('http://localhost:9000/heros')
            const test = get.data
        } catch (error) {
            console.error(error);
        }
    }*/


    const selectedTeam = e => {
        const selectedTeam = e.target.value;
        filterByName(selectedTeam)
    }


    useEffect(() => {
        marvelCall()
        fromBackend()
        // getHeroModel()
        filterByName()
    }, [])

    return (
        <>
            <SearchGrid>
                <Wrapper>
                    <Form onSubmit={handleSubmit}>
                        <input name="name" id="name" onChange={handleChange}  placeholder="Name"/>
                        <FormDiv style={{margin: '1em' }}>
                            <input type="submit" value='submit'></input>
                        </FormDiv>
                    </Form>
                </Wrapper>
                <div>
                    <label htmlFor="team-names"> Select Team Members For:</label>
                    <select name="team-names" id="team-names" onChange={selectedTeam}>
                        <option>Select Team</option>
                        {teams.map(team => (
                            <option key={team._id} value={team.title}>{team.title}</option>
                        ))}
                    </select>
                </div>
                <Cards>
                    {res.map(hero => (
                        <Card key={hero.id}>
                            <p>{hero.name}</p>
                            <img src={`${hero.thumbnail.path}/${ext}`} alt={hero.name} />
                            <ul>
                                <li><button onClick={() => send(hero)}>Add</button></li>
                                <li><Link to={`heros/${hero.id}`}>Details</Link></li>
                            </ul>
                        </Card>
                    ))}
                </Cards>
            </SearchGrid>
        </>
    )
}

export default SearchForm
