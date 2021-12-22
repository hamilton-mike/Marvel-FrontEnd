import React, {  useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import InfoDiv from '../components/InfoDiv/InfoDiv'
import CRUD from '../components/CRUD/CRUD'
import HomeHero from '../components/HomeHero/HomeHero'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import { Container } from '../globalStyles'


const Home = () => {
    const [carousel, setCarousel] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true)
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;

    const marvelCall = async () => {
        try {
            const ids = [1009452, 1011095, 1009338, 1016181, 1009282, 1009384, 1009562, 1017299, 1017575, 1009187, 1009268, 1009599, 1009648, 1009368, 1009675, 1009577, 1009262, 1009629];
            const carousel = ids.splice(0, 12);
            const cards = ids.slice();

            const promiseOne = carousel.map(async id => axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${privateKey}&hash=${hash}`));
            const promiseTwo = cards.map(async id => axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${privateKey}&hash=${hash}`));
            const carouselResults = await Promise.all(promiseOne)
            const cardsResults = await Promise.all(promiseTwo)

            setLoading(false)
            setCarousel(carouselResults.map(result => result.data.data.results[0]))
            setCards(cardsResults.map(result => result.data.data.results[0]))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        marvelCall()
    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <HomeHero />
                <Carousel marvel={carousel} loading={loading} />
                <CRUD />
                <InfoDiv marvel={cards} loading={loading} />
            </Container>
            <Footer />
        </>
    )
}

export default Home
