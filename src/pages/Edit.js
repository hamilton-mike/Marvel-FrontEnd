import React, {  useCallback, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Container, FormDiv, Label } from '../globalStyles'
import { HomeDiv, Button } from '../components/HomeHero/HomeHeroStyle'
import verus from '../img/edit.jpg'
import axios from 'axios'

const Edit = () => {
    const [heroes, setHeroes] = useState([]);
    const [editHeroName, setEditHeroName] = useState('')
    const [editTeamName, setEditTeamName] = useState([]);
    const [members, setMembers] = useState([])
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const team = () => {
        navigate(`/create/team/${id}`)
    }

    const fromBackEnd = useCallback( async () => {
        try {
            const getHeroes = await axios('http://localhost:9000/hero')
            const sameTeam = getHeroes.data.filter(obj => obj.team === id);
            setMembers(getHeroes.data)
            setHeroes(sameTeam)
        } catch (error) {
            console.error(error);
        }
    }, [id]);

    const editTeam = async (id, title) => {
        try {
            await axios.put(`http://localhost:9000/team/${id}`, { title });
            team()
        } catch (error) {
            console.error(error);
        }
    }

    const editHero = async (hero, name) => {
        try {
            const filterHero = heroes.filter(obj => obj.name === hero);
            const heroId = (filterHero["0"]._id);
            await axios.put(`http://localhost:9000/hero/${heroId}`, { name });
            team()
        } catch (error) {
            console.error(error);
        }
    }

    const deleteHero = async e => {
        try {
            e.preventDefault();
            const heroObject = members.filter(obj => obj.name === editHeroName)
            const id = heroObject["0"]._id;
            await axios.delete(`http://localhost:9000/hero/${id}`)
            team()
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = e => {
        setEditTeamName({ ...editTeamName, [e.target.name]: e.target.value })

        for (let i = 0; i < heroes.length; i++) {
            let obj = heroes[i];

            if (obj.name === e.target.value) {
                setEditHeroName(e.target.value)
            }
        }
    }

    const handleSubmitOne = async e => {
        e.preventDefault();
        const { title } = editTeamName
        editTeam(id, title)
    }

    const handleSubmitTwo = async e => {
        e.preventDefault();
        const { name } = editTeamName
        editHero(editHeroName, name)
    }

    useEffect(() => {
        fromBackEnd()
    }, [fromBackEnd])


    return (
        <>
            <Navbar />
            <Container>
                <HomeDiv>
                    <div style={{ paddingTop: '1%' }}>
                        <h1>Edit your team</h1>
                        <p>Change the database as you see fit Commander</p>
                        <Button onClick={team}>Team</Button>
                    </div>
                    <div>
                        <img  style={{borderRadius: '1rem' }} src={verus} alt="X-Men" />
                    </div>
                </HomeDiv>
                <form onSubmit={handleSubmitOne}>
                    <FormDiv>
                        <Label>Edit Team Name</Label>
                        <input type="text" id='title' name='title' onChange={handleChange} />
                        <Button type="submit">Submit</Button>
                    </FormDiv>
                </form>
                <form onSubmit={handleSubmitTwo} style={{ display: 'flex'}}>
                    <FormDiv>
                        <Label htmlFor="description">Edit Hero Name</Label>
                        <select name="team-names" id="team-names" onChange={handleChange}>
                            <option>Member</option>
                            {heroes.map(hero => (
                                <option key={hero._id} value={hero.name}>{hero.name}</option>
                            ))}
                        </select>
                        <input type="text" id='name' name='name'onChange={handleChange}></input>
                        <Button type="submit">Submit</Button>
                    </FormDiv>
                </form>
                <form onSubmit={deleteHero} style={{ display: 'flex'}}>
                    <FormDiv>
                        <Label htmlFor="description">Delete Hero</Label>
                        <select name="team-names" id="team-names" onChange={handleChange}>
                            <option>Member</option>
                            {heroes.map(hero => (
                                <option key={hero._id} value={hero.name}>{hero.name}</option>
                            ))}
                        </select>
                        <Button type="submit">Delete</Button>
                    </FormDiv>
                </form>
            </Container>
            <Footer />
        </>
    )
}

export default Edit
