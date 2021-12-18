import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs'
import { Section, ChilDiv, Modify } from './TeamStyle';
import { Container, Grid } from '../../globalStyles'
import { FiTrash2 } from 'react-icons/fi'
import { AiOutlineEdit } from 'react-icons/ai'
import axios from 'axios'
import SearchForm from '../Form/Form'


const Team = () => {
    const [teams, setTeams] = useState([]);
    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    const createTeam = async () => {
        try {
            const team = await axios.post('http://localhost:9000/team', { title: 'default' })
            setCount(count + 1)
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

    const deleteTeam = async id => {
        try {
            const deleteTeam = await axios(`http://localhost:9000/team/${id}`, { method: "DELETE" });
            const deleted = deleteTeam.data;
            setTeams(teams.filter(team => team._id !== deleted._id))
        } catch (error) {
            console.error(error);
        }
    }

    const members = () => {
        navigate('/search')
    }

    // const addMembers = id => {
    //     navigate(`/team/${id}`)
    // }

    useEffect(() => {
        fromBackend()
    }, [count])

    console.log(teams, 'really');
    return (
        <Section>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '1em' }}>
                    <div>
                        <h1>Create a Team</h1>
                        <div style={{ border: '2px solid blue' }}></div>
                    </div>
                    <BsPlusLg size={70} onClick={createTeam} style={{ cursor: 'pointer' }}/>
                </div>
                <Grid style={{ border: '2px solid orange' }}>
                    {teams.map(team => (
                        <ChilDiv key={team._id}>
                            <p>{team.title}</p>
                            {/* {team.hero.map(heros => (
                                <>
                                    <div key={heros._id}>
                                        <p>{heros.name}</p>
                                    </div>
                                    <Modify className="edit">
                                        <FiTrash2 size={25} />
                                        <AiOutlineEdit size={25} onClick={() => editTeam(team._id)} />
                                    </Modify>
                                </>
                            ))} */}
                        <Link to={`team/${team._id}}`}>Edit</Link>
                        <button onClick={() => deleteTeam(team._id)}>X</button>
                        {/* <button onClick={editMembers}>Edit</button> */}
                        </ChilDiv>
                    ))}
                </Grid>
                <button onClick={members}>Research</button>
            </Container>
        </Section>
    )
}

export default Team
