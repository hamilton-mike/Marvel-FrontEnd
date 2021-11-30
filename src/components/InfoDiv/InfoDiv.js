import React, { useEffect, useState } from 'react'
import { Div, Image, UnOrder, Li } from './InfoDivStyles';
import axios from 'axios'


const InfoDiv = () => {
    const [hero, setHero] = useState([]);
    const [loading, setLoading] = useState(true)
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;
    const ext = 'portrait_incredible.jpg'

    const marvelCallAtRandom = async id => {
        try {
            const getRequest = await axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${privateKey}&hash=${hash}`)
            setHero(getRequest.data.data.results[0])
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    // const charactersAtRandom = () => {
    //     console.log(i, 'whats i');
    //     const array = [1009718, 1009652, 1009368]
    //     let i = 0;
    //     while (array.length) {
    //         console.log(array[i])
    //     }
    //     i++
    //     console.log(i, '****');
    // }


    useEffect(() => {
        // marvelCallAtRandom()
    }, [])

    console.log(hero["events"]);

    return (
        <div>
            {loading ? <h1>loading...</h1> : (
                <Div>
                    <Image src={`${hero.thumbnail.path}/${ext}`} alt={hero.name} />
                    <h3>{hero.name}</h3>
                    <p>{hero.description}</p>
                    <UnOrder>
                        <Li>Comics: {hero["comics"]["available"]}</Li>
                        <Li>Stories: {hero["stories"]["available"]}</Li>
                        <Li>Events: {hero["events"]["available"]}</Li>
                    </UnOrder>
                </Div>

            )}
        </div>
    )
}

export default InfoDiv
