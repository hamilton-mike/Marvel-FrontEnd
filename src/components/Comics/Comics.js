import React from 'react';
import { DivComic } from './ComicsStyle'

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
