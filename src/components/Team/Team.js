import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs'
import { Section, ChilDiv, Modify, FlexDiv, Line } from './TeamStyle';
import { Container, Grid } from '../../globalStyles'
import { FiTrash2 } from 'react-icons/fi'
import { AiOutlineEdit } from 'react-icons/ai'
import axios from 'axios'


const Team = () => {
    const [teams, setTeams] = useState([]);
    const [members, setMembers] = useState([]);
    const [count, setCount] = useState(0)
    const team_URL = 'http://localhost:9000/team/';
    const hero_URL = 'http://localhost:9000/hero/'


    const createTeam = async () => {
        try {
            const team = await axios.post(team_URL, { title: 'default' })
            setCount(count + 1)
        } catch (error) {
            console.error(error);
        }
    }

    const fromBackend = async () => {
        try {
            const team = await axios(team_URL)
            const hero = await axios(hero_URL)
            setMembers(hero.data);
            setTeams(team.data)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTeam = async id => {
        try {
            const deleteTeam = await axios(`${team_URL}${id}`, { method: "DELETE" });
            const deleted = deleteTeam.data;
            setTeams(teams.filter(team => team._id !== deleted._id))
            deleteHeros(id)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteHeros = async id => {
        try {
            const getRequest = await axios(`${hero_URL}`);
            const heroesArray = getRequest.data;
            const arrayFilterByTeam =  heroesArray.filter(obj => obj.team === id)
            arrayFilterByTeam.map(async obj => {
                await axios(`${hero_URL}${obj._id}`, { method: "DELETE" })
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fromBackend()
        deleteHeros()
    }, [count])

    return (
        <Section>
            <Container>
                <FlexDiv>
                    <div>
                        <h1>Create a Team</h1>
                        <Line></Line>
                    </div>
                    <BsPlusLg size={70} onClick={createTeam} style={{ cursor: 'pointer' }}/>
                </FlexDiv>
                <Grid>
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
            </Container>
        </Section>
    )
}

export default Team
