import React from 'react'
import { HeroDiv, MarvelIntro, LinkWrapper, Button } from './HeroStyles'


const Hero = ({ video }) => {

    return (
        <HeroDiv>
            <MarvelIntro autoPlay controls loop muted>
                <source src={video} type="video/mp4" />
            </MarvelIntro>
            <LinkWrapper>
                <Button>
                    <a href="/landing">LandingPage</a>
                </Button>
                <Button><a href="/home">HomePage</a></Button>
            </LinkWrapper>
        </HeroDiv>
    )
}

export default Hero
