import './App.css'
import { useState, useEffect } from 'react'
import SearchFrom from './components/SearchFrom';
import Hero from './components/Hero/Hero';
import intro from './assets/marvel-intro.mp4'
import axios from 'axios'
require('dotenv').config();


function App() {
  const [hero, setHero] = useState([]);

  const getMarvelCharacter = async () => {
    try {
      const getRequest = await axios('http://localhost:9000/comic');
      const data = getRequest.data;
      console.log('getRequest', data);
      setHero(data)
    } catch (error) {
      console.error(error);
    }
  }

  const createComics = async data => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: 'application/json' }
      }
      const postRequest = await axios('http://localhost:9000/comic', configs);
      const data = postRequest.data;
      setHero([...hero, data ])
      console.log('createComics',data);
    } catch (error) {
      console.error(error);
    }
  }

  const destroy = async id => {
    try {
      const deleteRequest = await axios(`http://localhost:9000/comic/${id}`, { method: "DELETE" })
      const data = deleteRequest.data
      setHero(hero.filter(marvel => marvel._id !== data._id))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMarvelCharacter()
  }, [])

  // <h1>MERN APP</h1>
  // <SearchFrom post={createComics}/>
  // {hero && hero.map(marvel => (
  //   <div key={marvel._id}>
  //     <h3>{marvel.title}</h3>
  //     <p>{marvel.description}</p>
  //     <small>{marvel.price}</small>
  //     <button onClick={() => destroy(marvel._id)}>X</button>
  //   </div>
  // ))}

  return (
    <Hero video={intro} />
  );
}

export default App;
