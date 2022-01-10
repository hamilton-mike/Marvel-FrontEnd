import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import SearchForm from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import { Container } from '../globalStyles'
import { HomeDiv, Button } from '../components/HomeHero/HomeHeroStyle'
import bubble from '../img/bubble.jpg'


const Search = () => {
    const navigate = useNavigate();

    const create = () => {
        navigate('/create')
    }

    return (
        <div>
            <Navbar />
            <Container>
                <HomeDiv>
                    <div style={{ paddingTop: '5%'}}>
                        <h1>Welcome to S.H.I.E.L.D's database</h1>
                        <p>Start your research here</p>
                        <Button onClick={create}>Create</Button>

                    </div>
                    <div>
                        <img style={{borderRadius: '1rem'}} src={bubble} alt='Stategic Homeland Intervention Enforcement Logistics Division'/>
                    </div>
                </HomeDiv>
                <SearchForm />
            </Container>
            <Footer />
        </div>
    )
}

export default Search
