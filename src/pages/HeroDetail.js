import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HomeDiv, Button } from '../components/HomeHero/HomeHeroStyle'
// import { Container } from '../globalStyles'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const HeroDetail = props => {
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;
    const [profile, setProfile] = useState({});
    const [comicIds, setComicIds] = useState([]);
    const [covers, setCovers] = useState([])
    const [loading, setLoading] = useState(true);
    const ext = 'portrait_incredible.jpg';
    const { id } = useParams();
    let x = id

    const marvelCall = async () => {
        try {
            const charcterById = await axios(`https://gateway.marvel.com/v1/public/characters/${x}?ts=1&apikey=${privateKey}&hash=${hash}`);
            // const charcterById = await axios('http://localhost:9000')
            const results = charcterById.data.data.results["0"];
            const { comics, description, events, id, name, series, stories, thumbnail, urls } = results
            const comicCovers = comics.items.map(ids => ids.resourceURI.slice(-5));

            setProfile({ comics: comics, event: events.items, pic: thumbnail, name: name, origin: description, links: urls, id: id })

            const promise = comicCovers.map(async cover => axios(`https://gateway.marvel.com/v1/public/comics/${cover}?ts=1&apikey=${privateKey}&hash=${hash}`));

            const comicResults = await Promise.all(promise)
            console.log(comicResults, 'covers')
            // Access to XMLHttpRequest at 'axios call' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

            // setCarousel(carouselResults.map(result => result.data.data.results[0]))
            // setCards(cardsResults.map(result => result.data.data.results[0]))
        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        marvelCall()
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            {loading ? <h1> loading </h1> : (
                <>
                <HomeDiv style={{ paddingTop: '7%' }}>
                    <div>
                        <img src={`${profile.pic.path}/${ext}`} alt={profile.name}/>
                    </div>
                    <div style={{ margin: '2em', border: '2px solid green', maxWidth: '40%' }}>
                        <p>{profile.origin === '' ? 'unknown' : profile.origin}</p>
                        <Button><a href="/create">Create</a></Button>
                        <Button><a href="/search">Search</a></Button>
                    </div>
                </HomeDiv>
                <>
                    {profile.links.map(link => (
                        <div key={link.type}>
                            <a href={link.url} target="_blank" rel='noopener noreferre'>Link</a>
                        </div>
                    ))}
                </>
                {/* <>
                    {profile.comics.map((comic, idx) => (
                        <div key={idx}>
                            <img src={`${comic.resourceURI}`} alt={comic.name} />
                        </div>
                    ))}
                </> */}
                </>
            )}
          <Footer />
        </>
    )
}

export default HeroDetail
