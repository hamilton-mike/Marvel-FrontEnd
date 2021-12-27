import React from 'react'
import { StyleFooter } from './FooterStyles'
import shield from '../../img/SHIELD.png'

const Footer = () => {
    return (
        <StyleFooter>
            <ul>
                <li>Socials</li>
                <li>
                    <a href="https://michaelhamilton.netlify.app/">Portfolio</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/mikehamdev">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/hamilton-mike">Github</a>
                </li>
            </ul>
            <div>
                <img src={shield} alt='logo' />
            </div>
        </StyleFooter>
    )
}

export default Footer
