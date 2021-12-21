import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { HomeDiv, Button } from '../components/HomeHero/HomeHeroStyle'
import { Container } from '../globalStyles'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const HeroDetail = () => {
    const privateKey = process.env.REACT_APP_MARVEL_KEY;
    const hash = process.env.REACT_APP_MARVEL_HASH;
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const ext = 'portrait_incredible.jpg';
    const { id } = useParams();
    let charcterId = id

    const marvelCall = async () => {
        try {
            const charcterById = await axios(`https://gateway.marvel.com/v1/public/characters/${charcterId}?ts=1&apikey=${privateKey}&hash=${hash}`);
            const results = charcterById.data.data.results["0"];
            const { comics, description, events, id, name, thumbnail, urls } = results;
            const length = 'http://gateway.marvel.com/v1/public/comics/'.length
            const comicCovers = comics.items.map(ids => ids.resourceURI.slice(length));

            const promise = comicCovers.map(async cover => axios(`https://gateway.marvel.com/v1/public/comics/${cover}?ts=1&apikey=${privateKey}&hash=${hash}`));
            const comicResults = await Promise.all(promise)
            const dataObj = comicResults.map(comic => comic.data.data.results["0"]);
            urls.pop()

            setProfile({ comics: dataObj, events: events.items, id: id, links: urls, name: name, origin: description, pic: thumbnail })
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        marvelCall()
    }, [])

    return (
        <>
            <Navbar />
            {loading ? <h1> loading </h1> : (
                <Container>
                <HomeDiv style={{ paddingTop: '7%' }}>
                    <div>
                        <img src={`${profile.pic.path}/${ext}`} alt={profile.name}/>
                        <Button><a href="/create">Create</a></Button>
                        <Button><a href="/search">Search</a></Button>
                    </div>
                    <div style={{ margin: '2em', border: '2px solid green', maxWidth: '40%' }}>
                        <p>{profile.origin === '' ? 'The Team is working on this!' : profile.origin}</p>
                    </div>
                </HomeDiv>
                {profile.comics.map(comic => (
                    <div key={comic.id}>
                        <p>{comic.title}</p>
                        <img src={`${comic.thumbnail.path}/${ext}`} alt={comic.title}/>
                    </div>
                ))}


                {profile.events.map(event => (
                    <div key={event.resourceURI.slice(-3)}>
                        <p>{event.name}</p>
                    </div>
                ))}

                {profile.links.map(link => (
                    <div key={link.type}>
                        <a href={link.url} target="_blank" rel='noopener noreferre'>{link.type === 'detail' ? 'Archives' : 'Full Report'}</a>
                    </div>
                ))}
                </Container>
            )}
          <Footer />
        </>
    )
}

export default HeroDetail
