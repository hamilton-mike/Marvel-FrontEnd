import React, { useEffect } from 'react'
import { Div } from './LoadingStyle'
import ReactLoading from 'react-loading';

const Loading = () => {
    const randomType = () => {
        let types = ['blank', 'balls', 'bars', 'bubbles', 'cubes', 'cylon', 'spin', 'spinningBubbles', 'spokes'];
        let random = Math.floor(Math.random() * types.length);
        return types[random];
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        randomType()
    }, [])

    return (
        <Div>
            <ReactLoading type={randomType()} color='red' height={'10%'} width={'10%'} />
        </Div>
    )
}

export default Loading
