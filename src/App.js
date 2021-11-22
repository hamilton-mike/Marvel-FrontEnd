import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [hero, setHero] = useState([]);

  const getMarvelCharacter = async () => {
    try {
      const getRequest = await fetch('http://localhost:9000/comic');
      console.log(getRequest);
      const json = await getRequest.json();
      console.log(json);
      setHero(json)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMarvelCharacter()
  }, [])

  return (
    <div className="App">
      <h1>MERN APP</h1>
    </div>
  );
}

export default App;
