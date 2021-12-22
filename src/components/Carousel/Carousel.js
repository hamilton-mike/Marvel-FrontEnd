import React from 'react'
import { CarouselDiv, Image, UnorderList, ListItem } from './CarouselStyles';
import { Container } from '../../globalStyles'

const Carousel = ({ marvel, loading }) => {
    const ext = 'portrait_incredible.jpg';

    return (
        <Container>
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
        </Container>

    )
}

export default Carousel
