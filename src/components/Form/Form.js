import React, { useState, useEffect } from 'react'
import { Wrapper, Form, SearchGrid, Cards, Card, FormDiv } from './FormStyles'
import axios from 'axios'

const SearchForm = () => {
    const init = {
        name: 'thanos'
    };

    const [userInput, setUserInput] = useState(init);
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([])
    const [hero, setHero] = useState("");
    const [test, setTest] = useState([])
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
            setLoading(false)
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
                team: test
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
            const teamID = teamName['0']._id;
            setTest(teamID)
        } catch (error) {
            console.error(error);
        }
    }

    const getHeroModel = async () => {
        try {
            const get = await axios('http://localhost:9000/heros')
            const test = get.data
            console.log(test, 'testing');
        } catch (error) {
            console.error(error);
        }
    }


    const selectedTeam = e => {
        const selectedTeam = e.target.value;
        // setHero(selectedTeam)
        filterByName(selectedTeam)
    }


    useEffect(() => {
        marvelCall()
        fromBackend()
        getHeroModel()
        // filterByName()
    }, [])

    return (
        <SearchGrid>
            {/* {loading ? ( */}
                <>
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
                            {teams.map(team => (
                                <option key={team._id} onChange={selectedTeam} value={team.title}>{team.title}</option>
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
                                    <li><button onClick={() => test(hero.id)}>Details</button></li>
                                </ul>
                            </Card>
                        ))}
                    </Cards>
                </>
            {/* ) : (
            <>
                {team.map(hero => (
                    <div key={hero._id}>
                        <p>{hero.name}</p>
                    </div>
                ))}
            </>
            )} */}
        </SearchGrid>
    )
}

export default SearchForm
