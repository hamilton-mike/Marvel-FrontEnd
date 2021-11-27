import React, {  useState, useEffect } from 'react'
import Carousel from '../components/Carousel/Carousel'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'


const Home = () => {
    const [hero, setHero] = useState([]);
    const [loading, setLoading] = useState(true)
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;

    const marvelCall = () => {
        const ids = [1009652, 1011095, 1009338];

        ids.map(async(id) => {
            try {
                const promises = await axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${privateKey}&hash=${hash}`);
                const results = await Promise.all(promises)
                setHero(results.map( result => results.data.results[0]))
            } catch (error) {
                console.error(error);
            }
        });
    }
        // ids.forEach(async id => {
        //     try {
        //         let getRequest = await axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${privateKey}&hash=${hash}`);
        //         const dataObj  = getRequest.data.data.results['0'];
        //         setHero([...hero, dataObj])
        //         // setLoading(false)
        //     } catch (error) {
        //     }
        // });




    useEffect(() => {
        marvelCall()
    }, [])

    return (
        <div>
            <Navbar />
            <Carousel marvel={hero} loading={loading}/>
        </div>
    )
}

export default Home
