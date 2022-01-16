import React from 'react'
import { Hamburger } from './NavbarStyles';

const HamburgerMenu = ({ menu }) => {

    return (
        <>
            {menu ? (
                <ul className='unorder'>
                    <li><a href="/home">Home</a></li>
                    <li><a href='/home/create'>Create</a></li>
                    <li><a href='/home/search'>Search</a></li>
                    <li><a href='/home/trivia'>Trivia</a></li>
                </ul>

            ) : (
            <Hamburger>
                <li><a href="/home">Home</a></li>
                <li><a href='/home/create'>Create</a></li>
                <li><a href='/home/search'>Search</a></li>
                <li><a href='/home/trivia'>Trivia</a></li>
            </Hamburger>)}
        </>
    )
}

export default HamburgerMenu
