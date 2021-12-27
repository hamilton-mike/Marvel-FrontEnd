import React from 'react';
import { DivComic } from './ComicsStyle'
import { H2 } from '../Events/EventsStyle';


const Comics = ({ comics, img }) => {
    return (
        <>
            {comics.map(comic => (
                <DivComic key={comic.id}>
                    <p>{comic.title}</p>
                    <img src={`${comic.thumbnail.path}/${img}`} alt={comic.title}/>
                </DivComic>
            ))}
        </>

    )
}

export default Comics
