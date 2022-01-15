import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Quiz from '../components/Quiz/Quiz'
import { Container } from '../globalStyles'

const Trivia = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Quiz />
            </Container>
            <Footer />
        </>
    )
}

export default Trivia
