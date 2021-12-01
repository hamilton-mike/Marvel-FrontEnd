import React from 'react'
import { Div, Image, UnOrder, Li } from './InfoDivStyles';
import { Container, Grid }  from '../../globalStyles'



const InfoDiv = ({ marvel, loading }) => {
    const ext = 'portrait_incredible.jpg'

    return (
        <Container>
            {loading ? <h1>loading...</h1> : (
                <Grid>
                    {marvel.map(card => (
                        <Div key={card.id}>
                            <Image src={`${card.thumbnail.path}/${ext}`} alt={card.name} />
                            <h3>{card.name}</h3>
                            <p className='animate__animated animate__flipInX'>{card.description}</p>
                            <UnOrder>
                                <Li>Comics: {card["comics"]["available"]}</Li>
                                <Li>Stories: {card["stories"]["available"]}</Li>
                                <Li>Events: {card["events"]["available"]}</Li>
                            </UnOrder>
                        </Div>
                    ))}
                </Grid>
            )}
        </Container>
    )
}

export default InfoDiv
