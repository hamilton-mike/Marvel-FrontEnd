import React, { useState } from 'react'
import { GiHeron } from 'react-icons/gi';
import { CarouselDiv, Image, UnorderList, ListItem } from './CarouselStyles';

const Carousel = ({ marvel, loading }) => {
    const ext = 'portrait_incredible.jpg';

    return (
        <CarouselDiv>
            {loading ? <h1>loading...</h1> : (
                <UnorderList>
                    {marvel.map(character => (
                        <ListItem key={character.id}>
                            <Image src={`${character.thumbnail.path}/${ext}`} alt={character.name} />
                        </ListItem>
                    ))}
                    {marvel.map(character => (
                        <ListItem key={character.id}>
                            <Image src={`${character.thumbnail.path}/${ext}`} alt={character.name} />
                        </ListItem>
                    ))}
                </UnorderList>
            )}
        </CarouselDiv>

    )
}

export default Carousel
