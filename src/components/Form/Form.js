import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Form, SearchGrid, Cards, Card, Select } from './FormStyles'
import { Button } from '../HomeHero/HomeHeroStyle'
import axios from 'axios'

const SearchForm = () => {
    const init = {
        name: ''
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

    const handleSubmit = e => {
        e.preventDefault()
        marvelCall(userInput)
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

    const send = heroObj => {
        toBackend(heroObj)
        console.log(heroObj, 'xyz');
    }

    const toBackend = async data => {
        try {
            const mongo = await axios.post('http://localhost:9000/hero', {
                name: data.name,
                description: data.description,
                team: id,
                marvel: data.id,
                comics: data.comics.available,
                events: data.events.available,
                stories: data.stories.available,
                thumbnail: data.thumbnail.path
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

    const selectedTeam = e => {
        const selectedTeam = e.target.value;
        filterByName(selectedTeam)
    }


    useEffect(() => {
        marvelCall()
        fromBackend()
        filterByName()
    }, [userInput])

    return (
        <>
            <SearchGrid>
                <Wrapper>
                    <div>
                        <label htmlFor="team-names"> Select Team Members For:</label>
                        <Select name="team-names" id="team-names" onChange={selectedTeam}>
                            <option>Select Team</option>
                            {teams.map(team => (
                                <option key={team._id} value={team.title}>{team.title}</option>
                            ))}
                        </Select>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <input name="name" id="name" onChange={handleChange}  placeholder="Name"/>
                            <Button type="submit" value='submit'>Submit</Button>
                        </div>
                    </Form>
                </Wrapper>
                <Cards>
                    {res.map(hero => (
                        <Card key={hero.id}>
                            <p>{hero.name}</p>
                            <img src={`${hero.thumbnail.path}/${ext}`} alt={hero.name} />
                            <ul>
                                <li><Button onClick={() => send(hero)}>Add</Button></li>
                                <li>
                                    <Button>
                                        <Link to={`hero/${hero.id}`}>Details</Link>
                                    </Button>
                                </li>
                            </ul>
                        </Card>
                    ))}
                </Cards>
            </SearchGrid>
        </>
    )
}

export default SearchForm
