import React from 'react'
import { HomeDiv, Button } from './HomeHeroStyle'
import shield from '../../img/SHIELD.png'

const HomeHero = () => {
    return (
        <HomeDiv>
            <div>
                <p>Welcome back, Commander <br/> Heros and Villians are working together, assemble your squad!</p> <br />
                <p>Use Silver Surfer, Killmonger, Mystique and many more.</p>
                <Button>Create</Button>
                <Button><a href="/landing">Search</a></Button>
            </div>
            <div>
                <img src={shield} alt='Stategic Homeland Intervention Enforcement Logistics Division'/>
            </div>
        </HomeDiv>
    )
}

export default HomeHero
