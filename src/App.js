import './App.css'
import Hero from './components/Hero/Hero';
import intro from './assets/marvel-intro.mp4'

function App() {
  return (
    <Hero video={intro} />
  );
}

export default App;
