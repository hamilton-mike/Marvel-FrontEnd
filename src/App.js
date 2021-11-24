import './App.css'
import { useState, useEffect } from 'react'
import SearchFrom from './components/SearchFrom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';


function App() {
  const [hero, setHero] = useState([]);

  const getMarvelCharacter = async () => {
    try {
      const getRequest = await fetch('http://localhost:9000/comic');
      const json = await getRequest.json();
      console.log('getRequest',json);
      setHero(json)
    } catch (error) {
      console.error(error);
    }
  }

  const createComics = async data => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      }
      const postRequest = await fetch('http://localhost:9000/comic', configs);
      const json = await postRequest.json();
      setHero([...hero, json ])
      console.log('createComics',json);
    } catch (error) {
      console.error(error);
    }
  }

  const destroy = async id => {
    try {
      const deleteRequest = await fetch(`http://localhost:9000/comic/${id}`, { method: "DELETE" })
      const json = await deleteRequest.json()
      setHero(hero.filter(marvel => marvel._id !== json._id))
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
    <div className="App">
      <Link to="/landing">LandingPage</Link>
      <Link to="/home">HomePage</Link>
    </div>

  );
}

export default App;
