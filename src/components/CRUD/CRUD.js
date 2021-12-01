import React from 'react'
import { Container } from '../../globalStyles'
import { Section, Div } from './CRUDStyles'
import { MdOutlinePersonSearch } from 'react-icons/md'
import { RiAddCircleFill } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'
import { GiSpiderMask } from 'react-icons/gi'

const CRUD = () => {

    return (
        <Section>
            <Container>
                <Div>
                    <li>
                        <MdOutlinePersonSearch size={45} />
                        <h3>Search For Your Favorite Marvel Characters</h3>
                    </li>
                    <li>
                        <RiAddCircleFill size={45} />
                        <h3>Create a List to Store All of Your Favorites</h3>
                    </li>
                    <li>
                        <GrEdit size={45} />
                        <h3>Update Your List and Delete At Any Time</h3>
                    </li>
                    <li>
                        <GiSpiderMask size={45} />
                        <h3>Test Your Marvel Knowledge with Trivia Questions</h3>
                    </li>
                </Div>
            </Container>
        </Section>
    )
}

export default CRUD
