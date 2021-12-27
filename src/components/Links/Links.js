import React, { useEffect } from 'react'
import { Button } from '../HomeHero/HomeHeroStyle';
import { Url } from './LinksStyle';

const Links = ({ urls }) => {
    const linkType = type => {
        let str = '';

        if (type === 'detail') {
            str += "Archives"
        } else if (type === 'wiki') {
            str += "Full Report"
        } else {
            str += "Comics"
        }

        return str
    }

    useEffect(() => {
        linkType()
    }, [])

    // link.type === 'detail' ? 'Archives' : 'Full Report'

    return (
        <>
            {urls.map(link => (
                <Url key={link.type}>
                    <Button>
                        <a href={link.url} target="_blank" rel='noopener noreferre'>{linkType(link.type)}</a>
                    </Button>
                </Url>
            ))}
        </>
    )
}

export default Links
