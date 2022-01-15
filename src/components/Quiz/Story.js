import React, { useCallback, useState, useEffect } from 'react'
import Loading from '../Loading/Loading'
import { Button } from '../HomeHero/HomeHeroStyle'
import { Question } from './QuizStyles'


const ComicQuestion = ({ hero }) => {
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answer, setAnswer] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [stats, setStats] = useState({
        id: 0,
        hero: '',
        story: 0
    });

    const getArray = useCallback(() => {
        setLoading(false)
        setArray(hero)
    }, [hero])

    const destructure = useCallback(() => {
        const { name, marvel, stories } = array;
        setStats({ id: marvel, hero: name, story: stories })
    }, [array])

    const log = choice => {
        setAnswer(choice === stats.story ? 'Correct' : 'Incorrect');
    }

    const randomNum = () => {
        setA(Math.floor(Math.random() * 100))
        setB(Math.floor(Math.random() * 100))
        setC(Math.floor(Math.random() * 100))
    }

    useEffect(() => {
        getArray()
        destructure()
        randomNum()
    }, [loading, getArray, destructure])

    return (
        <>
            {loading ? (<Loading />) : (
                <Question>
                    <p>How many stories does {stats.hero} have?</p>
                    <Button onClick={() => log(a)}>{a}</Button>
                    <Button onClick={() => log(b)}>{b}</Button>
                    <Button onClick={() => log(stats.story)}>{stats.story}</Button>
                    <Button onClick={() => log(c)}>{c}</Button>
                    <p>{answer}</p>
                </Question>
            )}
        </>
    )
}

export default ComicQuestion
