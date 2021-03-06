import React from 'react'
import { Hamburger } from './NavbarStyles';

const HamburgerMenu = ({ menu }) => {

    return (
        <>
            {menu ? (
                <ul className='unorder'>
                    <li><a href="/home">Home</a></li>
                    <li><a href='/create'>Create</a></li>
                    <li><a href='/search'>Search</a></li>
                    <li><a href='/trivia'>Trivia</a></li>
                </ul>

            ) : (
            <Hamburger>
                <li><a href="/home">Home</a></li>
                <li><a href='/create'>Create</a></li>
                <li><a href='/search'>Search</a></li>
                <li><a href='/trivia'>Trivia</a></li>
            </Hamburger>)}
        </>
    )
}

export default HamburgerMenu
