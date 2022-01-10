import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Team from '../components/Team/Team'
import { Container } from '../globalStyles';
import { HomeDiv, Button } from '../components/HomeHero/HomeHeroStyle';
import team from '../img/xmen.jpg'

const Create = () => {
    const navigate = useNavigate();

    const search = () => {
        navigate('/search')
    }

    return (
        <>
            <Navbar />
            <Container>
                <HomeDiv>
                    <div>
                        <img  style={{borderRadius: '1rem'}} src={team} alt="X-Men" />
                    </div>
                    <div style={{ paddingTop: '5%' }}>
                        <h1>Create your team</h1>
                        <p>Every great team has a great leader</p>
                        <Button onClick={search}>Research</Button>
                    </div>
                </HomeDiv>
                <Team />
            </Container>
            <Footer />
        </>
    )
}

export default Create
