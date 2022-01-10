import React, { useState, useEffect } from 'react'
import { Button } from '../HomeHero/HomeHeroStyle';
import { Url } from './LinksStyle';
import { Flex } from '../../globalStyles'

const Links = ({ urls }) => {
    const [linkArr, setLinkArr] = useState([]);

    const takeOutDuplicateUrl = () => {
        if (urls.length > 2) {
            setLinkArr(urls.splice(0,1))
        }
    }
    const linkType = type => {
        let str = '';

        if (type === 'detail') {
            str += "Archives"
        } else if (type === 'wiki') {
            str += "Report"
        } else {
            str += "Comics"
        }

        return str
    }

    useEffect(() => {
        linkType()
        takeOutDuplicateUrl()
    }, [])

    return (
        <Flex>
            {urls.map(link => (
                <Url key={link.type}>
                    <Button>
                        <a href={link.url} target="_blank" rel='noopener noreferre'>{linkType(link.type)}</a>
                    </Button>
                </Url>
            ))}
        </Flex>
    )
}

export default Links
