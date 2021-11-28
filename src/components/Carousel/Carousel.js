import React, { useState } from 'react'
import { CarouselDiv, Image, UnorderList, ListItem } from './CarouselStyles';

const Carousel = ({ marvel, loading }) => {
    const [img, setImg] = useState(0)
    const ext = 'portrait_incredible.jpg';

    setTimeout(() => {
        setImg(img === 11 ? 0 : img + 1)
    }, 3000);


    return (
        <CarouselDiv>
            {loading ? <h1>loading...</h1> : (
                <UnorderList className='marquee'>
                    {marvel.map(character => (
                        <ListItem>
                            <Image key={character.id} src={character.thumbnail.path + `/${ext}`} alt="marvel" />
                        </ListItem>
                    ))}
                    {marvel.map(character => (
                        <ListItem>
                            <Image key={character.id} src={character.thumbnail.path + `/${ext}`} alt="marvel" />
                        </ListItem>
                    ))}
                </UnorderList>
            )}
        </CarouselDiv>

    )
}

export default Carousel
