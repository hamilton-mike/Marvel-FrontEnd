import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs'
import { Section, ChilDiv, Modify } from './TeamStyle';
import { Container, Grid } from '../../globalStyles'
import { FiTrash2 } from 'react-icons/fi'
import { AiOutlineEdit } from 'react-icons/ai'
import axios from 'axios'


const Team = () => {
    const [teams, setTeams] = useState([]);
    const [members, setMembers] = useState([]);
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
            const team = await axios('http://localhost:9000/team')
            const hero = await axios('http://localhost:9000/heros')

            setMembers(hero.data);
            setTeams(team.data)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTeam = async id => {
        try {
            const deleteTeam = await axios(`http://localhost:9000/team/${id}`, { method: "DELETE" });
            const deleted = deleteTeam.data;
            setTeams(teams.filter(team => team._id !== deleted._id))
            deleteHeros(id)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteHeros = async id => {
        try {
            const ids = [];
            console.log(id, 'id');
            const getHeros = await axios('http://localhost:9000/heros');
            const matchIds = getHeros.data.map(hero => hero);

            for (let i = 0; i < matchIds.length; i++) {
                let heroObj = matchIds[i];

                if (heroObj.team == id) {
                    ids.push(heroObj._id)
                }
            }

            const promise = ids.map(async id => axios(`http://localhost:9000/heros/${id}`))
            await Promise.all(promise)
        } catch (error) {
            console.error(error);
        }
    }

    const fitlerByTeam = async id => {
        console.log(id, 'team id');
        // setList(members.filter(member => member.team === id))
        // <button onClick={() => fitlerByTeam(team._id)}>Members</button>
        {/* <button onClick={editMembers}>Edit</button> */}
    }

    const search = () => {
        navigate('/search')
    }

    const details = id => {
        return (<Link to={`team/${id._id}`}></Link>)
    }

    useEffect(() => {
        fromBackend()
    }, [count, teams])

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
                            <Modify>
                                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`team/${team._id}`}>
                                    <AiOutlineEdit size={30} />
                                </Link>
                                <FiTrash2 size={30} onClick={() => deleteTeam(team._id)} />
                            </Modify>
                        </ChilDiv>
                    ))}
                </Grid>
                <button onClick={search}>Research</button>
            </Container>
        </Section>
    )
}

export default Team
