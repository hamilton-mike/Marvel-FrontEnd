import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = ({ hero, loading }) => {
    const ext = '.jpg';


    return (
        loading ? <h1>loading...</h1> : (
            <div>
                {hero.map(character => (
                    <img key={character.id} src={character.thumbnail.path+ext} alt="marvel" />
                ))}
            </div>
        )
    )
}

export default Carousel
