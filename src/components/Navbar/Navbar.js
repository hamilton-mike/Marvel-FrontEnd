import React, { useState }from 'react'
import logo from '../../img/marvelLogo.jpg'
import { Nav } from './NavbarStyles'
import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    const [menu, setMenu] = useState(true)

    const toggle = () => {
        setMenu(m => !m)
    }

    return (
        <Nav>
            {menu ? (
                <>
                    <a href="/">
                        <img src={logo} alt='marvel' />
                    </a>
                    <GiHamburgerMenu onClick={toggle} className='hamburger'/>
                    <HamburgerMenu menu={menu} />
                </>
            ) : (
                <div style={{ flexDirection: 'column' }}>
                    <GiExitDoor onClick={toggle} style={{marginLeft: '5em'}} size={100}/>
                    <HamburgerMenu menu={menu} />
                </div>
            )}

        </Nav>
    )
}

export default Navbar
