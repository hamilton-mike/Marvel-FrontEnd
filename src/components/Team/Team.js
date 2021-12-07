import React, { useState, useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs'
import { Section, ChilDiv } from './TeamStyle';
import { Container, Grid } from '../../globalStyles'
import axios from 'axios'

const Team = () => {
    const [teams, setTeams] = useState([]);

    const createTeam = async () => {
        try {
            const team = await axios.post('http://localhost:9000/team', { title: 'default' })
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

    // const editTeam = async id => {
    //     try {
    //         const editTeam = await axios.put(`http://localhost:9000/team/${id}`, {title: 'edit'})
    //         console.log(editTeam);
    //         setTeams(editTeam)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(() => {
        fromBackend()
        // editTeam()
    }, [teams])


    return (
        <Section>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <h1>Create a Team</h1>
                        <div style={{ border: '2px solid blue' }}></div>
                    </div>
                    <div>
                        <BsPlusLg size={70} onClick={createTeam} style={{ cursor: 'pointer' }}/>
                    </div>
                </div>
                <Grid style={{ border: '2px solid orange' }}>
                    {teams.map(team => (
                        <ChilDiv key={team._id}>
                            <p>{team.title}</p>
                            {team.hero.map(heros => (
                                <div key={heros._id}>
                                    <p>{heros.name}</p>
                                </div>
                            ))}
                            {/* <button onClick={() => editTeam(team._id)}>Edit</button> */}
                        </ChilDiv>
                    ))}
                </Grid>
            </Container>
        </Section>
    )
}

export default Team
