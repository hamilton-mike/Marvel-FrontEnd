import React from 'react'
import { Hamburger } from './NavbarStyles';

const HamburgerMenu = ({ menu }) => {
    console.log(menu);
    return (
        <>
            {menu ? (
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li>Create</li>
                    <li>Trivia</li>
                </ul>

            ) : (
            <Hamburger>
                <li><a href="/home">Home</a></li>
                <li>Create</li>
                <li>Trivia</li>
            </Hamburger>)}
        </>
    )
}

export default HamburgerMenu
