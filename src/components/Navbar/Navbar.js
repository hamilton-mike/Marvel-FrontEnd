import React, { useState }from 'react'
import logo from '../../img/marvelLogo.jpg'
import { Nav } from './NavbarStyles'
import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi'

import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const [name, setName] = useState('hamburger')

    const toggle = () => {
        setMenu(m => !m)
        // setName('xyz')
    }

    return (
        <Nav>
            {menu ? (
                <>
                    <a href="/">
                        <img src={logo} alt='marvel' />
                    </a>
                    <GiHamburgerMenu onClick={toggle} className={name}/>
                    <HamburgerMenu menu={menu} />
                </>
            ) : (
                <>
                    <HamburgerMenu menu={menu} />
                    <GiExitDoor onClick={toggle} size={100}/>
                </>
            )}

        </Nav>
    )
}

export default Navbar
