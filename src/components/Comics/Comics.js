import React from 'react';

const Comics = ({ comics, img }) => {
    return (
        <>
            {comics.map(comic => (
                <comicDiv key={comic.id}>
                    <p>{comic.title}</p>
                    <img src={`${comic.thumbnail.path}/${img}`} alt={comic.title}/>
                </comicDiv>
            ))}
        </>

    )
}

export default Comics
