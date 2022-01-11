import React, { useCallback, useState, useEffect } from 'react'
import { Button } from '../HomeHero/HomeHeroStyle';
import { Url } from './LinksStyle';
import { Flex } from '../../globalStyles'

const Links = ({ urls }) => {
    const [linkArr, setLinkArr] = useState([]);

    const takeOutDuplicateUrl = useCallback(() => {
        if (urls.length > 2) {
            urls.shift()
            setLinkArr(urls)
        }
    }, [urls])

    const linkType = type => {
        let str = '';

        if (type === 'detail') {
            str += "Archives"
        } else if (type === 'wiki') {
            str += "Report"
        } else {
            str += "Comics"
        }

        return str;
    }

    useEffect(() => {
        takeOutDuplicateUrl()
        linkType()
    }, [takeOutDuplicateUrl])

    return (
        <Flex>
            {linkArr.map(link => (
                <Url key={link.type}>
                    <Button>
                        <a href={link.url} target="_blank" rel='noopener noreferrer'>{linkType(link.type)}</a>
                    </Button>
                </Url>
            ))}
        </Flex>
    )
}

export default Links
