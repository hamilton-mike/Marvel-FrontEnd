import React from 'react'
import { StyleFooter } from './FooterStyles'
import logo from '../../img/marvelLogo.jpg'

const Footer = () => {
    return (
        <StyleFooter>
            <ul>
                <li><span>links</span></li>
            </ul>
            <ul>
                <li><span>Socials</span></li>
                <li>
                    <a href="https://michaelhamilton.netlify.app/">Portfolio</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/mikehamdev">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/hamilton-mike/Marvel-FrontEnd">Github</a>
                </li>
            </ul>
            <div>
                <img src={logo} alt='logo' />
            </div>
        </StyleFooter>
    )
}

export default Footer
