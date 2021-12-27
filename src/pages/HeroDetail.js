import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Comics from '../components/Comics/Comics';
import Loading from '../components/Loading/Loading'
import Events from '../components/Events/Events';
import Links from '../components/Links/Links';
import Footer from '../components/Footer/Footer'
import { HomeDiv } from '../components/HomeHero/HomeHeroStyle'
import { Container, Grid } from '../globalStyles'
import { Li, UnOrder } from '../components/InfoDiv/InfoDivStyles'
import { H2 } from '../components/Events/EventsStyle';
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
            const { comics, description, events, id, name, thumbnail, urls, stories } = results;

            const length = 'http://gateway.marvel.com/v1/public/comics/'.length
            const comicCovers = comics.items.map(ids => ids.resourceURI.slice(length));

            const promise = comicCovers.map(async cover => axios(`https://gateway.marvel.com/v1/public/comics/${cover}?ts=1&apikey=${privateKey}&hash=${hash}`));
            const comicResults = await Promise.all(promise)
            const covers = comicResults.map(comic => comic.data.data.results["0"]);

            const cavailable = comics.available;
            const eavailable = events.available;

            const comicObj = {
                num: cavailable,
                comic: covers
            }

            const eventObj = {
                num: eavailable,
                event: events.items
            }

            // urls.pop()

            setProfile({ comics: comicObj, events: eventObj, id: id, links: urls, name: name, origin: description, pic: thumbnail, stories: stories.available })
            displayEvents(profile.events)
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    const displayEvents = obj => {
        return (obj.num <= 13) ? obj.num : obj.event / 2;
    }

    useEffect(() => {
        marvelCall()
    }, [])

    console.log(displayEvents());
    return (
        <>
            <Navbar />
            {loading ? (<Loading />) : (
                <Container>
                    <HomeDiv style={{ paddingTop: '7%' }}>
                        <div>
                            <img src={`${profile.pic.path}/${ext}`} alt={profile.name}/>
                        </div>
                        <div style={{ margin: '2em', border: '2px solid green', maxWidth: '40%' }}>
                            <p>{profile.origin === '' ? 'The Team is working on this!' : profile.origin}</p>
                            <UnOrder>
                                <Li>Comics: {profile.comics.num}</Li>
                                <Li>Stories: {profile.stories}</Li>
                                <Li>Events: {profile.events.num}</Li>
                            </UnOrder>
                        </div>
                    </HomeDiv>
                    <Events events={profile.events.event} num={displayEvents}/>
                    <H2>Comics</H2>
                    <Grid>
                        <Comics comics={profile.comics.comic} img={`${ext}`} />
                    </Grid>
                    <Links urls={profile.links}/>
                </Container>
            )}
          <Footer />
        </>
    )
}

export default HeroDetail
