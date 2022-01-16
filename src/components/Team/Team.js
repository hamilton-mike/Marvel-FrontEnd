import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs'
import { Section, ChilDiv, Modify, FlexDiv, Line } from './TeamStyle';
import { Container, Grid } from '../../globalStyles'
import { FiTrash2 } from 'react-icons/fi'
import { AiOutlineEdit } from 'react-icons/ai'
import axios from 'axios'


const Team = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const [count, setCount] = useState(0)
    const url = 'https://marvel-mern-app.herokuapp.com'

    const createTeam = async () => {
        try {
            const post = await axios.post(`${url}/team`, { title: 'default'}, { headers: {
                'Access-Control-Allow-Origin': 'https://shield-commander.netlify.app'
            }})
            console.log(post, 'post');
            setCount(count + 1)
        } catch (error) {
            console.error(error);
        }
    }

    const fromBackend = async () => {
        try {
            const team = await axios(`${url}/team`)
            setTeams(team.data)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTeam = async id => {
        try {
            const deleteTeam = await axios(`${url}/team/${id}`, { method: "DELETE" });
            const deleted = deleteTeam.data;
            setTeams(teams.filter(team => team._id !== deleted._id))
            deleteHeros(id)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteHeros = async id => {
        try {
            const getRequest = await axios(`${url}/hero`);
            const heroesArray = getRequest.data;
            const arrayFilterByTeam = heroesArray.filter(obj => obj.team === id);
            arrayFilterByTeam.map(async obj => {
                await axios(`${url}/hero/${obj._id}`, { method: "DELETE" })
            });
        } catch (error) {
            console.error(error);
        }
    }

    const teamDetail = id => {
        navigate(`team/${id}`)
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
                                <AiOutlineEdit size={30} onClick={() => teamDetail(team._id)} />
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
