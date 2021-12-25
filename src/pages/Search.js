import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SearchForm from '../components/Form/Form'
import { Container } from '../globalStyles'
import { HomeDiv } from '../components/HomeHero/HomeHeroStyle'
import bubble from '../img/bubble.jpg'

const Search = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <HomeDiv>
                    <div style={{ paddingTop: '5%' }}>
                        <h1>Welcome to S.H.I.E.L.D's database</h1>
                        <p>Start your research here</p>
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
