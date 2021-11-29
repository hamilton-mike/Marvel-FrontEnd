import React from 'react'
import logo from '../../img/marvelLogo.jpg'
import { Nav } from './NavbarStyles'

const Navbar = () => {

    return (
        <Nav>
            <a href="/">
                <img src={logo} alt='marvel' />
            </a>
            <ul>
                <li><a href="/home">Home</a></li>
                <li>Find</li>
                <li>Add</li>
                <li>Trivia</li>
                <li>About</li>
            </ul>
        </Nav>
    )
}

export default Navbar
