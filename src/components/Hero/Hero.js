import React, { useState } from 'react'
import { HeroDiv, MarvelIntro, LinkWrapper } from './HeroStyles'
import { Button } from '../HomeHero/HomeHeroStyle'
import { useNavigate } from 'react-router-dom'

const Hero = ({ video }) => {
    const [visible, setVisible] = useState(true)
    const navigate = useNavigate();

    const home = () => {
        navigate('/home')
    }

    setTimeout(() => {
        setVisible(false)
    }, 4000)


    return (
        <HeroDiv>
            <MarvelIntro autoPlay controls loop muted>
                <source src={video} type="video/mp4" />
            </MarvelIntro>
            <LinkWrapper>
                {visible ? null : <Button onClick={home}>Home</Button>}
            </LinkWrapper>
        </HeroDiv>
    )
}

export default Hero
