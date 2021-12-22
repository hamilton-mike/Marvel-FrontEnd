import React from 'react'
import { HomeDiv, Button } from './HomeHeroStyle'
import shield from '../../img/SHIELD.png'

const HomeHero = () => {
    return (
        <HomeDiv>
            <div>
                <h1>Welcome back, Commander! <br/> Heroes and Villians are working together, assemble your squad.</h1> <br />
                <p>Use Silver Surfer, Killmonger, Mystique and many more.</p>
                <Button><a href="/create">Create</a></Button>
                <Button><a href="/search">Search</a></Button>
            </div>
            <div>
                <img src={shield} alt='Stategic Homeland Intervention Enforcement Logistics Division'/>
            </div>
        </HomeDiv>
    )
}

export default HomeHero
