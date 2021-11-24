import React from 'react'
import { Button, Container, HeadingOne } from '../../globalStyles'
import { HeroSection, MarvelIntro, Text } from './HeroStyles'
import intro from '../../assets/marvel-intro.mp4'

const Hero = () => {
    return (
        <HeroSection>
            <MarvelIntro autoPlay loop>
                <source src={intro} type="video/mp4" />
            </MarvelIntro>
            <Text>HELLO</Text>
        </HeroSection>
    )
}

export default Hero
