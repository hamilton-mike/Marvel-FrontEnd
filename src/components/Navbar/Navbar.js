import React, { useState }from 'react'
import logo from '../../img/marvelLogo.jpg'
import { Nav } from './NavbarStyles'
import { GiHamburgerMenu } from 'react-icons/gi'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const [name, setName] = useState('hamburger')

    const toggle = () => {
        setMenu(m => !m)
    }

    return (
        <Nav>
            <a href="/">
                <img src={logo} alt='marvel' />
            </a>
            <GiHamburgerMenu onClick={toggle} className={name}/>
            <HamburgerMenu menu={menu} />
        </Nav>
    )
}

export default Navbar
