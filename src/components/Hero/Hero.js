import React from 'react'
import { HeroDiv, MarvelIntro, LinkWrapper } from './HeroStyles'
import { Button } from '../HomeHero/HomeHeroStyle'
import { useNavigate } from 'react-router-dom'

const Hero = ({ video }) => {
    const navigate = useNavigate();

    const home = () => {
        navigate('/home')
    }

    return (
        <HeroDiv>
            <MarvelIntro autoPlay controls loop muted>
                <source src={video} type="video/mp4" />
            </MarvelIntro>
            <LinkWrapper>
                <Button onClick={home}>Home</Button>
            </LinkWrapper>
        </HeroDiv>
    )
}

export default Hero
