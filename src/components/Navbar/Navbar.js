import React from 'react'
import logo from '../../img/marvelLogo.jpg'
import { FcSearch } from 'react-icons/fc'
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
            <FcSearch size={70}/><input type="text" />
        </Nav>
    )
}

export default Navbar
