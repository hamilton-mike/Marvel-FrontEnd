import React from 'react'
import { HeroDiv, MarvelIntro, LinkWrapper, Button } from './HeroStyles'


const Hero = ({ video }) => {

    return (
        <HeroDiv>
            <MarvelIntro autoPlay controls loop muted>
                <source src={video} type="video/mp4" />
            </MarvelIntro>
            <LinkWrapper>
                <Button><a href="/home">Home</a></Button>
            </LinkWrapper>
        </HeroDiv>
    )
}

export default Hero
