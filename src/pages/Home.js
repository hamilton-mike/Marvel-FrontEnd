import React, {  useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import CRUD from '../components/CRUD/CRUD'
import axios from 'axios'
import HomeHero from '../components/HomeHero/HomeHero'


const Home = () => {
    const [hero, setHero] = useState([]);
    const [loading, setLoading] = useState(true)
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;

    const marvelCall = async () => {
        try {
            const ids = [1009452, 1011095, 1009338, 1016181, 1009282, 1009384, 1009562, 1017299, 1017575, 1009187, 1009268, 1009599];
            const promises = ids.map(async id => axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${privateKey}&hash=${hash}`))
            const results = await Promise.all(promises)
            setLoading(false)
            setHero(results.map(result => result.data.data.results[0]))
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
            <HomeHero />
            <Carousel marvel={hero} loading={loading}/>
            <CRUD />

        </>
    )
}

export default Home
