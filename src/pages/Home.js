import React, {  useState, useEffect } from 'react'
import Carousel from '../components/Carousel/Carousel'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'


const Home = () => {
    const [hero, setHero] = useState([]);
    const [loading, setLoading] = useState(true)
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;

    const marvelCall = async () => {
        try {
            const getRequest = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${privateKey}&hash=${hash}`);
            const dataObj  = getRequest.data;
            const res = dataObj.data.results
            setHero(res)
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        marvelCall()
    }, [])
    console.log(hero);
    return (
        <div>
            <Navbar />
            <Carousel hero={hero} loading={loading}/>
        </div>
    )
}

export default Home
