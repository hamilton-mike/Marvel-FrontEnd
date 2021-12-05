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
    const [team, setTeam] = useState([])
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

    const send = heroObj => {
        console.log('send', heroObj);
        toBackend(heroObj)
    }

    const toBackend = async data => {
        try {
            axios.post('http://localhost:9000/heros', { name: data })
        } catch (error) {
            console.error(error);
        }
    }

    // if (res.data.length >= 6) {setTeam(res.data);setLoading(false)}

    const fromBackend = async () => {
        try {
            const get = await axios('http://localhost:9000/heros');

            if (get.data.length >= 5) {
                setTeam(get.data)
            }
        } catch (error) {
            console.error(error);
        }
    }
    fromBackend()

    // const createTeam = async (name, members) => {
    //     // const roles = {
    //     //     leader: 'You',
    //     //     captain:,
    //     //     tank:,
    //     //     healer:,
    //     //     brawler:,
    //     //     sniper:,
    //     //     support:
    //     // }
    //     console.log(name, members, 'create');
    //     // try {
    //     //     axios.post('http://localhost:9000/team', { title: name, hero: members }).then((res) => console.log(res))
    //     // } catch (error) {
    //     //     console.error(error);
    //     // }
    // }

    useEffect(() => {
        marvelCall()
    }, [])

    return (
        <SearchGrid>
            {loading ? (
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
                        Select Team Members
                    </div>
                    <Cards>
                        {res.map(hero => (
                            <Card key={hero.id}>
                                <p>{hero.name}</p>
                                <img src={`${hero.thumbnail.path}/${ext}`} alt={hero.name} />
                                <ul>
                                    <li><button onClick={() => send(hero.name)}>Add</button></li>
                                    <li><button>Details</button></li>
                                </ul>
                            </Card>
                        ))}
                    </Cards>
                </>
            ) : (
            <>
                {team.map(hero => (
                    <div key={hero._id}>
                        <p>{hero.name}</p>
                    </div>
                ))}
            </>
            )}
        </SearchGrid>
    )
}

export default SearchForm
