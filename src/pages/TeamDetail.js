import React, { useCallback, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { HomeDiv, Button } from '../components/HomeHero/HomeHeroStyle';
import { Div, UnOrder, Li, Image } from '../components/InfoDiv/InfoDivStyles';
import { H2 } from '../components/Events/EventsStyle';
import { Container, Grid } from '../globalStyles'
import collection from '../img/team.jpg'
import axios from 'axios'

const Edit = () => {
    const navigate = useNavigate();
    const [edit, setEdit] = useState([])
    const [members, setMemebers] = useState([]);
    const params = useParams();
    const { id } = params;
    const teamId = id.substring(0, 24);
    const ext = 'portrait_incredible.jpg'


    const fromBackend = useCallback(async () => {
        try {
            const getTeam = await axios(`http://localhost:9000/team/${teamId}`)
            const getHero = await axios('http://localhost:9000/hero')
            const sameTeam = getHero.data.filter(obj => obj.team === teamId)

            setMemebers(sameTeam)
            setEdit(getTeam.data, 'hero')
        } catch (error) {
            console.error(error);
        }
    }, [teamId])



    const heroDetail = id => {
        navigate(`/search/hero/${id}`)
    }

    const editTeam = () => {
        navigate(`/search/team/${teamId}/edit`)
    }

    useEffect(() => {
        fromBackend()
    }, [fromBackend])

    return (
        <>
            <Navbar />
            <Container>
                <HomeDiv>
                    <div style={{ paddingTop: '5%' }}>
                        <h1>Get to know your team</h1>
                        <p>Commander here's your teams stats</p>
                        <Button onClick={editTeam}>Edit Team</Button>
                    </div>
                    <div>
                        <img  style={{borderRadius: '1rem'}} src={collection} alt="X-Men" />
                    </div>
                </HomeDiv>
                    <H2>Team Name: {edit.title}</H2>
                <Grid>
                    {members.map(member => (
                        <Div key={member._id}>
                             <Image src={`${member.thumbnail}/${ext}`} alt={member.name} onClick={() => heroDetail(member.marvel)}/>
                            <h3>{member.name}</h3>
                            <UnOrder>
                                <Li>Comics:{member.comics}</Li>
                                <Li>Stories:{member.stories}</Li>
                                <Li>Events:{member.events}</Li>
                            </UnOrder>
                        </Div>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default Edit
