import React from 'react'
import logo from '../../img/marvelLogo.jpg'
import { Nav } from './NavbarStyles'

const Navbar = () => {

    return (
        <Nav>
            <a href="#">
                <img src={logo} alt='marvel' />
            </a>
            <ul>
                <li>Home</li>
                <li>Create</li>
                <li>Search</li>
                <li>About</li>
            </ul>
        </Nav>
    )
}

export default Navbar
