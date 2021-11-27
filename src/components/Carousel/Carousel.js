import React, { useState } from 'react'
import { CarouselDiv, Image } from './CarouselStyles';

const Carousel = ({ marvel, loading }) => {
    const [img, setImg] = useState(0)
    const ext = 'portrait_incredible.jpg';

    setTimeout(() => {
        setImg(img === 11 ? 0 : img + 1)
    }, 3000);


    return (
        <CarouselDiv>
            {loading ? <h1>loading...</h1> : (
                <>
                    {marvel.map((character, idx) => (
                        <div key={idx}>
                            {idx === img && (<Image key={character.id} src={character.thumbnail.path + `/${ext}`} alt="marvel" />)}
                        </div>
                    ))}
                </>
            )}
        </CarouselDiv>

    )
}

export default Carousel
