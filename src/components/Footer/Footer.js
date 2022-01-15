import React from 'react'
import { StyleFooter } from './FooterStyles'
import shield from '../../img/SHIELD.png'

const Footer = () => {
    return (
        <StyleFooter>
            <ul>
                <li>Socials</li>
                <li>
                    <a href="https://michaelhamilton.netlify.app" target="_blank" rel='noopener noreferrer'>Portfolio</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/mikehamdev" target="_blank" rel='noopener noreferrer'>Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/hamilton-mike" target="_blank" rel='noopener noreferrer'>Github</a>
                </li>
            </ul>
            <>
                <img src={shield} alt='logo' />
            </>
        </StyleFooter>
    )
}

export default Footer
